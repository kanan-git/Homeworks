// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ STARTING LINE //
// SECTOR 01:  importing elements
// SECTOR 02:  variables, props and states
// SECTOR 03:  ...
// SECTOR 04:  ...
// SECTOR 05:  ...
// SECTOR 06:  return XML side
// SECTOR 07:  export default function
// ????????????????????        EDIT !!!!!!!!!!!!!!!!!!!!!!!!!
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR 01 //
// imported elements
import React from 'react'
import s from './index.module.css'
import {dataSource} from '../../data/data-source'
import {useState, useEffect, useRef} from 'react'
import { BrowserRouter as Router, Switch, Route, Routes, Link } from 'react-router-dom';

import Loading from '../../components/Pop-ups/Loading'
import SuccessfullySigned from '../../components/Pop-ups/SuccessfullySigned'
import FailedMessage from '../../components/Pop-ups/FailedMessage'
import PrivacyPolicies from '../../components/Pop-ups/PrivacyPolicies'
import TermsAndConditions from '../../components/Pop-ups/TermsAndConditions'
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR 02 //
function SignInOrUp() {
    const root = document.documentElement;
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR 03 //
    const [selectionsSTATE, setSelectionsSTATE] = useState(dataSource.english.signinorup.selections)
    const [loginformSTATE, setLoginformSTATE] = useState(dataSource.english.signinorup.loginform)
    const [registerformSTATE, setRegisterformSTATE] = useState(dataSource.english.signinorup.registerform)
    const [buttonsSTATE, setButtonsSTATE] = useState(dataSource.english.signinorup.buttons)
    const [monthallSTATE, setMonthallSTATE] = useState(dataSource.english.signinorup.month)
    const [pholderSTATE, setPholderSTATE] = useState(dataSource.english.signinorup.placeholders)
    
    function handleLanguage() {
        // language
        var langDataAuth = document.querySelector("#langAuth")
        if (langDataAuth.value == "English") {
            setSelectionsSTATE(dataSource.english.signinorup.selections)
            setLoginformSTATE(dataSource.english.signinorup.loginform)
            setRegisterformSTATE(dataSource.english.signinorup.registerform)
            setButtonsSTATE(dataSource.english.signinorup.buttons)
            setMonthallSTATE(dataSource.english.signinorup.month)
            setPholderSTATE(dataSource.english.signinorup.placeholders)
            console.log(langDataAuth.value)
        } else if (langDataAuth.value == "Azərbaycan dili") {
            setSelectionsSTATE(dataSource.azerbaijani.signinorup.selections)
            setLoginformSTATE(dataSource.azerbaijani.signinorup.loginform)
            setRegisterformSTATE(dataSource.azerbaijani.signinorup.registerform)
            setButtonsSTATE(dataSource.azerbaijani.signinorup.buttons)
            setMonthallSTATE(dataSource.azerbaijani.signinorup.month)
            setPholderSTATE(dataSource.azerbaijani.signinorup.placeholders)
            console.log(langDataAuth.value)
        } else if (langDataAuth.value == "Türkçe") {
            setSelectionsSTATE(dataSource.turkish.signinorup.selections)
            setLoginformSTATE(dataSource.turkish.signinorup.loginform)
            setRegisterformSTATE(dataSource.turkish.signinorup.registerform)
            setButtonsSTATE(dataSource.turkish.signinorup.buttons)
            setMonthallSTATE(dataSource.turkish.signinorup.month)
            setPholderSTATE(dataSource.turkish.signinorup.placeholders)
            console.log(langDataAuth.value)
        }
    }
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR ?? //
    useEffect(
        () => {
            // login or register form windows switching
            var loginWindow = document.querySelector(`.${s.signinorup__login}`)
            var registerWindow = document.querySelector(`.${s.signinorup__register}`)
            var switchLogin = document.querySelector(`.${s.signinorup__topside_selection__login}`)
            var switchRegister = document.querySelector(`.${s.signinorup__topside_selection__register}`)
            var overlayLogin = document.querySelector(`.${s.signinorup__login_overlay}`)
            var overlayRegister = document.querySelector(`.${s.signinorup__register_overlay}`)

            // console.log(
            //     loginWindow.innerHTML, 
            //     registerWindow.innerHTML, 
            //     switchLogin.innerHTML, 
            //     switchRegister.innerHTML, 
            //     overlayLogin.innerHTML, 
            //     overlayRegister.innerHTML
            // )

            switchLogin.addEventListener("click", () => {
                loginWindow.style.top = `53%`
                loginWindow.style.left = `50%`
                loginWindow.style.scale = `1.0`
                loginWindow.style.opacity = `1.0`
                registerWindow.style.top = `40%`
                registerWindow.style.left = `80%`
                registerWindow.style.scale = `0.6`
                registerWindow.style.opacity = `0.5`
                switchLogin.style.color = `rgb(0,128,255)`
                switchLogin.style.scale = `1.2`
                switchLogin.style.opacity = `1.0`
                switchRegister.style.color = `rgb(64,64,64)`
                switchRegister.style.scale = `0.8`
                switchRegister.style.opacity = `0.75`
                overlayLogin.style.zIndex = `-1`
                overlayRegister.style.zIndex = `1`
            })
            switchRegister.addEventListener("click", () => {
                loginWindow.style.top = `40%`
                loginWindow.style.left = `-4%`
                loginWindow.style.scale = `0.6`
                loginWindow.style.opacity = `0.5`
                registerWindow.style.top = `53%`
                registerWindow.style.left = `50%`
                registerWindow.style.scale = `1.0`
                registerWindow.style.opacity = `1.0`
                switchLogin.style.color = `rgb(64,64,64)`
                switchLogin.style.scale = `0.8`
                switchLogin.style.opacity = `0.75`
                switchRegister.style.color = `rgb(0,128,255)`
                switchRegister.style.scale = `1.2`
                switchRegister.style.opacity = `1.0`
                overlayLogin.style.zIndex = `1`
                overlayRegister.style.zIndex = `-1`
            })
            // return () => {}
        }, []
    )        
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR ?? //
    const [ldAuthSTATE, setLdAuthSTATE] = useState("light")    
    useEffect(
        () => {
            // light or dark mode (lord)
            // var LorD = document.querySelector(`.${s.signinorup__topside_lord}`)
            // var iconLorD = document.createElement("i")
            // iconLorD.classList.add("fa-solid", "fa-sun", "fa-1x")
            // LorD.appendChild(iconLorD)
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
        }, []
    )

    function handleLorD() {
        // light or dark mode (lord)
        var LorD = document.querySelector(`.${s.signinorup__topside_lord}`)
        var iconLorD = document.querySelector(".fa-solid")
        if (ldAuthSTATE == "light") {
            iconLorD.classList.remove("fa-solid", "fa-sun", "fa-1x")
            iconLorD.classList.add("fa-solid", "fa-moon", "fa-1x")
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
            setLdAuthSTATE("dark")
        } else if (ldAuthSTATE == "dark") {
            iconLorD.classList.remove("fa-solid", "fa-moon", "fa-1x")
            iconLorD.classList.add("fa-solid", "fa-sun", "fa-1x")
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
            setLdAuthSTATE("light")
        }
        var spinningButton = LorD.animate(
            [{transform: 'rotateY(0deg)', scale: 1.0}, {transform: 'rotateY(180deg)', scale: 1.5}, {transform: 'rotateY(360deg)', scale: 1.0}], 
            {duration: 750, easing: 'ease-in-out', delay: 0, iterations: 1}
        )
    }

    // useEffect(
    //     () => {
    //         return () => {
    //             // light or dark mode (lord)
    //             var LorD = document.querySelector(`.${s.signinorup__topside_lord}`)
    //             var iconLorD = document.createElement("i")
    //             iconLorD.classList.add("fa-solid", "fa-sun", "fa-1x")
    //             LorD.appendChild(iconLorD)
    //             root.style.setProperty('--default-color', 'rgb(155,155,155)'); // LIGHT mode default color
    //             root.style.setProperty('--text-color', 'rgb(5,5,5)'); // LIGHT mode default color
    //             root.style.setProperty('--text-negative-color', 'rgb(205,205,205)'); // LIGHT mode default color
    //             root.style.setProperty('--link-color', 'rgb(25,25,25)'); // LIGHT mode default color
    //             root.style.setProperty('--link-hover-color', 'rgb(250,150,50)'); // LIGHT mode default color
    //             root.style.setProperty('--link-active-color', 'rgb(255,75,0)'); // LIGHT mode default color
    //             root.style.setProperty('--default-bg-color', 'rgb(215,215,215)'); // LIGHT mode default color
    //             root.style.setProperty('--footer-bg-color', 'rgb(12,24,48)'); // LIGHT mode default color
    //             root.style.setProperty('--footer-bottom-color', 'rgb(35,35,35)'); // LIGHT mode default color
    //             root.style.setProperty('--header-bg-color', 'rgba(185,185,185,0.7)'); // LIGHT mode default color
    //             root.style.setProperty('--header-top-color', 'rgb(45,45,45)'); // LIGHT mode default color
    //             root.style.setProperty('--buttons-color', 'rgb(200,200,200)'); // LIGHT mode default color
    //             root.style.setProperty('--buttons-hover-color', 'rgb(255,255,100)'); // LIGHT mode default color
    //             root.style.setProperty('--buttons-active-color', 'rgb(125,255,5)'); // LIGHT mode default color
    //             root.style.setProperty('--filter-shadow-color', 'rgb(10,10,10)'); // LIGHT mode default color
    //             root.style.setProperty('--borders-color', 'rgb(45,45,45)'); // LIGHT mode default color
    //             root.style.setProperty('--body-bg', 'linear-gradient(to right, rgb(250,150,10), rgb(10,250,150))'); // LIGHT mode default color
    //             root.style.setProperty('--searchbar-bg', 'rgb(250,250,250)'); // LIGHT mode default color
    //             root.style.setProperty('--searchbar-color', 'rgb(50,50,50)'); // LIGHT mode default color

    //             LorD.addEventListener("click", () => {
    //                 if (iconLorD.classList.contains("fa-sun")) {
    //                     iconLorD.classList.remove("fa-solid", "fa-sun", "fa-1x")
    //                     iconLorD.classList.add("fa-solid", "fa-moon", "fa-1x")
    //                     root.style.setProperty('--default-color', 'rgb(155,155,155)'); // DARK mode default color
    //                     root.style.setProperty('--text-color', 'rgb(205,205,205)'); // DARK mode default color
    //                     root.style.setProperty('--text-negative-color', 'rgb(205,205,205)'); // LIGHT mode default color
    //                     root.style.setProperty('--link-color', 'rgb(255,255,255)'); // DARK mode default color
    //                     root.style.setProperty('--link-hover-color', 'rgb(5,145,255)'); // DARK mode default color
    //                     root.style.setProperty('--link-active-color', 'rgb(5,205,255)'); // DARK mode default color
    //                     root.style.setProperty('--default-bg-color', 'rgb(30,30,30)'); // DARK mode default color
    //                     root.style.setProperty('--footer-bg-color', 'rgb(15,15,15)'); // DARK mode default color
    //                     root.style.setProperty('--footer-bottom-color', 'rgb(10,10,10)'); // DARK mode default color
    //                     root.style.setProperty('--header-bg-color', 'rgba(5,5,5,0.5)'); // DARK mode default color
    //                     root.style.setProperty('--header-top-color', 'rgb(20,20,20)'); // DARK mode default color
    //                     root.style.setProperty('--buttons-color', 'rgb(55,55,55)'); // DARK mode default color
    //                     root.style.setProperty('--buttons-hover-color', 'rgb(45,5,245)'); // DARK mode default color
    //                     root.style.setProperty('--buttons-active-color', 'rgb(115,15,255)'); // DARK mode default color
    //                     root.style.setProperty('--filter-shadow-color', 'rgb(255,255,255)'); // DARK mode default color
    //                     root.style.setProperty('--borders-color', 'rgb(200,200,200)'); // DARK mode default color
    //                     root.style.setProperty('--body-bg', 'linear-gradient(to right, rgb(70,10,250), rgb(200,10,10))'); // DARK mode default color
    //                     root.style.setProperty('--searchbar-bg', 'rgb(50,50,50)'); // DARK mode default color
    //                     root.style.setProperty('--searchbar-color', 'rgb(250,250,250)'); // DARK mode default color
    //                 } else if (iconLorD.classList.contains("fa-moon")) {
    //                     iconLorD.classList.remove("fa-solid", "fa-moon", "fa-1x")
    //                     iconLorD.classList.add("fa-solid", "fa-sun", "fa-1x")
    //                     root.style.setProperty('--default-color', 'rgb(155,155,155)'); // LIGHT mode default color
    //                     root.style.setProperty('--text-color', 'rgb(5,5,5)'); // LIGHT mode default color
    //                     root.style.setProperty('--text-negative-color', 'rgb(205,205,205)'); // LIGHT mode default color
    //                     root.style.setProperty('--link-color', 'rgb(25,25,25)'); // LIGHT mode default color
    //                     root.style.setProperty('--link-hover-color', 'rgb(250,150,50)'); // LIGHT mode default color
    //                     root.style.setProperty('--link-active-color', 'rgb(255,75,0)'); // LIGHT mode default color
    //                     root.style.setProperty('--default-bg-color', 'rgb(215,215,215)'); // LIGHT mode default color
    //                     root.style.setProperty('--footer-bg-color', 'rgb(12,24,48)'); // LIGHT mode default color
    //                     root.style.setProperty('--footer-bottom-color', 'rgb(35,35,35)'); // LIGHT mode default color
    //                     root.style.setProperty('--header-bg-color', 'rgba(185,185,185,0.7)'); // LIGHT mode default color
    //                     root.style.setProperty('--header-top-color', 'rgb(45,45,45)'); // LIGHT mode default color
    //                     root.style.setProperty('--buttons-color', 'rgb(200,200,200)'); // LIGHT mode default color
    //                     root.style.setProperty('--buttons-hover-color', 'rgb(255,255,100)'); // LIGHT mode default color
    //                     root.style.setProperty('--buttons-active-color', 'rgb(125,255,5)'); // LIGHT mode default color
    //                     root.style.setProperty('--filter-shadow-color', 'rgb(10,10,10)'); // LIGHT mode default color
    //                     root.style.setProperty('--borders-color', 'rgb(45,45,45)'); // LIGHT mode default color
    //                     root.style.setProperty('--body-bg', 'linear-gradient(to right, rgb(250,150,10), rgb(10,250,150))'); // LIGHT mode default color
    //                     root.style.setProperty('--searchbar-bg', 'rgb(250,250,250)'); // LIGHT mode default color
    //                     root.style.setProperty('--searchbar-color', 'rgb(50,50,50)'); // LIGHT mode default color
    //                 }
    //                 var spinningButton = LorD.animate(
    //                     [{transform: 'rotateY(0deg)', scale: 1.0}, {transform: 'rotateY(180deg)', scale: 1.5}, {transform: 'rotateY(360deg)', scale: 1.0}], 
    //                     {duration: 750, easing: 'ease-in-out', delay: 0, iterations: 1}
    //                 )
    //             })
    //         }
    //     }, []
    // )
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR 04 //
    // const [monthSTATE, setMonthSTATE] = useState([])
    const [daySTATE, setDaySTATE] = useState([])
    const [yearSTATE, setYearSTATE] = useState([])
    useEffect(
        () => {
            // month data will came from dataSource
            // var monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
            // setMonthSTATE(monthArray)
            // array for days
            var daysArray = []
            for(var i=1; i<=31; i++) {
                daysArray.push(i)
            }
            setDaySTATE(daysArray)
            // array for years
            var yearsArray = []
            for(var i=2023; i>1900; i--) {
                yearsArray.push(i)
            }
            setYearSTATE(yearsArray)
        }, []
    )
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR 04 //
    return (
        <main className={s.signinorup}>
            <div className={s.signinorup__topside}>
                <select name="langAuth" id="langAuth" className={s.signinorup__topside_language} onChange={handleLanguage}>
                    <option value="English" className={s.signinorup__topside_language__options}> English </option>
                    <option value="Azərbaycan dili" className={s.signinorup__topside_language__options}> Azərbaycan dili </option>
                    <option value="Türkçe" className={s.signinorup__topside_language__options}> Türkçe </option>
                </select>
                <span className={s.signinorup__topside_selection}>
                    <h3 className={s.signinorup__topside_selection__login}> {selectionsSTATE[0]} </h3>
                    <h3 className={s.signinorup__topside_selection__register}> {selectionsSTATE[1]} </h3>
                </span>
                <button className={s.signinorup__topside_lord} onClick={handleLorD}>
                    <i className='fa-solid fa-sun fa-1x'></i>
                </button> {/* sun / moon     <i className='fa-solid fa-sun fa-1x'></i> */}
            </div>

            

            {/* login (sign in) form window */}
            <form className={s.signinorup__login}>
                <div className={s.signinorup__login_overlay}></div>
                <h3 className={s.signinorup__login_header}> {loginformSTATE[0]} </h3>
                <span className={s.signinorup__login_contents}>
                    <label htmlFor="email-login" className={s.signinorup__login_contents__label}> {loginformSTATE[1]} </label> <br />
                    <input type="email" id="email-login" name="email-login" className={s.signinorup__login_contents__input} required placeholder={pholderSTATE[0]} />
                    <br />
                    <label htmlFor="password-login" className={s.signinorup__login_contents__label}> {loginformSTATE[2]} </label> <br />
                    <input type="password" id="password-login" name="password-login" className={s.signinorup__login_contents__input} required placeholder={pholderSTATE[1]} /> {/* type="text/password" */}
                    <button className={s.signinorup__login_contents__eyebutton}> <i className='fa-regular fa-eye fa-1x'></i> </button>
                </span>
                <input type="submit" className={s.signinorup__login_submit} value={loginformSTATE[3]} />
            </form>

            {/* register (sign up) form window */}
            <form className={s.signinorup__register}>
                <div className={s.signinorup__register_overlay}></div>
                <h3 className={s.signinorup__register_header}> {registerformSTATE[0]} </h3>
                <span className={s.signinorup__register_contents}>
                    <label htmlFor="name" className={s.signinorup__register_contents__label}> {registerformSTATE[1]} </label> <br />
                    <input type="text" id="name" name="name" className={s.signinorup__register_contents__input} required placeholder={pholderSTATE[0]} />
                    <br />
                    <label htmlFor="lastname" className={s.signinorup__register_contents__label}> {registerformSTATE[2]} </label> <br />
                    <input type="text" id="lastname" name="lastname" className={s.signinorup__register_contents__input} required placeholder={pholderSTATE[1]} />
                    <br />
                    <label htmlFor="email-registry" className={s.signinorup__register_contents__label}> {registerformSTATE[3]} </label> <br />
                    <input type="email" id="email-registry" name="email-registry" className={s.signinorup__register_contents__input} required placeholder={pholderSTATE[2]} />
                    <br />
                    <label htmlFor="radios" className={s.signinorup__register_contents__label}>
                        {registerformSTATE[4]}
                        <br />
                        <input type="radio" id="male" name="genders" className={s.genders_radio} value="male" defaultChecked />
                        <label htmlFor="male" className={s.genders_label}> {registerformSTATE[11]} </label>
                        <input type="radio" id="female" name="genders" className={s.genders_radio} value="female" />
                        <label htmlFor="female" className={s.genders_label}> {registerformSTATE[12]} </label>
                    </label>
                    <br />
                    <label htmlFor="month" className={s.dateofbirth__label}> {registerformSTATE[5]} </label>
                    <select name="month" id="month" className={s.dateofbirth__input}>
                        <option defaultValue={false} style={{display: "none"}} className={s.dateofbirth__input_options}> - [ {registerformSTATE[13]} ] - </option>
                        {
                            monthallSTATE.map(
                                (month, index) => <option value={month} className={s.dateofbirth__input_options} key={index}> {month} </option>
                            )
                        }
                    </select>
                    <label htmlFor="day" className={s.dateofbirth__label}> {registerformSTATE[6]} </label>
                    <select name="day" id="day" className={s.dateofbirth__input}>
                        {
                            daySTATE.map(
                                (day, index) => <option value={day} className={s.dateofbirth__input_options} key={index}> {day} </option>
                            )
                        }
                        <option defaultValue={false} style={{display: "none"}} className={s.dateofbirth__input_options}> - [ {registerformSTATE[13]} ] - </option>
                    </select>
                    <label htmlFor="year" className={s.dateofbirth__label}> {registerformSTATE[7]} </label>
                    <select name="year" id="year" className={s.dateofbirth__input}>
                        {
                            yearSTATE.map(
                                (year, index) => <option value={year} className={s.dateofbirth__input_options} key={index}> {year} </option>
                            )
                        }
                        <option defaultValue={false} style={{display: "none"}} className={s.dateofbirth__input_options}> - [ {registerformSTATE[13]} ] - </option>
                    </select>
                    <br />
                    <label htmlFor="password-registry" className={s.signinorup__register_contents__label}> {loginformSTATE[2]} </label> <br />
                    <input type="password" id="password-registry" name="password-registry" className={s.signinorup__register_contents__input} required placeholder={pholderSTATE[3]} /> {/* type="text/password" */}
                    <button className={s.signinorup__register_contents__eyebutton}> <i className='fa-regular fa-eye fa-1x'></i> </button>
                    <br />
                </span>
                <label htmlFor="accept" className={s.signinorup__register_accept}>
                    <input type="checkbox" id="accept" name="accept" required className={s.signinorup__register_accept__checkbox} />
                    {registerformSTATE[8]} <i> {registerformSTATE[9]} </i>
                </label>
                <input type="submit" className={s.signinorup__register_submit} value={registerformSTATE[10]} />
            </form>



            <div className={s.signinorup__bottomside}>
                {/* <button className={s.signinorup__bottomside_buttons}>
                    <i className='fa-solid fa-house-chimney fa-1x'></i>
                    <p> {buttonsSTATE[0]} </p>
                </button> */}

                <Link className={s.signinorup__bottomside_buttons} to="/">
                    <i className='fa-solid fa-house-chimney fa-1x'></i>
                    <p> {buttonsSTATE[0]} </p>
                </Link>
                <Link className={s.signinorup__bottomside_buttons} to="/about">
                    <i className='fa-solid fa-info-circle fa-1x'></i>
                    <p> {buttonsSTATE[1]} </p>
                </Link>
                <Link className={s.signinorup__bottomside_buttons} to="/contact">
                    <i className='fa-solid fa-location-dot fa-1x'></i>
                    <p> {buttonsSTATE[2]} </p>
                </Link>
                
                {/* <Router>
                    <Link to="/">Homepage</Link>
                </Router> */}

            </div>

            {/* <Loading /> */}
            {/* <SuccessfullySigned /> */}
            {/* <FailedMessage /> */}
            {/* <PrivacyPolicies /> */}
            {/* <TermsAndConditions /> */}
        </main>
    )
}
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR 05 //
export default SignInOrUp
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ ENDING LINE //