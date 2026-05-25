"use client";

import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";

export default function Header() {
    const { user, isLoggedIn, logout } = useAuth();

    return (
        <header className="border-b border-slate-200 bg-white/90 backdrop-blur supports-backdrop-filter:bg-white/70 dark:border-slate-800 dark:bg-slate-950/90">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
                <div>
                    <h1 className="text-2xl font-black tracking-tight text-slate-950 dark:text-white">E-Library</h1>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Discover your next favorite book</p>
                </div>

                {isLoggedIn && user ? (
                    <div className="flex items-center gap-3">
                        <div className="hidden text-right sm:block">
                            <p className="text-sm font-semibold text-slate-900 dark:text-white">{user.name}</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400">{user.email}</p>
                        </div>
                        <button
                            type="button"
                            onClick={logout}
                            className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <div className="flex items-center gap-3">
                        <Link
                            href="/login"
                            className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950 dark:border-slate-700 dark:text-slate-300 dark:hover:border-white dark:hover:text-white"
                        >
                            Login
                        </Link>
                        <Link
                            href="/register"
                            className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
                        >
                            Register
                        </Link>
                    </div>
                )}
            </div>
        </header>
    );
}
