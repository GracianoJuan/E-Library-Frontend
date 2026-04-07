export default function Footer() {
    return (
        <footer className="bg-black text-white p-8 mt-12 border-t border-gray-700">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h3 className="font-bold text-lg mb-3">About E-Library</h3>
                        <p className="text-gray-400 text-sm">Your ultimate platform for discovering and exploring books.</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-3">Quick Links</h3>
                        <ul className="text-gray-400 text-sm space-y-2">
                            <li><a href="/" className="hover:text-blue-400 transition-colors">Home</a></li>
                            <li><a href="/about" className="hover:text-blue-400 transition-colors">About</a></li>
                            <li><a href="/contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-3">Connect</h3>
                        <p className="text-gray-400 text-sm">Follow us on social media for updates and recommendations.</p>
                    </div>
                </div>
                <div className="border-t border-gray-700 pt-6 text-center">
                    <p className="text-gray-400 text-sm">&copy; 2026 E-Library. All rights reserved. | Discover your next favorite book</p>
                </div>
            </div>
        </footer>
    );
}