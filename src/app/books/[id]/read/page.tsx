"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";

const chapters = [
    {
        id: "chapter-1",
        title: "Bab 1 - Lorem",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.",
    },
    {
        id: "chapter-2",
        title: "Bab 2 - Lorem",
        content:
            "Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.",
    },
    {
        id: "chapter-3",
        title: "Bab 3 - Lorem",
        content:
            "Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit. Ut velit mauris, egestas sed, gravida nec, ornare ut, mi. Aenean ut orci vel massa suscipit pulvinar. Nulla sollicitudin. Fusce varius, ligula non tempus aliquam, nunc turpis ullamcorper nibh, in tempus sapien eros vitae ligula.",
    },
    {
        id: "chapter-4",
        title: "Bab 4 - Lorem",
        content:
            "Nulla facilisi. Integer lacinia sollicitudin massa. Cras metus. Sed aliquet risus a tortor. Integer id quam. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue. Proin sodales libero eget ante. Nulla quam. Aenean laoreet. Vestibulum nisi lectus, commodo ac, facilisis ac, ultricies eu, pede.",
    },
];

export default function ReaderPage() {
    const params = useParams();
    const bookId = Array.isArray(params.id) ? params.id[0] : params.id;

    const [showControls, setShowControls] = useState(true);
    const [showToc, setShowToc] = useState(false);
    const [fontSize, setFontSize] = useState(18);
    const [progress, setProgress] = useState(0);

    const book = useMemo(() => {
        return {
            title: `Title Lorem ${bookId}`,
            category: "Trending Now",
            subtitle: "Mode baca web-reader dengan konten placeholder yang dibagi per bab.",
        };
    }, [bookId]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const nextProgress = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;
            setProgress(nextProgress);
        };

        const toggleControls = () => {
            setShowControls(true);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("click", toggleControls);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("click", toggleControls);
        };
    }, []);

    return (
        <div
            className="min-h-screen bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 text-white"
            onClick={() => setShowControls(true)}
        >
            <div className="fixed inset-x-0 top-0 z-50">
                <div className="h-1 bg-white/10">
                    <div
                        className="h-full bg-red-500 transition-[width] duration-150"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>

            <div className="fixed inset-x-0 bottom-0 z-40 h-1 bg-white/10">
                <div
                    className="h-full bg-blue-500 transition-[width] duration-150"
                    style={{ width: `${progress}%` }}
                />
            </div>

            <div
                className={`fixed inset-0 z-30 bg-black/55 transition-opacity duration-200 ${
                    showControls ? "opacity-100" : "pointer-events-none opacity-0"
                }`}
                onClick={() => setShowControls(false)}
            />

            <div
                className={`fixed inset-x-0 top-0 z-40 transition-transform duration-200 ${
                    showControls ? "translate-y-0" : "-translate-y-full"
                }`}
            >
                <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
                    <Link
                        href={`/books/${bookId}`}
                        className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/15"
                    >
                        Kembali
                    </Link>

                    <div className="hidden text-center sm:block">
                        <p className="text-sm uppercase tracking-[0.3em] text-white/45">The Reader</p>
                        <h1 className="text-lg font-semibold text-white">{book.title}</h1>
                    </div>

                    <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 p-1">
                        <button
                            type="button"
                            onClick={(event) => {
                                event.stopPropagation();
                                setShowToc((currentValue) => !currentValue);
                            }}
                            className="rounded-full px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                        >
                            Daftar Isi
                        </button>
                        <button
                            type="button"
                            onClick={() => setFontSize((currentSize) => Math.max(16, currentSize - 1))}
                            className="rounded-full px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                        >
                            A-
                        </button>
                        <button
                            type="button"
                            onClick={() => setFontSize((currentSize) => Math.min(24, currentSize + 1))}
                            className="rounded-full px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                        >
                            A+
                        </button>
                    </div>
                </div>
            </div>

            <div
                className={`fixed right-4 top-20 z-40 w-[min(90vw,18rem)] rounded-2xl border border-white/10 bg-slate-950/90 p-4 shadow-2xl shadow-black/30 backdrop-blur-sm transition-all duration-200 ${
                    showControls && showToc ? "translate-x-0 opacity-100" : "pointer-events-none translate-x-3 opacity-0"
                }`}
            >
                <div className="mb-3 flex items-center justify-between gap-3">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/50">Daftar Isi</p>
                    <button
                        type="button"
                        onClick={(event) => {
                            event.stopPropagation();
                            setShowToc(false);
                        }}
                        className="rounded-full px-2 py-1 text-xs font-semibold text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                    >
                        Tutup
                    </button>
                </div>
                <div className="space-y-2">
                    {chapters.map((chapter) => (
                        <a
                            key={chapter.id}
                            href={`#${chapter.id}`}
                            onClick={() => setShowToc(false)}
                            className="block rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                        >
                            {chapter.title}
                        </a>
                    ))}
                </div>
            </div>

            <div
                className={`fixed inset-x-0 bottom-0 z-40 transition-transform duration-200 ${
                    showControls ? "translate-y-0" : "translate-y-full"
                }`}
            >
                <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
                    <div className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/80">
                        {Math.round(progress)}% selesai
                    </div>
                    <div className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/80">
                        {book.category}
                    </div>
                </div>
            </div>

            <main className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
                <section className="mb-12 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-sm sm:p-8">
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        {book.title}
                    </h1>
                    <p className="mt-4 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
                        {book.subtitle}
                    </p>
                </section>

                <section className="space-y-10 pb-20">
                    {chapters.map((chapter) => (
                        <article
                            key={chapter.id}
                            id={chapter.id}
                            className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-lg shadow-black/10 sm:p-8"
                        >
                            <div className="mb-4 flex items-center justify-between gap-4">
                                <h2 className="text-xl font-semibold text-white sm:text-2xl">{chapter.title}</h2>
                                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/50">
                                    Bab
                                </span>
                            </div>
                            <div
                                className="space-y-5 text-white/78 leading-8"
                                style={{ fontSize: `${fontSize}px` }}
                            >
                                <p>{chapter.content}</p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed
                                    turpis ac justo pulvinar facilisis. Integer viverra, nulla a tincidunt
                                    blandit, arcu ligula ullamcorper lacus, non feugiat erat lorem in nunc.
                                </p>
                                <p>
                                    Sed consequat sem id nisi vulputate, a ultrices ipsum volutpat. Phasellus
                                    auctor tincidunt nisl, sit amet dignissim lectus consequat sed. Donec
                                    sollicitudin ligula ac augue euismod, vel elementum lorem tempus.
                                </p>
                            </div>
                        </article>
                    ))}
                </section>
            </main>
        </div>
    );
}
