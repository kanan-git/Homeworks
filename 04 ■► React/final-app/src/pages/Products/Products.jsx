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
// import api from '../../data/fake-api'
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR 02 //
function Products() {
    // ...
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR 03 //
    const [apiSTATE, setApiSTATE] = useState()
    const [statusHTMLstate, setStatusHTMLstate] = useState("redLight")

    async function getDataFromAPI() {
        await fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        // category, description, id, image, price, rating.rate, title
        .then(json => {var apiObj = json; setApiSTATE(apiObj)})
        // console.log(apiSTATE, apiSTATE[0].price)
        setStatusHTMLstate("greenLight")
    }
    
    useEffect(
        () => {
            getDataFromAPI()
        }, []
    )

    console.log(statusHTMLstate)
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR ?? //
    const [_STATE, set_STATE] = useState(dataSource.english.products)
    useEffect(
        () => {
            return () => {
                var languageData = document.querySelector("#language")
                languageData.addEventListener("change", () => {
                    if (languageData.value == "English") {
                        set_STATE(dataSource.english.products)
                    } else if (languageData.value == "Azərbaycan dili") {
                        set_STATE(dataSource.azerbaijani.products)
                    } else if (languageData.value == "Türkçe") {
                        set_STATE(dataSource.turkish.products)
                    }
                })
            }
        }, []
    )
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR 04 //
    if (statusHTMLstate == "greenLight") {
        console.log(statusHTMLstate)
        return (
            <main className={s.products}>
                {/* topside of product page - contains: filter show/hide (container 1100/1400 px) button, sort input select */}
                <div className={s.products__topside}>
                    <button className={s.products__topside_filterbtn}> Filter </button>
                    <select name="sorting" id="sorting" className={s.products__topside_sort}>
                        <option value="Most purchased"> Most purchased </option>
                        <option value="Price low to high"> Price low to high </option>
                        <option value="Price high to low"> Price high to low </option>
                        <option value="Rating low to high"> Rating low to high </option>
                        <option value="Rating high to low"> Rating high to low </option>
                    </select>
                </div>

                {/* <FilterAside /> */}
                <div className={s.tempdiv}>
                    123456789 filter here ← --
                </div>

                {/* container of product cards */}
                <div className={s.container}>

                    {/* ----- product card - no 001 ----- */}
                    <div className={s.products__cards}> {/* apiSTATE[0].id */}
                        {/* image */}
                        <div className={s.products__cards_image}>
                            <img src={apiSTATE[0].image} alt="product-001" className={s.products__cards_image__content} />
                            <button className={s.products__cards_image__favbtn}> <i className='fa-solid fa-heart fa-1x'></i> </button>
                        </div>
                        {/* information */}
                        <div className={s.products__cards_information}>
                            {/* title & category */}
                            <span className={s.products__cards_information__titleandcateg}>
                                <p className={s.products__cards_information__titleandcateg_title}> {apiSTATE[0].title} </p>
                                <i className={s.products__cards_information__titleandcateg_categ}> {apiSTATE[0].category} </i> {/* opacity 0.5, smaller text under title */}
                            </span>
                            {/* rating */}
                            <span className={s.products__cards_information__rating}>
                                <span className={s.products__cards_information__rating_stars}>
                                    <i className='fa-solid fa-star fa-1x'></i>
                                    <i className='fa-solid fa-star fa-1x'></i>
                                    <i className='fa-solid fa-star fa-1x'></i>
                                    <i className='fa-solid fa-star-half-stroke fa-1x'></i>
                                    <i className='fa-regular fa-star fa-1x'></i>
                                </span>
                                <span className={s.products__cards_information__rating_point}> {apiSTATE[0].rating.rate} / 10 </span>
                            </span>
                            {/* <span className={s.products__cards_information__description}> {apiSTATE[0].description} </span> */}
                            <strong className={s.products__cards_information__price}> $ {apiSTATE[0].price} USD </strong>
                        </div>
                    </div>

                </div>
            </main>
        )
    }
}
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR 05 //
export default Products
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ ENDING LINE //