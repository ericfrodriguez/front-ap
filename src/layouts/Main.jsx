
import Footer from "../components/Footer"
import Header from "../components/Header"

const Main = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Main