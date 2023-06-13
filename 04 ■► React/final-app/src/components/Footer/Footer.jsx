// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ STARTING LINE //
// SECTOR 01:  importing elements
// SECTOR 02:  variables, props and states
// SECTOR 03:  changing language
// SECTOR 04:  return XML side
// SECTOR 05:  export default function
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR 01 //
import React from 'react'
import s from './index.module.css'
import {dataSource} from '../../data/data-source'
import {useState, useEffect} from 'react'
import Loading from "../Pop-ups/Loading"
import PrivacyPolicies from "../Pop-ups/PrivacyPolicies"
import TermsAndConditions from "../Pop-ups/TermsAndConditions"
import { BrowserRouter as Router, Switch, Route, Routes, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR 02 //
function Footer() {
    // const [footerCol1data, setFooterCol1data] = useState(dataSource.english.footer.about)
    // const [footerCol2data, setFooterCol2data] = useState(dataSource.english.footer.profile)
    // const [footerCol3data, setFooterCol3data] = useState(dataSource.english.footer.links)
    // const [footerCol4data, setFooterCol4data] = useState(dataSource.english.footer.followus)
    // const [footerBottom, setFooterBottom] = useState(dataSource.english.footer.bottomside)
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR ?? //
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
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR 03 //
    const languageData = useSelector(
        (state) => state.language.currentLanguage
    )

    // console.log("from Footer.jsx", languageData.breadcrumb)

    // console.log(languageData.footer.about[0])
    // useEffect(
    //     () => {
    //         var langSelector = document.querySelector("#language")
    //         langSelector.addEventListener( "change", () => {
    //             if(langSelector.value == "English") {
    //                 setFooterCol1data(dataSource.english.footer.about)
    //                 setFooterCol2data(dataSource.english.footer.profile)
    //                 setFooterCol3data(dataSource.english.footer.links)
    //                 setFooterCol4data(dataSource.english.footer.followus)
    //                 setFooterBottom(dataSource.english.footer.bottomside)
    //             } else if(langSelector.value == "Türkçe") {
    //                 setFooterCol1data(dataSource.turkish.footer.about)
    //                 setFooterCol2data(dataSource.turkish.footer.profile)
    //                 setFooterCol3data(dataSource.turkish.footer.links)
    //                 setFooterCol4data(dataSource.turkish.footer.followus)
    //                 setFooterBottom(dataSource.turkish.footer.bottomside)
    //             } else {
    //                 setFooterCol1data(dataSource.azerbaijani.footer.about)
    //                 setFooterCol2data(dataSource.azerbaijani.footer.profile)
    //                 setFooterCol3data(dataSource.azerbaijani.footer.links)
    //                 setFooterCol4data(dataSource.azerbaijani.footer.followus)
    //                 setFooterBottom(dataSource.azerbaijani.footer.bottomside)
    //             }
    //         })
    //     }, []
    // )
    // languageData.footer.about // setFooterCol1data
    // languageData.footer.profile // setFooterCol2data
    // languageData.footer.links // setFooterCol3data
    // languageData.footer.followus // setFooterCol4data
    // languageData.footer.bottomside // setFooterBottom
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // USE THEESE IN ALL COMPONENT AND PAGES WHICH THEY HAVE A BRIDGE, WHITH CONDITIONS, OPEN AND CLOSE FUNCTIONS

    // import FailedMessage from './components/Pop-ups/FailedMessage'
    // import SuccessfullySigned from './components/Pop-ups/SuccessfullySigned'
    // import TermsAndConditions from './components/Pop-ups/TermsAndConditions'
    // import PrivacyPolicies from './components/Pop-ups/PrivacyPolicies'
    // import Loading from './components/Pop-ups/Loading'
    // // {/* <Loading /> */}
    // // {/* <SuccessfullySigned /> */}
    // // {/* <FailedMessage /> */}
    // // {/* <PrivacyPolicies /> */}
    // // {/* <TermsAndConditions /> */}
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR 04 //
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
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR 05 //
export default Footer
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ ENDING LINE //