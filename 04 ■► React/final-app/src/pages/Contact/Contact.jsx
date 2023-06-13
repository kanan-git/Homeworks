import React from 'react'
import s from './index.module.css'
import {dataSource} from '../../data/data-source'
import {useState, useEffect, useRef} from 'react'
import { useSelector } from 'react-redux'

function Contact() {const languageData = useSelector(
        (state) => state.language.currentLanguage.contact
    )

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

export default Contact