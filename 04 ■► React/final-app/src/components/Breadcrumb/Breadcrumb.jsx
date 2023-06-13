// imported elements
import React from 'react'
import s from './index.module.css'
import {dataSource} from '../../data/data-source'
import {useState, useEffect, useRef} from 'react'
import { BrowserRouter as Router, Switch, Route, Routes, Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Breadcrumb(props) {
    const languageData = useSelector(
        (state) => state.language.currentLanguage
    )

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

    return (
        <div className={s.breadcrumb}>
            <p className={s.breadcrumb__contents}>
                ShopNet | {languageData.breadcrumb} → '
                {handleBreadcrumbItems()}
                '
            </p>
        </div>
    )
}

export default Breadcrumb