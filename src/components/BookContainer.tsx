import BooksCarousel from "./Books.Carousel";

interface Book {
  id: string;
  title: string;
  image: string;
}

interface BookContainerProps {
  title: string;
  books: Book[];
}

export default function BookContainer({ title, books }: BookContainerProps) {
  return (
    <div className="py-6">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <BooksCarousel books={books} />
    </div>
  );
};
