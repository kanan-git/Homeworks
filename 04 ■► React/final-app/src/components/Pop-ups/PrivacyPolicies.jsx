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
import { useSelector } from 'react-redux'
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR 02 //
function PrivacyPolicies() {
    // ...
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR 03 //
    // const [ppTitleSTATE, setPpTitleSTATE] = useState(dataSource.english.popup_privacypolicies.title)
    // const [ppHeadersSTATE, setPpHeadersSTATE] = useState(dataSource.english.popup_privacypolicies.headers)
    // const [ppContentsSTATE, setPpContentsSTATE] = useState(dataSource.english.popup_privacypolicies.contents)

    const languageData = useSelector((state) => state.language.currentLanguage.popup_privacypolicies)

    // useEffect(
    //     () => {
    //         return () => {
    //             var languageData = document.querySelector("#langAuth")
    //             languageData.addEventListener("change", () => {
    //                 if (languageData.value == "English") {
    //                     setPpTitleSTATE(dataSource.english.popup_privacypolicies.title)
    //                     setPpHeadersSTATE(dataSource.english.popup_privacypolicies.headers)
    //                     setPpContentsSTATE(dataSource.english.popup_privacypolicies.contents)
    //                 } else if (languageData.value == "Azərbaycan dili") {
    //                     setPpTitleSTATE(dataSource.english.popup_privacypolicies.title)
    //                     setPpHeadersSTATE(dataSource.english.popup_privacypolicies.headers)
    //                     setPpContentsSTATE(dataSource.english.popup_privacypolicies.contents)
    //                 } else if (languageData.value == "Türkçe") {
    //                     setPpTitleSTATE(dataSource.english.popup_privacypolicies.title)
    //                     setPpHeadersSTATE(dataSource.english.popup_privacypolicies.headers)
    //                     setPpContentsSTATE(dataSource.english.popup_privacypolicies.contents)
    //                 }
    //             })
    //         }
    //     }, []
    // )
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR 04 //
    return (
        <>
            <div className={s.privacypolicies__overlay}></div>
            <div className={s.privacypolicies}>
                <h1 className={s.privacypolicies__title}> {languageData.title} </h1>
                {languageData.contents[0]} <br />
                {languageData.contents[1]} <br />
                {languageData.contents[2]} <br />
                <h3 className={s.privacypolicies__headers}> {languageData.headers[0]} </h3>
                {languageData.contents[3]}
                <h3 className={s.privacypolicies__headers}> {languageData.headers[1]} </h3>
                {languageData.contents[4]} <br />
                {languageData.contents[5]} <br />
                {languageData.contents[6]} <br />
                {languageData.contents[7]} <br />
                {languageData.contents[8]} <br />
                {languageData.contents[9]} <br />
                {languageData.contents[10]} <br />
                {languageData.contents[11]} <br />
                {languageData.contents[12]} <br />
                {languageData.contents[13]} <br />
                {languageData.contents[14]} <br />
                {languageData.contents[15]} <br />
                {languageData.contents[16]} <br />
                {languageData.contents[17]} <br />
                {languageData.contents[18]} <br />
                {languageData.contents[19]} <br />
                {languageData.contents[20]} <br />
                <h3 className={s.privacypolicies__headers}> {languageData.headers[2]} </h3>
                {languageData.contents[21]} <br />
                {languageData.contents[22]} <br />
                {languageData.contents[23]} <br />
                {languageData.contents[24]} <br />
                {languageData.contents[25]} <br />
                {languageData.contents[26]} <br />
                {languageData.contents[27]} <br />
                {languageData.contents[28]} <br />
                <h3 className={s.privacypolicies__headers}> {languageData.headers[3]} </h3>
                {languageData.contents[29]} <br />
                {languageData.contents[30]} <br />
                {languageData.contents[31]} <br />
                {languageData.contents[32]} <br />
                <h3 className={s.privacypolicies__headers}> {languageData.headers[4]} </h3>
                {languageData.contents[33]} <br />
                {languageData.contents[34]} <br />
                {languageData.contents[35]}
            </div>
        </>
    )
}
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR 05 //
export default PrivacyPolicies
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ ENDING LINE //