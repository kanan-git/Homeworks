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
import { BrowserRouter as Router, Switch, Route, Routes, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR 02 //
function Breadcrumb() {
    const languageData = useSelector(
        (state) => state.language.currentLanguage
    )

    // create not <a></a>, <Link to=""> {storeData} </Link> tag which data get from selected component info with redux toolkit
    
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR 03 //
    // useEffect(
    //     () => {
    //         if (languageData == "English") {
    //             setDataBC(dataSource.english.breadcrumb)
    //             console.log(dataBC, "current language: English")
    //         } else if (languageData == "Azərbaycan dili") {
    //             setDataBC(dataSource.azerbaijani.breadcrumb)
    //             console.log(dataBC, "current language: Azərbaycan dili")
    //         } else if (languageData == "Türkçe") {
    //             setDataBC(dataSource.turkish.breadcrumb)
    //             console.log(dataBC, "current language: Türkçe")
    //         }
    //     }, []
    // )
                             // fix this - eventlistener not working or something else is wrong

// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR 04 //
    return (
        <div className={s.breadcrumb}>
            <p className={s.breadcrumb__contents}>
                ShopNet | {languageData.breadcrumb} → '
                <Link to="/" className={s.breadcrumb__contents_links}> Homepage </Link>/
                <Link to="/products" className={s.breadcrumb__contents_links}> Products </Link>/
                <Link to="/products/item_view" className={s.breadcrumb__contents_links}> Item view </Link>/
                <Link to="/products/item_view/purchase_completed" className={s.breadcrumb__contents_links}> Purchase </Link>
                '
            </p>
        </div>
    )
}
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR 05 //
export default Breadcrumb
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ ENDING LINE //