// imported elements
import React from 'react'
import s from './index.module.css'
import {dataSource} from '../../data/data-source'
import {useState, useEffect, useRef} from 'react'
import { useSelector } from 'react-redux'

function SuccessfullySigned() {
    const languageData = useSelector((state) => state.language.currentLanguage.popup_successfullysigned)

    return (
        <>
            <div className={s.successfullysigned__overlay}></div>
            <div className={s.successfullysigned}>
                <div className={s.successfullysigned__icon}>
                    <i className='fa-solid fa-check fa-1x'></i>
                </div>
                <p className={s.successfullysigned__text}>
                    {languageData}
                </p>
            </div>
        </>
    )
}

export default SuccessfullySigned