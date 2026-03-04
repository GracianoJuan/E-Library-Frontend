import Header from "./Header"
import Navbar from "./Navbar"
import Footer from './Footer'

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <Navbar />
            <main className="">
                {children}
            </main>
            <Footer />
        </div>
    )
}