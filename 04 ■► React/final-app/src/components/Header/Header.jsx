// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ STARTING LINE //
// SECTOR 01:  importing elements
// SECTOR 02:  variables, props and states
// SECTOR 03:  switching light and dark mode
// SECTOR 04:  changing language
// SECTOR 05:  return XML side
// SECTOR 06:  export default function
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR 01 //
// imported elements
import React from 'react'
import s from './index.module.css'
import {dataSource} from '../../dataSource/data-source'
import {useState, useEffect, useRef} from 'react'
import logo from './logo-shopnet.png'
import userQuest from './user-quest.png'
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR 02 //
function Header() {
    // userRef for using XML element like querySelector JS (import hook useRef, create const like useState, add like id ref={constYouCreatedForRefHere})
    // const switchButtonRef = useRef()
    const root = document.documentElement;
    // console.log(switchButtonRef.current.innerHTML)
    const [isLightMode, setIsLightMode] = useState(true)
    
    // useState components
    const [menuElements, setMenuElements] = useState(dataSource.english.header.topside)
    const [navItems, setNavItems] = useState(dataSource.english.header.mainside.navbar)
    const [userDropDown, setUserDropDown] = useState(dataSource.english.header.mainside.userdropdown)

    const [productsDD1, setProductsDD1] = useState(dataSource.english.header.mainside.productsddown.header1)
    const [productsDD2, setProductsDD2] = useState(dataSource.english.header.mainside.productsddown.header2)
    const [productsDD3, setProductsDD3] = useState(dataSource.english.header.mainside.productsddown.header3)
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR 03 //
    // function for switching Light or Dark mode

    // document.querySelector(".header__main_switch__slider").addEventListener("click", () => {console.log("+")})

    function handleSwitchLorD() {
        if(isLightMode == true) {
            // enable LIGHT mode
            setIsLightMode(false)
            console.log(isLightMode)
            root.style.setProperty('--default-color', 'rgb(16,16,16)'); // DARK mode default color
            root.style.setProperty('--default-color', 'rgb(16,16,16)'); // DARK mode default color
            root.style.setProperty('--default-color', 'rgb(16,16,16)'); // DARK mode default color
            root.style.setProperty('--default-color', 'rgb(16,16,16)'); // DARK mode default color
            root.style.setProperty('--default-color', 'rgb(16,16,16)'); // DARK mode default color
            root.style.setProperty('--default-color', 'rgb(16,16,16)'); // DARK mode default color
            root.style.setProperty('--default-color', 'rgb(16,16,16)'); // DARK mode default color
            root.style.setProperty('--default-color', 'rgb(16,16,16)'); // DARK mode default color
            root.style.setProperty('--default-color', 'rgb(16,16,16)'); // DARK mode default color
            root.style.setProperty('--default-color', 'rgb(16,16,16)'); // DARK mode default color
            root.style.setProperty('--default-color', 'rgb(16,16,16)'); // DARK mode default color
            root.style.setProperty('--default-color', 'rgb(16,16,16)'); // DARK mode default color
            root.style.setProperty('--default-color', 'rgb(16,16,16)'); // DARK mode default color
        }
        else if(isLightMode == false) {
            // enable DARK mode
            setIsLightMode(true)
            console.log(isLightMode)
            root.style.setProperty('--default-color', 'rgb(16,16,16)'); // DARK mode default color
            root.style.setProperty('--default-color', 'rgb(16,16,16)'); // DARK mode default color
            root.style.setProperty('--default-color', 'rgb(16,16,16)'); // DARK mode default color
            root.style.setProperty('--default-color', 'rgb(16,16,16)'); // DARK mode default color
            root.style.setProperty('--default-color', 'rgb(16,16,16)'); // DARK mode default color
            root.style.setProperty('--default-color', 'rgb(16,16,16)'); // DARK mode default color
            root.style.setProperty('--default-color', 'rgb(16,16,16)'); // DARK mode default color
            root.style.setProperty('--default-color', 'rgb(16,16,16)'); // DARK mode default color
            root.style.setProperty('--default-color', 'rgb(16,16,16)'); // DARK mode default color
            root.style.setProperty('--default-color', 'rgb(16,16,16)'); // DARK mode default color
            root.style.setProperty('--default-color', 'rgb(16,16,16)'); // DARK mode default color
            root.style.setProperty('--default-color', 'rgb(16,16,16)'); // DARK mode default color
            root.style.setProperty('--default-color', 'rgb(16,16,16)'); // DARK mode default color
        }
        else {
            console.log("function is not working correctly", isLightMode)
        }
    }
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR 04 //
    // useEffect for call function once
    useEffect(
        () => {
            var langSelector = document.querySelector("#language")
            langSelector.addEventListener( "change", () => {
                if(langSelector.value == "English") {
                    setMenuElements(dataSource.english.header.topside)
                    setNavItems(dataSource.english.header.mainside.navbar)
                    setUserDropDown(dataSource.english.header.mainside.userdropdown)
                    setProductsDD1(dataSource.english.header.mainside.productsddown.header1)
                    setProductsDD2(dataSource.english.header.mainside.productsddown.header2)
                    setProductsDD3(dataSource.english.header.mainside.productsddown.header3)
                } else if(langSelector.value == "Türkçe") {
                    setMenuElements(dataSource.turkish.header.topside)
                    setNavItems(dataSource.turkish.header.mainside.navbar)
                    setUserDropDown(dataSource.turkish.header.mainside.userdropdown)
                    setProductsDD1(dataSource.turkish.header.mainside.productsddown.header1)
                    setProductsDD2(dataSource.turkish.header.mainside.productsddown.header2)
                    setProductsDD3(dataSource.turkish.header.mainside.productsddown.header3)
                } else {
                    setMenuElements(dataSource.azerbaijani.header.topside)
                    setNavItems(dataSource.azerbaijani.header.mainside.navbar)
                    setUserDropDown(dataSource.azerbaijani.header.mainside.userdropdown)
                    setProductsDD1(dataSource.azerbaijani.header.mainside.productsddown.header1)
                    setProductsDD2(dataSource.azerbaijani.header.mainside.productsddown.header2)
                    setProductsDD3(dataSource.azerbaijani.header.mainside.productsddown.header3)
                }
            })
        }, []
    )

    // console log for testing is working or not
    // console.log(menuElements, navItems)
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR 05 //
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
                <div className={s.header__list_productsdropdown}>
                    <ul className={s.header__list_productsdropdown__columns}>
                        <h4 className={s.header__list_productsdropdown__columns_header}> {productsDD1[0]} </h4>
                        <li className={s.header__list_productsdropdown__columns_items}> {productsDD1[1]} </li>
                        <li className={s.header__list_productsdropdown__columns_items}> {productsDD1[2]} </li>
                        <li className={s.header__list_productsdropdown__columns_items}> {productsDD1[3]} </li>
                        <li className={s.header__list_productsdropdown__columns_items}> {productsDD1[4]} </li>
                        <li className={s.header__list_productsdropdown__columns_items}> {productsDD1[5]} </li>
                        <li className={s.header__list_productsdropdown__columns_items}> {productsDD1[6]} </li>
                        <li className={s.header__list_productsdropdown__columns_items}> {productsDD1[7]} </li>
                        <li className={s.header__list_productsdropdown__columns_items}> {productsDD1[8]} </li>
                        <li className={s.header__list_productsdropdown__columns_items}> {productsDD1[9]} </li>
                        <li className={s.header__list_productsdropdown__columns_items}> {productsDD1[10]} </li>
                        <li className={s.header__list_productsdropdown__columns_items}> {productsDD1[11]} </li>
                    </ul>

                    <ul className={s.header__list_productsdropdown__columns}>
                        <h4 className={s.header__list_productsdropdown__columns_header}> {productsDD2[0]} </h4>
                        <li className={s.header__list_productsdropdown__columns_items}> {productsDD2[1]} </li>
                        <li className={s.header__list_productsdropdown__columns_items}> {productsDD2[2]} </li>
                        <li className={s.header__list_productsdropdown__columns_items}> {productsDD2[3]} </li>
                        <li className={s.header__list_productsdropdown__columns_items}> {productsDD2[4]} </li>
                        <li className={s.header__list_productsdropdown__columns_items}> {productsDD2[5]} </li>
                        <li className={s.header__list_productsdropdown__columns_items}> {productsDD2[6]} </li>
                        <li className={s.header__list_productsdropdown__columns_items}> {productsDD2[7]} </li>
                        <li className={s.header__list_productsdropdown__columns_items}> {productsDD2[8]} </li>
                        <li className={s.header__list_productsdropdown__columns_items}> {productsDD2[9]} </li>
                        <li className={s.header__list_productsdropdown__columns_items}> {productsDD2[10]} </li>
                        <li className={s.header__list_productsdropdown__columns_items}> {productsDD2[11]} </li>
                    </ul>

                    <ul className={s.header__list_productsdropdown__columns}>
                        <li className={s.header__list_productsdropdown__columns_discount}> {productsDD3[0]} </li>
                    </ul>
                </div>
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
                        <option value="English" className={s.header__main_langbar__selector_options}> English </option>
                        <option value="Azərbaycan dili" className={s.header__main_langbar__selector_options}> Azərbaycan dili </option>
                        <option value="Türkçe" className={s.header__main_langbar__selector_options}> Türkçe </option>
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
                    <button className={s.header__main_switch__slider} id="switchlord" onClick={handleSwitchLorD}>
                    {/* <button className={s.header__main_switch__slider} id="switchlord" ref={switchButtonRef}> */}
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
                        <li className={s.header__main_userpanel_dropdown__items}> <i className='fa-solid fa-arrow-right-to-bracket fa-1x' id={s.fa_symbols}></i> {userDropDown[0]} </li>
                        <li className={s.header__main_userpanel_dropdown__items}> <i className='fa-regular fa-id-card fa-1x' id={s.fa_symbols}></i> {userDropDown[1]} </li>
                        {/* <li className={s.header__main_userpanel_dropdown__items}> <i className='fa-solid fa-heart fa-1x' id={s.fa_symbols}></i> {userDropDown[2]} </li> */}
                        {/* <li className={s.header__main_userpanel_dropdown__items}> <i className='fa-solid fa-shopping-cart fa-1x' id={s.fa_symbols}></i> {userDropDown[3]} </li> */}
                        {/* <li className={s.header__main_userpanel_dropdown__items}> <i className='fa-solid fa-right-from-bracket fa-1x' id={s.fa_symbols}></i> {userDropDown[4]} </li> */}
                    </ul>
                </div>
            </div>
        </header>
    )
}
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR 06 //
export default Header
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ ENDING LINE //