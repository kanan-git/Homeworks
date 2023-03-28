import React from "react"
import globalStyles from "./global.css"
import Header from "./components/Header/index"
import MainHome from "./components/Main-Home/index"
import MainAbout from "./components/Main-About/index"
import MainContact from "./components/Main-Contact/index"
import MainPortfolios from "./components/Main-Portfolios/index"
import MainJourney from "./components/Main-Journey/index"
import MainBlog from "./components/Main-Blog/index"
import Footer from "./components/Footer/index"

function App() {
    return (
        <>
            <Header />   {/* Header */}
            <MainHome />   {/* Main section of Home */}
            <MainAbout />   {/* Main section of About */}
            <MainContact />   {/* Main section of Contact */}
            <MainPortfolios />   {/* Main section of Portfolios */}
            <MainJourney />   {/* Main section of Journey */}
            <MainBlog />   {/* Main section of Blog */}
            <Footer />   {/* Footer */}
        </>
    )
}

export default App