// HEADER COMPONENT

import React from "react"
import s from "./style.module.css"

function Header() {
    return (
        <header id="header">
            <ul className="s.menus">
                {/* temporary static lists for visual test */}
                <li className="menus__items">Home</li>
                <li className="menus__items">About</li>
                <li className="menus__items">Contact</li>
                <li className="menus__items">Portfolios</li>
                <li className="menus__items">Journey</li>
                <li className="menus__items">Blog</li>
            </ul>
        </header>
    )
}

export default Header