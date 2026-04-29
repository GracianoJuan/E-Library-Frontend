"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function BookDetail() {
    const params = useParams();
    const bookId = Array.isArray(params.id) ? params.id[0] : params.id;

    // Mock book data - replace with API call
    const bookData = {
        title: `Sample Book ${bookId}`,
        author: "John Doe",
        publishedDate: "2024",
        category: "Fiction",
        likes: 1523,
        rating: 4.5,
        description: "This is a compelling story that will keep you engaged from start to finish. Follow our protagonist as they navigate through unexpected challenges and discover hidden truths about themselves and the world around them.",
        image: "https://covers.openlibrary.org/b/isbn/9780743273565-L.jpg",
    };

    return (
        <div className="min-h-screen">
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
                <a href="/" className="hover:text-blue-600 transition-colors">Home</a>
                <span>/</span>
                <a href="/books" className="hover:text-blue-600 transition-colors">Books</a>
                <span>/</span>
                <span className="text-gray-900 dark:text-gray-100 font-medium">Details</span>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {/* Book Cover */}
                <div className="col-span-1">
                    <div className="sticky top-24 rounded-2xl overflow-hidden shadow-2xl">
                        <div className="relative w-full aspect-3/4 bg-gray-200 dark:bg-gray-700">
                            <Image
                                src={bookData.image}
                                alt={bookData.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <button className="w-full mt-4 bg-blue-600 text-white py-3 px-4 rounded-xl font-bold text-lg hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 active:translate-y-0">
                            ❤️ Like ({bookData.likes})
                        </button>
                    </div>
                </div>

                {/* Book Details */}
                <div className="col-span-1 md:col-span-2">
                    <div className="space-y-6">
                        {/* Title */}
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-3 text-gray-900 dark:text-white">
                                {bookData.title}
                            </h1>
                            <div className="flex items-center gap-4 flex-wrap">
                                <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full font-semibold text-sm">
                                    {bookData.category}
                                </span>
                                <div className="flex items-center gap-1">
                                    <span className="text-yellow-400 text-lg">★</span>
                                    <span className="font-bold text-gray-900 dark:text-white">{bookData.rating}</span>
                                </div>
                            </div>
                        </div>

                        {/* Book Info */}
                        <div className="grid grid-cols-2 gap-4 py-6 border-t border-b border-gray-200 dark:border-gray-700">
                            <div>
                                <p className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-1">Author</p>
                                <p className="text-lg font-semibold text-gray-900 dark:text-white">{bookData.author}</p>
                            </div>
                            <div>
                                <p className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-1">Published</p>
                                <p className="text-lg font-semibold text-gray-900 dark:text-white">{bookData.publishedDate}</p>
                            </div>
                            <div>
                                <p className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-1">Category</p>
                                <p className="text-lg font-semibold text-gray-900 dark:text-white">{bookData.category}</p>
                            </div>
                            <div>
                                <p className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-1">Total Likes</p>
                                <p className="text-lg font-semibold text-gray-900 dark:text-white">{bookData.likes.toLocaleString()}</p>
                            </div>
                        </div>

                        {/* Description */}
                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">About this book</h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                                {bookData.description}
                            </p>
                        </div>


                        {/* Action Buttons */}
                        <div className="flex gap-4 flex-wrap pt-4">
                            <button className="flex-1 min-w-50 bg-blue-600 text-white py-3 px-6 rounded-xl font-bold hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
                                ❤️ Like
                            </button>
                            <Link
                                href={`/books/${bookId}/read`}
                                className="flex-1 min-w-50 border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 py-3 px-6 rounded-xl font-bold text-center hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                            >
                                Read
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}