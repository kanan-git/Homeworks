import React from 'react'
import ReactDOM from "react-dom"
import s from './index.module.css'
import {dataSource} from '../../data/data-source'
import {useState, useEffect, useRef} from 'react'
import { useSelector } from 'react-redux'

// import categ_001 from './homepage assets/categories/1.png'
// import categ_002 from './homepage assets/categories/2.png'
// import categ_003 from './homepage assets/categories/3.png'
// import categ_004 from './homepage assets/categories/4.png'
// import categ_005 from './homepage assets/categories/5.png'
// import categ_006 from './homepage assets/categories/6.png'
// import categ_007 from './homepage assets/categories/7.png'
// import categ_008 from './homepage assets/categories/8.png'
// import categ_009 from './homepage assets/categories/9.png'
// import categ_010 from './homepage assets/categories/10.png'
// import categ_011 from './homepage assets/categories/11.png'

// import brands_001 from './homepage assets/brands/1.png'
// import brands_002 from './homepage assets/brands/2.png'
// import brands_003 from './homepage assets/brands/3.png'
// import brands_004 from './homepage assets/brands/4.png'
// import brands_005 from './homepage assets/brands/5.png'
// import brands_006 from './homepage assets/brands/6.png'
// import brands_007 from './homepage assets/brands/7.png'
// import brands_008 from './homepage assets/brands/8.png'
// import brands_009 from './homepage assets/brands/9.png'
// import brands_010 from './homepage assets/brands/10.png'
// import brands_011 from './homepage assets/brands/11.png'

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
    // states and variables
    const [hpHeaders, setHpHeaders] = useState(dataSource.english.homepage.headers)
    const [brandCards, setBrandCards] = useState(dataSource.english.homepage.brand_cards)
    const [clothCards, setClothCards] = useState(dataSource.english.homepage.clothing_cards)
    const [categCards, setCategCards] = useState(dataSource.english.homepage.category_cards)
    
    // const [discntCards, setDiscntCards] = useState(dataSource.english.homepage.discount_cards)

    const languageData = useSelector(
        (state) => state.language.currentLanguage.homepage
    )
    
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

    function funcTest() {
        // variables
        const filterCards = Array.from(document.querySelectorAll(`.${s.homepage__sections_container__cards}`))
        const filterCards_Categ = filterCards.slice(0, 11)
        const filterCards_Brand = filterCards.slice(11, 22)
        const sectionsBtn = Array.from(document.querySelectorAll(`.${s.homepage__sections_topside__box_buttons}`))
        const categBtn_left = sectionsBtn[0]
        const categBtn_right = sectionsBtn[1]
        const brandsBtn_left = sectionsBtn[2]
        const brandsBtn_right = sectionsBtn[3]
        // current index of section cards
        var currentIndexCateg = 0
        var currentIndexBrand = 0
        // spreading cards by their index numbers
        filterCards_Categ.forEach(
            (element, index) => {
                element.style.transform = `translateX(${(index - currentIndexCateg) * 110}%)`
            }
        )
        filterCards_Brand.forEach(
            (element, index) => {
                element.style.transform = `translateX(${(index - currentIndexBrand) * 110}%)`
            }
        )
        // events for carousel slider buttons
        categBtn_left.addEventListener("click", () => {
            if(currentIndexCateg == 0) {
                currentIndexCateg = filterCards_Categ.length-1
            } else {
                currentIndexCateg--
            }
            // console.log(currentIndexCateg, "categories left button is working", filterCards_Categ.length)
            filterCards_Categ.forEach(
                (element, index) => {
                    element.style.transform = `translateX(${(index - currentIndexCateg) * 110}%)`
                }
            )
        })
        categBtn_right.addEventListener("click", () => {
            if(currentIndexCateg == filterCards_Categ.length-1) {
                currentIndexCateg = 0
            } else {
                currentIndexCateg++
            }
            // console.log(currentIndexCateg, "categories right button is working", filterCards_Categ.length)
            filterCards_Categ.forEach(
                (element, index) => {
                    element.style.transform = `translateX(${(index - currentIndexCateg) * 110}%)`
                }
            )
        })
        brandsBtn_left.addEventListener("click", () => {
            if(currentIndexBrand == 0) {
                currentIndexBrand = filterCards_Brand.length-1
            } else {
                currentIndexBrand--
            }
            // console.log(currentIndexBrand, "brands left button is working", filterCards_Brand.length)
            filterCards_Brand.forEach(
                (element, index) => {
                    element.style.transform = `translateX(${(index - currentIndexBrand) * 110}%)`
                }
            )
        })
        brandsBtn_right.addEventListener("click", () => {
            if(currentIndexBrand == filterCards_Brand.length-1) {
                currentIndexBrand = 0
            } else {
                currentIndexBrand++
            }
            // console.log(currentIndexBrand, "brands right button is working", filterCards_Brand.length)
            filterCards_Brand.forEach(
                (element, index) => {
                    element.style.transform = `translateX(${(index - currentIndexBrand) * 110}%)`
                }
            )
        })
        // console.log("Categories: ", filterCards_Categ, ", ", "Brands: ", filterCards_Brand, filterCards_Categ)
        // console.log(categBtn_left, categBtn_right, brandsBtn_left, brandsBtn_right)
    }
    // use function in useEffect
    useEffect(
        () => {
            // funcTest()
        }, []
    )

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

    return (
        <main className={s.homepage}>
            {/* SECTION: BRANDS */}
            <section className={s.homepage__sections}>
                {/* container which holds header and buttons */}
                <div className={s.homepage__sections_topside}>
                    <h3 className={s.homepage__sections_topside__header}> {languageData.headers[0]} </h3>
                    <span className={s.homepage__sections_topside__box}>
                        <button className={s.homepage__sections_topside__box_buttons} id={s.categ__arrow_left}> ◄ </button>
                        <button className={s.homepage__sections_topside__box_buttons} id={s.categ__arrow_right}> ► </button>
                    </span>
                </div>

                {languageData.brand_cards.map(
                    (index) => {
                        return (
                            // container which holds cards
                            <div className={s.homepage__sections_container}>
                            {/* cards --- card-001 */}
                            <div className={s.homepage__sections_container__cards}>     {/* ref={filterCardsRef} */}
                                <div className={s.homepage__sections_container__cards_image__content}>
                                    <img src={brands_1} alt={languageData.brand_cards[index]} className={s.homepage__sections_container__cards_image__content} />
                                </div>
                                <p className={s.homepage__sections_container__cards_title}> {languageData.brand_cards[index]} </p>
                            </div>
                            </div>
                        )
                    }
                )}
            </section>

            {/* SECTION: CLOTHING */}
            <section className={s.homepage__sections}>
                {/* container which holds header and buttons */}
                <div className={s.homepage__sections_topside}>
                    <h3 className={s.homepage__sections_topside__header}> {languageData.headers[1]} </h3>
                    <span className={s.homepage__sections_topside__box}>
                        <button className={s.homepage__sections_topside__box_buttons} id={s.brand__arrow_left}> ◄ </button>
                        <button className={s.homepage__sections_topside__box_buttons} id={s.brand__arrow_right}> ► </button>
                    </span>
                </div>
                {/* container which holds cards */}
                <div className={s.homepage__sections_container}>
                    {/* cards --- card-001 */}
                    <div className={s.homepage__sections_container__cards}>
                        <div className={s.homepage__sections_container__cards_image__content}>
                            <img src={brands_001} alt="brands_001" className={s.homepage__sections_container__cards_image__content} />
                        </div>
                        <p className={s.homepage__sections_container__cards_title}> {languageData.brand_cards[0]} </p>
                    </div>
                    {/* cards --- card-002 */}
                    <div className={s.homepage__sections_container__cards}>
                        <div className={s.homepage__sections_container__cards_image__content}>
                            <img src={brands_002} alt="brands_002" className={s.homepage__sections_container__cards_image__content} />
                        </div>
                        <p className={s.homepage__sections_container__cards_title}> {languageData.brand_cards[1]} </p>
                    </div>
                    {/* cards --- card-003 */}
                    <div className={s.homepage__sections_container__cards}>
                        <div className={s.homepage__sections_container__cards_image__content}>
                            <img src={brands_003} alt="brands_003" className={s.homepage__sections_container__cards_image__content} />
                        </div>
                        <p className={s.homepage__sections_container__cards_title}> {languageData.brand_cards[2]} </p>
                    </div>
                    {/* cards --- card-004 */}
                    <div className={s.homepage__sections_container__cards}>
                        <div className={s.homepage__sections_container__cards_image__content}>
                            <img src={brands_004} alt="brands_004" className={s.homepage__sections_container__cards_image__content} />
                        </div>
                        <p className={s.homepage__sections_container__cards_title}> {languageData.brand_cards[3]} </p>
                    </div>
                    {/* cards --- card-005 */}
                    <div className={s.homepage__sections_container__cards}>
                        <div className={s.homepage__sections_container__cards_image__content}>
                            <img src={brands_005} alt="brands_005" className={s.homepage__sections_container__cards_image__content} />
                        </div>
                        <p className={s.homepage__sections_container__cards_title}> {languageData.brand_cards[4]} </p>
                    </div>
                    {/* cards --- card-006 */}
                    <div className={s.homepage__sections_container__cards}>
                        <div className={s.homepage__sections_container__cards_image__content}>
                            <img src={brands_006} alt="brands_006" className={s.homepage__sections_container__cards_image__content} />
                        </div>
                        <p className={s.homepage__sections_container__cards_title}> {languageData.brand_cards[5]} </p>
                    </div>
                    {/* cards --- card-007 */}
                    <div className={s.homepage__sections_container__cards}>
                        <div className={s.homepage__sections_container__cards_image__content}>
                            <img src={brands_007} alt="brands_007" className={s.homepage__sections_container__cards_image__content} />
                        </div>
                        <p className={s.homepage__sections_container__cards_title}> {languageData.brand_cards[6]} </p>
                    </div>
                    {/* cards --- card-008 */}
                    <div className={s.homepage__sections_container__cards}>
                        <div className={s.homepage__sections_container__cards_image__content}>
                            <img src={brands_008} alt="brands_008" className={s.homepage__sections_container__cards_image__content} />
                        </div>
                        <p className={s.homepage__sections_container__cards_title}> {languageData.brand_cards[7]} </p>
                    </div>
                    {/* cards --- card-009 */}
                    <div className={s.homepage__sections_container__cards}>
                        <div className={s.homepage__sections_container__cards_image__content}>
                            <img src={brands_009} alt="brands_009" className={s.homepage__sections_container__cards_image__content} />
                        </div>
                        <p className={s.homepage__sections_container__cards_title}> {languageData.brand_cards[8]} </p>
                    </div>
                    {/* cards --- card-010 */}
                    <div className={s.homepage__sections_container__cards}>
                        <div className={s.homepage__sections_container__cards_image__content}>
                            <img src={brands_010} alt="brands_010" className={s.homepage__sections_container__cards_image__content} />
                        </div>
                        <p className={s.homepage__sections_container__cards_title}> {languageData.brand_cards[9]} </p>
                    </div>
                    {/* cards --- card-011 */}
                    <div className={s.homepage__sections_container__cards}>
                        <div className={s.homepage__sections_container__cards_image__content}>
                            <img src={brands_011} alt="brands_011" className={s.homepage__sections_container__cards_image__content} />
                        </div>
                        <p className={s.homepage__sections_container__cards_title}> {languageData.brand_cards[10]} </p>
                    </div>
                    {/* cards --- card-011 */}
                    <div className={s.homepage__sections_container__cards}>
                        <div className={s.homepage__sections_container__cards_image__content}>
                            <img src={brands_012} alt="brands_012" className={s.homepage__sections_container__cards_image__content} />
                        </div>
                        <p className={s.homepage__sections_container__cards_title}> {languageData.brand_cards[10]} </p>
                    </div>
                </div>
            </section>

            {/* SECTION: CATEGORIES */}
            <section className={s.homepage__discount}>
            </section>

            {/* SECTION: TOP RATED */}
            

            {/* SECTION: MOST REVIEW */}

        </main>
    )
}

export default Homepage