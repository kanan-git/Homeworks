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
function TermsAndConditions() {
    // ...
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR 03 //
    const [tcTitleSTATE, setTcTitleSTATE] = useState(dataSource.english.popup_termsandconditions.title)
    const [tcHeadersSTATE, setTcHeadersSTATE] = useState(dataSource.english.popup_termsandconditions.headers)
    const [tcContentsSTATE, setTcContentsSTATE] = useState(dataSource.english.popup_termsandconditions.contents)
    // useEffect(
    //     () => {
    //         return () => {
    //             var languageData = document.querySelector("#langAuth")
    //             languageData.addEventListener("change", () => {
    //                 if (languageData.value == "English") {
    //                     setTcTitleSTATE(dataSource.english.popup_termsandconditions.title)
    //                     setTcHeadersSTATE(dataSource.english.popup_termsandconditions.headers)
    //                     setTcContentsSTATE(dataSource.english.popup_termsandconditions.contents)
    //                 } else if (languageData.value == "Azərbaycan dili") {
    //                     setTcTitleSTATE(dataSource.english.popup_termsandconditions.title)
    //                     setTcHeadersSTATE(dataSource.english.popup_termsandconditions.headers)
    //                     setTcContentsSTATE(dataSource.english.popup_termsandconditions.contents)
    //                 } else if (languageData.value == "Türkçe") {
    //                     setTcTitleSTATE(dataSource.english.popup_termsandconditions.title)
    //                     setTcHeadersSTATE(dataSource.english.popup_termsandconditions.headers)
    //                     setTcContentsSTATE(dataSource.english.popup_termsandconditions.contents)
    //                 }
    //             })
    //         }
    //     }, []
    // )
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR 04 //
    return (
        <>
            <div className={s.termsandconditions__overlay}></div>
            <div className={s.termsandconditions}>
                <h1 className={s.termsandconditions__title}> {tcTitleSTATE} </h1>
                {tcContentsSTATE[0]}
                <h3 className={s.termsandconditions__headers}> {tcHeadersSTATE[0]} </h3>
                {tcContentsSTATE[1]}
                <h3 className={s.termsandconditions__headers}> {tcHeadersSTATE[1]} </h3>
                {tcContentsSTATE[2]}
                <h3 className={s.termsandconditions__headers}> {tcHeadersSTATE[2]} </h3>
                {tcContentsSTATE[3]}
                <h3 className={s.termsandconditions__headers}> {tcHeadersSTATE[3]} </h3>
                {tcContentsSTATE[4]}
                <h3 className={s.termsandconditions__headers}> {tcHeadersSTATE[4]} </h3>
                {tcContentsSTATE[5]}
                <h3 className={s.termsandconditions__headers}> {tcHeadersSTATE[5]} </h3>
                {tcContentsSTATE[6]}
                <h3 className={s.termsandconditions__headers}> {tcHeadersSTATE[6]} </h3>
                {tcContentsSTATE[7]}
                <br />
                {tcContentsSTATE[8]}
            </div>
        </>
    )
}
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR 05 //
export default TermsAndConditions
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ ENDING LINE //