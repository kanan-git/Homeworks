
// imported elements
import React from 'react'
import s from './index.module.css'
import {dataSource} from '../../dataSource/data-source'
import {useState, useEffect} from 'react'
import logo from './logo.png'
import userQuest from './user-quest.png'

function Header() {
    // useState components
    const [menuElements, setMenuElements] = useState([])
    const [navItems, setNavItems] = useState([])
    const [userDropDown, setUserDropDown] = useState([])
    const [productsDD, setProductsDD] = useState([])

    // useEffect for call function once
    useEffect(
        () => {
            setMenuElements(dataSource.english.header.topside)
            setNavItems(dataSource.english.header.mainside.navbar)
            setUserDropDown(dataSource.english.header.mainside.userdropdown)
            setProductsDD(dataSource.english.header.mainside.productsddown)
            var langSelector = document.querySelector("#language")
            langSelector.addEventListener( "change", () => {
                if(langSelector.value == "English") {
                    setMenuElements(dataSource.english.header.topside)
                    setNavItems(dataSource.english.header.mainside.navbar)
                    setUserDropDown(dataSource.english.header.mainside.userdropdown)
                    setProductsDD(dataSource.english.header.mainside.productsddown)
                } else {
                    setMenuElements(dataSource.azerbaijani.header.topside)
                    setNavItems(dataSource.azerbaijani.header.mainside.navbar)
                    setUserDropDown(dataSource.azerbaijani.header.mainside.userdropdown)
                    setProductsDD(dataSource.azerbaijani.header.mainside.productsddown)
                }
            })
        }, []
    )

    // console log for testing is working or not
    // console.log(menuElements, navItems)

    // returning result
    return (
        <header className={s.header}>
            {/* top side of the header as navbar */}
            <nav className={s.header__list}>
                {/* menu elements */}
                {
                    menuElements.map(
                        (element, index) => <button key={index} className={s.header__list_buttons}>
                            {element}
                            {index == 1 ? (<i className='fa-solid fa-caret-right fa-1x fa-rotate-90' id={s.fa_caret}></i>) : ""}
                        </button>
                    )
                }
                
                {/* dropdown menu for userpanel */}
                <div className={s.header__products_dropdown}></div>
                {/* -----------------------------------> COMPLETE THIS DROPDOWN MENU <-------------------------------- */}
            </nav>

            {/* bottom main side of the header contains logo, searchbar, language bar, userpanel */}
            <div className={s.header__main}>
                {/* temporary static elements for reference | LOGO */}
                <div className={s.header__main_logo}>
                    <img src={logo} alt="website-logo" className={s.header__main_logo__content} />
                </div>

                {/* temporary static elements for reference | LANGUAGE BAR */}
                <div className={s.header__main_langbar}>
                    <i className='fa-solid fa-globe fa-1x' id={s.fa_globe}></i>
                    <select name="language" id="language" className={s.header__main_langbar__selector}>
                        <option value="English" className={s.header__main_langbar__selector_options}>English</option>
                        <option value="Azərbaycan dili" className={s.header__main_langbar__selector_options}>Azərbaycan dili</option>
                    </select>
                </div>

                {/* temporary static elements for reference | SEARCHBAR */}
                <div className={s.header__main_search}>
                    <input type="search" placeholder={navItems[0]} className={s.header__main_search__input} />
                    <button className={s.header__main_search__button}>
                        <i className='fa-solid fa-magnifying-glass fa-1x fa-bounce' id={s.fa_glass}></i>
                    </button>
                </div>

                {/* temporary static elements for reference | SWITCH BUTTON FOR LIGHT OR DARK MODE */}
                <div className={s.header__main_switch}>
                    <i className='fa-solid fa-sun fa-1x' id={s.fa_sun}></i>
                    <button className={s.header__main_switch__slider}>
                        <div className={s.header__main_switch__slider_button}></div>
                    </button>
                    <i className='fa-solid fa-moon fa-1x' id={s.fa_moon}></i>
                </div>

                {/* temporary static elements for reference | USER PANEL */}
                <div className={s.header__main_userpanel}>
                    <img src={userQuest} alt="user-profile" className={s.header__main_userpanel__image} />
                    <p className={s.header__main_userpanel__status}> {navItems[1]} </p>

                    {/* dropdown menu for userpanel */}
                    <ul className={s.header__main_userpanel_dropdown}>
                        <li className={s.header__main_userpanel_dropdown__items}> <i className='fa-solid fa-arrow-right-to-bracket fa-1x' id={s.fa_symbols}></i> Sign in </li>
                        <li className={s.header__main_userpanel_dropdown__items}> <i className='fa-regular fa-id-card fa-1x' id={s.fa_symbols}></i> Register </li>
                        {/* <li className={s.header__main_userpanel_dropdown__items}> <i className='fa-solid fa-heart fa-1x' id={s.fa_symbols}></i> Favorites </li> */}
                        {/* <li className={s.header__main_userpanel_dropdown__items}> <i className='fa-solid fa-shopping-cart fa-1x' id={s.fa_symbols}></i> My Cart </li> */}
                        {/* <li className={s.header__main_userpanel_dropdown__items}> <i className='fa-solid fa-right-from-bracket fa-1x' id={s.fa_symbols}></i> Log Out </li> */}
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header
