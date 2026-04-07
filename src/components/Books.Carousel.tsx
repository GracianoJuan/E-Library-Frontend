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
        className="flex overflow-x-auto gap-6 scroll-smooth pb-2 px-2"
      >
        {books.map((book) => (
          <Link
            key={book.id}
            href={`/books/${book.id}`}
            className="shrink-0 w-48 h-72 relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-300 group bg-white dark:bg-gray-800"
          >
            <div className="relative w-full h-full">
              <Image
                src={book.image}
                alt={book.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
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