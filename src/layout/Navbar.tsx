import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-md border-b border-gray-200 dark:border-gray-800 sticky top-0 z-40">
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
                <ul className="flex items-center space-x-8">
                    <li>
                        <Link href="/" className="font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                            Home
                        </Link>
                    </li>
                    {/* <li>
                        <Link href="/about" className="font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                            Genre
                        </Link>
                    </li> */}
                    <li>
                        <Link href="/about" className="font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                            Contact
                        </Link>
                    </li>
                </ul>
                <form className="flex w-full max-w-xl items-center gap-2 lg:mx-6">
                    <input
                        type="search"
                        name="q"
                        placeholder="Search books..."
                        className="w-full rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 outline-none transition-colors duration-200 placeholder:text-gray-400 focus:border-blue-600 dark:border-gray-700 dark:bg-gray-950 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-blue-400"
                    />
                    <button
                        type="submit"
                        className="rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                    >
                        Search
                    </button>
                </form>

                <div className="flex items-center gap-3">
                    <Link
                        href="/login"
                        className="rounded-full border border-blue-600 px-4 py-2 text-sm font-medium text-blue-600 transition-colors duration-200 hover:bg-blue-600 hover:text-white"
                    >
                        Login
                    </Link>
                    <Link
                        href="/register"
                        className="rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 hover:border-blue-600 hover:text-blue-600 dark:border-gray-700 dark:text-gray-300 dark:hover:border-blue-400 dark:hover:text-blue-400"
                    >
                        Register
                    </Link>
                </div>
            </div>
        </nav>
    );
};
