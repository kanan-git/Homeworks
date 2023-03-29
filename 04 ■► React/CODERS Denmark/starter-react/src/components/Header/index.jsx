// HEADER COMPONENT

import React from "react"
import sHeader from "./style.module.css"

function Header() {

    const menuButtons = {Home, About, Contact, Portfolios, Journey, Blog}
    
    return (
        <header id={sHeader.header}>
            <ul className={sHeader.menus}>
                {/* temporary static lists for visual test */}
                <li className={sHeader.menus__items}>Home</li>
                <li className={sHeader.menus__items}>About</li>
                <li className={sHeader.menus__items}>Contact</li>
                <li className={sHeader.menus__items}>Portfolios</li>
                <li className={sHeader.menus__items}>Journey</li>
                <li className={sHeader.menus__items}>Blog</li>
                {/* selected menu item */}
                <div className={sHeader.menus__selected}></div>
            </ul>
        </header>
    )
}

export default Header