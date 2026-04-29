"use client";

import Link from "next/link";
import { useState } from "react";

type HistoryItem = {
    id: number;
    coverUrl: string;
    title: string;
    author: string;
    lastReadAt: string;
    progress: number;
};

const mockHistoryData: HistoryItem[] = [
    {
        id: 1,
        coverUrl: "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg",
        title: "Atomic Habits",
        author: "James Clear",
        lastReadAt: "2026-04-25T09:15:00Z",
        progress: 72,
    },
    {
        id: 2,
        coverUrl: "https://covers.openlibrary.org/b/isbn/9780132350884-L.jpg",
        title: "Clean Code",
        author: "Robert C. Martin",
        lastReadAt: "2026-04-23T14:30:00Z",
        progress: 44,
    },
    {
        id: 3,
        coverUrl: "https://covers.openlibrary.org/b/isbn/9781455586691-L.jpg",
        title: "Deep Work",
        author: "Cal Newport",
        lastReadAt: "2026-04-20T07:40:00Z",
        progress: 91,
    },
];

export default function HistoryPage() {
    const [historyItems, setHistoryItems] = useState<HistoryItem[]>(mockHistoryData);

    const handleDelete = (id: number) => {
        setHistoryItems((currentItems) =>
            currentItems.filter((historyItem) => historyItem.id !== id)
        );
    };

    return (
        <section className="space-y-4">
            <div>
                <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Reading History</h1>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    List of books you recently opened.
                </p>
            </div>

            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900">
                <table className="min-w-full text-left text-sm">
                    <thead className="bg-gray-50 text-xs uppercase text-gray-500 dark:bg-gray-800 dark:text-gray-300">
                        <tr>
                            <th className="px-4 py-3">Cover</th>
                            <th className="px-4 py-3">Title</th>
                            <th className="px-4 py-3">Author</th>
                            <th className="px-4 py-3 text-right">Actions</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                        {historyItems.map((historyItem) => (
                            <tr key={historyItem.id} className="hover:bg-gray-50/80 dark:hover:bg-gray-800/50">
                                <td className="px-4 py-3">
                                    <img
                                        src={historyItem.coverUrl}
                                        alt={`${historyItem.title} cover`}
                                        className="h-16 w-12 rounded-md object-cover shadow-sm"
                                    />
                                </td>
                                <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">
                                    {historyItem.title}
                                </td>
                                <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{historyItem.author}</td>
                                <td className="px-4 py-3">
                                    <div className="flex justify-end gap-2">
                                        <Link
                                            href={`/books/${historyItem.id}`}
                                            className="rounded-md border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700 transition-colors hover:bg-blue-100 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-300 dark:hover:bg-blue-900/40"
                                        >
                                            View Detail
                                        </Link>
                                        <button
                                            type="button"
                                            onClick={() => handleDelete(historyItem.id)}
                                            className="rounded-md border border-red-200 bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-700 transition-colors hover:bg-red-100 dark:border-red-900 dark:bg-red-950/40 dark:text-red-300 dark:hover:bg-red-900/40"
                                        >
                                            Delete from History
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}

                        {historyItems.length === 0 && (
                            <tr>
                                <td
                                    colSpan={4}
                                    className="px-4 py-8 text-center text-sm text-gray-600 dark:text-gray-400"
                                >
                                    Your reading history is empty.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </section>
    );
}