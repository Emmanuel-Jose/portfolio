import { About } from "../components/about/About"
import { Contact } from "../components/contact/Contact"
import { Home } from "../components/home/Home"
import { Navbar } from "../components/navbar/Navbar"

export const PortfolioPage = () => {
    return (
        <>
            <div className="w-full h-full snap-mandatory snap-y">

                <Navbar />

                <Home />

                <About />

                <Contact />

            </div>
        </>
    )
}
