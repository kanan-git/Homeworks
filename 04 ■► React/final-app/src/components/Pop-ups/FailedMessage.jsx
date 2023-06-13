// imported elements
import React from 'react'
import s from './index.module.css'
import {dataSource} from '../../data/data-source'
import {useState, useEffect, useRef} from 'react'
import { useSelector } from 'react-redux'

function FailedMessage() {
    const languageData = useSelector((state) => state.language.currentLanguage.popup_failedmessage)

    return (
        <>
            <div className={s.failedmessage__overlay}></div>
            <div className={s.failedmessage}>
                
                <div className={s.failedmessage__icon}>
                    <i className='fa-solid fa-xmark fa-1x'></i>
                </div>
                <p className={s.failedmessage__text}>
                    {languageData}
                </p>
            </div>
        </>
    )
}

export default FailedMessage