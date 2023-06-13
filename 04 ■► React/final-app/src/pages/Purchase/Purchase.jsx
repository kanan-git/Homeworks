import React from 'react'
import s from './index.module.css'
import {dataSource} from '../../data/data-source'
import {useState, useEffect, useRef} from 'react'
import { BrowserRouter as Router, Switch, Route, Routes, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Purchase() {
    const languageData = useSelector((state) => state.language.currentLanguage.purchase)
    const productInfo = useSelector((state) => state.selectedProduct.productData)

    return (
        <main className={s.purchase}>
            {/* ordered message */}
            <p className={s.purchase__status}> {languageData[0]} </p>
            {/* ordered product info */}
            <ul className={s.purchase__infolist}>
                <li className={s.purchase__infolist_items}> {languageData[1]}: {productInfo.title} </li>
                <li className={s.purchase__infolist_items}> {languageData[2]}: {productInfo.category} </li>
                <li className={s.purchase__infolist_items}> {languageData[3]}: {productInfo.desc} </li>
                <li className={s.purchase__infolist_items}> {languageData[4]}: $ {productInfo.price} USD </li>
            </ul>
            {/* back to circle buttons */}
            <div className={s.purchase__buttons}>
                <h4 className={s.purchase__buttons_header}> {languageData[5]}: </h4>
                <span className={s.purchase__buttons_list}>
                    <Link className={s.purchase__buttons_list__items} to="/"> {languageData[6]} </Link>
                    <Link className={s.purchase__buttons_list__items} to="/my_cart"> {languageData[7]} </Link>
                    <Link className={s.purchase__buttons_list__items} to="/my_favorites"> {languageData[8]} </Link>
                </span>
            </div>
        </main>
    )
}

export default Purchase