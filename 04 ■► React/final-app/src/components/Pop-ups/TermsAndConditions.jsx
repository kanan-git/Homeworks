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
function TermsAndConditions() {
    // ...
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR 03 //
    // const [tcTitleSTATE, setTcTitleSTATE] = useState(dataSource.english.popup_termsandconditions.title)
    // const [tcHeadersSTATE, setTcHeadersSTATE] = useState(dataSource.english.popup_termsandconditions.headers)
    // const [tcContentsSTATE, setTcContentsSTATE] = useState(dataSource.english.popup_termsandconditions.contents)

    const languageData = useSelector((state) => state.language.currentLanguage.popup_termsandconditions)

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
                <h1 className={s.termsandconditions__title}> {languageData.title} </h1>
                {languageData.contents[0]}
                <h3 className={s.termsandconditions__headers}> {languageData.headers[0]} </h3>
                {languageData.contents[1]}
                <h3 className={s.termsandconditions__headers}> {languageData.headers[1]} </h3>
                {languageData.contents[2]}
                <h3 className={s.termsandconditions__headers}> {languageData.headers[2]} </h3>
                {languageData.contents[3]}
                <h3 className={s.termsandconditions__headers}> {languageData.headers[3]} </h3>
                {languageData.contents[4]}
                <h3 className={s.termsandconditions__headers}> {languageData.headers[4]} </h3>
                {languageData.contents[5]}
                <h3 className={s.termsandconditions__headers}> {languageData.headers[5]} </h3>
                {languageData.contents[6]}
                <h3 className={s.termsandconditions__headers}> {languageData.headers[6]} </h3>
                {languageData.contents[7]}
                <br />
                {languageData.contents[8]}
            </div>
        </>
    )
}
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR 05 //
export default TermsAndConditions
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ ENDING LINE //