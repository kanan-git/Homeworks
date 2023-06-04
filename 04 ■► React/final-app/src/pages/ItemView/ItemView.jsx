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
import { BrowserRouter as Router, Switch, Route, Routes, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR 02 //
function ItemView() {
    // ...
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR 03 //
    // const [itemviewSTATE, setItemviewSTATE] = useState(dataSource.english.itemview)

    const languageData = useSelector((state) => state.language.currentLanguage.itemview)
    const productInfo = useSelector((state) => state.selectedProduct.productData)

    // useEffect(
    //     () => {
    //         return () => {
    //             var languageData = document.querySelector("#language")
    //             languageData.addEventListener("change", () => {
    //                 if (languageData.value == "English") {
    //                     setItemviewSTATE(dataSource.english.itemview)
    //                 } else if (languageData.value == "Azərbaycan dili") {
    //                     setItemviewSTATE(dataSource.azerbaijani.itemview)
    //                 } else if (languageData.value == "Türkçe") {
    //                     setItemviewSTATE(dataSource.turkish.itemview)
    //                 }
    //             })
    //         }
    //     }, []
    // )

    // console.log(productInfo)

    // function printRatingStars() {
    //     var starContainer = document.querySelector(`.${s.itemview__container_information__rating_stars}`)
    //     var starTags = productInfo.stars

    //     const parser = new DOMParser() // from ChatGPT
    //     const parsedHTML = parser.parseFromString(starTags, 'text/html')

    //     const htmlElement = parsedHTML.body.firstChild
        
    //     console.log(htmlElement)
    //     // console.log(productInfo.stars)
    //     // return productInfo.stars
    // }

    // useEffect(
    //     () => {
    //         printRatingStars()
    //     }, []
    // )

    // const [countOfFullStarsSTATE, setCountOfFullStarsSTATE] = useState()
    // const [countOfHalfStarsSTATE, setCountOfHalfStarsSTATE] = useState()
    // const [countOfEmptyStarsSTATE, setCountOfEmptyStarsSTATE] = useState()

    // function handleRatingStarsFromStore() {
    //     var rateOfProduct = productInfo.rating

    //     console.log(rateOfProduct)
        
    //     // const occurrencesFull = stringOfElement.split(targetOfFullStars).length-1
    //     // const occurrencesHalf = stringOfElement.split(targetOfHalfStars).length-1
    //     // const occurrencesEmpty = stringOfElement.split(targetOfEmptyStars).length-1

    //     // const countFull = occurrencesFull > 0 ? occurrencesFull : 0
    //     // const countHalf = occurrencesHalf > 0 ? occurrencesHalf : 0
    //     // const countEmpty = occurrencesEmpty > 0 ? occurrencesEmpty : 0

    //     // console.log(countFull, countHalf, countEmpty)
    //     // if(stringOfElement.includes(targetOfFullStars)) {
    //     //     console.log("full")
    //     // }
    //     // if(stringOfElement.includes(targetOfHalfStars)) {
    //     //     console.log("half")
    //     // }
    //     // if(stringOfElement.includes(targetOfEmptyStars)) {
    //     //     console.log("empty")
    //     // }

    //     // console.log(stringOfElement)
    // }
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR 04 //
    return (
        <main className={s.itemview}>
            <section className={s.itemview__container}>
                {/* <div className={s.itemview__container_thumbnails}>
                    <button className={s.itemview__container_thumbnails__buttons}>
                        <img src="#" alt="image-name1" className={s.itemview__container_thumbnails__buttons_content} />
                    </button>
                    <button className={s.itemview__container_thumbnails__buttons}>
                        <img src="#" alt="image-name2" className={s.itemview__container_thumbnails__buttons_content} />
                    </button>
                    <button className={s.itemview__container_thumbnails__buttons}>
                        <img src="#" alt="image-name3" className={s.itemview__container_thumbnails__buttons_content} />
                    </button>
                    <button className={s.itemview__container_thumbnails__buttons}>
                        <img src="#" alt="image-name4" className={s.itemview__container_thumbnails__buttons_content} />
                    </button>
                    <button className={s.itemview__container_thumbnails__buttons}>
                        <img src="#" alt="image-name5" className={s.itemview__container_thumbnails__buttons_content} />
                    </button>
                </div> */}
                <div className={s.itemview__container_bigframe}>
                    <img src={productInfo.image} alt="selected-img-name" className={s.itemview__container_bigframe__content} />
                </div>
                <div className={s.itemview__container_information}>
                    <h3 className={s.itemview__container_information__title}> {languageData[0]}: {productInfo.title} </h3>
                    <h6 className={s.itemview__container_information__category}> {languageData[1]}: {productInfo.category} </h6>
                    <p className={s.itemview__container_information__description}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, voluptates! </p>
                    <span className={s.itemview__container_information__rating}>
                        <span className={s.itemview__container_information__rating_stars}>
                            
                            {
                                productInfo.rating==5 && <>
                                    <i className='fa-solid fa-star fa-1x'></i>
                                    <i className='fa-solid fa-star fa-1x'></i>
                                    <i className='fa-solid fa-star fa-1x'></i>
                                    <i className='fa-solid fa-star fa-1x'></i>
                                    <i className='fa-solid fa-star fa-1x'></i>
                                </>
                            }
                            {
                                productInfo.rating>=4.5 && productInfo.rating<5 && <>
                                    <i className='fa-solid fa-star fa-1x'></i>
                                    <i className='fa-solid fa-star fa-1x'></i>
                                    <i className='fa-solid fa-star fa-1x'></i>
                                    <i className='fa-solid fa-star fa-1x'></i>
                                    <i className='fa-solid fa-star-half-stroke fa-1x'></i>
                                </>
                            }
                            {
                                productInfo.rating>=4 && productInfo.rating<4.5 && <>
                                    <i className='fa-solid fa-star fa-1x'></i>
                                    <i className='fa-solid fa-star fa-1x'></i>
                                    <i className='fa-solid fa-star fa-1x'></i>
                                    <i className='fa-solid fa-star fa-1x'></i>
                                    <i className='fa-regular fa-star fa-1x'></i>
                                </>
                            }
                            {
                                productInfo.rating>=3.5 && productInfo.rating<4 && <>
                                    <i className='fa-solid fa-star fa-1x'></i>
                                    <i className='fa-solid fa-star fa-1x'></i>
                                    <i className='fa-solid fa-star fa-1x'></i>
                                    <i className='fa-solid fa-star-half-stroke fa-1x'></i>
                                    <i className='fa-regular fa-star fa-1x'></i>
                                </>
                            }
                            {
                                productInfo.rating>=3 && productInfo.rating<3.5 && <>
                                    <i className='fa-solid fa-star fa-1x'></i>
                                    <i className='fa-solid fa-star fa-1x'></i>
                                    <i className='fa-solid fa-star fa-1x'></i>
                                    <i className='fa-regular fa-star fa-1x'></i>
                                    <i className='fa-regular fa-star fa-1x'></i>
                                </>
                            }
                            {
                                productInfo.rating>=2.5 && productInfo.rating<3 && <>
                                    <i className='fa-solid fa-star fa-1x'></i>
                                    <i className='fa-solid fa-star fa-1x'></i>
                                    <i className='fa-solid fa-star-half-stroke fa-1x'></i>
                                    <i className='fa-regular fa-star fa-1x'></i>
                                    <i className='fa-regular fa-star fa-1x'></i>
                                </>
                            }
                            {
                                productInfo.rating>=2 && productInfo.rating<2.5 && <>
                                    <i className='fa-solid fa-star fa-1x'></i>
                                    <i className='fa-solid fa-star fa-1x'></i>
                                    <i className='fa-regular fa-star fa-1x'></i>
                                    <i className='fa-regular fa-star fa-1x'></i>
                                    <i className='fa-regular fa-star fa-1x'></i>
                                </>
                            }
                            {
                                productInfo.rating>=1.5 && productInfo.rating<2 && <>
                                    <i className='fa-solid fa-star fa-1x'></i>
                                    <i className='fa-solid fa-star-half-stroke fa-1x'></i>
                                    <i className='fa-regular fa-star fa-1x'></i>
                                    <i className='fa-regular fa-star fa-1x'></i>
                                    <i className='fa-regular fa-star fa-1x'></i>
                                </>
                            }
                            {
                                productInfo.rating>=1 && productInfo.rating<1.5 && <>
                                    <i className='fa-solid fa-star fa-1x'></i>
                                    <i className='fa-regular fa-star fa-1x'></i>
                                    <i className='fa-regular fa-star fa-1x'></i>
                                    <i className='fa-regular fa-star fa-1x'></i>
                                    <i className='fa-regular fa-star fa-1x'></i>
                                </>
                            }
                            {
                                productInfo.rating>=0.5 && productInfo.rating<1 && <>
                                    <i className='fa-solid fa-star-half-stroke fa-1x'></i>
                                    <i className='fa-regular fa-star fa-1x'></i>
                                    <i className='fa-regular fa-star fa-1x'></i>
                                    <i className='fa-regular fa-star fa-1x'></i>
                                    <i className='fa-regular fa-star fa-1x'></i>
                                </>
                            }
                            {
                                productInfo.rating>=0 && productInfo.rating<0.5 && <>
                                    <i className='fa-regular fa-star fa-1x'></i>
                                    <i className='fa-regular fa-star fa-1x'></i>
                                    <i className='fa-regular fa-star fa-1x'></i>
                                    <i className='fa-regular fa-star fa-1x'></i>
                                    <i className='fa-regular fa-star fa-1x'></i>
                                </>
                            }

                        </span>
                        <b className={s.itemview__container_information__rating_point}>
                            {productInfo.rating} / 5
                        </b>
                    </span>
                    <strong className={s.itemview__container_information__price}> $ {productInfo.price} USD </strong>
                    <span className={s.itemview__container_information__buttons}>
                        <Link className={s.itemview__container_information__buttons_buy} to="/products/item_view/purchase_completed"> <i className='fa-regular fa-credit-card fa-1x'></i> {languageData[2]} </Link>
                        <button className={s.itemview__container_information__buttons_2fav}> <i className='fa-solid fa-heart fa-1x'></i> {languageData[3]} </button>
                        <button className={s.itemview__container_information__buttons_2fcart}> <i className='fa-solid fa-shopping-cart fa-1x'></i> {languageData[4]} </button>
                    </span>
                </div>

                {/* TEMPORARY TEXT - ABOUT WHAT INCLUDES THIS PAGE
                left side flexDirection column images scroll
                big screen images
                right side information:
                - title
                - category
                - rating data
                - price
                - purchase, add to cart & fav buttons
                - description */}
            </section>
        </main>
    )
}
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR 05 //
export default ItemView
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ ENDING LINE //