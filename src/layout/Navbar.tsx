import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-gray-700 text-white p-4">
            <ul className="flex space-x-4">
                <li>
                    <Link href="/" className="hover:underline">
                        Home
                    </Link>
                </li>
                {/* <li>
                    <Link href="/books" className="hover:underline">
                        Books
                    </Link>
                </li> */}
                <li>
                    <Link href="/about" className="hover:underline">
                        About
                    </Link>
                </li>
                <li>
                    <Link href="/contact" className="hover:underline">
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
