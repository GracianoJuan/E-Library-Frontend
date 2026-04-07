import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-md border-b border-gray-200 dark:border-gray-800 sticky top-0 z-40">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <ul className="flex space-x-8">
                    <li>
                        <Link href="/" className="font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                            🏠 Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                            ℹ️ About
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                            ✉️ Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
