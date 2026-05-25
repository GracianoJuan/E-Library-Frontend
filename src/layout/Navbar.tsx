import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="border-b border-slate-200 bg-white/80 text-slate-900 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-950/80 dark:text-white sticky top-0 z-40">
            <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 lg:flex-row lg:items-center lg:justify-between lg:gap-6 sm:px-6 lg:px-8">
                <ul className="flex items-center gap-8">
                    <li>
                        <Link href="/" className="font-medium text-slate-600 transition-colors hover:text-slate-950 dark:text-slate-300 dark:hover:text-white">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/explore" className="font-medium text-slate-600 transition-colors hover:text-slate-950 dark:text-slate-300 dark:hover:text-white">
                            Explore
                        </Link>
                    </li>
                    <li>
                        <Link href="/history" className="font-medium text-slate-600 transition-colors hover:text-slate-950 dark:text-slate-300 dark:hover:text-white">
                            History
                        </Link>
                    </li>
                </ul>

                <form className="flex w-full max-w-xl items-center gap-2 lg:mx-6">
                    <input
                        type="search"
                        name="q"
                        placeholder="Search books..."
                        className="w-full rounded-full border border-slate-300 bg-white px-4 py-2 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-slate-950 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-white"
                    />
                    <button
                        type="submit"
                        className="rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
                    >
                        Search
                    </button>
                </form>
            </div>
        </nav>
    );
};
