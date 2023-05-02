// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ STARTING LINE //
// SECTOR 01:  importing elements
// SECTOR 02:  variables, props and states
// SECTOR 03:  switching light and dark mode
// SECTOR 04:  changing language
// SECTOR 05:  dropdown events
// SECTOR 06:  return XML side
// SECTOR 07:  export default function
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR 01 //
// imported elements
import React from 'react'
import s from './index.module.css'
import {dataSource} from '../../data/data-source'
import {useState, useEffect, useRef} from 'react'
import {userData} from '../../data/user-data'
import logo from './logo-shopnet.png'
import userQuest from './user-quest.png'
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR 02 //
function Header() {
    // userRef for using XML element like querySelector JS (import hook useRef, create const like useState, add like id ref={constYouCreatedForRefHere})
    // const switchButtonRef = useRef()
    const root = document.documentElement;
    const isHovered = "nope"
    // const switchSliderBtn = document.querySelector("#switch_btn")
    // const switchSun = document.querySelector("#fa_sun")
    // const switchMoon = document.querySelector("#fa_moon")
    const switchSliderBtn = useRef()
    const switchSun = useRef()
    const switchMoon = useRef()
    const topDropDown = useRef()
    const userpanelDropDown = useRef()
    const dd_arrow = useRef()

    const [switchSliderBtnSTATE, setSwitchSliderBtnSTATE] = useState(switchSliderBtn)
    const [switchSunSTATE, setSwitchSunSTATE] = useState(switchSun)
    const [switchMoonSTATE, setSwitchMoonSTATE] = useState(switchMoon)
    const [topDropDownSTATE, setTopDropDownSTATE] = useState(topDropDown)
    const [userpanelDropDownSTATE, setUserpanelDropDownSTATE] = useState(userpanelDropDown)

    const [isHoveredSTATE, setIsHoveredSTATE] = useState(isHovered)

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
    useState(
        () => {
            setSwitchSliderBtnSTATE(switchSliderBtn)
            setSwitchSunSTATE(switchSun)
            setSwitchMoonSTATE(switchMoon)
            setTopDropDownSTATE(topDropDown)
            setUserpanelDropDownSTATE(userpanelDropDown)
            setIsHoveredSTATE(isHovered)
        }, [])

    function handleSwitchLorD() {
        // console.log(
        //     switchSliderBtnSTATE.current.style.left, 
        //     switchSliderBtnSTATE.current.style.transform, 
        //     switchSunSTATE.current.style.scale, 
        //     switchSunSTATE.current.style.opacity, 
        //     switchMoonSTATE.current.style.scale, 
        //     switchMoonSTATE.current.style.opacity
        // )
        if(isLightMode == true) {
            // enable LIGHT mode
            setIsLightMode(false)
            // add isLightMode & language data to sessionStorage (localStorage?) & make it preventDefault to keep it ? or just no reload page ?
            // console.log(isLightMode, "DARK mode enabled")
            root.style.setProperty('--default-color', 'rgb(155,155,155)'); // DARK mode default color
            root.style.setProperty('--text-color', 'rgb(205,205,205)'); // DARK mode default color
            root.style.setProperty('--text-negative-color', 'rgb(205,205,205)'); // LIGHT mode default color
            root.style.setProperty('--link-color', 'rgb(255,255,255)'); // DARK mode default color
            root.style.setProperty('--link-hover-color', 'rgb(5,145,255)'); // DARK mode default color
            root.style.setProperty('--link-active-color', 'rgb(5,205,255)'); // DARK mode default color
            root.style.setProperty('--default-bg-color', 'rgb(30,30,30)'); // DARK mode default color
            root.style.setProperty('--footer-bg-color', 'rgb(15,15,15)'); // DARK mode default color
            root.style.setProperty('--footer-bottom-color', 'rgb(10,10,10)'); // DARK mode default color
            root.style.setProperty('--header-bg-color', 'rgba(5,5,5,0.5)'); // DARK mode default color
            root.style.setProperty('--header-top-color', 'rgb(20,20,20)'); // DARK mode default color
            root.style.setProperty('--buttons-color', 'rgb(55,55,55)'); // DARK mode default color
            root.style.setProperty('--buttons-hover-color', 'rgb(45,5,245)'); // DARK mode default color
            root.style.setProperty('--buttons-active-color', 'rgb(115,15,255)'); // DARK mode default color
            root.style.setProperty('--filter-shadow-color', 'rgb(255,255,255)'); // DARK mode default color
            root.style.setProperty('--borders-color', 'rgb(200,200,200)'); // DARK mode default color
            root.style.setProperty('--body-bg', 'linear-gradient(to right, rgb(70,10,250), rgb(200,10,10))'); // DARK mode default color

            switchSliderBtnSTATE.current.style.left = `100%`
            switchSliderBtnSTATE.current.style.transform = `translateX(-95%)`
            switchSunSTATE.current.style.scale = `1.0`
            switchSunSTATE.current.style.opacity = `0.5`
            switchMoonSTATE.current.style.scale = `1.8`
            switchMoonSTATE.current.style.opacity = `0.9`

            // console.log(
            //     switchSliderBtnSTATE.current.style.left, 
            //     switchSliderBtnSTATE.current.style.transform, 
            //     switchSunSTATE.current.style.scale, 
            //     switchSunSTATE.current.style.opacity, 
            //     switchMoonSTATE.current.style.scale, 
            //     switchMoonSTATE.current.style.opacity
            // )
        }
        else if(isLightMode == false) {
            // enable DARK mode
            setIsLightMode(true)
            // console.log(isLightMode, "LIGHT mode enabled")
            root.style.setProperty('--default-color', 'rgb(155,155,155)'); // LIGHT mode default color
            root.style.setProperty('--text-color', 'rgb(5,5,5)'); // LIGHT mode default color
            root.style.setProperty('--text-negative-color', 'rgb(205,205,205)'); // LIGHT mode default color
            root.style.setProperty('--link-color', 'rgb(25,25,25)'); // LIGHT mode default color
            root.style.setProperty('--link-hover-color', 'rgb(250,150,50)'); // LIGHT mode default color
            root.style.setProperty('--link-active-color', 'rgb(255,75,0)'); // LIGHT mode default color
            root.style.setProperty('--default-bg-color', 'rgb(215,215,215)'); // LIGHT mode default color
            root.style.setProperty('--footer-bg-color', 'rgb(12,24,48)'); // LIGHT mode default color
            root.style.setProperty('--footer-bottom-color', 'rgb(35,35,35)'); // LIGHT mode default color
            root.style.setProperty('--header-bg-color', 'rgba(185,185,185,0.7)'); // LIGHT mode default color
            root.style.setProperty('--header-top-color', 'rgb(45,45,45)'); // LIGHT mode default color
            root.style.setProperty('--buttons-color', 'rgb(200,200,200)'); // LIGHT mode default color
            root.style.setProperty('--buttons-hover-color', 'rgb(255,255,100)'); // LIGHT mode default color
            root.style.setProperty('--buttons-active-color', 'rgb(125,255,5)'); // LIGHT mode default color
            root.style.setProperty('--filter-shadow-color', 'rgb(10,10,10)'); // LIGHT mode default color
            root.style.setProperty('--borders-color', 'rgb(45,45,45)'); // LIGHT mode default color
            root.style.setProperty('--body-bg', 'linear-gradient(to right, rgb(250,150,10), rgb(10,250,150))'); // LIGHT mode default color

            switchSliderBtnSTATE.current.style.left = `0%`
            switchSliderBtnSTATE.current.style.transform = `translateX(0%)`
            switchSunSTATE.current.style.scale = `1.8`
            switchSunSTATE.current.style.opacity = `0.9`
            switchMoonSTATE.current.style.scale = `1.0`
            switchMoonSTATE.current.style.opacity = `0.5`

            // console.log(
            //     switchSliderBtnSTATE.current.style.left, 
            //     switchSliderBtnSTATE.current.style.transform, 
            //     switchSunSTATE.current.style.scale, 
            //     switchSunSTATE.current.style.opacity, 
            //     switchMoonSTATE.current.style.scale, 
            //     switchMoonSTATE.current.style.opacity
            // )
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
// function for userpanel dropdown menu
function userpanelDDfuncOpen() {
    // userpanelDropDownSTATE.current.style.display = `flex`
    userpanelDropDownSTATE.current.style.visibility = `visible`
    userpanelDropDownSTATE.current.style.opacity = `1.0`
    userpanelDropDownSTATE.current.style.transform = `translate(-50%, 0%)`
    userpanelDropDownSTATE.current.style.transition = `ease-in-out 0.2s`
    // console.log(userpanelDropDownSTATE.current.style.display)
}
function userpanelDDfuncClose() {
    // userpanelDropDownSTATE.current.style.display = `none`
    userpanelDropDownSTATE.current.style.visibility = `hidden`
    userpanelDropDownSTATE.current.style.opacity = `0.0`
    userpanelDropDownSTATE.current.style.transform = `translate(-50%, -100%)`
    userpanelDropDownSTATE.current.style.transition = `ease-in-out 0.2s`
    // console.log(userpanelDropDownSTATE.current.style.display)
}
if(isHoveredSTATE == "yup") {
    dd_arrow.current.style.rotate = `0deg`
    console.log("true | 1")
} else if(isHoveredSTATE == "nope") {
    dd_arrow.current.style.rotate = `180deg`
    console.log("false | 0")
}
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR 06 //
    // returning result
    return (
        <header className={s.header}>
            {/* top side of the header as navbar */}
            <nav className={s.header__list}>
                {/* menu elements */}
                {
                    menuElements.map(
                        (element, index) => <button key={index} className={s.header__list_buttons} onMouseEnter={ () => {
                            if(index == 1) {
                                // topDropDownSTATE.current.style.display = `flex`
                                topDropDownSTATE.current.style.visibility = `visible`
                                topDropDownSTATE.current.style.opacity = `1.0`
                                topDropDownSTATE.current.style.transform = `translate(0%, 0%)`
                                topDropDownSTATE.current.style.transition = `ease-in-out 0.2s`
                                // console.log(topDropDownSTATE.current.style.display)
                                setIsHoveredSTATE("yup")
                                console.log(isHoveredSTATE)
                            }
                        } } onMouseLeave={ () => {
                            if(index == 1) {
                                // topDropDownSTATE.current.style.display = `none`
                                topDropDownSTATE.current.style.visibility = `hidden`
                                topDropDownSTATE.current.style.opacity = `0.0`
                                topDropDownSTATE.current.style.transform = `translate(0%, -100%)`
                                topDropDownSTATE.current.style.transition = `ease-in-out 0.2s`
                                // console.log(topDropDownSTATE.current.style.display)
                                setIsHoveredSTATE("nope")
                                console.log(isHoveredSTATE)
                            }
                        } }>
                            {element}
                            {index == 1 ? (<i className='fa-solid fa-caret-right fa-1x fa-rotate-90' id={s.fa_caret} ref={dd_arrow}></i>) : ""}
                        </button>
                    )
                }

                {/* dropdown menu for userpanel */}
                <div className={s.header__list_productsdropdown} ref={topDropDown} onMouseEnter={ () => {
                    // topDropDownSTATE.current.style.display = `flex`
                    topDropDownSTATE.current.style.visibility = `visible`
                    topDropDownSTATE.current.style.opacity = `1.0`
                    topDropDownSTATE.current.style.transform = `translate(0%, 0%)`
                    topDropDownSTATE.current.style.transition = `ease-in-out 0.2s`
                    // console.log(topDropDownSTATE.current.style.display)
                    setIsHoveredSTATE("yup")
                } } onMouseLeave={ () => {
                    // topDropDownSTATE.current.style.display = `none`
                    topDropDownSTATE.current.style.visibility = `hidden`
                    topDropDownSTATE.current.style.opacity = `0.0`
                    topDropDownSTATE.current.style.transform = `translate(0%, -100%)`
                    topDropDownSTATE.current.style.transition = `ease-in-out 0.2s`
                    // console.log(topDropDownSTATE.current.style.display)
                    setIsHoveredSTATE("nope")
                } }>

                    <ul className={s.header__list_productsdropdown__columns}>
                        {/* <h4 className={s.header__list_productsdropdown__columns_header}> {productsDD1[0]} </h4>
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
                        <li className={s.header__list_productsdropdown__columns_items}> {productsDD1[11]} </li> */}
                        { productsDD1.map( (item, index) => {
                            if(index == 0) {
                                return (<h4 className={s.header__list_productsdropdown__columns_header} key={index}> {item} </h4>)
                            } else {
                                return (<li className={s.header__list_productsdropdown__columns_items} key={index}> {item} </li>)
                            }
                        } ) }
                    </ul>

                    <ul className={s.header__list_productsdropdown__columns}>
                        {/* <h4 className={s.header__list_productsdropdown__columns_header}> {productsDD2[0]} </h4>
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
                        <li className={s.header__list_productsdropdown__columns_items}> {productsDD2[11]} </li> */}
                        { productsDD2.map( (item, index) => {
                            if(index == 0) {
                                return (<h4 className={s.header__list_productsdropdown__columns_header} key={index}> {item} </h4>)
                            } else {
                                return (<li className={s.header__list_productsdropdown__columns_items} key={index}> {item} </li>)
                            }
                        } ) }
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
                    <i className='fa-solid fa-sun fa-1x' id={s.fa_sun} ref={switchSun} ></i>
                    <button className={s.header__main_switch__slider} id="switchlord" onClick={handleSwitchLorD}>
                    {/* <button className={s.header__main_switch__slider} id="switchlord" ref={switchButtonRef}> */}
                        <div className={s.header__main_switch__slider_button} id={s.switch_btn} ref={switchSliderBtn} ></div>
                    </button>
                    <i className='fa-solid fa-moon fa-1x' id={s.fa_moon} ref={switchMoon} ></i>
                </div>

                {/* temporary static elements for reference | USER PANEL */}
                <div className={s.header__main_userpanel} onMouseEnter={userpanelDDfuncOpen} onMouseLeave={userpanelDDfuncClose}>
                    <img src={userQuest} alt="user-profile" className={s.header__main_userpanel__image} />
                    <p className={s.header__main_userpanel__status}> {navItems[1]} </p>

                    {/* dropdown menu for userpanel */}
                    <ul className={s.header__main_userpanel_dropdown} ref={userpanelDropDown}>
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
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR 07 //
export default Header
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ ENDING LINE //