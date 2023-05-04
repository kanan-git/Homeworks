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
function Breadcrumb() {
    
    const [dataBC, setDataBC] = useState(dataSource.english.breadcrumb)
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR 03 //
    useEffect(
        () => {
            // fake condition for now which will be replaced with input select language data with store (redux tlk)
            var languageData = "English" // "English", "Azərbaycan dili", "Türkçe"
            if (languageData == "English") {
                setDataBC(dataSource.english.breadcrumb)
            } else if (languageData == "Azərbaycan dili") {
                setDataBC(dataSource.azerbaijani.breadcrumb)
            } else if (languageData == "Türkçe") {
                setDataBC(dataSource.turkish.breadcrumb)
            }
        }, []
    )
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR 04 //
    return (
        <div className={s.breadcrumb}>
            <p className={s.breadcrumb__contents}>
                ShopNet | {dataBC} → '
                <a href="#" className={s.breadcrumb__contents_links}>Homepage</a>/
                <a href="#" className={s.breadcrumb__contents_links}>Products</a>/
                <a href="#" className={s.breadcrumb__contents_links}>Item view</a>/
                <a href="#" className={s.breadcrumb__contents_links}>Purchase</a>
                '
            </p>
        </div>
    )
}
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR 05 //
export default Breadcrumb
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ ENDING LINE //