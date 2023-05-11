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
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR 02 //
function SignInOrUp() {
    const root = document.documentElement;
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR 03 //
    // language
    // const [] = useState(dataSource.english.signinorup)
    useEffect(
        () => {
            var langDataAuth = document.querySelector("#language")
            langDataAuth.addEventListener("change", () => {
            console.log(langDataAuth.value)
            })
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR ?? //
            // light or dark mode (lord)
            return () => {
                var LorD = document.querySelector(`.${s.signinorup__topside_lord}`)
                var iconLorD = document.createElement("i")
                iconLorD.classList.add("fa-solid", "fa-sun", "fa-1x")
                LorD.appendChild(iconLorD)
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
    
                LorD.addEventListener("click", () => {
                    if (iconLorD.classList.contains("fa-sun")) {
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
                    } else if (iconLorD.classList.contains("fa-moon")) {
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
                    }
                    var spinningButton = LorD.animate(
                        [{transform: 'rotateY(0deg)', scale: 1.0}, {transform: 'rotateY(180deg)', scale: 1.5}, {transform: 'rotateY(360deg)', scale: 1.0}], 
                        {duration: 750, easing: 'ease-in-out', delay: 0, iterations: 1}
                    )
                })
            }
        }, []
    )

    useEffect(
        () => {
            var loginWindow = document.querySelector(`.${s.signinorup__login}`)
            var registerWindow = document.querySelector(`.${s.signinorup__register}`)
            var switchLogin = document.querySelector(`.${s.signinorup__topside_selection__login}`)
            var switchRegister = document.querySelector(`.${s.signinorup__topside_selection__register}`)
            var overlayLogin = document.querySelector(`.${s.signinorup__login_overlay}`)
            var overlayRegister = document.querySelector(`.${s.signinorup__register_overlay}`)

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
        }, []
    )
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR 04 //
    return (
        <main className={s.signinorup}>
            <div className={s.signinorup__topside}>
                <select name="language" id="language" className={s.signinorup__topside_language}>
                    <option value="English" className={s.signinorup__topside_language__options}> English </option>
                    <option value="Azərbaycan dili" className={s.signinorup__topside_language__options}> Azərbaycan dili </option>
                    <option value="Türkçe" className={s.signinorup__topside_language__options}> Türkçe </option>
                </select>
                <span className={s.signinorup__topside_selection}>
                    <h3 className={s.signinorup__topside_selection__login}> Login </h3>
                    <h3 className={s.signinorup__topside_selection__register}> Register</h3>
                </span>
                <button className={s.signinorup__topside_lord}>  </button> {/* sun / moon     <i className='fa-solid fa-sun fa-1x'></i> */}
            </div>

            {/* login (sign in) form window */}
            <form className={s.signinorup__login}>
                <label htmlFor=""></label>
                <input type="text" />
            </form>
            {/* register (sign up) form window */}
            <form className={s.signinorup__register}>
                <div className={s.signinorup__register_overlay}></div>
                123 Lorem ipsum dolor sit amet.
                <br />
                456 Lorem ipsum dolor sit amet.
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, autem.
            </form>

            <div className={s.signinorup__bottomside}>
                <button className={s.signinorup__bottomside_buttons}>
                    <i className='fa-solid fa-house-chimney fa-1x'></i>
                    <p> Go to Home </p>
                </button>
                <button className={s.signinorup__bottomside_buttons}>
                    <i className='fa-solid fa-info-circle fa-1x'></i>
                    <p> Go to About </p>
                </button>
                <button className={s.signinorup__bottomside_buttons}>
                    <i className='fa-solid fa-location-dot fa-1x'></i>
                    <p> Go to Contact </p>
                </button>
            </div>
        </main>
    )
}
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR 05 //
export default SignInOrUp
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ ENDING LINE //