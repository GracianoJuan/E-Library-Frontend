"use client";

import { useEffect, useMemo, useRef, useState } from "react";

interface PdfReaderProps {
  pdfUrl: string;
}

type PdfDocumentProxy = {
  numPages: number;
  getPage: (pageNumber: number) => Promise<PdfPageProxy>;
  destroy?: () => void;
};

type PdfPageProxy = {
  getViewport: (params: { scale: number }) => { width: number; height: number };
  render: (params: {
    canvasContext: CanvasRenderingContext2D;
    viewport: { width: number; height: number };
  }) => { promise: Promise<void> };
};

type PdfJsModule = {
  GlobalWorkerOptions: { workerSrc: string; workerPort?: Worker };
  getDocument: (urlOrParams: string | { url: string; disableWorker?: boolean }) => { promise: Promise<PdfDocumentProxy> };
};

function ensureMapGetOrInsertComputed() {
  const mapPrototype = Map.prototype as Map<any, any> & {
    getOrInsertComputed?: <K, V>(key: K, callback: (key: K) => V) => V;
  };

  if (typeof mapPrototype.getOrInsertComputed !== "function") {
    Object.defineProperty(mapPrototype, "getOrInsertComputed", {
      configurable: true,
      writable: true,
      value<K, V>(key: K, callback: (key: K) => V): V {
        if (!this.has(key)) {
          this.set(key, callback(key));
        }
        return this.get(key);
      },
    });
  }
}

function getPageWindow(currentPage: number, totalPages: number): number[] {
  const pages: number[] = [];
  const start = Math.max(1, currentPage - 1);
  const end = Math.min(totalPages, currentPage + 1);

  for (let page = start; page <= end; page += 1) {
    pages.push(page);
  }

  if (pages.length < 3 && start === 1) {
    const needed = 3 - pages.length;
    for (let page = end + 1; page <= Math.min(totalPages, end + needed); page += 1) {
      pages.push(page);
    }
  }

  if (pages.length < 3 && end === totalPages) {
    const needed = 3 - pages.length;
    for (let page = start - 1; page >= Math.max(1, start - needed); page -= 1) {
      pages.unshift(page);
    }
  }

  return pages;
}

function PdfPageCanvas({
  pdf,
  pageNumber,
  shouldRender,
  scale,
  onVisible,
}: {
  pdf: PdfDocumentProxy;
  pageNumber: number;
  shouldRender: boolean;
  scale: number;
  onVisible: (page: number) => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [renderError, setRenderError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry?.isIntersecting) {
          onVisible(pageNumber);
        }
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [onVisible, pageNumber]);

  useEffect(() => {
    let cancelled = false;
    const canvas = canvasRef.current;

    const renderPage = async () => {
      if (!shouldRender || !canvas) {
        return;
      }

      try {
        setLoading(true);
        setRenderError(null);

        const page = await pdf.getPage(pageNumber);
        const viewport = page.getViewport({ scale });
        const context = canvas.getContext("2d");
        if (!context) {
          throw new Error("Canvas is not supported by this browser");
        }

        canvas.width = viewport.width;
        canvas.height = viewport.height;

        await page.render({
          canvasContext: context,
          viewport,
        }).promise;
      } catch (error) {
        if (!cancelled) {
          setRenderError(error instanceof Error ? error.message : "Failed to render page");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    renderPage();

    return () => {
      cancelled = true;
      if (!shouldRender && canvas) {
        const context = canvas.getContext("2d");
        if (context) {
          context.clearRect(0, 0, canvas.width, canvas.height);
        }
        canvas.width = 0;
        canvas.height = 0;
      }
    };
  }, [pdf, pageNumber, scale, shouldRender]);

  return (
    <div ref={containerRef} data-page={pageNumber} className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-950">
      <div className="mb-3 text-right text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Page {pageNumber}</div>
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/40">
        {shouldRender ? (
          <>
            {loading && <div className="h-175 animate-pulse bg-slate-200/60 dark:bg-slate-800/60" />}
            {renderError ? (
              <div className="py-20 text-center text-sm text-red-500">{renderError}</div>
            ) : (
              <canvas ref={canvasRef} className="h-auto w-full" />
            )}
          </>
        ) : (
          <div className="h-175 bg-slate-200/40 dark:bg-slate-800/30" />
        )}
      </div>
    </div>
  );
}

export default function PdfReader({ pdfUrl }: PdfReaderProps) {
  const [pdf, setPdf] = useState<PdfDocumentProxy | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [scale, setScale] = useState(1.35);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    let docRef: PdfDocumentProxy | null = null;

    const load = async () => {
      try {
        setError(null);
        const pdfjs = (await import("pdfjs-dist")) as unknown as PdfJsModule;

        ensureMapGetOrInsertComputed();

        const loadingTask = pdfjs.getDocument({ url: pdfUrl, disableWorker: true });
        const loadedPdf = await loadingTask.promise;
        docRef = loadedPdf;

        if (mounted) {
          setPdf(loadedPdf);
          setTotalPages(loadedPdf.numPages);
          setCurrentPage(1);
        }
      } catch (loadError) {
        if (mounted) {
          setError(loadError instanceof Error ? loadError.message : "Failed to open PDF");
        }
      }
    };

    load();

    return () => {
      mounted = false;
      if (docRef?.destroy) {
        docRef.destroy();
      }
    };
  }, [pdfUrl]);

  const activePages = useMemo(() => getPageWindow(currentPage, totalPages), [currentPage, totalPages]);

  if (error) {
    return <div className="py-16 text-center text-sm text-red-500">{error}</div>;
  }

  if (!pdf || totalPages === 0) {
    return <div className="py-16 text-center text-sm text-slate-500">Loading PDF...</div>;
  }

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 dark:border-slate-800 dark:bg-slate-950">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Page {currentPage} / {totalPages}</p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setScale((value) => Math.max(0.9, value - 0.15))}
            className="rounded-full border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950 dark:border-slate-700 dark:text-slate-300 dark:hover:border-white dark:hover:text-white"
          >
            Zoom Out
          </button>
          <span className="min-w-12 text-center text-xs font-semibold text-slate-600 dark:text-slate-300">{Math.round(scale * 100)}%</span>
          <button
            type="button"
            onClick={() => setScale((value) => Math.min(2.2, value + 0.15))}
            className="rounded-full border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950 dark:border-slate-700 dark:text-slate-300 dark:hover:border-white dark:hover:text-white"
          >
            Zoom In
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
          <PdfPageCanvas
            key={`${pageNumber}-${scale}`}
            pdf={pdf}
            pageNumber={pageNumber}
            shouldRender={activePages.includes(pageNumber)}
            scale={scale}
            onVisible={setCurrentPage}
          />
        ))}
      </div>
    </div>
  );
}
