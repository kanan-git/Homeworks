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
function PrivacyPolicies() {
    // ...
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR 03 //
    const [ppTitleSTATE, setPpTitleSTATE] = useState(dataSource.english.popup_privacypolicies.title)
    const [ppHeadersSTATE, setPpHeadersSTATE] = useState(dataSource.english.popup_privacypolicies.headers)
    const [ppContentsSTATE, setPpContentsSTATE] = useState(dataSource.english.popup_privacypolicies.contents)
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
                <h1 className={s.privacypolicies__title}> {ppTitleSTATE} </h1>
                {ppContentsSTATE[0]} <br />
                {ppContentsSTATE[1]} <br />
                {ppContentsSTATE[2]} <br />
                <h3 className={s.privacypolicies__headers}> {ppHeadersSTATE[0]} </h3>
                {ppContentsSTATE[3]}
                <h3 className={s.privacypolicies__headers}> {ppHeadersSTATE[1]} </h3>
                {ppContentsSTATE[4]} <br />
                {ppContentsSTATE[5]} <br />
                {ppContentsSTATE[6]} <br />
                {ppContentsSTATE[7]} <br />
                {ppContentsSTATE[8]} <br />
                {ppContentsSTATE[9]} <br />
                {ppContentsSTATE[10]} <br />
                {ppContentsSTATE[11]} <br />
                {ppContentsSTATE[12]} <br />
                {ppContentsSTATE[13]} <br />
                {ppContentsSTATE[14]} <br />
                {ppContentsSTATE[15]} <br />
                {ppContentsSTATE[16]} <br />
                {ppContentsSTATE[17]} <br />
                {ppContentsSTATE[18]} <br />
                {ppContentsSTATE[19]} <br />
                {ppContentsSTATE[20]} <br />
                <h3 className={s.privacypolicies__headers}> {ppHeadersSTATE[2]} </h3>
                {ppContentsSTATE[21]} <br />
                {ppContentsSTATE[22]} <br />
                {ppContentsSTATE[23]} <br />
                {ppContentsSTATE[24]} <br />
                {ppContentsSTATE[25]} <br />
                {ppContentsSTATE[26]} <br />
                {ppContentsSTATE[27]} <br />
                {ppContentsSTATE[28]} <br />
                <h3 className={s.privacypolicies__headers}> {ppHeadersSTATE[3]} </h3>
                {ppContentsSTATE[29]} <br />
                {ppContentsSTATE[30]} <br />
                {ppContentsSTATE[31]} <br />
                {ppContentsSTATE[32]} <br />
                <h3 className={s.privacypolicies__headers}> {ppHeadersSTATE[4]} </h3>
                {ppContentsSTATE[33]} <br />
                {ppContentsSTATE[34]} <br />
                {ppContentsSTATE[35]}
            </div>
        </>
    )
}
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR 05 //
export default PrivacyPolicies
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ ENDING LINE //