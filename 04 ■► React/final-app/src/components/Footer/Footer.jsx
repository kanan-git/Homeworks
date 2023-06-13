import React from 'react'
import s from './index.module.css'
import {dataSource} from '../../data/data-source'
import {useState, useEffect} from 'react'
import Loading from "../Pop-ups/Loading"
import PrivacyPolicies from "../Pop-ups/PrivacyPolicies"
import TermsAndConditions from "../Pop-ups/TermsAndConditions"
import { BrowserRouter as Router, Switch, Route, Routes, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Footer() {
    const [isUserSTATE, setIsUserSTATE] = useState(false)
    const [termsSTATE, setTermsSTATE] = useState(false)
    const [privacySTATE, setPrivacySTATE] = useState(false)
    function handleOpenTerms() {
        setTermsSTATE(true)
    }
    function handleCloseTerms() {
        setTermsSTATE(false)
    }
    function handleOpenPrivacy() {
        setPrivacySTATE(true)
    }
    function handleClosePrivacy() {
        setPrivacySTATE(false)
    }

    useEffect(
        () => {
            setIsUserSTATE(JSON.parse(localStorage.getItem("isLogged")))
        }, []
    )

    const languageData = useSelector(
        (state) => state.language.currentLanguage
    )

    return (
        <footer className={s.footer}>
            {/* top side columns of the footer */}
            <div className={s.footer__top}>

                <ul className={s.footer__top_column}>
                    <h3 className={s.footer__top_column__header}> {languageData.footer.about[0]} </h3>
                    <li className={s.footer__top_column__items_static}> {languageData.footer.about[1]} </li>
                    <li className={s.footer__top_column__items_static}> <i className='fa-solid fa-location-dot fa-1x' id={s.fa_location}></i> {languageData.footer.about[2]} </li>
                    <li className={s.footer__top_column__items_static}> <i className='fa-solid fa-phone fa-1x' id={s.fa_phone}></i> {languageData.footer.about[3]} </li>
                    <li className={s.footer__top_column__items_static}> <i className='fa-solid fa-envelope fa-1x' id={s.fa_envelope}></i> {languageData.footer.about[4]} </li>
                </ul>

                {isUserSTATE && (
                    <ul className={s.footer__top_column}>
                        <h3 className={s.footer__top_column__header}> {languageData.footer.profile[0]} </h3>
                        {/* <Link className={s.footer__top_column__items} to="/authentication_shopnet"> {languageData.footer.profile[1]} </Link> */}
                        <Link className={s.footer__top_column__items} to="/my_favorites"> {languageData.footer.profile[2]} </Link>
                        <Link className={s.footer__top_column__items} to="/my_cart"> {languageData.footer.profile[3]} </Link>
                        <Link className={s.footer__top_column__items} to="/user_settings"> {languageData.footer.profile[4]} </Link>
                    </ul>
                )}
                {!isUserSTATE && (
                    <ul className={s.footer__top_column}>
                        <h3 className={s.footer__top_column__header}> {languageData.footer.profile[0]} </h3>
                        <Link className={s.footer__top_column__items} to="/authentication_shopnet"> {languageData.footer.profile[1]} </Link>
                        <Link className={s.footer__top_column__items} to="/authentication_shopnet"> {languageData.footer.profile[2]} </Link>
                        <Link className={s.footer__top_column__items} to="/authentication_shopnet"> {languageData.footer.profile[3]} </Link>
                        <Link className={s.footer__top_column__items} to="/authentication_shopnet"> {languageData.footer.profile[4]} </Link>
                    </ul>
                )}

                <ul className={s.footer__top_column}>
                    <h3 className={s.footer__top_column__header}> {languageData.footer.links[0]} </h3>
                    <Link className={s.footer__top_column__items} to="/products"> {languageData.footer.links[1]} </Link>
                    <Link className={s.footer__top_column__items} to="/contact"> {languageData.footer.links[2]} </Link>
                    <Link className={s.footer__top_column__items} to="/about"> {languageData.footer.links[3]} </Link>
                    {/* <li className={s.footer__top_column__items}> {footerCol3data[4]} </li> */}
                </ul>

                <ul className={s.footer__top_column}>
                    <h3 className={s.footer__top_column__header}> {languageData.footer.followus[0]} </h3>
                    <li className={s.footer__top_column__items}>
                        <a href="https://facebook.com/"> <i className='fa-brands fa-facebook fa-1x' id={s.fa_brands}></i> {languageData.footer.followus[1]} </a>
                    </li>
                    <li className={s.footer__top_column__items}>
                        <a href="https://youtube.com/"> <i className='fa-brands fa-youtube fa-1x' id={s.fa_brands}></i> {languageData.footer.followus[2]} </a>
                    </li>
                    <li className={s.footer__top_column__items}>
                        <a href="https://instagram.com/"> <i className='fa-brands fa-square-instagram fa-1x' id={s.fa_brands}></i> {languageData.footer.followus[3]} </a>
                    </li>
                </ul>
                
            </div>

            {/* bottom side of the footer */}
            <div className={s.footer__bottom}>
                <p className={s.footer__bottom_text}> {languageData.footer.bottomside[0]} </p>
                <span className={s.footer__bottom_group}>
                    <p className={s.footer__bottom_group__items} onClick={handleOpenTerms}> {languageData.footer.bottomside[1]} </p>   {termsSTATE && (
                        <div className={s.overlay} onDoubleClick={handleCloseTerms}> <TermsAndConditions /> </div>
                    )}
                    <p className={s.footer__bottom_group__items} onClick={handleOpenPrivacy}> {languageData.footer.bottomside[2]} </p>   {privacySTATE && (
                        <div className={s.overlay} onDoubleClick={handleClosePrivacy}> <PrivacyPolicies /> </div>
                    )}

                    {/* <Loading /> */}
                    {/* <PrivacyPolicies /> */}
                    {/* <TermsAndConditions /> */}
                    {/* <Overlay /> */}
                </span>
            </div>
        </footer>
    )
}

export default Footer