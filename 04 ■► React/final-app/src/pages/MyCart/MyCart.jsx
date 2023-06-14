import React from 'react'
import s from './index.module.css'
import {dataSource} from '../../data/data-source'
import {useState, useEffect, useRef} from 'react'
import { BrowserRouter as Router, Switch, Route, Routes, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setCurrentProduct } from '../../features/counter/selectedProduct'

function MyCart() {
    const dispatch = useDispatch()
    const languageData = useSelector((state) => state.language.currentLanguage.mycart)

    const [isLoggedSTATE, setIsLoggedSTATE] = useState(JSON.parse(localStorage.getItem("isLogged")))
    const [fakeStoreAPI, setFakeStoreAPI] = useState([])
    const [accessState, setAccessState] = useState("")

    async function fn4api() {
        try {
            const response = await fetch("https://fakestoreapi.com/products")
            const json = await response.json()
            const arrJson = json
            setFakeStoreAPI(arrJson)
            if(JSON.parse(localStorage.getItem("isLogged")) == true) {
                var currentUserIs = await JSON.parse(localStorage.getItem('signedUser'))
                var currentUserData = await JSON.parse(localStorage.getItem(currentUserIs))
                var totalPrice = 0
                currentUserData.basket.forEach(
                    (index) => {
                        totalPrice += arrJson[index-1].price
                    }
                )
                if(currentUserData.budget_amount_from_creditcard >= totalPrice && currentUserData.basket.length > 0) {
                    var access2purchCompleteComponent = "/products/item_view/purchase_completed"
                    setAccessState(access2purchCompleteComponent)
                    // console.log(access2purchCompleteComponent)
                    // console.log(currentUserData.budget_amount_from_creditcard, totalPrice)
                } else {
                    var access2purchCompleteComponent = null
                    setAccessState(access2purchCompleteComponent)
                    // console.log(access2purchCompleteComponent)
                    // console.log(currentUserData.budget_amount_from_creditcard, totalPrice)
                }
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(
        () => {
            fn4api()
        }, []
    )

    function handleBasketCards() {
        try {
            var currentUserIs = JSON.parse(localStorage.getItem("signedUser"))
            var arrayOfBasketProducts = JSON.parse(localStorage.getItem(currentUserIs)).basket
    
            return arrayOfBasketProducts.map(
                (index) => 
                    <Link className={s.mycart__container_cards} to={"/products/item_view_id="+fakeStoreAPI[index-1].id} 
                    key={index} 
                    onClick={
                        () => {dispatch(setCurrentProduct({
                            id: fakeStoreAPI[index-1].id,
                            image: fakeStoreAPI[index-1].image,
                            title: fakeStoreAPI[index-1].title,
                            category: fakeStoreAPI[index-1].category,
                            price: fakeStoreAPI[index-1].price,
                            rating: fakeStoreAPI[index-1].rating.rate,
                            desc: fakeStoreAPI[index-1].description
                        }))}}
                    >
                        <div className={s.mycart__container_cards__image}>
                            <img src={fakeStoreAPI[index-1].image} 
                            alt={"image-basket-" + fakeStoreAPI[index-1].id} 
                            className={s.mycart__container_cards__image_content} />
                        </div>
                        <p className={s.mycart__container_cards__title}> {fakeStoreAPI[index-1].title} </p>
                        <strong className={s.mycart__container_cards__price}> $ {fakeStoreAPI[index-1].price} USD </strong>
                    </Link>
            )
        } catch(error) {
            console.log(error)
        }
    }

    function handleBasketCounter() {
        var currentUserIs = JSON.parse(localStorage.getItem("signedUser"))
        var productCounter = JSON.parse(localStorage.getItem(currentUserIs)).basket.length
        return <b className={s.mycart__topside_header}> {languageData[0]}: {productCounter} </b>
    }

    function handleTotalPriceOfBasket() {
        try {
            var currentUserIs = JSON.parse(localStorage.getItem("signedUser"))
            var arrayOfBasketProducts = JSON.parse(localStorage.getItem(currentUserIs)).basket
            var totalPrice = 0
            arrayOfBasketProducts.map(
                (index) => {
                    totalPrice += fakeStoreAPI[index-1].price
                }
            )
            return <i className={s.mycart__topside_price}> {languageData[1]}: $ {totalPrice} USD </i>
        } catch(error) {
            console.log(error)
        }
    }

    return (
        <main className={s.mycart}>
            <div className={s.mycart__topside}>
                { handleBasketCounter() }
                { handleTotalPriceOfBasket() }
                <Link to={accessState} className={s.mycart__topside_button} onClick={
                    () => {
                        var currentUserIs = JSON.parse(localStorage.getItem('signedUser'))
                        var currentUserData = JSON.parse(localStorage.getItem(currentUserIs))
                        var arrayOfBasketProducts = JSON.parse(localStorage.getItem(currentUserIs)).basket
                        var totalPrice = 0
                        var allTitles = ""
                        arrayOfBasketProducts.map(
                            (index) => {
                                totalPrice += fakeStoreAPI[index-1].price
                                if(index == arrayOfBasketProducts.length-1) {
                                    allTitles += fakeStoreAPI[index-1].title
                                    allTitles += ", "
                                } else {
                                    allTitles += fakeStoreAPI[index-1].title
                                }
                            }
                        )
                        if(currentUserData.budget_amount_from_creditcard >= totalPrice && arrayOfBasketProducts.length > 0) {
                            currentUserData.budget_amount_from_creditcard -= totalPrice
                            currentUserData.basket = []
                            alert("Your order successully completed.")
                            dispatch(setCurrentProduct({
                                title: allTitles,
                                category: "Mixed",
                                price: totalPrice,
                                desc: "..."
                            }))
                            localStorage.setItem(currentUserIs, JSON.stringify(currentUserData))
                        } else if(arrayOfBasketProducts.length == 0) {
                            alert("Your cart is empty.")
                        } else {
                            alert("Oops. You don't have enough budget.")
                        }
                    }
                }> {languageData[2]} </Link>
            </div>
            <div className={s.mycart__container}>
                { handleBasketCards() }
            </div>
        </main>
    )
}

export default MyCart