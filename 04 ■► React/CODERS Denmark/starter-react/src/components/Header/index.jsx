// HEADER COMPONENT

import React, { useState } from 'react'
import sHeader from "./style.module.css"

import MainHome from "C:/Users/Kenan-PC/Desktop/HTML CSS BS JS React/04 ■► React/CODERS Denmark/starter-react/src/components/Main-Home/index"
import Footer from "C:/Users/Kenan-PC/Desktop/HTML CSS BS JS React/04 ■► React/CODERS Denmark/starter-react/src/components/Footer/index"

function Header() {
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

    var selectedMenu = "Contact"

    return (
        <header id={sHeader.header}>
            <ul className={sHeader.menus}>
                <li className={sHeader.menus__items} id={1} menuButton="Home" onClick={() => {selectedMenu = "Home"}}> {/*onClick={test}*/}
                    Home
                </li>
                <li className={sHeader.menus__items} id={2} menuButton="About" onClick={() => {selectedMenu = "About"}}>
                    {/* <div className={sHeader.menus__selected}></div> */}
                    About
                </li>
                <li className={sHeader.menus__items} id={3} menuButton="Contact" onClick={() => {selectedMenu = "Contact"}}>
                    Contact
                </li>
                <li className={sHeader.menus__items} id={4} menuButton="Portfolios" onClick={() => {selectedMenu = "Portfolios"}}>
                    Portfolios
                </li>
                <li className={sHeader.menus__items} id={5} menuButton="Journey" onClick={() => {selectedMenu = "Journey"}}>
                    Journey
                </li>
                <li className={sHeader.menus__items} id={6} menuButton="Blog" onClick={() => {selectedMenu = "Blog"}}>
                    Blog
                </li>
            </ul>
        </header>
    )
}

export default Header