
import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"


const Main = () => {
    return (
        <div className="flex flex-col min-h-screen relative">
            <Header />
            <main className="flex-grow-1 pb-24">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Main