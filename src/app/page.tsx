import BookContainer from "../components/BookContainer";

const recommendedBooks = [
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

const newReleases = [
  {
    id: "6",
    title: "Project Hail Mary",
    image: "https://covers.openlibrary.org/b/isbn/9780593135204-L.jpg",
  },
  {
    id: "7",
    title: "Dune",
    image: "https://covers.openlibrary.org/b/isbn/9780441013593-L.jpg",
  },
  {
    id: "8",
    title: "The Midnight Library",
    image: "https://covers.openlibrary.org/b/isbn/9780525559474-L.jpg",
  },
  {
    id: "9",
    title: "Klara and the Sun",
    image: "https://covers.openlibrary.org/b/isbn/9780593318171-L.jpg",
  },
  {
    id: "10",
    title: "Piranesi",
    image: "https://covers.openlibrary.org/b/isbn/9781635575637-L.jpg",
  },
];

const mostLiked = [
  {
    id: "11",
    title: "Atomic Habits",
    image: "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg",
  },
  {
    id: "12",
    title: "The Power of Now",
    image: "https://covers.openlibrary.org/b/isbn/9781577314806-L.jpg",
  },
  {
    id: "13",
    title: "Educated",
    image: "https://covers.openlibrary.org/b/isbn/9780399590504-L.jpg",
  },
  {
    id: "14",
    title: "Sapiens",
    image: "https://covers.openlibrary.org/b/isbn/9780062316097-L.jpg",
  },
  {
    id: "15",
    title: "The Alchemist",
    image: "https://covers.openlibrary.org/b/isbn/9780062315007-L.jpg",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-black text-white py-16 md:py-24 px-4 -mx-4 md:-mx-12 mb-12 rounded-none md:rounded-2xl">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
            Welcome to E-Library
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 animate-fade-in" style={{animationDelay: '0.1s'}}>
            Discover thousands of books and find your next favorite read
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="space-y-16">
        <BookContainer title="Recommendations" books={recommendedBooks} />
        <BookContainer title="New Releases" books={newReleases} />
        <BookContainer title="Most Liked" books={mostLiked} />
      </div>
    </div>
  );
}