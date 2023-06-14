import React from 'react'
import s from './index.module.css'
import {dataSource} from '../../data/data-source'
import {useState, useEffect, useRef} from 'react'
import { BrowserRouter as Router, Switch, Route, Routes, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentProduct } from '../../features/counter/selectedProduct'

function ItemView() {
    const languageData = useSelector((state) => state.language.currentLanguage.itemview)
    const productInfo = useSelector((state) => state.selectedProduct.productData)

    const dispatch = useDispatch()

    const [accessState, setAccessState] = useState("")
    useEffect(
        () => {
            if(JSON.parse(localStorage.getItem("isLogged")) == true) {
                var currentUserIs = JSON.parse(localStorage.getItem('signedUser'))
                var currentUserData = JSON.parse(localStorage.getItem(currentUserIs))
                if(currentUserData.budget_amount_from_creditcard >= productInfo.price) {
                    var access2purchCompleteComponent = "/products/item_view/purchase_completed"
                    setAccessState(access2purchCompleteComponent)
                } else {
                    var access2purchCompleteComponent = null
                    setAccessState(access2purchCompleteComponent)
                }
            }
        }, []
    )

    function onLoadButtonEffect() {
        if(JSON.parse(localStorage.getItem("isLogged")) == true) {
            JSON.parse(localStorage.getItem(JSON.parse(localStorage.getItem('signedUser')))).favorites.forEach(
                (elements) => {
                    if(JSON.parse(localStorage.getItem("isLogged")) == true) {
                        var favBtn = document.querySelector("#add2favBtnIV")
                        if(elements == productInfo.id) {
                            favBtn.style.backgroundColor = `var(--buttons-active-color)`
                            favBtn.style.color = `var(--link-active-color)`
                            // console.log(favBtn.style)
                        } else {
                            // do nothing
                        }
                        // console.log(elements, productInfo.id)
                    }
                }
            )
        }
    }
    // onLoadButtonEffect()

    function unFavorite(e) {
        e.preventDefault()

        if(JSON.parse(localStorage.getItem("isLogged")) == true) {
            var currentUserIs = JSON.parse(localStorage.getItem('signedUser'))
            var currentUserData = JSON.parse(localStorage.getItem(currentUserIs))
            var currentFavoritesArray = currentUserData.favorites
    
            var restOfProducts = []
            for(var j=0; j<currentFavoritesArray.length; j++) {
                if(productInfo.id == currentFavoritesArray[j]) {
                    // do nothing
                } else {
                    restOfProducts.push(currentFavoritesArray[j])
                }
            }
    
            for(var i=0; i<currentFavoritesArray.length; i++) {
                var status = false
                if(productInfo.id == currentFavoritesArray[i]) {
                    // console.log(productInfo.id)
                    // alert("Yup, you added this product to favorites before.")
                    e.target.style.backgroundColor = `var(--buttons-color)`
                    e.target.style.color = `var(--link-color)`
                    currentUserData.favorites = restOfProducts
                    localStorage.setItem(currentUserIs, JSON.stringify(currentUserData))
                    var status = true
                    break
                } else {
                    // do nothing
                }
            }
    
            if(status == true) {
                // do nothing for now
            } else {
                // alert("Nope, this product is not your favorite")
                currentUserData.favorites.push(productInfo.id)
                localStorage.setItem(currentUserIs, JSON.stringify(currentUserData))
                e.target.style.backgroundColor = `var(--buttons-active-color)`
                e.target.style.color = `var(--link-active-color)`
            }
        }
    }

    return (
        <main className={s.itemview} onMouseEnter={onLoadButtonEffect}>
            <section className={s.itemview__container}>
                <div className={s.itemview__container_bigframe}>
                    <img src={productInfo.image} alt="selected-img-name" className={s.itemview__container_bigframe__content} />
                </div>
                <div className={s.itemview__container_information}>
                    <h3 className={s.itemview__container_information__title}> {languageData[0]}: {productInfo.title} </h3>
                    <h6 className={s.itemview__container_information__category}> {languageData[1]}: {productInfo.category} </h6>
                    <p className={s.itemview__container_information__description}> {productInfo.desc} </p>
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
                        {JSON.parse(localStorage.getItem("isLogged")) && <Link className={s.itemview__container_information__buttons_buy} 
                        to={accessState} 
                        onClick={() => {
                                dispatch(setCurrentProduct({
                                title: productInfo.title,
                                category: productInfo.category,
                                price: productInfo.price,
                                desc: productInfo.desc
                            }))
                            var currentUserIs = JSON.parse(localStorage.getItem('signedUser'))
                            var currentUserData = JSON.parse(localStorage.getItem(currentUserIs))
                            if(currentUserData.budget_amount_from_creditcard - productInfo.price > 0) {
                                currentUserData.budget_amount_from_creditcard -= productInfo.price
                                localStorage.setItem(currentUserIs, JSON.stringify(currentUserData))
                                alert("Your order successully completed.")
                            } else {
                                alert("Oops. You don't have enough budget.")
                            }
                        }}>
                            <i className='fa-regular fa-credit-card fa-1x'></i> {languageData[2]}
                        </Link>}
                        {!JSON.parse(localStorage.getItem("isLogged")) && <Link to="/authentication_shopnet" className={s.itemview__container_information__buttons_buy}>
                            <i className='fa-regular fa-credit-card fa-1x'></i> {languageData[2]}
                        </Link>}



                        {JSON.parse(localStorage.getItem("isLogged")) && (
                            <button className={s.itemview__container_information__buttons_2fav} id="add2favBtnIV" onClick={unFavorite}>
                                <i className='fa-solid fa-heart fa-1x'></i> {languageData[3]}
                            </button>
                        )}
                        {!JSON.parse(localStorage.getItem("isLogged")) && (
                            <Link to="/authentication_shopnet" className={s.itemview__container_information__buttons_2fav} id="add2favBtnIV">
                                <i className='fa-solid fa-heart fa-1x'></i> {languageData[3]}
                            </Link>
                        )}



                        {JSON.parse(localStorage.getItem("isLogged")) && (
                            <button className={s.itemview__container_information__buttons_2fcart}>
                                <i className='fa-solid fa-shopping-cart fa-1x'></i> {languageData[4]}
                            </button>
                        )}
                        {!JSON.parse(localStorage.getItem("isLogged")) && (
                            <Link to="/authentication_shopnet" className={s.itemview__container_information__buttons_2fcart}>
                                <i className='fa-solid fa-shopping-cart fa-1x'></i> {languageData[4]}
                            </Link>
                        )}
                    </span>
                </div>
            </section>
        </main>
    )
}

export default ItemView