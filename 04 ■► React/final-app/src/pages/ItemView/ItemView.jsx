import React from 'react'
import s from './index.module.css'
import {dataSource} from '../../data/data-source'
import {useState, useEffect, useRef} from 'react'
import { BrowserRouter as Router, Switch, Route, Routes, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentProduct } from '../../features/counter/selectedProduct'
import { useNavigate } from 'react-router-dom'

function ItemView() {
    const navigate = useNavigate()

    const languageData = useSelector((state) => state.language.currentLanguage.itemview)
    const productInfo = useSelector((state) => state.selectedProduct.productData)

    const [favOrNotStatusSTATE, setFavOrNotStatusSTATE] = useState(false)
    const [cartOrNotStatusSTATE, setCartOrNotStatusSTATE] = useState(false)

    const [relatedSTATE, setRelatedSTATE] = useState([])
    async function fakeStoreAPI() {
        var request = await fetch("https://fakestoreapi.com/products")
        var result = await request.json()
        var counter4relatedProducts = 0
        var newArrayForRelatedSection = []
        for(var i=0; i<result.length-1; i++) {
            if(result[i].category == productInfo.category && result[i].id != productInfo.id) {
                newArrayForRelatedSection.push(result[i])
                // console.log(result[i])
                if(counter4relatedProducts == 3) {
                    break
                } else {
                    counter4relatedProducts++
                }
            }
        }
        setRelatedSTATE(newArrayForRelatedSection)
    }
    useEffect(
        () => {
            fakeStoreAPI()
        }, []
    )

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
                            // console.log(favOrNotStatusSTATE)
                        } else {
                            if(favOrNotStatusSTATE == true) {
                                favBtn.style.backgroundColor = `var(--buttons-active-color)`
                                favBtn.style.color = `var(--link-active-color)`
                            } else {
                                favBtn.style.backgroundColor = `var(--buttons-color)`
                                favBtn.style.color = `var(--link-color)`
                            }
                            // console.log(favOrNotStatusSTATE, productInfo.favOrNot)
                            // console.log(favOrNotStatusSTATE)
                        }
                        // console.log(elements, productInfo.id)
                    }
                }
            )
            JSON.parse(localStorage.getItem(JSON.parse(localStorage.getItem('signedUser')))).basket.forEach(
                (elements) => {
                    if(JSON.parse(localStorage.getItem("isLogged")) == true) {
                        var cartBtn = document.querySelector("#add2cartBtnIV")
                        if(elements == productInfo.id) {
                            cartBtn.style.backgroundColor = `var(--buttons-active-color)`
                            cartBtn.style.color = `var(--link-active-color)`
                            // console.log(favBtn.style)
                            // console.log(favOrNotStatusSTATE)
                        } else {
                            if(cartOrNotStatusSTATE == true) {
                                cartBtn.style.backgroundColor = `var(--buttons-active-color)`
                                cartBtn.style.color = `var(--link-active-color)`
                            } else {
                                cartBtn.style.backgroundColor = `var(--buttons-color)`
                                cartBtn.style.color = `var(--link-color)`
                            }
                            // console.log(favOrNotStatusSTATE, productInfo.favOrNot)
                            // console.log(favOrNotStatusSTATE)
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

    function unBasket(e) {
        e.preventDefault()

        if(JSON.parse(localStorage.getItem("isLogged")) == true) {
            var currentUserIs = JSON.parse(localStorage.getItem('signedUser'))
            var currentUserData = JSON.parse(localStorage.getItem(currentUserIs))
            var currentBasketArray = currentUserData.basket
    
            var restOfProducts = []
            for(var j=0; j<currentBasketArray.length; j++) {
                if(productInfo.id == currentBasketArray[j]) {
                    // do nothing
                } else {
                    restOfProducts.push(currentBasketArray[j])
                }
            }
    
            for(var i=0; i<currentBasketArray.length; i++) {
                var status = false
                if(productInfo.id == currentBasketArray[i]) {
                    // console.log(productInfo.id)
                    // alert("Yup, you added this product to favorites before.")
                    e.target.style.backgroundColor = `var(--buttons-color)`
                    e.target.style.color = `var(--link-color)`
                    currentUserData.basket = restOfProducts
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
                currentUserData.basket.push(productInfo.id)
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
                            <button className={s.itemview__container_information__buttons_2fcart} id="add2cartBtnIV" onClick={unBasket}>
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
            <section className={s.itemview__related}>
                <h3 className={s.itemview__related_header}> {languageData[5]} </h3>
                <div className={s.itemview__related_container}>
                    {
                        relatedSTATE.map(
                            (product) => {
                                if(relatedSTATE.length == 0) {
                                    return <p className={s.itemview__related_container__alert}> {languageData[5]} </p>
                                } else {
                                    return (
                                        <div className={s.itemview__related_container__card} onClick={
                                            () => {
                                                const userFav = JSON.parse(localStorage.getItem( JSON.parse(localStorage.getItem("signedUser")) )).favorites
                                                userFav.map(
                                                    (favoriteID) => {
                                                        var favOrNotStatus = false
                                                        if(favoriteID == product.id-1) {
                                                            var favOrNotStatus = true
                                                        }
                                                        setFavOrNotStatusSTATE(favOrNotStatus)
                                                    }
                                                )
                                                const userBasket = JSON.parse(localStorage.getItem( JSON.parse(localStorage.getItem("signedUser")) )).basket
                                                userBasket.map(
                                                    (cartItemID) => {
                                                        var cartOrNotStatus = false
                                                        if(cartItemID == product.id-1) {
                                                            var cartOrNotStatus = true
                                                        }
                                                        setCartOrNotStatusSTATE(cartOrNotStatus)
                                                    }
                                                )
                                                dispatch(setCurrentProduct({
                                                    id: product.id,
                                                    image: product.image,
                                                    title: product.title,
                                                    category: product.category,
                                                    price: product.price,
                                                    rating: product.rating.rate,
                                                    desc: product.description,
                                                    favOrNot: favOrNotStatusSTATE,
                                                    cartOrNot: cartOrNotStatusSTATE
                                                }))
                                                navigate("/products/item_view_id=" + product.id)
                                            }
                                        }>
                                            <div className={s.itemview__related_container__card_image}>
                                                <img src={product.image} alt={product.id} className={s.itemview__related_container__card_image__content} />
                                            </div>
                                            <p className={s.itemview__related_container__card_title}>
                                                {product.title}
                                            </p>
                                        </div>
                                    )
                                }
                            }
                        )
                    }
                </div>
            </section>
        </main>
    )
}

export default ItemView