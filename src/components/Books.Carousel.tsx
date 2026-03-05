"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

interface Book {
  id: string;
  title: string;
  image: string;
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

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    const width = carouselRef.current.offsetWidth;
    carouselRef.current.scrollBy({
      left: direction === "left" ? -width : width,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      {/* navigation buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-black/50 text-white"
      >
        &lt;
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-black/50 text-white"
      >
        &gt;
      </button>

      {/* scrollable area */}
      <div
        ref={carouselRef}
        className="flex overflow-x-auto scroll-smooth space-x-4 py-4 scrollbar-hide"
      >
        {books.map((book) => (
          <Link
            key={book.id}
            href={`/books/${book.id}`}
            className="min-w-[150px] flex-shrink-0"
          >
            <Image
              src={book.image}
              alt={book.title}
              width={150}
              height={220}
              className="rounded-lg object-cover"
            />
            <p className="mt-2 text-center text-sm font-medium">
              {book.title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}