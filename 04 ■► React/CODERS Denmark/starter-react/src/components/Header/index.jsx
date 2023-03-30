// HEADER COMPONENT

import React, { useState } from 'react'
// import React from "react"
import sHeader from "./style.module.css"

function Header() {

    // const menuButtons = ['Home', 'About', 'Contact', 'Portfolios', 'Journey', 'Blog']
    // const menuButtons = [menuHome, menuAbout, menuContact, menuPortfolios, menuJourney, menuBlog]

    const menuHome = document.getElementById("1")
    const menuAbout = document.getElementById("2")
    const menuContact = document.getElementById("3")
    const menuPortfolios = document.getElementById("4")
    const menuJourney = document.getElementById("5")
    const menuBlog = document.getElementById("6")

    // let selectedMark = React.createElement("div", {className: "menus__selected"})
    let selectedMark = document.createElement("div")
    menuHome.appendChild(selectedMark)
    
    return (
        <header id={sHeader.header}>
            <ul className={sHeader.menus}>
                <li className={sHeader.menus__items} id={1}>
                    Home
                </li>
                <li className={sHeader.menus__items} id={2}>
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