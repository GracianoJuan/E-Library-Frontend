import BooksCarousel from "./Books.Carousel";
import type { Book } from "@/hooks/useBooks";

interface BookContainerProps {
  title: string;
  books: Book[];
}

export default function BookContainer({ title, books }: BookContainerProps) {
  return (
    <section className="py-10 md:py-14 border-b border-gray-200 dark:border-gray-800 last:border-b-0">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-1 h-8 bg-black rounded"></div>
        <h2 className="text-3xl md:text-4xl font-bold bg-black text-black bg-clip-text">
          {title}
        </h2>
      </div>
      <BooksCarousel books={books} />
    </section>
  );
};
