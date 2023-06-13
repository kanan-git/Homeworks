// imported elements
import React from 'react'
import s from './index.module.css'
import {dataSource} from '../../data/data-source'
import {useState, useEffect, useRef} from 'react'
import { useSelector } from 'react-redux'

function TermsAndConditions() {
    const languageData = useSelector((state) => state.language.currentLanguage.popup_termsandconditions)

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

export default TermsAndConditions