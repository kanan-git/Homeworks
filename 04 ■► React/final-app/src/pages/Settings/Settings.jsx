import React from 'react'
import s from './index.module.css'
import {dataSource} from '../../data/data-source'
import {useState, useEffect, useRef} from 'react'
import { useSelector } from 'react-redux'

function Settings() {
    useEffect(
        () => {
            return () => {
                var accountButton = document.querySelector("#menu-btn-account")
                var paymentButton = document.querySelector("#menu-btn-payment")
                var shippingButton = document.querySelector("#menu-btn-shipping")
                var orderButton = document.querySelector("#menu-btn-order")
                var notificationButton = document.querySelector("#menu-btn-notification")
                var securityButton = document.querySelector("#menu-btn-security")
                var settingsSections = Array.from(document.querySelectorAll(`.${s.settings__container_section}`))
                // console.log(accountButton, paymentButton, shippingButton, orderButton, notificationButton, securityButton)
                // console.log(settingsSections)
                accountButton.style.backgroundColor = `var(--buttons-active-color)`
                
                accountButton.addEventListener("click", () => {
                    // -------------------- selected buttons bg color
                    accountButton.style.backgroundColor = `var(--buttons-active-color)`
                    paymentButton.style.backgroundColor = `var(--buttons-color)`
                    shippingButton.style.backgroundColor = `var(--buttons-color)`
                    orderButton.style.backgroundColor = `var(--buttons-color)`
                    notificationButton.style.backgroundColor = `var(--buttons-color)`
                    securityButton.style.backgroundColor = `var(--buttons-color)`
                    // -------------------- sections visibilities
                    settingsSections[0].style.display = `flex`
                    settingsSections[1].style.display = `none`
                    settingsSections[2].style.display = `none`
                    settingsSections[3].style.display = `none`
                    settingsSections[4].style.display = `none`
                    settingsSections[5].style.display = `none`
                })
                paymentButton.addEventListener("click", () => {
                    // -------------------- selected buttons bg color
                    accountButton.style.backgroundColor = `var(--buttons-color)`
                    paymentButton.style.backgroundColor = `var(--buttons-active-color)`
                    shippingButton.style.backgroundColor = `var(--buttons-color)`
                    orderButton.style.backgroundColor = `var(--buttons-color)`
                    notificationButton.style.backgroundColor = `var(--buttons-color)`
                    securityButton.style.backgroundColor = `var(--buttons-color)`
                    // -------------------- sections visibilities
                    settingsSections[0].style.display = `none`
                    settingsSections[1].style.display = `flex`
                    settingsSections[2].style.display = `none`
                    settingsSections[3].style.display = `none`
                    settingsSections[4].style.display = `none`
                    settingsSections[5].style.display = `none`
                })
                shippingButton.addEventListener("click", () => {
                    // -------------------- selected buttons bg color
                    accountButton.style.backgroundColor = `var(--buttons-color)`
                    paymentButton.style.backgroundColor = `var(--buttons-color)`
                    shippingButton.style.backgroundColor = `var(--buttons-active-color)`
                    orderButton.style.backgroundColor = `var(--buttons-color)`
                    notificationButton.style.backgroundColor = `var(--buttons-color)`
                    securityButton.style.backgroundColor = `var(--buttons-color)`
                    // -------------------- sections visibilities
                    settingsSections[0].style.display = `none`
                    settingsSections[1].style.display = `none`
                    settingsSections[2].style.display = `flex`
                    settingsSections[3].style.display = `none`
                    settingsSections[4].style.display = `none`
                    settingsSections[5].style.display = `none`
                })
                orderButton.addEventListener("click", () => {
                    // -------------------- selected buttons bg color
                    accountButton.style.backgroundColor = `var(--buttons-color)`
                    paymentButton.style.backgroundColor = `var(--buttons-color)`
                    shippingButton.style.backgroundColor = `var(--buttons-color)`
                    orderButton.style.backgroundColor = `var(--buttons-active-color)`
                    notificationButton.style.backgroundColor = `var(--buttons-color)`
                    securityButton.style.backgroundColor = `var(--buttons-color)`
                    // -------------------- sections visibilities
                    settingsSections[0].style.display = `none`
                    settingsSections[1].style.display = `none`
                    settingsSections[2].style.display = `none`
                    settingsSections[3].style.display = `flex`
                    settingsSections[4].style.display = `none`
                    settingsSections[5].style.display = `none`
                })
                notificationButton.addEventListener("click", () => {
                    // -------------------- selected buttons bg color
                    accountButton.style.backgroundColor = `var(--buttons-color)`
                    paymentButton.style.backgroundColor = `var(--buttons-color)`
                    shippingButton.style.backgroundColor = `var(--buttons-color)`
                    orderButton.style.backgroundColor = `var(--buttons-color)`
                    notificationButton.style.backgroundColor = `var(--buttons-active-color)`
                    securityButton.style.backgroundColor = `var(--buttons-color)`
                    // -------------------- sections visibilities
                    settingsSections[0].style.display = `none`
                    settingsSections[1].style.display = `none`
                    settingsSections[2].style.display = `none`
                    settingsSections[3].style.display = `none`
                    settingsSections[4].style.display = `flex`
                    settingsSections[5].style.display = `none`
                })
                securityButton.addEventListener("click", () => {
                    // -------------------- selected buttons bg color
                    accountButton.style.backgroundColor = `var(--buttons-color)`
                    paymentButton.style.backgroundColor = `var(--buttons-color)`
                    shippingButton.style.backgroundColor = `var(--buttons-color)`
                    orderButton.style.backgroundColor = `var(--buttons-color)`
                    notificationButton.style.backgroundColor = `var(--buttons-color)`
                    securityButton.style.backgroundColor = `var(--buttons-active-color)`
                    // -------------------- sections visibilities
                    settingsSections[0].style.display = `none`
                    settingsSections[1].style.display = `none`
                    settingsSections[2].style.display = `none`
                    settingsSections[3].style.display = `none`
                    settingsSections[4].style.display = `none`
                    settingsSections[5].style.display = `flex`
                })
            }
        }, []
    )

    const languageData = useSelector((state) => state.language.currentLanguage.settings)

    return (
        <main className={s.settings}>
            <ul className={s.settings__menu}>
                <li className={s.settings__menu_buttons} id="menu-btn-account"> {languageData.buttons[0]} </li>
                <li className={s.settings__menu_buttons} id="menu-btn-payment"> {languageData.buttons[1]} </li>
                <li className={s.settings__menu_buttons} id="menu-btn-shipping"> {languageData.buttons[2]} </li>
                <li className={s.settings__menu_buttons} id="menu-btn-order"> {languageData.buttons[3]} </li>
                <li className={s.settings__menu_buttons} id="menu-btn-notification"> {languageData.buttons[4]} </li>
                <li className={s.settings__menu_buttons} id="menu-btn-security"> {languageData.buttons[5]} </li>
            </ul>
            <div className={s.settings__container}>
                <div className={s.settings__container_section} id={s.setting_section_1}>
                    <h1 className={s.settings__container_section__title}> {languageData.titles[0]} </h1>
                    <h3 className={s.settings__container_section__headers}> {languageData.headers[0]} </h3>
                    {languageData.text_contents[0]}
                    <h3 className={s.settings__container_section__headers}> {languageData.headers[1]} </h3>
                    {languageData.text_contents[1]}
                    <h3 className={s.settings__container_section__headers}> {languageData.headers[2]} </h3>
                    {languageData.text_contents[2]}
                    <h3 className={s.settings__container_section__headers}> {languageData.headers[3]} </h3>
                    {languageData.text_contents[3]}
                </div>

                <div className={s.settings__container_section} id={s.setting_section_2}>
                    <h1 className={s.settings__container_section__title}> {languageData.titles[1]} </h1>
                    <h3 className={s.settings__container_section__headers}> {languageData.headers[4]} </h3>
                    {languageData.text_contents[4]}
                    <h3 className={s.settings__container_section__headers}> {languageData.headers[5]} </h3>
                    {languageData.text_contents[5]}
                    <h3 className={s.settings__container_section__headers}> {languageData.headers[6]} </h3>
                    {languageData.text_contents[6]}
                </div>

                <div className={s.settings__container_section} id={s.setting_section_3}>
                    <h1 className={s.settings__container_section__title}> {languageData.titles[2]} </h1>
                    <h3 className={s.settings__container_section__headers}> {languageData.headers[7]} </h3>
                    {languageData.text_contents[7]}
                    <h3 className={s.settings__container_section__headers}> {languageData.headers[8]} </h3>
                    {languageData.text_contents[8]}
                    <h3 className={s.settings__container_section__headers}> {languageData.headers[9]} </h3>
                    {languageData.text_contents[9]}
                </div>

                <div className={s.settings__container_section} id={s.setting_section_4}>
                    <h1 className={s.settings__container_section__title}> {languageData.titles[3]} </h1>
                    <h3 className={s.settings__container_section__headers}> {languageData.headers[10]} </h3>
                    {languageData.text_contents[10]}
                    <h3 className={s.settings__container_section__headers}> {languageData.headers[11]} </h3>
                    {languageData.text_contents[11]}
                    <h3 className={s.settings__container_section__headers}> {languageData.headers[12]} </h3>
                    {languageData.text_contents[12]}
                </div>

                <div className={s.settings__container_section} id={s.setting_section_5}>
                    <h1 className={s.settings__container_section__title}> {languageData.titles[4]} </h1>
                    <h3 className={s.settings__container_section__headers}> {languageData.headers[13]} </h3>
                    {languageData.text_contents[13]}
                    <h3 className={s.settings__container_section__headers}> {languageData.headers[14]} </h3>
                    {languageData.text_contents[14]}
                    <h3 className={s.settings__container_section__headers}> {languageData.headers[15]} </h3>
                    {languageData.text_contents[15]}
                </div>

                <div className={s.settings__container_section} id={s.setting_section_6}>
                    <h1 className={s.settings__container_section__title}> {languageData.titles[5]} </h1>
                    <h3 className={s.settings__container_section__headers}> {languageData.headers[16]} </h3>
                    {languageData.text_contents[16]}
                    <h3 className={s.settings__container_section__headers}> {languageData.headers[17]} </h3>
                    {languageData.text_contents[17]}
                    <h3 className={s.settings__container_section__headers}> {languageData.headers[18]} </h3>
                    {languageData.text_contents[18]}
                </div>
            </div>
        </main>
    )
}

export default Settings