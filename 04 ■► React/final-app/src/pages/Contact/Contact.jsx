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
function Contact() {
    // ...
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR 03 //
    // const [textSTATE, setTextSTATE] = useState(dataSource.english.contact.text)
    // const [headerSTATE, setHeaderSTATE] = useState(dataSource.english.contact.headers)
    
    const languageData = useSelector(
        (state) => state.language.currentLanguage.contact
    )

    // useEffect(
    //     () => {
    //         var languageData = document.querySelector("#language")
    //         languageData.addEventListener("change", () => {
    //             if(languageData.value == "English") {
    //                 setTextSTATE(dataSource.english.contact.text)
    //                 setHeaderSTATE(dataSource.english.contact.headers)
    //             } else if(languageData.value == "Azərbaycan dili") {
    //                 setTextSTATE(dataSource.azerbaijani.contact.text)
    //                 setHeaderSTATE(dataSource.azerbaijani.contact.headers)
    //             } else if(languageData.value == "Türkçe") {
    //                 setTextSTATE(dataSource.turkish.contact.text)
    //                 setHeaderSTATE(dataSource.turkish.contact.headers)
    //             }
    //         })
    //     }, []
    // )

    const temporaryMapWindow = useRef()
    
    function tempFunction() {
        var temAnimation = temporaryMapWindow.current.animate(
            [
                {backgroundColor: "rgb(255,0,0)", filter: "drop-shadow(0 0 40px rgb(255,0,0))"},
                {backgroundColor: "rgb(255,128,0)", filter: "drop-shadow(0 0 40px rgb(255,128,0))"},
                {backgroundColor: "rgb(255,255,0)", filter: "drop-shadow(0 0 40px rgb(255,255,0))"},
                {backgroundColor: "rgb(0,255,0)", filter: "drop-shadow(0 0 40px rgb(0,255,0))"},
                {backgroundColor: "rgb(0,128,255)", filter: "drop-shadow(0 0 40px rgb(0,128,255))"},
                {backgroundColor: "rgb(0,0,255)", filter: "drop-shadow(0 0 40px rgb(0,0,255))"},
                {backgroundColor: "rgb(128,0,255)", filter: "drop-shadow(0 0 40px rgb(128,0,255))"},
                {backgroundColor: "rgb(255,0,0)", filter: "drop-shadow(0 0 40px rgb(255,0,0))"}
            ], {duration: 1000, easing: 'ease-in-out', delay: 0, iterations: Infinity}
        )
    }
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR 04 //
    return (
        <main className={s.contact}>
            <div className={s.contact__container}>
                <h3 className={s.contact__container_headers}> { languageData.headers[0] } </h3>
                <div className={s.contact__container_text}>
                    { languageData.text[0] }
                    <br /> <br />
                    { languageData.text[1] }
                    <br />
                    { languageData.text[2] }
                    <br />
                    { languageData.text[3] }
                    <br /> <br />
                    { languageData.text[4] }
                    <br /> <br />
                    { languageData.text[5] }
                    <br /> <br />
                    { languageData.text[6] }
                    <br /> <br />
                    { languageData.text[7] }
                    <br /> <br />
                    { languageData.text[8] }
                </div>
                <h3 className={s.contact__container_headers}> { languageData.headers[1] } </h3>
                <div className={s.contact__container_map} ref={temporaryMapWindow} onMouseEnter={tempFunction}>
                    add map and currentLocationDot here (with API or any way)
                </div>
            </div>
        </main>
    )
}
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR 05 //
export default Contact
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ ENDING LINE //





// Our dedicated customer service team is available to assist you Monday through Friday, 9:00 AM to 5:00 PM. We strive to respond to all inquiries within 24 hours.