import React, { Fragment} from "react"
import globalStyles from "./global.css"
import Header from "./components/Header/index"
import MainHome from "./components/Main-Home/index"
import MainAbout from "./components/Main-About/index"
import MainContact from "./components/Main-Contact/index"
import MainPortfolios from "./components/Main-Portfolios/index"
import MainJourney from "./components/Main-Journey/index"
import MainBlog from "./components/Main-Blog/index"
import Footer from "./components/Footer/index"
// import selectedMenu from "./components/Header/index"
// import menuButton from "./components/Header/index"



function App(props) {

    console.log(props.selectedMenu, props)

    if(props.selectedMenu == "Home") {
        return (
            <>
                <Header />
                <MainHome />
                <Footer />
                {console.log("returned -Home- page")}
            </>
        )
    } else if(props.selectedMenu == "About") {
        return (
            <>
                <Header />
                <MainAbout />
                <Footer />
                {console.log("returned -About- page")}
            </>
        )
    } else if(props.selectedMenu == "Contact") {
        return (
            <>
                <Header />
                <MainContact />
                <Footer />
                {console.log("returned -Contact- page")}
            </>
        )
    } else if(props.selectedMenu == "Portfolios") {
        return (
            <>
                <Header />
                <MainPortfolios />
                <Footer />
                {console.log("returned -Portfolios- page")}
            </>
        )
    } else if(props.selectedMenu == "Journey") {
        return (
            <>
                <Header />
                <MainJourney />
                <Footer />
                {console.log("returned -Journey- page")}
            </>
        )
    } else if(props.selectedMenu == "Blog") {
        return (
            <>
                <Header />
                <MainBlog />
                <Footer />
                {console.log("returned -Blog- page")}
            </>
        )
    } else {
        return (
            <>
                <Header />
                <MainHome />
                <Footer />
                {console.log("returned -Home- page")}
            </>
        )
    }
    

    // return (
    //     <>
    //         <Header />

    //         <Fragment key="9" sections={menuButtons}>
    //             {/* <MainHome />
    //             <MainAbout />
    //             <MainContact />
    //             <MainPortfolios />
    //             <MainJourney />
    //             <MainBlog /> */}
    //         </Fragment>
            
    //         <Footer />
    //     </>
    // )
}

export default App

// cd 04\ ■►\ React/CODERS\ Denmark/starter-react
// npm start