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
            return () => {
                getDataFromAPI()
                // console.log(statusHTMLstate)
            }
        }, []
    )
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR ?? //
    const [filterSTATE, setFilterSTATE] = useState(dataSource.english.products.filter)
    const [sortSTATE, setSortSTATE] = useState(dataSource.english.products.sort)
    const [buttonSTATE, setButtonSTATE] = useState(dataSource.english.products.button)
    useEffect(
        () => {
            return () => {
                var languageData = document.querySelector("#language")
                languageData.addEventListener("change", () => {
                    if (languageData.value == "English") {
                        setFilterSTATE(dataSource.english.products.filter)
                        setSortSTATE(dataSource.english.products.sort)
                        setButtonSTATE(dataSource.english.products.button)
                    } else if (languageData.value == "Azərbaycan dili") {
                        setFilterSTATE(dataSource.azerbaijani.products.filter)
                        setSortSTATE(dataSource.azerbaijani.products.sort)
                        setButtonSTATE(dataSource.azerbaijani.products.button)
                    } else if (languageData.value == "Türkçe") {
                        setFilterSTATE(dataSource.turkish.products.filter)
                        setSortSTATE(dataSource.turkish.products.sort)
                        setButtonSTATE(dataSource.turkish.products.button)
                    }
                })
            }
        }, []
    )
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR ?? //
    const [fstatSTATE, setFstatSTATE] = useState("disabled")

    function temName() {
        var filterSection = document.querySelector("#filter-section")
        var productsContainer = document.querySelector("#products-container")

        // console.log(filterSection)
        // console.log(productsContainer)

        if (fstatSTATE == "disabled") {
            // ---------- filter styles
            filterSection.style.width = `300px` // 300px 0px
            filterSection.style.visibility = `visible` // visible hidden
            filterSection.style.opacity = `1.0` // 1.0 0.0
            filterSection.style.transform = `translateX(-0%)` // -0% -100%
            // ---------- container styles
            productsContainer.style.width = `1100px` // 1100px 1400px
            productsContainer.style.gap = `20px 12px` // 20px 12px  20px 28px
            // console.log(productsContainer.style.width)
            setFstatSTATE("enabled")
        } else {
            // ---------- filter styles
            filterSection.style.width = `0px` // 300px 0px
            filterSection.style.visibility = `hidden` // visible hidden
            filterSection.style.opacity = `0.0` // 1.0 0.0
            filterSection.style.transform = `translateX(-100%)` // -0% -100%
            // ---------- container styles
            productsContainer.style.width = `1400px` // 1100px 1400px
            productsContainer.style.gap = `20px 28px` // 20px 12px  20px 28px
            // console.log(productsContainer.style.width)
            setFstatSTATE("disabled")
        }
    }
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR 04 //
    if (statusHTMLstate == "greenLight") {
        console.log(statusHTMLstate)
        return (
            <main className={s.products}>
                {/* topside of product page - contains: filter show/hide (container 1100/1400 px) button, sort input select */}
                <div className={s.products__topside}>
                    <button className={s.products__topside_filterbtn} id="filter-button" onClick={temName}> {filterSTATE[0]} </button>
                    <span className={s.products__topside_filtertags}>
                        <button className={s.products__topside_filtertags__selected}>
                            sample
                            <button className={s.xmark}>
                                <i className='fa-regular fa-circle-xmark fa-1x'></i>
                            </button>
                        </button>
                    </span>
                    <select name="sorting" id="sorting" className={s.products__topside_sort}>
                        <option value="Most purchased"> {sortSTATE[0]} </option>
                        <option value="Price low to high"> {sortSTATE[1]} </option>
                        <option value="Price high to low"> {sortSTATE[2]} </option>
                        <option value="Rating low to high"> {sortSTATE[3]} </option>
                        <option value="Rating high to low"> {sortSTATE[4]} </option>
                    </select>
                </div>

                {/* <FilterAside /> */}
                <form className={s.filteraside} id="filter-section">
                    <h2 className={s.filteraside__header}> {filterSTATE[0]} </h2>

                    <label htmlFor="price" className={s.filteraside__categories_label}> {filterSTATE[1]} </label>
                    <span className={s.filteraside__categories}>
                        <button className={s.filteraside__categories_buttons}> {filterSTATE[4]} </button>
                        <button className={s.filteraside__categories_buttons}> {filterSTATE[5]} </button>
                        <button className={s.filteraside__categories_buttons}> {filterSTATE[6]} </button>
                        <button className={s.filteraside__categories_buttons}> {filterSTATE[7]} </button>
                    </span>
                    
                    <label htmlFor="price" className={s.filteraside__price_label}> {filterSTATE[2]} </label>
                    <span className={s.filteraside__price_container}>
                        <input type="number" id="price_min" name="price" className={s.filteraside__price_container__input} placeholder="min. $ 0" min="0" max="999999" step="1" />
                        <input type="number" id="price_max" name="price" className={s.filteraside__price_container__input} placeholder="max. $ 999'999" min="0" max="999999" step="1" />
                    </span>
                    {/* <span className={s.filteraside__price_sliders}>
                        <input type="range" id={s.toMin} name="price" className={s.filteraside__price_sliders__input} min="0" max="100" step="1" defaultValue="10" />
                        <input type="range" id={s.toMax} name="price" className={s.filteraside__price_sliders__input} min="0" max="100" step="1" defaultValue="90" />
                    </span> */}
                    <label htmlFor="rating" className={s.filteraside__rating_label}> {filterSTATE[3]} </label>
                    <span className={s.filteraside__rating_container}>
                        <span className={s.filteraside__rating_container__buttons}>
                            <button className={s.filteraside__rating_container__buttons_item}>
                                <i className='fa-solid fa-star fa-1x'></i>
                                <i className='fa-solid fa-star fa-1x'></i>
                                <i className='fa-solid fa-star fa-1x'></i>
                                <i className='fa-solid fa-star fa-1x'></i>
                                <i className='fa-solid fa-star-half-stroke fa-1x'></i>

                                <i className={s.filteraside__rating_container__buttons_item__text}> 4.5 {filterSTATE[8]} </i>
                            </button>
                        </span>
                        <span className={s.filteraside__rating_container__buttons}>
                            <button className={s.filteraside__rating_container__buttons_item}>
                                <i className='fa-solid fa-star fa-1x'></i>
                                <i className='fa-solid fa-star fa-1x'></i>
                                <i className='fa-solid fa-star fa-1x'></i>
                                <i className='fa-solid fa-star fa-1x'></i>
                                <i className='fa-regular fa-star fa-1x'></i>

                                <i className={s.filteraside__rating_container__buttons_item__text}> 4.0 {filterSTATE[8]} </i>
                            </button>
                        </span>
                        <span className={s.filteraside__rating_container__buttons}>
                            <button className={s.filteraside__rating_container__buttons_item}>
                                <i className='fa-solid fa-star fa-1x'></i>
                                <i className='fa-solid fa-star fa-1x'></i>
                                <i className='fa-solid fa-star fa-1x'></i>
                                <i className='fa-solid fa-star-half-stroke fa-1x'></i>
                                <i className='fa-regular fa-star fa-1x'></i>

                                <i className={s.filteraside__rating_container__buttons_item__text}> 3.5 {filterSTATE[8]} </i>
                            </button>
                        </span>
                        <span className={s.filteraside__rating_container__buttons}>
                            <button className={s.filteraside__rating_container__buttons_item}>
                                <i className='fa-solid fa-star fa-1x'></i>
                                <i className='fa-solid fa-star fa-1x'></i>
                                <i className='fa-solid fa-star fa-1x'></i>
                                <i className='fa-regular fa-star fa-1x'></i>
                                <i className='fa-regular fa-star fa-1x'></i>

                                <i className={s.filteraside__rating_container__buttons_item__text}> 3.0 {filterSTATE[8]} </i>
                            </button>
                        </span>
                    </span>
                </form>

                {/* container of product cards */}
                <div className={s.container} id="products-container">
                    {/* ----- product cards ----- */}
                    {
                        apiSTATE.map(
                            (elements, index) => 
                            <div className={s.products__cards} key={elements.id}> {/* apiSTATE[0].id */}
                                {/* image */}
                                <div className={s.products__cards_image}>
                                    <img src={elements.image} alt={"product-"+index} className={s.products__cards_image__content} />
                                    <button className={s.products__cards_image__favbtn}> <i className='fa-solid fa-heart fa-1x'></i> </button>
                                </div>
                                {/* information */}
                                <div className={s.products__cards_information}>
                                    {/* title & category */}
                                    <span className={s.products__cards_information__titleandcateg}>
                                        <p className={s.products__cards_information__titleandcateg_title}> {elements.title} </p>
                                        <i className={s.products__cards_information__titleandcateg_categ}> {elements.category} </i> {/* opacity 0.5, smaller text under title */}
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
                                        <span className={s.products__cards_information__rating_point}> {elements.rating.rate} / 5 </span> {/* 5 or 10 */}
                                    </span>
                                    {/* <span className={s.products__cards_information__description}> {apiSTATE[0].description} </span> */}
                                    <strong className={s.products__cards_information__price}> $ {elements.price} USD </strong>
                                </div>
                            </div>
                        )
                    }
                    {/* button for load more items from API */}
                    <button className={s.loadmore}> {buttonSTATE} </button>
                </div>
            </main>
        )
    }
}
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR 05 //
export default Products
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ ENDING LINE //