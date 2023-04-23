import React, { useState } from "react"
// import React, { Fragment} from "react"
import globalStyles from "./global.css"
// import Header from "./components/Header/index"
import MainHome from "./components/Main-Home/index"
import MainAbout from "./components/Main-About/index"
import MainContact from "./components/Main-Contact/index"
import MainPortfolios from "./components/Main-Portfolios/index"
import MainJourney from "./components/Main-Journey/index"
import MainBlog from "./components/Main-Blog/index"
import Footer from "./components/Footer/index"
import sHeader from "./components/Header/style.module.css"
// import selectedMenu from "./components/Header/index"
// import menuButton from "./components/Header/index"



// function App(props) {

//     // console.log(props.selectedMenu, props)
//     // selectedMenu.map((menus, index) => {console.log(menus)})

//     if(props.selectedMenu == "Home") {
//         return (
//             <>
//                 <Header />
//                 <MainHome />
//                 <Footer />
//                 {console.log("returned -Home- page")}
//             </>
//         )
//     } else if(props.selectedMenu == "About") {
//         return (
//             <>
//                 <Header />
//                 <MainAbout />
//                 <Footer />
//                 {console.log("returned -About- page")}
//             </>
//         )
//     } else if(props.selectedMenu == "Contact") {
//         return (
//             <>
//                 <Header />
//                 <MainContact />
//                 <Footer />
//                 {console.log("returned -Contact- page")}
//             </>
//         )
//     } else if(props.selectedMenu == "Portfolios") {
//         return (
//             <>
//                 <Header />
//                 <MainPortfolios />
//                 <Footer />
//                 {console.log("returned -Portfolios- page")}
//             </>
//         )
//     } else if(props.selectedMenu == "Journey") {
//         return (
//             <>
//                 <Header />
//                 <MainJourney />
//                 <Footer />
//                 {console.log("returned -Journey- page")}
//             </>
//         )
//     } else if(props.selectedMenu == "Blog") {
//         return (
//             <>
//                 <Header />
//                 <MainBlog />
//                 <Footer />
//                 {console.log("returned -Blog- page")}
//             </>
//         )
//     } else {
//         return (
//             <>
//                 <Header />
//                 <MainHome />
//                 <Footer />
//                 {console.log("returned -Home- page")}
//             </>
//         )
//     }
    

//     // return (
//     //     <>
//     //         <Header />

//     //         <Fragment key="9" sections={menuButtons}>
//     //             {/* <MainHome />
//     //             <MainAbout />
//     //             <MainContact />
//     //             <MainPortfolios />
//     //             <MainJourney />
//     //             <MainBlog /> */}
//     //         </Fragment>
            
//     //         <Footer />
//     //     </>
//     // )
// }

// export default App

export function Header() {
    // var menuHome = document.getElementById("1")
    // var menuAbout = document.getElementById("2")
    // var menuContact = document.getElementById("3")
    // var menuPortfolios = document.getElementById("4")
    // var menuJourney = document.getElementById("5")
    // var menuBlog = document.getElementById("6")
    // const menuButtons = {menu1:'Home', menu2:'About', menu3:'Contact', menu4:'Portfolios', menu5:'Journey', menu6:'Blog'}
    // const selectedMenu = [menuHome, menuAbout, menuContact, menuPortfolios, menuJourney, menuBlog]

    // let selectedMark = React.createElement("div", {className: "menus__selected"})

    // function test() {
    //     const menuHome = document.getElementById("1")
    //     menuHome.textContent = `${selectedMark}`
    //     menuHome.innerHTML = `<div className={sHeader.menus__selected}></div>`
    //     console.log("it is working")
    // }

    // var selectedMenu = "Contact"

    // const menus = ["Home", "About", "Contact", "Portfolios", "Journey", "Blog"]

    return (
        <header id={sHeader.header}>
            <ul className={sHeader.menus}>
                <li className={sHeader.menus__items} id={1} menuButton="Home" onClick={() => {var selectedMenu = "Home"}}> {/*onClick={test}*/}
                    Home
                </li>
                <li className={sHeader.menus__items} id={2} menuButton="About" onClick={() => {var selectedMenu = "About"}}>
                    {/* <div className={sHeader.menus__selected}></div> */}
                    About
                </li>
                <li className={sHeader.menus__items} id={3} menuButton="Contact" onClick={() => {var selectedMenu = "Contact"}}>
                    Contact
                </li>
                <li className={sHeader.menus__items} id={4} menuButton="Portfolios" onClick={() => {var selectedMenu = "Portfolios"}}>
                    Portfolios
                </li>
                <li className={sHeader.menus__items} id={5} menuButton="Journey" onClick={() => {var selectedMenu = "Journey"}}>
                    Journey
                </li>
                <li className={sHeader.menus__items} id={6} menuButton="Blog" onClick={() => {var selectedMenu = "Blog"}}>
                    Blog
                </li>
            </ul>
        </header>
    )
}

export default function App(selectedMenu) {
    console.log(selectedMenu.value)
    if(0<1) {
        return (
            <>
                <Header />
                <MainHome />
                <Footer />
            </>
        )
    }
}

// cd 04\ ■►\ React/CODERS\ Denmark/starter-react
// npm start