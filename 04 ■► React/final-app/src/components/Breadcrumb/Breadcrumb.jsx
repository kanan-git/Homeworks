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
import { BrowserRouter as Router, Switch, Route, Routes, Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR 02 //
function Breadcrumb(props) {
    const languageData = useSelector(
        (state) => state.language.currentLanguage
    )
    // console.log(props.currentPath)

    function handleBreadcrumbItems() {
        if(props.currentPath == "/") {
            return (
                <Link to="/" className={s.breadcrumb__contents_links}> Homepage </Link>
            )
        } else if(props.currentPath == "/about") {
            return (
                <Link to="/about" className={s.breadcrumb__contents_links}> About </Link>
            )
        } else if(props.currentPath == "/contact") {
            return (
                <Link to="/contact" className={s.breadcrumb__contents_links}> Contact </Link>
            )
        } else if(props.currentPath == "/products/item_view") {
            return (
                <>
                    <Link to="/products" className={s.breadcrumb__contents_links}> Products </Link> / 
                    <Link to="/products/item_view" className={s.breadcrumb__contents_links}> Item View </Link>
                </>
            )
        } else if(props.currentPath == "/my_cart") {
            return (
                <Link to="/my_cart" className={s.breadcrumb__contents_links}> My Cart </Link>
            )
        } else if(props.currentPath == "/my_favorites") {
            return (
                <Link to="/my_favorites" className={s.breadcrumb__contents_links}> My Favorites </Link>
            )
        } else if(props.currentPath == "/user_settings") {
            return (
                <Link to="/user_settings" className={s.breadcrumb__contents_links}> Settings </Link>
            )
        } else if(props.currentPath == "/products") {
            return (
                <Link to="/products" className={s.breadcrumb__contents_links}> Products </Link>
            )
        }
    }
    
    document.addEventListener("load", handleBreadcrumbItems)

    // console.log("from Breadcrumb.jsx", languageData.breadcrumb)

    // create not <a></a>, <Link to=""> {storeData} </Link> tag which data get from selected component info with redux toolkit
    
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR 03 //
    // useEffect(
    //     () => {
    //         if (languageData == "English") {
    //             setDataBC(dataSource.breadcrumb)
    //             console.log(dataBC, "current language: English")
    //             // (english)
    //         } else if (languageData == "Azərbaycan dili") {
    //             setDataBC(dataSource.breadcrumb)
    //             console.log(dataBC, "current language: Azərbaycan dili")
    //             // (turkish)
    //         } else if (languageData == "Türkçe") {
    //             setDataBC(dataSource.breadcrumb)
    //             console.log(dataBC, "current language: Türkçe")
    //             // (azerbaijani)
    //         }
    //     }, []
    // )
                             // fix this - eventlistener not working or something else is wrong

// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR 04 //
    return (
        <div className={s.breadcrumb}>
            <p className={s.breadcrumb__contents}>
                ShopNet | {languageData.breadcrumb} → '
                {/* <Link to="/" className={s.breadcrumb__contents_links}> Homepage </Link>/
                <Link to="/products" className={s.breadcrumb__contents_links}> Products </Link>/
                <Link to="/products/item_view" className={s.breadcrumb__contents_links}> Item view </Link>/
                <Link to="/products/item_view/purchase_completed" className={s.breadcrumb__contents_links}> Purchase </Link> */}

                {handleBreadcrumbItems()}

                '
            </p>
        </div>
    )
}
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR 05 //
export default Breadcrumb
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ ENDING LINE //