"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface Book {
  id: string | number;
  title: string;
  image_url?: string;
  image?: string;
}

interface BooksCarouselProps {
  /**
   * Array of books to display in the carousel. Each book must include an `id`
   * which corresponds to the detail page (`/books/[id]`), a `title` and an
   * `image` URL that can be consumed by `next/image`.
   */
  books: Book[];
}

export default function BooksCarousel({ books }: BooksCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const dragStateRef = useRef({
    isPointerDown: false,
    isDragging: false,
    startX: 0,
    lastX: 0,
    moved: false,
  });
  const [isDragging, setIsDragging] = useState(false);

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    const firstItem = carouselRef.current.querySelector<HTMLElement>("a");
    const itemWidth = firstItem?.offsetWidth ?? carouselRef.current.offsetWidth * 0.6;
    const gap = Number.parseFloat(getComputedStyle(carouselRef.current).gap || "0") || 0;
    const distance = itemWidth + gap;
    carouselRef.current.scrollBy({
      left: direction === "left" ? -distance : distance,
      behavior: "smooth",
    });
  };

  const endDrag = () => {
    dragStateRef.current.isPointerDown = false;
    dragStateRef.current.isDragging = false;
    setIsDragging(false);
  };

  useEffect(() => {
    const handleWindowPointerUp = () => {
      endDrag();
    };

    window.addEventListener("pointerup", handleWindowPointerUp);
    window.addEventListener("pointercancel", handleWindowPointerUp);

    return () => {
      window.removeEventListener("pointerup", handleWindowPointerUp);
      window.removeEventListener("pointercancel", handleWindowPointerUp);
    };
  }, []);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!carouselRef.current) return;

    dragStateRef.current = {
      isPointerDown: true,
      isDragging: false,
      startX: event.clientX,
      lastX: event.clientX,
      moved: false,
    };
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragStateRef.current.isPointerDown) return;

    dragStateRef.current.lastX = event.clientX;
    const deltaX = event.clientX - dragStateRef.current.startX;
    if (!dragStateRef.current.isDragging && Math.abs(deltaX) > 20) {
      dragStateRef.current.isDragging = true;
      setIsDragging(true);
      event.currentTarget.setPointerCapture(event.pointerId);
    }

    if (Math.abs(deltaX) > 20) {
      dragStateRef.current.moved = true;
    }
  };

  const handlePointerUp = () => {
    if (!dragStateRef.current.isPointerDown) return;

    if (dragStateRef.current.moved) {
      const deltaX = dragStateRef.current.startX - dragStateRef.current.lastX;
      if (deltaX > 20) {
        scroll("right");
      } else if (deltaX < -20) {
        scroll("left");
      }
    }
    endDrag();
  };

  return (
    <div className="relative group">
      {/* navigation buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute -left-6 md:-left-8 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 hover:shadow-xl hover:scale-110 duration-200 flex items-center justify-center font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity"
      >
        &#8249;
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute -right-6 md:-right-8 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 hover:shadow-xl hover:scale-110 transition-all duration-200 flex items-center justify-center font-bold text-lg opacity-0 group-hover:opacity-100"
      >
        &#8250;
      </button>

      {/* scrollable area */}
      <div
        ref={carouselRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        className={`flex overflow-x-auto gap-6 scroll-smooth pb-2 px-2 snap-x snap-mandatory select-none touch-pan-y ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
      >
        {books.map((book) => (
          <Link
            key={book.id}
            href={`/books/${book.id}`}
            className="shrink-0 w-48 h-72 relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-300 group bg-white dark:bg-gray-800"
          >
            <div className="relative w-full h-full">
              <Image
                src={book.image_url ?? book.image ?? "/placeholder-book.png"}
                alt={book.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                draggable={false}
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-semibold text-sm line-clamp-3">{book.title}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}