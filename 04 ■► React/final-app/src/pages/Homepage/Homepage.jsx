import React from 'react'
import ReactDOM from "react-dom"
import s from './index.module.css'
import {dataSource} from '../../data/data-source'
import {useState, useEffect, useRef} from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import searchValueSlice, { setCurrentSearchValue } from '../../features/counter/searchValueSlice'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import { setCurrentProduct } from '../../features/counter/selectedProduct'

import cloth_1 from './homepage assets/clothing/casual.jpg'
import cloth_2 from './homepage assets/clothing/shirt.jpg'
import cloth_3 from './homepage assets/clothing/coat.png'
import cloth_4 from './homepage assets/clothing/sleeve.png'
import cloth_5 from './homepage assets/clothing/jacket.png'

import brands_1 from './homepage assets/brands/Fjallraven.jpg'
import brands_2 from './homepage assets/brands/John_Hardy.png'
import brands_3 from './homepage assets/brands/WD.jpg'
import brands_4 from './homepage assets/brands/SanDisk.png'
import brands_5 from './homepage assets/brands/Silicon_Power.jpg'
import brands_6 from './homepage assets/brands/Acer.png'
import brands_7 from './homepage assets/brands/Samsung.jpg'
import brands_8 from './homepage assets/brands/BIYLACLESEN.jpg'
import brands_9 from './homepage assets/brands/Lock_and_Love.png'
import brands_10 from './homepage assets/brands/MBJ.jpg'
import brands_11 from './homepage assets/brands/Opna.jpg'
import brands_12 from './homepage assets/brands/DANVOUY.jpg'

function Homepage() {
    const dispatch = useDispatch()
    // states and variables
    const [hpHeaders, setHpHeaders] = useState(dataSource.english.homepage.headers)
    const [brandCards, setBrandCards] = useState(dataSource.english.homepage.brand_cards)
    const [clothCards, setClothCards] = useState(dataSource.english.homepage.clothing_cards)
    const [categCards, setCategCards] = useState(dataSource.english.homepage.category_cards)

    const clothImages = [cloth_1, cloth_2, cloth_3, cloth_4, cloth_5]
    const brandImages = [brands_1, brands_2, brands_3, brands_4, brands_5, brands_6, brands_7, brands_8, brands_9, brands_10, brands_11, brands_12]
    
    // const [discntCards, setDiscntCards] = useState(dataSource.english.homepage.discount_cards)

    const languageData = useSelector(
        (state) => state.language.currentLanguage.homepage
    )

    const [productsArraySTATE, setProductsArraySTATE] = useState([])
    const [topRatesArrSTATE, setTopRatesArrSTATE] = useState([])
    const [reviewCountArrSTATE, setReviewCountArrSTATE] = useState([])

    async function fetchApiForHome() {
        const apiData = await fetch('https://fakestoreapi.com/products')
        const productsArray = await apiData.json()
        setProductsArraySTATE(productsArray)
        // console.log(productsArray)
        const topRatesArr = []
        const reviewCountArr = []
        for(var i=0; i<productsArray.length-1; i++) {
            topRatesArr.push(productsArray[i].rating.rate)
            reviewCountArr.push(productsArray[i].rating.count)
        }
        // console.log(topRatesArr, reviewCountArr)
        for(var k=0; k<topRatesArr.length-1; k++) {
            for( var j=0; j<topRatesArr.length-k-1; j++) {
                if(topRatesArr[j] < topRatesArr[j+1]) {
                    var temp = topRatesArr[j]
                    topRatesArr[j] = topRatesArr[j+1]
                    topRatesArr[j+1] = temp
                }
            }
        }
        for(var k=0; k<reviewCountArr.length-1; k++) {
            for( var j=0; j<reviewCountArr.length-k-1; j++) {
                if(reviewCountArr[j] < reviewCountArr[j+1]) {
                    var temp = reviewCountArr[j]
                    reviewCountArr[j] = reviewCountArr[j+1]
                    reviewCountArr[j+1] = temp
                }
            }
        }
        // console.log(topRatesArr.slice(0, 10))
        // console.log(reviewCountArr.slice(0, 10))
        setTopRatesArrSTATE(topRatesArr.slice(0, 10))
        setReviewCountArrSTATE(reviewCountArr.slice(0, 10))
        // topRatesArr.map(
        //     (ratingRate) => {
        //         for(var x=0; x<productsArray.length-1; x++) {
        //             if(productsArray[x].rating.rate == ratingRate) {
        //                 // console.log(productsArray[x])
        //                 return (
        //                     <div className={`${s.homepage__sections_container__cards} additionalClassForTopRated`}>
        //                         <div className={s.homepage__sections_container__cards_image__content}>
        //                             <img src={productsArray[x].image} alt={productsArray[x].id} className={s.homepage__sections_container__cards_image__content} />
        //                         </div>
        //                         <p className={s.homepage__sections_container__cards_title}> {productsArray[x].rating.rate} </p>
        //                     </div>
        //                 )
        //             }
        //         }
        //     }
        // )
        // reviewCountArr.map(
        //     (ratingCount) => {
        //         for(var x=0; x<productsArray.length-1; x++) {
        //             if(productsArray[x].rating.count == ratingCount) {
        //                 // console.log(productsArray[x])
        //                 return (
        //                     <div className={`${s.homepage__sections_container__cards} additionalClassForMostReview`}>
        //                         <div className={s.homepage__sections_container__cards_image__content}>
        //                             <img src={productsArray[x].image} alt={productsArray[x].id} className={s.homepage__sections_container__cards_image__content} />
        //                         </div>
        //                         <p className={s.homepage__sections_container__cards_title}> {productsArray[x].rating.count} </p>
        //                     </div>
        //                 )
        //             }
        //         }
        //     }
        // )
    }
    // fetchApiForHome()
    useEffect(
        () => {
            fetchApiForHome()
        }, []
    )
    
    { // useless codes
        // useEffect(
        //     () => {
        //         var languageData = document.querySelector("#language")
        //         // fake condition for now which will be replaced with input select language data with store (redux tlk)
        //         // var languageData = "English" // "English", "Azərbaycan dili", "Türkçe"
        //         languageData.addEventListener("change", () => {
        //             if (languageData.value == "English") {
        //                 setHpHeaders(dataSource.english.homepage.headers)
        //                 setCategCards(dataSource.english.homepage.category_cards)
        //                 setBrandCards(dataSource.english.homepage.brand_cards)
        //                 // setDiscntCards(dataSource.english.homepage.discount_cards)
        //                 // console.log(hpHeaders[1], categCards, brandCards, discntCards)
        //             } else if (languageData.value == "Azərbaycan dili") {
        //                 setHpHeaders(dataSource.azerbaijani.homepage.headers)
        //                 setCategCards(dataSource.azerbaijani.homepage.category_cards)
        //                 setBrandCards(dataSource.azerbaijani.homepage.brand_cards)
        //                 // setDiscntCards(dataSource.azerbaijani.homepage.discount_cards)
        //                 // console.log(hpHeaders[1], categCards, brandCards, discntCards)
        //             } else if (languageData.value == "Türkçe") {
        //                 setHpHeaders(dataSource.turkish.homepage.headers)
        //                 setCategCards(dataSource.turkish.homepage.category_cards)
        //                 setBrandCards(dataSource.turkish.homepage.brand_cards)
        //                 // setDiscntCards(dataSource.turkish.homepage.discount_cards)
        //                 // console.log(hpHeaders[1], categCards, brandCards, discntCards)
        //             }
        //         })
        //     }, []
        // )

        // filterCards.map(
        //     (items, index) => {console.log("element: ", items, ", ", "id: ", index)}
        // )
        // console.log(filterCards.length)

        // const filterCards = useRef([])
        // const fcArray = filterCards.current.querySelectorAll(".homepage__sections_container__cards")
        // fcArray.map(
        //     (item) => {console.log(item)}, []
        // )

        // useEffect(
        //     () => {
        //         const filterCards = document.querySelector(".homepage__sections_container__cards") // querySelectorAll
        //         console.log(filterCards)
        //     }, []
        // )



        // const filterCards = document.querySelectorAll(".homepage__sections_container__cards") // for transform effect to filterCards for carousel, fix this issue, useRef takes only 1 (last one)
        // useEffect(
        //     () => {
        //         function funcTest() {
        //             const filterCards = document.querySelectorAll(".homepage__sections_container__cards")
        //             console.log(filterCards)
        //         }
        //         // const filterCards = Array.from(document.querySelectorAll(".homepage__sections_container__cards"))
        //         // const filterCards = Array.from( document.querySelectorAll(`.${s.test123}`) )
        //         // className={s.classname} use querySelectorAll
        //         // filterCards.map(
        //         //     (element) => {
        //         //         console.log(element)
        //         //     }
        //         // )
        //     }, []
        // )
    }

    // BRANDS STATE
    const [currentIndexBrandState, setCurrentIndexBrandState] = useState(0)
    const [filterCardsBrandSTATE, setFilterCardsBrandSTATE] = useState([])
    // CLOTHING STATE
    const [currentIndexClothingState, setCurrentIndexClothingState] = useState(0)
    const [filterCardsClothingSTATE, setFilterCardsClothingSTATE] = useState([])
    // CATEGORIES STATE
    const [currentIndexCategoryState, setCurrentIndexCategoryState] = useState(0)
    const [filterCardsCategorySTATE, setFilterCardsCategorySTATE] = useState([])
    // // TOP RATED STATE
    const [currentIndexTopRatedState, setCurrentIndexTopRatedState] = useState(0)
    // const [filterCardsTopRatedSTATE, setFilterCardsTopRatedSTATE] = useState([])
    // // MOST REVIEW STATE
    const [currentIndexMostReviewState, setCurrentIndexMostReviewState] = useState(0)
    // const [filterCardsMostReviewSTATE, setFilterCardsMostReviewSTATE] = useState([])

    function funcTest() {
        // BRANDS
        const filterCards_Brand = Array.from(document.querySelectorAll(".additionalClassForBrands"))
        setFilterCardsBrandSTATE(filterCards_Brand)
        // CLOTHING
        const filterCards_Cloth = Array.from(document.querySelectorAll(".additionalClassForClothes"))
        setFilterCardsClothingSTATE(filterCards_Cloth)
        // CATEGORIES
        const filterCards_Categ = Array.from(document.querySelectorAll(".additionalClassForCategories"))
        setFilterCardsCategorySTATE(filterCards_Categ)
        // // TOP RATED
        // const filterCards_Top = Array.from(document.querySelectorAll(".additionalClassForTopRated"))
        // setFilterCardsTopRatedSTATE(filterCards_Top)
        // // MOST REVIEW
        // const filterCards_Most = Array.from(document.querySelectorAll(".additionalClassForMostReview"))
        // setFilterCardsMostReviewSTATE(filterCards_Most)
        
        
        // const filterCards_Categ = filterCards.slice(0, 12)
        // const filterCards_Brand = filterCards.slice(0, 12)
        // const brandsBtn_left = Array.from(document.querySelectorAll(`.${s.homepage__sections_topside__box_buttons}`))[2]
        // const brandsBtn_right = Array.from(document.querySelectorAll(`.${s.homepage__sections_topside__box_buttons}`))[3]
        // const categBtn_left = sectionsBtn[0]
        // const categBtn_right = sectionsBtn[1]
        // current index of section cards
        // var currentIndexCateg = 0
        // var currentIndexBrand = 0
        // spreading cards by their index numbers
        // filterCards_Categ.forEach(
        //     (element, index) => {
        //         element.style.transform = `translateX(${(index - currentIndexCateg) * 110}%)`
        //     }
        // )


        // BRANDS
        filterCards_Brand.forEach(
            (element, index) => {
                element.style.transform = `translateX(${(index - currentIndexBrandState) * 110}%)`
            }
        )
        // CLOTHING
        filterCards_Cloth.forEach(
            (element, index) => {
                element.style.transform = `translateX(${(index - currentIndexClothingState) * 110}%)`
            }
        )
        // CATEGORIES
        filterCards_Categ.forEach(
            (element, index) => {
                element.style.transform = `translateX(${(index - currentIndexCategoryState) * 110}%)`
            }
        )
        // // TOP RATED
        // filterCards_Top.forEach(
        //     (element, index) => {
        //         element.style.transform = `translateX(${(index - currentIndexTopRatedState) * 110}%)`
        //     }
        // )
        // // MOST REVIEW
        // filterCards_Most.forEach(
        //     (element, index) => {
        //         element.style.transform = `translateX(${(index - currentIndexMostReviewState) * 110}%)`
        //     }
        // )


        // console.log(currentIndexBrandState)
        // // events for carousel slider buttons
        // categBtn_left.addEventListener("click", () => {
        //     if(currentIndexCateg == 0) {
        //         currentIndexCateg = filterCards_Categ.length-1
        //     } else {
        //         currentIndexCateg--
        //     }
        //     // console.log(currentIndexCateg, "categories left button is working", filterCards_Categ.length)
        //     filterCards_Categ.forEach(
        //         (element, index) => {
        //             element.style.transform = `translateX(${(index - currentIndexCateg) * 110}%)`
        //         }
        //     )
        // })
        // categBtn_right.addEventListener("click", () => {
        //     if(currentIndexCateg == filterCards_Categ.length-1) {
        //         currentIndexCateg = 0
        //     } else {
        //         currentIndexCateg++
        //     }
        //     // console.log(currentIndexCateg, "categories right button is working", filterCards_Categ.length)
        //     filterCards_Categ.forEach(
        //         (element, index) => {
        //             element.style.transform = `translateX(${(index - currentIndexCateg) * 110}%)`
        //         }
        //     )
        // })
        // console.log("Categories: ", filterCards_Categ, ", ", "Brands: ", filterCards_Brand, filterCards_Categ)
        // console.log(categBtn_left, categBtn_right, brandsBtn_left, brandsBtn_right)
    }
    // use function in useEffect
    useEffect(
        () => {
            funcTest()
        }, []
    )

    { // useless codes
        // used ChatGPT -------------------------------------------------------------------------------> START ■
        // const [categoryLinksArraySTATE, setCategoryLinksArraySTATE] = useState([])
        // function generateCategories() {
        //     const categoryLinksArray = []
        //     // var myObject = {}
        //     // const cardsArray = []
        //     for(var i=1; i<=11; i++) {
        //         var nameCategory = "category_" + (("00" + i).slice(-3)) // pad the index with leading zeros
        //         var linkCategory = "./homepage assets/categories/" + i + ".png"
        //         // console.log(nameCategory, "—", linkCategory)
        //         // myObject[nameCategory] = linkCategory
        //         categoryLinksArray.push(linkCategory)
        //     }
        //     // console.log(myObject.category_001)
        //     // for (const names in myObject) {
        //     //     // console.log(names, myObject[names])
        //     //     cardsArray.push(
        //     //         <div className={s.homepage__categories_container__cards} key={i}>
        //     //             <img src={myObject[names]} alt={names} className={s.homepage__categories_container__cards_image} />
        //     //             <p className={s.homepage__categories_container__cards_title}> Groceries {console.log(i)} </p>
        //     //         </div>
        //     //     )
        //     // }
        //     setCategoryLinksArraySTATE(categoryLinksArray)
        // }
        // useEffect(
        //     () => {
        //         generateCategories()
        //     }, []
        // )
        // -------------------------------------------------------------------------------------------------
        // const images = {};
        // function importAll(r) {
        //     r.keys().forEach((key) => (images[key] = r(key)));
        // }
        // importAll(require.context("./path/to/images/directory", false, /\.png$/));
        // importAll(require.context("./hompage assets/categories", false, /\.png$/));
        // Now you can use images like this:
        // <img src={images["./image-01.png"]} alt="Image 01" />
        // used ChatGPT <------------------------------------------------------------------------------- END ■

        // <div className={s.homepage__sections_container__cards}>     {/* ref={filterCardsRef} */}
        //     <div className={s.homepage__sections_container__cards_image__content}>
        //         <img src={categ_001} alt="categ_001" className={s.homepage__sections_container__cards_image__content} />
        //     </div>
        //     <p className={s.homepage__sections_container__cards_title}> {languageData.category_cards[0]} </p>
        // </div>
        // {/* cards --- card-002 */}
        // <div className={s.homepage__sections_container__cards}>
        //     <div className={s.homepage__sections_container__cards_image__content}>
        //         <img src={categ_002} alt="categ_002" className={s.homepage__sections_container__cards_image__content} />
        //     </div>
        //     <p className={s.homepage__sections_container__cards_title}> {languageData.category_cards[1]} </p>
        // </div>
        // {/* cards --- card-003 */}
        // <div className={s.homepage__sections_container__cards}>
        //     <div className={s.homepage__sections_container__cards_image__content}>
        //         <img src={categ_003} alt="categ_003" className={s.homepage__sections_container__cards_image__content} />
        //     </div>
        //     <p className={s.homepage__sections_container__cards_title}> {languageData.category_cards[2]} </p>
        // </div>
        // {/* cards --- card-004 */}
        // <div className={s.homepage__sections_container__cards}>
        //     <div className={s.homepage__sections_container__cards_image__content}>
        //         <img src={categ_004} alt="categ_004" className={s.homepage__sections_container__cards_image__content} />
        //     </div>
        //     <p className={s.homepage__sections_container__cards_title}> {languageData.category_cards[3]} </p>
        // </div>
        // {/* cards --- card-005 */}
        // <div className={s.homepage__sections_container__cards}>
        //     <div className={s.homepage__sections_container__cards_image__content}>
        //         <img src={categ_005} alt="categ_005" className={s.homepage__sections_container__cards_image__content} />
        //     </div>
        //     <p className={s.homepage__sections_container__cards_title}> {languageData.category_cards[4]} </p>
        // </div>
        // {/* cards --- card-006 */}
        // <div className={s.homepage__sections_container__cards}>
        //     <div className={s.homepage__sections_container__cards_image__content}>
        //         <img src={categ_006} alt="categ_006" className={s.homepage__sections_container__cards_image__content} />
        //     </div>
        //     <p className={s.homepage__sections_container__cards_title}> {languageData.category_cards[5]} </p>
        // </div>
        // {/* cards --- card-007 */}
        // <div className={s.homepage__sections_container__cards}>
        //     <div className={s.homepage__sections_container__cards_image__content}>
        //         <img src={categ_007} alt="categ_007" className={s.homepage__sections_container__cards_image__content} />
        //     </div>
        //     <p className={s.homepage__sections_container__cards_title}> {languageData.category_cards[6]} </p>
        // </div>
        // {/* cards --- card-008 */}
        // <div className={s.homepage__sections_container__cards}>
        //     <div className={s.homepage__sections_container__cards_image__content}>
        //         <img src={categ_008} alt="categ_008" className={s.homepage__sections_container__cards_image__content} />
        //     </div>
        //     <p className={s.homepage__sections_container__cards_title}> {languageData.category_cards[7]} </p>
        // </div>
        // {/* cards --- card-009 */}
        // <div className={s.homepage__sections_container__cards}>
        //     <div className={s.homepage__sections_container__cards_image__content}>
        //         <img src={categ_009} alt="categ_009" className={s.homepage__sections_container__cards_image__content} />
        //     </div>
        //     <p className={s.homepage__sections_container__cards_title}> {languageData.category_cards[8]} </p>
        // </div>
        // {/* cards --- card-010 */}
        // <div className={s.homepage__sections_container__cards}>
        //     <div className={s.homepage__sections_container__cards_image__content}>
        //         <img src={categ_010} alt="categ_010" className={s.homepage__sections_container__cards_image__content} />
        //     </div>
        //     <p className={s.homepage__sections_container__cards_title}> {languageData.category_cards[9]} </p>
        // </div>
        // {/* cards --- card-011 */}
        // <div className={s.homepage__sections_container__cards}>
        //     <div className={s.homepage__sections_container__cards_image__content}>
        //         <img src={categ_011} alt="categ_011" className={s.homepage__sections_container__cards_image__content} />
        //     </div>
        //     <p className={s.homepage__sections_container__cards_title}> {languageData.category_cards[10]} </p>
        // </div>

        // --------------------> carousel category: 4x
        // electronics   <i class="fa-solid fa-microchip fa-1x"></i>
        // jewelery   <i class="fa-solid fa-gem fa-1x"></i>
        // men's clothing   <i class="fa-solid fa-mars fa-1x"></i>
        // women's clothing   <i class="fa-solid fa-venus fa-1x"></i>
        // --------------------> most review products: 10x
        // products with rating count
        // --------------------> most rated products: 10x
        // products with rating rate
        // --------------------> brands: 12x
        // Fjallraven - img imported
        // John Hardy - img imported
        // WD - img imported
        // SanDisk - img imported
        // Silicon Power - img imported
        // Acer - img imported
        // Samsung - img imported
        // BIYLACLESEN - img imported
        // Lock and Love - img imported
        // MBJ - img imported
        // Opna - img imported
        // DANVOUY - img imported
        // --------------------> clothing: 5x
        // jacket   +
        // coats   +
        // sleeve   +
        // shirt   +
        // casual   +
    }


// -----------------------> NOTE FOR AN ISSUE: IN TOPRATED & MOST SECTIONS MAKE CONDITION, IF SAME RATE/COUNT WILL REPEAT, CHECK ID MUST BE DIFFERENT ! <------------- //
    return (
        <main className={s.homepage}>
            {/* SECTION: BRANDS */}
            <section className={s.homepage__sections}>
                {/* container which holds header and buttons */}
                <div className={s.homepage__sections_topside}>
                    <h3 className={s.homepage__sections_topside__header}> {languageData.headers[0]} </h3>
                    <span className={s.homepage__sections_topside__box}>
                        <button className={s.homepage__sections_topside__box_buttons} id={s.categ__arrow_left} onClick={
                            () => {
                                if(currentIndexBrandState == 0) {
                                    // currentIndexBrandState = filterCardsBrandSTATE.length-1
                                    setCurrentIndexBrandState(filterCardsBrandSTATE.length-1)
                                    var tempValueOfCurrentIndex = filterCardsBrandSTATE.length-1
                                } else {
                                    // currentIndexBrandState--
                                    setCurrentIndexBrandState(currentIndexBrandState-1)
                                    var tempValueOfCurrentIndex = currentIndexBrandState-1
                                }
                                // console.log(currentIndexBrand, "brands left button is working", filterCards_Brand.length)
                                filterCardsBrandSTATE.forEach(
                                    (element, index) => {
                                        element.style.transform = `translateX(${(index - tempValueOfCurrentIndex) * 110}%)`
                                    }
                                )
                                // console.log(currentIndexBrandState)
                            }
                        }> ◄ </button>
                        <button className={s.homepage__sections_topside__box_buttons} id={s.categ__arrow_right} onClick={
                            () => {
                                if(currentIndexBrandState == filterCardsBrandSTATE.length-1) {
                                    // currentIndexBrandState = 0
                                    setCurrentIndexBrandState(0)
                                    var tempValueOfCurrentIndex = 0
                                } else {
                                    // currentIndexBrandState++
                                    setCurrentIndexBrandState(currentIndexBrandState+1)
                                    var tempValueOfCurrentIndex = currentIndexBrandState+1
                                }
                                // console.log(currentIndexBrand, "brands right button is working", filterCards_Brand.length)
                                filterCardsBrandSTATE.forEach(
                                    (element, index) => {
                                        element.style.transform = `translateX(${(index - tempValueOfCurrentIndex) * 110}%)`
                                    }
                                )
                                // console.log(currentIndexBrandState)
                            }
                        }> ► </button>
                    </span>
                </div>

                <div className={s.homepage__sections_container}>
                    <Link to="/products" className={`${s.homepage__sections_container__cards} additionalClassForBrands`} onClick={
                        () => {dispatch(setCurrentSearchValue(dataSource.english.homepage.brand_cards[0]))}
                    }>     {/* ref={filterCardsRef} */}
                        <div className={s.homepage__sections_container__cards_image__content}>
                            <img src={brands_1} alt="brand-01" className={s.homepage__sections_container__cards_image__content} />
                        </div>
                        <p className={s.homepage__sections_container__cards_title}> {languageData.brand_cards[0]} </p>
                    </Link>
                    <Link to="/products" className={`${s.homepage__sections_container__cards} additionalClassForBrands`} onClick={
                        () => {dispatch(setCurrentSearchValue(dataSource.english.homepage.brand_cards[1]))}
                    }>     {/* ref={filterCardsRef} */}
                        <div className={s.homepage__sections_container__cards_image__content}>
                            <img src={brands_2} alt="brand-02" className={s.homepage__sections_container__cards_image__content} />
                        </div>
                        <p className={s.homepage__sections_container__cards_title}> {languageData.brand_cards[1]} </p>
                    </Link>
                    <Link to="/products" className={`${s.homepage__sections_container__cards} additionalClassForBrands`} onClick={
                        () => {dispatch(setCurrentSearchValue(dataSource.english.homepage.brand_cards[2]))}
                    }>     {/* ref={filterCardsRef} */}
                        <div className={s.homepage__sections_container__cards_image__content}>
                            <img src={brands_3} alt="brand-03" className={s.homepage__sections_container__cards_image__content} />
                        </div>
                        <p className={s.homepage__sections_container__cards_title}> {languageData.brand_cards[2]} </p>
                    </Link>
                    <Link to="/products" className={`${s.homepage__sections_container__cards} additionalClassForBrands`} onClick={
                        () => {dispatch(setCurrentSearchValue(dataSource.english.homepage.brand_cards[3]))}
                    }>     {/* ref={filterCardsRef} */}
                        <div className={s.homepage__sections_container__cards_image__content}>
                            <img src={brands_4} alt="brand-04" className={s.homepage__sections_container__cards_image__content} />
                        </div>
                        <p className={s.homepage__sections_container__cards_title}> {languageData.brand_cards[3]} </p>
                    </Link>
                    <Link to="/products" className={`${s.homepage__sections_container__cards} additionalClassForBrands`} onClick={
                        () => {dispatch(setCurrentSearchValue(dataSource.english.homepage.brand_cards[4]))}
                    }>     {/* ref={filterCardsRef} */}
                        <div className={s.homepage__sections_container__cards_image__content}>
                            <img src={brands_5} alt="brand-05" className={s.homepage__sections_container__cards_image__content} />
                        </div>
                        <p className={s.homepage__sections_container__cards_title}> {languageData.brand_cards[4]} </p>
                    </Link>
                    <Link to="/products" className={`${s.homepage__sections_container__cards} additionalClassForBrands`} onClick={
                        () => {dispatch(setCurrentSearchValue(dataSource.english.homepage.brand_cards[5]))}
                    }>     {/* ref={filterCardsRef} */}
                        <div className={s.homepage__sections_container__cards_image__content}>
                            <img src={brands_6} alt="brand-06" className={s.homepage__sections_container__cards_image__content} />
                        </div>
                        <p className={s.homepage__sections_container__cards_title}> {languageData.brand_cards[5]} </p>
                    </Link>
                    <Link to="/products" className={`${s.homepage__sections_container__cards} additionalClassForBrands`} onClick={
                        () => {dispatch(setCurrentSearchValue(dataSource.english.homepage.brand_cards[6]))}
                    }>     {/* ref={filterCardsRef} */}
                        <div className={s.homepage__sections_container__cards_image__content}>
                            <img src={brands_7} alt="brand-07" className={s.homepage__sections_container__cards_image__content} />
                        </div>
                        <p className={s.homepage__sections_container__cards_title}> {languageData.brand_cards[6]} </p>
                    </Link>
                    <Link to="/products" className={`${s.homepage__sections_container__cards} additionalClassForBrands`} onClick={
                        () => {dispatch(setCurrentSearchValue(dataSource.english.homepage.brand_cards[7]))}
                    }>     {/* ref={filterCardsRef} */}
                        <div className={s.homepage__sections_container__cards_image__content}>
                            <img src={brands_8} alt="brand-08" className={s.homepage__sections_container__cards_image__content} />
                        </div>
                        <p className={s.homepage__sections_container__cards_title}> {languageData.brand_cards[7]} </p>
                    </Link>
                    <Link to="/products" className={`${s.homepage__sections_container__cards} additionalClassForBrands`} onClick={
                        () => {dispatch(setCurrentSearchValue(dataSource.english.homepage.brand_cards[8]))}
                    }>     {/* ref={filterCardsRef} */}
                        <div className={s.homepage__sections_container__cards_image__content}>
                            <img src={brands_9} alt="brand-09" className={s.homepage__sections_container__cards_image__content} />
                        </div>
                        <p className={s.homepage__sections_container__cards_title}> {languageData.brand_cards[8]} </p>
                    </Link>
                    <Link to="/products" className={`${s.homepage__sections_container__cards} additionalClassForBrands`} onClick={
                        () => {dispatch(setCurrentSearchValue(dataSource.english.homepage.brand_cards[9]))}
                    }>     {/* ref={filterCardsRef} */}
                        <div className={s.homepage__sections_container__cards_image__content}>
                            <img src={brands_10} alt="brand-10" className={s.homepage__sections_container__cards_image__content} />
                        </div>
                        <p className={s.homepage__sections_container__cards_title}> {languageData.brand_cards[9]} </p>
                    </Link>
                    <Link to="/products" className={`${s.homepage__sections_container__cards} additionalClassForBrands`} onClick={
                        () => {dispatch(setCurrentSearchValue(dataSource.english.homepage.brand_cards[10]))}
                    }>     {/* ref={filterCardsRef} */}
                        <div className={s.homepage__sections_container__cards_image__content}>
                            <img src={brands_11} alt="brand-11" className={s.homepage__sections_container__cards_image__content} />
                        </div>
                        <p className={s.homepage__sections_container__cards_title}> {languageData.brand_cards[10]} </p>
                    </Link>
                    <Link to="/products" className={`${s.homepage__sections_container__cards} additionalClassForBrands`} onClick={
                        () => {dispatch(setCurrentSearchValue(dataSource.english.homepage.brand_cards[11]))}
                    }>     {/* ref={filterCardsRef} */}
                        <div className={s.homepage__sections_container__cards_image__content}>
                            <img src={brands_12} alt="brand-12" className={s.homepage__sections_container__cards_image__content} />
                        </div>
                        <p className={s.homepage__sections_container__cards_title}> {languageData.brand_cards[11]} </p>
                    </Link>
                </div>
            </section>

            {/* SECTION: CLOTHING */}
            <section className={s.homepage__sections}>
                {/* container which holds header and buttons */}
                <div className={s.homepage__sections_topside}>
                    <h3 className={s.homepage__sections_topside__header}> {languageData.headers[1]} </h3>
                    <span className={s.homepage__sections_topside__box}>
                        <button className={s.homepage__sections_topside__box_buttons} id={s.categ__arrow_left} onClick={
                            () => {
                                if(currentIndexClothingState == 0) {
                                    // currentIndexBrandState = filterCardsBrandSTATE.length-1
                                    setCurrentIndexClothingState(filterCardsClothingSTATE.length-1)
                                    var tempValueOfCurrentIndex = filterCardsClothingSTATE.length-1
                                } else {
                                    // currentIndexBrandState--
                                    setCurrentIndexClothingState(currentIndexClothingState-1)
                                    var tempValueOfCurrentIndex = currentIndexClothingState-1
                                }
                                // console.log(currentIndexBrand, "brands left button is working", filterCards_Brand.length)
                                filterCardsClothingSTATE.forEach(
                                    (element, index) => {
                                        element.style.transform = `translateX(${(index - tempValueOfCurrentIndex) * 110}%)`
                                    }
                                )
                                // console.log(currentIndexBrandState)
                            }
                        }> ◄ </button>
                        <button className={s.homepage__sections_topside__box_buttons} id={s.categ__arrow_right} onClick={
                            () => {
                                if(currentIndexClothingState == filterCardsClothingSTATE.length-1) {
                                    // currentIndexBrandState = 0
                                    setCurrentIndexClothingState(0)
                                    var tempValueOfCurrentIndex = 0
                                } else {
                                    // currentIndexBrandState++
                                    setCurrentIndexClothingState(currentIndexClothingState+1)
                                    var tempValueOfCurrentIndex = currentIndexClothingState+1
                                }
                                // console.log(currentIndexBrand, "brands right button is working", filterCards_Brand.length)
                                filterCardsClothingSTATE.forEach(
                                    (element, index) => {
                                        element.style.transform = `translateX(${(index - tempValueOfCurrentIndex) * 110}%)`
                                    }
                                )
                                // console.log(currentIndexBrandState)
                            }
                        }> ► </button>
                    </span>
                </div>

                <div className={s.homepage__sections_container}>   {/* container which holds cards */}
                    <Link to="/products" className={`${s.homepage__sections_container__cards} additionalClassForClothes`} onClick={
                        () => {dispatch(setCurrentSearchValue(dataSource.english.homepage.clothing_cards[0]))}
                    }>
                        <div className={s.homepage__sections_container__cards_image__content}>
                            <img src={cloth_5} alt={"cloth-01"} className={s.homepage__sections_container__cards_image__content} />
                        </div>
                        <p className={s.homepage__sections_container__cards_title}> {languageData.clothing_cards[0]} </p>
                    </Link>
                    <Link to="/products" className={`${s.homepage__sections_container__cards} additionalClassForClothes`} onClick={
                        () => {dispatch(setCurrentSearchValue(dataSource.english.homepage.clothing_cards[1]))}
                    }>
                        <div className={s.homepage__sections_container__cards_image__content}>
                            <img src={cloth_2} alt={"cloth-02"} className={s.homepage__sections_container__cards_image__content} />
                        </div>
                        <p className={s.homepage__sections_container__cards_title}> {languageData.clothing_cards[1]} </p>
                    </Link>
                    <Link to="/products" className={`${s.homepage__sections_container__cards} additionalClassForClothes`} onClick={
                        () => {dispatch(setCurrentSearchValue(dataSource.english.homepage.clothing_cards[2]))}
                    }>
                        <div className={s.homepage__sections_container__cards_image__content}>
                            <img src={cloth_3} alt={"cloth-03"} className={s.homepage__sections_container__cards_image__content} />
                        </div>
                        <p className={s.homepage__sections_container__cards_title}> {languageData.clothing_cards[2]} </p>
                    </Link>
                    <Link to="/products" className={`${s.homepage__sections_container__cards} additionalClassForClothes`} onClick={
                        () => {dispatch(setCurrentSearchValue(dataSource.english.homepage.clothing_cards[3]))}
                    }>
                        <div className={s.homepage__sections_container__cards_image__content}>
                            <img src={cloth_4} alt={"cloth-04"} className={s.homepage__sections_container__cards_image__content} />
                        </div>
                        <p className={s.homepage__sections_container__cards_title}> {languageData.clothing_cards[3]} </p>
                    </Link>
                    <Link to="/products" className={`${s.homepage__sections_container__cards} additionalClassForClothes`} onClick={
                        () => {dispatch(setCurrentSearchValue(dataSource.english.homepage.clothing_cards[4]))}
                    }>
                        <div className={s.homepage__sections_container__cards_image__content}>
                            <img src={cloth_1} alt={"cloth-05"} className={s.homepage__sections_container__cards_image__content} />
                        </div>
                        <p className={s.homepage__sections_container__cards_title}> {languageData.clothing_cards[4]} </p>
                    </Link>
                </div>
            </section>

            {/* SECTION: CATEGORIES */}
            <section className={s.homepage__sections}>
                <div className={s.homepage__sections_topside}>
                    <h3 className={s.homepage__sections_topside__header}> {languageData.headers[2]} </h3>
                    <span className={s.homepage__sections_topside__box}>
                        <button className={s.homepage__sections_topside__box_buttons} id={s.categ__arrow_left} onClick={
                            () => {
                                // if(currentIndexBrandState == 0) {
                                //     // currentIndexBrandState = filterCardsBrandSTATE.length-1
                                //     setCurrentIndexBrandState(filterCardsBrandSTATE.length-1)
                                //     var tempValueOfCurrentIndex = filterCardsBrandSTATE.length-1
                                // } else {
                                //     // currentIndexBrandState--
                                //     setCurrentIndexBrandState(currentIndexBrandState-1)
                                //     var tempValueOfCurrentIndex = currentIndexBrandState-1
                                // }
                                // // console.log(currentIndexBrand, "brands left button is working", filterCards_Brand.length)
                                // filterCardsBrandSTATE.forEach(
                                //     (element, index) => {
                                //         element.style.transform = `translateX(${(index - tempValueOfCurrentIndex) * 110}%)`
                                //     }
                                // )
                                // // console.log(currentIndexBrandState)
                            }
                        }> ◄ </button>
                        <button className={s.homepage__sections_topside__box_buttons} id={s.categ__arrow_right} onClick={
                            () => {
                                // if(currentIndexBrandState == filterCardsBrandSTATE.length-1) {
                                //     // currentIndexBrandState = 0
                                //     setCurrentIndexBrandState(0)
                                //     var tempValueOfCurrentIndex = 0
                                // } else {
                                //     // currentIndexBrandState++
                                //     setCurrentIndexBrandState(currentIndexBrandState+1)
                                //     var tempValueOfCurrentIndex = currentIndexBrandState+1
                                // }
                                // // console.log(currentIndexBrand, "brands right button is working", filterCards_Brand.length)
                                // filterCardsBrandSTATE.forEach(
                                //     (element, index) => {
                                //         element.style.transform = `translateX(${(index - tempValueOfCurrentIndex) * 110}%)`
                                //     }
                                // )
                                // // console.log(currentIndexBrandState)
                            }
                        }> ► </button>
                    </span>
                </div>
                <div className={s.homepage__sections_container}>
                    <Link to="/products" className={`${s.homepage__sections_container__cards} additionalClassForCategories`} onClick={
                        () => {dispatch(setCurrentSearchValue(dataSource.english.homepage.category_cards[0]))}
                    }>     {/* ref={filterCardsRef} */}
                        <div className={s.homepage__sections_container__cards_image__content}>
                            {/* <img src={cloth_1} alt={"category-01"} className={s.homepage__sections_container__cards_image__content} /> */}
                            <i class="fa-solid fa-microchip fa-10x" style={{
                                position: "absolute", 
                                opacity: "0.8", 
                                justifySelf: "center", 
                                alignSelf: "center", 
                                left: "50%", 
                                top: "40%", 
                                transform: "translate(-50%, -50%)"
                                }}></i>
                        </div>
                        <p className={s.homepage__sections_container__cards_title}> {languageData.category_cards[0]} </p>
                    </Link>
                    <Link to="/products" className={`${s.homepage__sections_container__cards} additionalClassForCategories`} onClick={
                        () => {dispatch(setCurrentSearchValue(dataSource.english.homepage.category_cards[1]))}
                    }>     {/* ref={filterCardsRef} */}
                        <div className={s.homepage__sections_container__cards_image__content}>
                            {/* <img src={cloth_1} alt={"category-01"} className={s.homepage__sections_container__cards_image__content} /> */}
                            <i class="fa-solid fa-gem fa-10x" style={{
                                position: "absolute", 
                                opacity: "0.8", 
                                justifySelf: "center", 
                                alignSelf: "center", 
                                left: "50%", 
                                top: "40%", 
                                transform: "translate(-50%, -50%)"
                                }}></i>
                        </div>
                        <p className={s.homepage__sections_container__cards_title}> {languageData.category_cards[1]} </p>
                    </Link>
                    <Link to="/products" className={`${s.homepage__sections_container__cards} additionalClassForCategories`} onClick={
                        () => {dispatch(setCurrentSearchValue(dataSource.english.homepage.category_cards[2]))}
                    }>     {/* ref={filterCardsRef} */}
                        <div className={s.homepage__sections_container__cards_image__content}>
                            {/* <img src={cloth_1} alt={"category-01"} className={s.homepage__sections_container__cards_image__content} /> */}
                            <i class="fa-solid fa-mars fa-10x" style={{
                                position: "absolute", 
                                opacity: "0.8", 
                                justifySelf: "center", 
                                alignSelf: "center", 
                                left: "50%", 
                                top: "40%", 
                                transform: "translate(-50%, -50%)"
                                }}></i>
                        </div>
                        <p className={s.homepage__sections_container__cards_title}> {languageData.category_cards[2]} </p>
                    </Link>
                    <Link to="/products" className={`${s.homepage__sections_container__cards} additionalClassForCategories`} onClick={
                        () => {dispatch(setCurrentSearchValue(dataSource.english.homepage.category_cards[3]))}
                    }>     {/* ref={filterCardsRef} */}
                        <div className={s.homepage__sections_container__cards_image__content}>
                            {/* <img src={cloth_1} alt={"category-01"} className={s.homepage__sections_container__cards_image__content} /> */}
                            <i class="fa-solid fa-venus fa-10x" style={{
                                position: "absolute", 
                                opacity: "0.8", 
                                justifySelf: "center", 
                                alignSelf: "center", 
                                left: "50%", 
                                top: "40%", 
                                transform: "translate(-50%, -50%)"
                                }}></i>
                        </div>
                        <p className={s.homepage__sections_container__cards_title}> {languageData.category_cards[3]} </p>
                    </Link>
                </div>
            </section>

            {/* SECTION: TOP RATED */}
            <section className={s.homepage__sections}>
                <div className={s.homepage__sections_topside}>
                    <h3 className={s.homepage__sections_topside__header}> {languageData.headers[3]} </h3>
                    <span className={s.homepage__sections_topside__box}>
                        <button className={s.homepage__sections_topside__box_buttons} id={s.categ__arrow_left} onClick={
                            () => {
                                var topRatedCards = document.querySelectorAll(".additionalClassForTopRated")
                                if(currentIndexTopRatedState == 0) {
                                    // currentIndexTopRatedState = topRatesArrSTATE.length-1
                                    setCurrentIndexTopRatedState(topRatesArrSTATE.length-1)
                                    var tempValueOfCurrentIndex = topRatesArrSTATE.length-1
                                } else {
                                    // currentIndexTopRatedState--
                                    setCurrentIndexTopRatedState(currentIndexTopRatedState-1)
                                    var tempValueOfCurrentIndex = currentIndexTopRatedState-1
                                }
                                // console.log(currentIndexBrand, "brands left button is working", filterCards_Brand.length)
                                topRatedCards.forEach(
                                    (element, index) => {
                                        element.style.transform = `translateX(${(index - tempValueOfCurrentIndex) * 110}%)`
                                    }
                                )
                                // console.log(currentIndexTopRatedState)
                            }
                        }> ◄ </button>
                        <button className={s.homepage__sections_topside__box_buttons} id={s.categ__arrow_right} onClick={
                            () => {
                                var topRatedCards = document.querySelectorAll(".additionalClassForTopRated")
                                if(currentIndexTopRatedState == topRatesArrSTATE.length-1) {
                                    // currentIndexTopRatedState = 0
                                    setCurrentIndexTopRatedState(0)
                                    var tempValueOfCurrentIndex = 0
                                } else {
                                    // currentIndexTopRatedState++
                                    setCurrentIndexTopRatedState(currentIndexTopRatedState+1)
                                    var tempValueOfCurrentIndex = currentIndexTopRatedState+1
                                }
                                // console.log(currentIndexBrand, "brands right button is working", filterCards_Brand.length)
                                topRatedCards.forEach(
                                    (element, index) => {
                                        element.style.transform = `translateX(${(index - tempValueOfCurrentIndex) * 110}%)`
                                    }
                                )
                                // console.log(currentIndexTopRatedState)
                            }
                        }> ► </button>
                    </span>
                </div>
                <div className={s.homepage__sections_container}>
                    {
                        topRatesArrSTATE.map(
                            (ratingRate, index) => {
                                for(var x=0; x<productsArraySTATE.length-1; x++) {
                                    if(productsArraySTATE[x].rating.rate == ratingRate) {
                                        return (
                                            <Link to={"/products/item_view_id=" + productsArraySTATE[x].id} 
                                            className={`${s.homepage__sections_container__cards} additionalClassForTopRated`} 
                                            key={index} 
                                            style={{
                                                transform: `translateX(${(index - currentIndexTopRatedState) * 110}%)`
                                            }} onClick={
                                                () => {
                                                    {dispatch(setCurrentProduct({
                                                        id: productsArraySTATE[x].id,
                                                        image: productsArraySTATE[x].image,
                                                        title: productsArraySTATE[x].title,
                                                        category: productsArraySTATE[x].category,
                                                        price: productsArraySTATE[x].price,
                                                        rating: productsArraySTATE[x].rating.rate,
                                                        desc: productsArraySTATE[x].description
                                                    }))}
                                                }
                                            }>
                                                <div className={s.homepage__sections_container__cards_image__content}>
                                                    <img src={productsArraySTATE[x].image} alt={productsArraySTATE[x].id} className={s.homepage__sections_container__cards_image__content} />
                                                </div>
                                                <p className={s.homepage__sections_container__cards_title}> {productsArraySTATE[x].rating.rate} point </p>
                                            </Link>
                                        )
                                    }
                                }
                            }
                        )
                    }
                </div>
            </section>

            {/* SECTION: MOST REVIEW */}
            <section className={s.homepage__sections}>
                <div className={s.homepage__sections_topside}>
                    <h3 className={s.homepage__sections_topside__header}> {languageData.headers[4]} </h3>
                    <span className={s.homepage__sections_topside__box}>
                        <button className={s.homepage__sections_topside__box_buttons} id={s.categ__arrow_left} onClick={
                            () => {
                                var mostReviewCards = document.querySelectorAll(".additionalClassForMostReview")
                                if(currentIndexMostReviewState == 0) {
                                    // currentIndexMostReviewState = reviewCountArrSTATE.length-1
                                    setCurrentIndexMostReviewState(reviewCountArrSTATE.length-1)
                                    var tempValueOfCurrentIndex = reviewCountArrSTATE.length-1
                                } else {
                                    // currentIndexMostReviewState--
                                    setCurrentIndexMostReviewState(currentIndexMostReviewState-1)
                                    var tempValueOfCurrentIndex = currentIndexMostReviewState-1
                                }
                                // console.log(currentIndexBrand, "brands left button is working", filterCards_Brand.length)
                                mostReviewCards.forEach(
                                    (element, index) => {
                                        element.style.transform = `translateX(${(index - tempValueOfCurrentIndex) * 110}%)`
                                    }
                                )
                                // console.log(currentIndexMostReviewState)
                            }
                        }> ◄ </button>
                        <button className={s.homepage__sections_topside__box_buttons} id={s.categ__arrow_right} onClick={
                            () => {
                                var mostReviewCards = document.querySelectorAll(".additionalClassForMostReview")
                                if(currentIndexMostReviewState == reviewCountArrSTATE.length-1) {
                                    // currentIndexMostReviewState = 0
                                    setCurrentIndexMostReviewState(0)
                                    var tempValueOfCurrentIndex = 0
                                } else {
                                    // currentIndexMostReviewState++
                                    setCurrentIndexMostReviewState(currentIndexMostReviewState+1)
                                    var tempValueOfCurrentIndex = currentIndexMostReviewState+1
                                }
                                // console.log(currentIndexBrand, "brands right button is working", filterCards_Brand.length)
                                mostReviewCards.forEach(
                                    (element, index) => {
                                        element.style.transform = `translateX(${(index - tempValueOfCurrentIndex) * 110}%)`
                                    }
                                )
                                // console.log(currentIndexMostReviewState)
                            }
                        }> ► </button>
                    </span>
                </div>
                <div className={s.homepage__sections_container}>
                    {
                        reviewCountArrSTATE.map(
                            (ratingCount, index) => {
                                for(var x=0; x<productsArraySTATE.length-1; x++) {
                                    if(productsArraySTATE[x].rating.count == ratingCount) {
                                        return (
                                            <Link to={"/products/item_view_id=" + productsArraySTATE[x].id} 
                                            className={`${s.homepage__sections_container__cards} additionalClassForMostReview`} 
                                            key={index} 
                                            style={{
                                                transform: `translateX(${(index - currentIndexMostReviewState) * 110}%)`
                                            }} onClick={
                                                () => {
                                                    {dispatch(setCurrentProduct({
                                                        id: productsArraySTATE[x].id,
                                                        image: productsArraySTATE[x].image,
                                                        title: productsArraySTATE[x].title,
                                                        category: productsArraySTATE[x].category,
                                                        price: productsArraySTATE[x].price,
                                                        rating: productsArraySTATE[x].rating.rate,
                                                        desc: productsArraySTATE[x].description
                                                    }))}
                                                }
                                            }>
                                                <div className={s.homepage__sections_container__cards_image__content}>
                                                    <img src={productsArraySTATE[x].image} alt={productsArraySTATE[x].id} className={s.homepage__sections_container__cards_image__content} />
                                                </div>
                                                <p className={s.homepage__sections_container__cards_title}> {productsArraySTATE[x].rating.count} user rated </p>
                                            </Link>
                                        )
                                    }
                                }
                            }
                        )
                    }
                </div>
            </section>
        </main>
    )
}

export default Homepage