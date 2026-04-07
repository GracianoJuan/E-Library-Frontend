import BooksCarousel from "../../components/Books.Carousel";

const sampleBooks = [
  {
    id: "1",
    title: "The Great Gatsby",
    image: "https://covers.openlibrary.org/b/isbn/9780743273565-L.jpg",
  },
  {
    id: "2",
    title: "Pride and Prejudice",
    image: "https://covers.openlibrary.org/b/isbn/9780141439518-L.jpg",
  },
  {
    id: "3",
    title: "The Hobbit",
    image: "https://covers.openlibrary.org/b/isbn/9780547928227-L.jpg",
  },
  {
    id: "4",
    title: "1984",
    image: "https://covers.openlibrary.org/b/isbn/9780451524935-L.jpg",
  },
  {
    id: "5",
    title: "To Kill a Mockingbird",
    image: "https://covers.openlibrary.org/b/isbn/9780061935466-L.jpg",
  },
];

export default function BooksPage() {
  return (
    <div className="space-y-12">
      {/* Header Section */}
      <div className="py-8">
        <h1 className="text-5xl font-bold mb-3 text-blue-600 dark:text-blue-400">📚 Explore Books</h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">Browse our collection and discover your next favorite read</p>
      </div>

      {/* Featured Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <span className="w-1 h-8 bg-blue-600 rounded"></span>
          Featured Collection
        </h2>
        <BooksCarousel books={sampleBooks} />
      </section>

      {/* Categories Grid - Can be extended */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {["Fiction", "Mystery", "Romance", "Science", "Fantasy"].map((cat) => (
            <div key={cat} className="bg-blue-600 rounded-xl p-6 text-white font-semibold text-center hover:bg-blue-700 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
              {cat}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
