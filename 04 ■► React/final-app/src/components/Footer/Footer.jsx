import React from 'react'
import s from './index.module.css'
import {dataSource} from '../../dataSource/data-source'
import {useState, useEffect} from 'react'

function Footer() {

    const [footerCol1data, setFooterCol1data] = useState(dataSource.english.footer.about)
    const [footerCol2data, setFooterCol2data] = useState(dataSource.english.footer.profile)
    const [footerCol3data, setFooterCol3data] = useState(dataSource.english.footer.links)
    const [footerCol4data, setFooterCol4data] = useState(dataSource.english.footer.followus)
    const [footerBottom, setFooterBottom] = useState(dataSource.english.footer.bottomside)

    useEffect(
        () => {
            var langSelector = document.querySelector("#language")
            langSelector.addEventListener( "change", () => {
                if(langSelector.value == "English") {
                    setFooterCol1data(dataSource.english.footer.about)
                    setFooterCol2data(dataSource.english.footer.profile)
                    setFooterCol3data(dataSource.english.footer.links)
                    setFooterCol4data(dataSource.english.footer.followus)
                    setFooterBottom(dataSource.english.footer.bottomside)
                } else if(langSelector.value == "Türkçe") {
                    setFooterCol1data(dataSource.turkish.footer.about)
                    setFooterCol2data(dataSource.turkish.footer.profile)
                    setFooterCol3data(dataSource.turkish.footer.links)
                    setFooterCol4data(dataSource.turkish.footer.followus)
                    setFooterBottom(dataSource.turkish.footer.bottomside)
                } else {
                    setFooterCol1data(dataSource.azerbaijani.footer.about)
                    setFooterCol2data(dataSource.azerbaijani.footer.profile)
                    setFooterCol3data(dataSource.azerbaijani.footer.links)
                    setFooterCol4data(dataSource.azerbaijani.footer.followus)
                    setFooterBottom(dataSource.azerbaijani.footer.bottomside)
                }
            })
        }, []
    )

    return (
        <footer className={s.footer}>
            {/* top side columns of the footer */}
            <div className={s.footer__top}>

                <ul className={s.footer__top_column}>
                    <h3 className={s.footer__top_column__header}> {footerCol1data[0]} </h3>
                    <li className={s.footer__top_column__items_static}> {footerCol1data[1]} </li>
                    <li className={s.footer__top_column__items_static}> <i className='fa-solid fa-location-dot fa-1x' id={s.fa_location}></i> {footerCol1data[2]} </li>
                    <li className={s.footer__top_column__items_static}> <i className='fa-solid fa-phone fa-1x' id={s.fa_phone}></i> {footerCol1data[3]} </li>
                    <li className={s.footer__top_column__items_static}> <i className='fa-solid fa-envelope fa-1x' id={s.fa_envelope}></i> {footerCol1data[4]} </li>
                </ul>

                <ul className={s.footer__top_column}>
                    <h3 className={s.footer__top_column__header}> {footerCol2data[0]} </h3>
                    <li className={s.footer__top_column__items}> {footerCol2data[1]} </li>
                    <li className={s.footer__top_column__items}> {footerCol2data[2]} </li>
                    <li className={s.footer__top_column__items}> {footerCol2data[3]} </li>
                    <li className={s.footer__top_column__items}> {footerCol2data[4]} </li>
                </ul>

                <ul className={s.footer__top_column}>
                    <h3 className={s.footer__top_column__header}> {footerCol3data[0]} </h3>
                    <li className={s.footer__top_column__items}> {footerCol3data[1]} </li>
                    <li className={s.footer__top_column__items}> {footerCol3data[2]} </li>
                    <li className={s.footer__top_column__items}> {footerCol3data[3]} </li>
                    <li className={s.footer__top_column__items}> {footerCol3data[4]} </li>
                </ul>

                <ul className={s.footer__top_column}>
                    <h3 className={s.footer__top_column__header}> {footerCol4data[0]} </h3>
                    <li className={s.footer__top_column__items}> <i className='fa-brands fa-facebook fa-1x' id={s.fa_brands}></i> {footerCol4data[1]} </li>
                    <li className={s.footer__top_column__items}> <i className='fa-brands fa-youtube fa-1x' id={s.fa_brands}></i> {footerCol4data[2]} </li>
                    <li className={s.footer__top_column__items}> <i className='fa-brands fa-square-instagram fa-1x' id={s.fa_brands}></i> {footerCol4data[3]} </li>
                </ul>
                
            </div>

            {/* bottom side of the footer */}
            <div className={s.footer__bottom}>
                <p className={s.footer__bottom_text}> {footerBottom} </p>
            </div>
        </footer>
    )
}

export default Footer