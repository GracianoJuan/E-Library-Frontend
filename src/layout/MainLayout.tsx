import Header from "./Header"
import Navbar from "./Navbar"
import Footer from './Footer'

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col bg-white dark:bg-black">
            <Header />
            <Navbar />
            <main className="flex-grow max-w-7xl w-full mx-auto px-4 py-8 md:py-12">
                {children}
            </main>
            <Footer />
        </div>
    )
}