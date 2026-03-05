import BooksCarousel from "../../components/Books.Carousel";

// Temporary placeholder data; eventually this should come from an API or
// database.
const sampleBooks = [
  {
    id: "1",
    title: "The Great Gatsby",
    image: "https://via.placeholder.com/150x220?text=Gatsby",
  },
  {
    id: "2",
    title: "Pride and Prejudice",
    image: "https://via.placeholder.com/150x220?text=Pride",
  },
  {
    id: "3",
    title: "The Hobbit",
    image: "https://via.placeholder.com/150x220?text=Hobbit",
  },
  {
    id: "4",
    title: "1984",
    image: "https://via.placeholder.com/150x220?text=1984",
  },
  {
    id: "5",
    title: "To Kill a Mockingbird",
    image: "https://via.placeholder.com/150x220?text=Mockingbird",
  },
];

export default function BooksPage() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Explore Books</h1>
      <BooksCarousel books={sampleBooks} />
      {/* future: add sections, filters, etc. */}
    </main>
  );
}
