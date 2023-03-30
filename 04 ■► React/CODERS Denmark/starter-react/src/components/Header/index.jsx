// HEADER COMPONENT

import React, { useState } from 'react'
import sHeader from "./style.module.css"

function Header() {

    // const menuButtons = ['Home', 'About', 'Contact', 'Portfolios', 'Journey', 'Blog']
    // const menuButtons = [menuHome, menuAbout, menuContact, menuPortfolios, menuJourney, menuBlog]

    // var menuHome = document.getElementById("1")
    // var menuAbout = document.getElementById("2")
    // var menuContact = document.getElementById("3")
    // var menuPortfolios = document.getElementById("4")
    // var menuJourney = document.getElementById("5")
    // var menuBlog = document.getElementById("6")

    // let selectedMark = React.createElement("div", {className: "menus__selected"})

    // function test() {
    //     const menuHome = document.getElementById("1")
    //     menuHome.textContent = `${selectedMark}`
    //     menuHome.innerHTML = `<div className={sHeader.menus__selected}></div>`
    //     console.log("it is working")
    // }

    return (
        <header id={sHeader.header}>
            <ul className={sHeader.menus}>
                <li className={sHeader.menus__items} id={1}> {/*onClick={test}*/}
                    Home
                </li>
                <li className={sHeader.menus__items} id={2}>
                    {/* <div className={sHeader.menus__selected}></div> */}
                    About
                </li>
                <li className={sHeader.menus__items} id={3}>
                    Contact
                </li>
                <li className={sHeader.menus__items} id={4}>
                    Portfolios
                </li>
                <li className={sHeader.menus__items} id={5}>
                    Journey
                </li>
                <li className={sHeader.menus__items} id={6}>
                    Blog
                </li>
            </ul>
        </header>
    )
}

export default Header