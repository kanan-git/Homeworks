// imported elements
import React from 'react'
import s from './index.module.css'
import {dataSource} from '../../data/data-source'
import {useState, useEffect, useRef} from 'react'
import {userData} from '../../data/user-data'
import logo from './logo-shopnet.png'
import userQuest from './user-quest.png'
import userX_X from './user-transparent.png'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import { setCurrentLanguage } from '../../features/counter/counterSlice'
import { setCurrentAuthType } from '../../features/counter/switchAuthType'
import { setCurrentSearchValue } from '../../features/counter/searchValueSlice'
import { useDispatch } from 'react-redux'

function Header() {
    const root = document.documentElement;
    const isHovered = "nope"

    useEffect(
        () => {
            if(JSON.parse(localStorage.getItem("language")) == null) {
                localStorage.setItem("language", JSON.stringify("english"))
            }
        }, []
    )

    const [userName, setUserName] = useState()
    const [userColor, setUsercolor] = useState()
    const [userBudget, setUserBudget] = useState()
    const [userOrGuestSTATE, setUserOrGuestSTATE] = useState()

    useEffect(
        () => {
            var userOrGuest = JSON.parse(localStorage.getItem("isLogged"))
            setUserOrGuestSTATE(userOrGuest)
            if(userOrGuest == true) {
                // change userpanel dropdown items, balance amount of user, change different user image, etc
                var currentUser = JSON.parse(localStorage.getItem('signedUser'))
                var uName = JSON.parse(localStorage.getItem(currentUser)).name + " " + JSON.parse(localStorage.getItem(currentUser)).lastname
                var uColor = JSON.parse(localStorage.getItem(currentUser)).profile_img_color
                var uBudget = JSON.parse(localStorage.getItem(currentUser)).budget_amount_from_creditcard
                setUserName(uName)
                setUsercolor(uColor)
                setUserBudget(uBudget)
            } else {
                localStorage.setItem("isLogged", JSON.stringify(false))
                localStorage.setItem("signedUser", JSON.stringify("guest"))
            }
        }, []
    )

    const switchSliderBtn = useRef()
    const switchSun = useRef()
    const switchMoon = useRef()
    const topDropDown = useRef()
    const userpanelDropDown = useRef()
    const dd_arrow = useRef()
    const logo_img = useRef()

    const [switchSliderBtnSTATE, setSwitchSliderBtnSTATE] = useState(switchSliderBtn)
    const [switchSunSTATE, setSwitchSunSTATE] = useState(switchSun)
    const [switchMoonSTATE, setSwitchMoonSTATE] = useState(switchMoon)
    const [topDropDownSTATE, setTopDropDownSTATE] = useState(topDropDown)
    const [userpanelDropDownSTATE, setUserpanelDropDownSTATE] = useState(userpanelDropDown)
    const [logoSTATE, setLogoSTATE] = useState(logo_img)

    const [ddarrowSTATE, setDDarrowSTATE] = useState(dd_arrow)
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

    useEffect(
        () => {
            const doesExistLorDstat = JSON.parse(localStorage.getItem("lightMode"))
            if(doesExistLorDstat == "light") {
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
                root.style.setProperty('--searchbar-bg', 'rgb(250,250,250)'); // LIGHT mode default color
                root.style.setProperty('--searchbar-color', 'rgb(50,50,50)'); // LIGHT mode default color
                switchSliderBtnSTATE.current.style.left = `0%`
                switchSliderBtnSTATE.current.style.transform = `translateX(0%)`
                switchSunSTATE.current.style.scale = `1.8`
                switchSunSTATE.current.style.opacity = `0.9`
                switchMoonSTATE.current.style.scale = `1.0`
                switchMoonSTATE.current.style.opacity = `0.5`
                logoSTATE.current.style.filter = `invert(0)`
            } else if(doesExistLorDstat == "dark") {
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
                root.style.setProperty('--searchbar-bg', 'rgb(50,50,50)'); // DARK mode default color
                root.style.setProperty('--searchbar-color', 'rgb(250,250,250)'); // DARK mode default color
                switchSliderBtnSTATE.current.style.left = `100%`
                switchSliderBtnSTATE.current.style.transform = `translateX(-95%)`
                switchSunSTATE.current.style.scale = `1.0`
                switchSunSTATE.current.style.opacity = `0.5`
                switchMoonSTATE.current.style.scale = `1.8`
                switchMoonSTATE.current.style.opacity = `0.9`
                logoSTATE.current.style.filter = `invert(1)`
            } else {
                localStorage.setItem("lightMode", JSON.stringify("light"))
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
                root.style.setProperty('--searchbar-bg', 'rgb(250,250,250)'); // LIGHT mode default color
                root.style.setProperty('--searchbar-color', 'rgb(50,50,50)'); // LIGHT mode default color
                switchSliderBtnSTATE.current.style.left = `0%`
                switchSliderBtnSTATE.current.style.transform = `translateX(0%)`
                switchSunSTATE.current.style.scale = `1.8`
                switchSunSTATE.current.style.opacity = `0.9`
                switchMoonSTATE.current.style.scale = `1.0`
                switchMoonSTATE.current.style.opacity = `0.5`
                logoSTATE.current.style.filter = `invert(0)`
            }
        }, []
    )

    useState(
        () => {
            setSwitchSliderBtnSTATE(switchSliderBtn)
            setSwitchSunSTATE(switchSun)
            setSwitchMoonSTATE(switchMoon)
            setTopDropDownSTATE(topDropDown)
            setUserpanelDropDownSTATE(userpanelDropDown)
            setIsHoveredSTATE(isHovered)
            setLogoSTATE(logo_img)
        }, [])

    function handleSwitchLorD() {
        var LorDstatus = JSON.parse(localStorage.getItem("lightMode"))
        if(LorDstatus == "light") {
            // enable LIGHT mode
            setIsLightMode(false)
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
            root.style.setProperty('--searchbar-bg', 'rgb(50,50,50)'); // DARK mode default color
            root.style.setProperty('--searchbar-color', 'rgb(250,250,250)'); // DARK mode default color
            localStorage.setItem("lightMode", JSON.stringify("dark"))
            switchSliderBtnSTATE.current.style.left = `100%`
            switchSliderBtnSTATE.current.style.transform = `translateX(-95%)`
            switchSunSTATE.current.style.scale = `1.0`
            switchSunSTATE.current.style.opacity = `0.5`
            switchMoonSTATE.current.style.scale = `1.8`
            switchMoonSTATE.current.style.opacity = `0.9`
            logoSTATE.current.style.filter = `invert(1)`
        }
        else if(LorDstatus == "dark") {
            // enable DARK mode
            setIsLightMode(true)
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
            root.style.setProperty('--searchbar-bg', 'rgb(250,250,250)'); // LIGHT mode default color
            root.style.setProperty('--searchbar-color', 'rgb(50,50,50)'); // LIGHT mode default color
            localStorage.setItem("lightMode", JSON.stringify("light"))
            switchSliderBtnSTATE.current.style.left = `0%`
            switchSliderBtnSTATE.current.style.transform = `translateX(0%)`
            switchSunSTATE.current.style.scale = `1.8`
            switchSunSTATE.current.style.opacity = `0.9`
            switchMoonSTATE.current.style.scale = `1.0`
            switchMoonSTATE.current.style.opacity = `0.5`
            logoSTATE.current.style.filter = `invert(0)`
        }
        else {
            // .
        }
    }

    const dispatch = useDispatch()

    function handleMainLang() {
        var langSelector = document.querySelector("#language")
        if(langSelector.value == "English") {
            setMenuElements(dataSource.english.header.topside)
            setNavItems(dataSource.english.header.mainside.navbar)
            setUserDropDown(dataSource.english.header.mainside.userdropdown)
            setProductsDD1(dataSource.english.header.mainside.productsddown.header1)
            setProductsDD2(dataSource.english.header.mainside.productsddown.header2)
            setProductsDD3(dataSource.english.header.mainside.productsddown.header3)
            // dispatch(setCurrentLanguage("English"))
            dispatch(setCurrentLanguage(dataSource.english))
            // dispatch(setCurrentLanguage(dataSource))
            localStorage.setItem("language", JSON.stringify("english"))
        } else if(langSelector.value == "Türkçe") {
            setMenuElements(dataSource.turkish.header.topside)
            setNavItems(dataSource.turkish.header.mainside.navbar)
            setUserDropDown(dataSource.turkish.header.mainside.userdropdown)
            setProductsDD1(dataSource.turkish.header.mainside.productsddown.header1)
            setProductsDD2(dataSource.turkish.header.mainside.productsddown.header2)
            setProductsDD3(dataSource.turkish.header.mainside.productsddown.header3)
            // dispatch(setCurrentLanguage("Türkçe"))
            dispatch(setCurrentLanguage(dataSource.turkish))
            // dispatch(setCurrentLanguage(dataSource))
            localStorage.setItem("language", JSON.stringify("azerbaijani"))
        } else {
            setMenuElements(dataSource.azerbaijani.header.topside)
            setNavItems(dataSource.azerbaijani.header.mainside.navbar)
            setUserDropDown(dataSource.azerbaijani.header.mainside.userdropdown)
            setProductsDD1(dataSource.azerbaijani.header.mainside.productsddown.header1)
            setProductsDD2(dataSource.azerbaijani.header.mainside.productsddown.header2)
            setProductsDD3(dataSource.azerbaijani.header.mainside.productsddown.header3)
            // dispatch(setCurrentLanguage("Azərbaycan dili"))
            dispatch(setCurrentLanguage(dataSource.azerbaijani))
            // dispatch(setCurrentLanguage(dataSource))
            localStorage.setItem("language", JSON.stringify("turkish"))
        }
    }
    
    function userpanelDDfuncOpen() {
        userpanelDropDownSTATE.current.style.visibility = `visible`
        userpanelDropDownSTATE.current.style.opacity = `1.0`
        userpanelDropDownSTATE.current.style.transform = `translate(-50%, 0%)`
        userpanelDropDownSTATE.current.style.transition = `ease-in-out 0.2s`
    }
    function userpanelDDfuncClose() {
        userpanelDropDownSTATE.current.style.visibility = `hidden`
        userpanelDropDownSTATE.current.style.opacity = `0.0`
        userpanelDropDownSTATE.current.style.transform = `translate(-50%, -100%)`
        userpanelDropDownSTATE.current.style.transition = `ease-in-out 0.2s`
    }

    function selectAuthIn() {
        dispatch(setCurrentAuthType("login"))
    }
    function selectAuthUp() {
        dispatch(setCurrentAuthType("register"))
    }

    function handleLogout() {
        localStorage.setItem("isLogged", JSON.stringify(false))
        localStorage.setItem("signedUser", JSON.stringify("guest"))
        window.location.reload()
    }

    return (
        <header className={s.header}>
            {/* top side of the header as navbar */}
            <nav className={s.header__list}>
                {/* menu elements */}
                <Link className={s.header__list_buttons} to="/"> {menuElements[0]} </Link>
                <Link className={s.header__list_buttons} to="/products" onMouseEnter={ () => {
                            topDropDownSTATE.current.style.visibility = `visible`
                            topDropDownSTATE.current.style.opacity = `1.0`
                            topDropDownSTATE.current.style.transform = `translate(0%, 0%)`
                            topDropDownSTATE.current.style.transition = `ease-in-out 0.2s`
                        } } onMouseLeave={ () => {
                            topDropDownSTATE.current.style.visibility = `hidden`
                            topDropDownSTATE.current.style.opacity = `0.0`
                            topDropDownSTATE.current.style.transform = `translate(0%, -100%)`
                            topDropDownSTATE.current.style.transition = `ease-in-out 0.2s`
                        } }
                > {menuElements[1]} <i className='fa-solid fa-caret-right fa-1x fa-rotate-90'></i> </Link>
                <Link className={s.header__list_buttons} to="/about"> {menuElements[2]} </Link>
                <Link className={s.header__list_buttons} to="/contact"> {menuElements[3]} </Link>
                {/* dropdown menu for userpanel */}
                <div className={s.header__list_productsdropdown} ref={topDropDown} onMouseEnter={ () => {
                    topDropDownSTATE.current.style.visibility = `visible`
                    topDropDownSTATE.current.style.opacity = `1.0`
                    topDropDownSTATE.current.style.transform = `translate(0%, 0%)`
                    topDropDownSTATE.current.style.transition = `ease-in-out 0.2s`
                } } onMouseLeave={ () => {
                    topDropDownSTATE.current.style.visibility = `hidden`
                    topDropDownSTATE.current.style.opacity = `0.0`
                    topDropDownSTATE.current.style.transform = `translate(0%, -100%)`
                    topDropDownSTATE.current.style.transition = `ease-in-out 0.2s`
                } }>

                    <ul className={s.header__list_productsdropdown__columns}>
                        { productsDD1.map( (item, index) => {
                            if(index == 0) {
                                return (<h4 className={s.header__list_productsdropdown__columns_header} key={index}> {item} </h4>)
                            } else {
                                return (
                                    <Link to="/products" onClick={
                                        () => {
                                            dispatch(setCurrentSearchValue(dataSource.english.header.mainside.productsddown.header1[index]))
                                        }
                                    } className={s.header__list_productsdropdown__columns_items} key={index}> {item} </Link>
                                )
                            }
                        } ) }
                    </ul>

                    <ul className={s.header__list_productsdropdown__columns}>
                        { productsDD2.map( (item, index) => {
                            if(index == 0) {
                                return (<h4 className={s.header__list_productsdropdown__columns_header} key={index}> {item} </h4>)
                            } else {
                                return (
                                    <Link to="/products" onClick={
                                        () => {
                                            dispatch(setCurrentSearchValue(dataSource.english.header.mainside.productsddown.header2[index]))
                                        }
                                    } className={s.header__list_productsdropdown__columns_items} key={index}> {item} </Link>
                                )
                            }
                        } ) }
                    </ul>
                </div>
            </nav>
            {/* bottom main side of the header contains logo, searchbar, language bar, userpanel */}
            <div className={s.header__main}>
                {/* temporary static elements for reference | LOGO */}
                <div className={s.header__main_logo}>
                    <img src={logo} alt="website-logo" className={s.header__main_logo__content} ref={logo_img} />
                </div>
                {/* temporary static elements for reference | LANGUAGE BAR */}
                <div className={s.header__main_langbar}>
                    <i className='fa-solid fa-globe fa-1x' id={s.fa_globe}></i>
                    <select name="language" id="language" className={s.header__main_langbar__selector} onChange={handleMainLang}>
                        <option value="English" className={s.header__main_langbar__selector_options}> English </option>
                        <option value="Azərbaycan dili" className={s.header__main_langbar__selector_options}> Azərbaycan dili </option>
                        <option value="Türkçe" className={s.header__main_langbar__selector_options}> Türkçe </option>
                    </select>
                </div>
                {/* temporary static elements for reference | SEARCHBAR */}
                <div className={s.header__main_search}>
                    <input type="search" placeholder={navItems[0]} className={s.header__main_search__input} id="searcbar" />
                    <Link className={s.header__main_search__button} to="/products" 
                    onClick={
                        () => {
                            var searchValue = document.querySelector("#searcbar").value
                            if(searchValue == "") {
                                // console.log("empty")
                            } else {
                                // console.log(searchValue)
                            }
                            dispatch( setCurrentSearchValue(searchValue) )
                        }
                    }
                    >
                        <i className='fa-solid fa-magnifying-glass fa-1x fa-bounce' id={s.fa_glass}></i>
                    </Link>
                </div>
                {/* temporary static elements for reference | SWITCH BUTTON FOR LIGHT OR DARK MODE */}
                <div className={s.header__main_switch}>
                    <i className='fa-solid fa-sun fa-1x' id={s.fa_sun} ref={switchSun} ></i>
                    <button className={s.header__main_switch__slider} id="switchlord" onClick={handleSwitchLorD} > {/* onLoad={callBeginningValues} */}
                    {/* <button className={s.header__main_switch__slider} id="switchlord" ref={switchButtonRef}> */}
                        <div className={s.header__main_switch__slider_button} id={s.switch_btn} ref={switchSliderBtn} ></div>
                    </button>
                    <i className='fa-solid fa-moon fa-1x' id={s.fa_moon} ref={switchMoon} ></i>
                </div>
                {/* temporary static elements for reference | USER PANEL */}
                <div className={s.header__main_userpanel} onMouseEnter={userpanelDDfuncOpen} onMouseLeave={userpanelDDfuncClose}>
                    {userOrGuestSTATE && <>
                        <img src={userX_X} alt={userName} className={s.header__main_userpanel__image} style={{backgroundColor: userColor}} />
                        <p className={s.header__main_userpanel__status}> {userName} </p>
                        <b style={{
                            fontSize: "12px", marginLeft: "10px", fontWeight: "600", color: "var(--text-color)"
                        }}> Balance: $ <i style={{fontStyle: "normal", color: "var(--link-active-color)"}}>{userBudget}</i> USD </b>
                    </>}
                    {!userOrGuestSTATE && <>
                        <img src={userQuest} alt="user-profile" className={s.header__main_userpanel__image} style={{filter: "blur(0px) brightness(1.0)"}} />
                        <p className={s.header__main_userpanel__status}> {navItems[1]} </p>
                        
                    </>}
                    {/* dropdown menu for userpanel */}
                    <ul className={s.header__main_userpanel_dropdown} ref={userpanelDropDown}>
                        {userOrGuestSTATE && <>
                            <Link className={s.header__main_userpanel_dropdown__items} to="/my_favorites"> <i className='fa-solid fa-heart fa-1x' id={s.fa_symbols}></i> {userDropDown[2]} </Link>
                            <Link className={s.header__main_userpanel_dropdown__items} to="/my_cart"> <i className='fa-solid fa-shopping-cart fa-1x' id={s.fa_symbols}></i> {userDropDown[3]} </Link>
                            <Link className={s.header__main_userpanel_dropdown__items} to="/user_settings"> <i className='fa-solid fa-gear fa-1x' id={s.fa_symbols}></i> {userDropDown[4]} </Link>
                            <li onClick={handleLogout} className={s.header__main_userpanel_dropdown__items}> <i className='fa-solid fa-right-from-bracket fa-1x' id={s.fa_symbols}></i> {userDropDown[5]} </li>
                        </>}
                        {!userOrGuestSTATE && <>
                            <Link className={s.header__main_userpanel_dropdown__items} to="/authentication_shopnet" onClick={selectAuthIn}> <i className='fa-solid fa-arrow-right-to-bracket fa-1x' id={s.fa_symbols}></i> {userDropDown[0]} </Link>
                            <Link className={s.header__main_userpanel_dropdown__items} to="/authentication_shopnet" onClick={selectAuthUp}> <i className='fa-regular fa-id-card fa-1x' id={s.fa_symbols}></i> {userDropDown[1]} </Link>
                        </>}
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header