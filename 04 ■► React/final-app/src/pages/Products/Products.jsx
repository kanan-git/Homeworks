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
import { BrowserRouter as Router, Switch, Route, Routes, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentProduct } from '../../features/counter/selectedProduct';
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR 02 //
function Products() {
    // ...
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR 03 //
    const [apiSTATE, setApiSTATE] = useState([])
    const [statusHTMLstate, setStatusHTMLstate] = useState("redLight")
    const dispatch = useDispatch()

    // var sortByTag = "?price=desc" // mostSold-"" | descending-"?sort=desc" | ascending-"?sort=asc"

    async function getDataFromAPI() {
        await fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        // category, description, id, image, price, rating.rate, title
        // .then(json => {var apiObj = json; setApiSTATE(apiObj)})
        .then(json => {setApiSTATE(json)})
        // console.log(apiSTATE, apiSTATE[0].price)
        setStatusHTMLstate("greenLight")
    }
    
    useEffect(
        () => {
            getDataFromAPI()
            // console.log(statusHTMLstate)
        }, []
    )

    // console.log(apiSTATE)

    // const [pricesSTATE, setPricesSTATE] = useState([])
    // const [ratingSTATE, setRatingSTATE] = useState([])

    // function gatheringData4prices() {
    //     var pricesArray = []
    //     apiSTATE.forEach(
    //         (productObj) => {
    //             pricesArray.push(productObj.price)
    //         }
    //     )
    //     setPricesSTATE(pricesArray)
    // }
    // function gatheringData4rating() {
    //     var ratingArray = []
    //     apiSTATE.forEach(
    //         (productObj) => {
    //             ratingArray.push(productObj.rating.rate)
    //         }
    //     )
    //     setRatingSTATE(ratingArray)
    // }

    // useEffect(
    //     () => {
    //         gatheringData4prices()
    //         gatheringData4rating()
    //         // console.log(pricesSTATE)
    //         // console.log(ratingSTATE)
    //     }, []
    // )
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR ?? //
    const [sortTypeSTATE, setSortTypeSTATE] = useState("Most sold")

    var idArray = []
    var priceArray = []
    var ratingArray = []
    apiSTATE.map(
        (element, index) => {
            priceArray.push(element.price)
        }
    )
    apiSTATE.map(
        (element, index) => {
            ratingArray.push(element.rating.rate)
        }
    )
    apiSTATE.map(
        (element, index) => {
            idArray.push(element.id)
        }
    )
    // console.log(priceArray, ratingArray)
    // console.log(priceArray)

    function bubleSorting() {
        if(sortTypeSTATE == "Price low to high") {
            for(var i=0; i<priceArray.length-1; i++) {
                for(var j=0; j<priceArray.length-1; j++) {
                    if(priceArray[j] > priceArray[j+1]) {
                        var temp = priceArray[j]
                        priceArray[j] = priceArray[j+1]
                        priceArray[j+1] = temp
                        var tempNew = apiSTATE[j]
                        apiSTATE[j] = apiSTATE[j+1]
                        apiSTATE[j+1] = tempNew
                    } else {
                        // do nothing
                    }
                }
            }
        } else if(sortTypeSTATE == "Price high to low") {
            for(var i=0; i<priceArray.length-1; i++) {
                for(var j=0; j<priceArray.length-1; j++) {
                    if(priceArray[j] < priceArray[j+1]) {
                        var temp = priceArray[j]
                        priceArray[j] = priceArray[j+1]
                        priceArray[j+1] = temp
                        var tempNew = apiSTATE[j]
                        apiSTATE[j] = apiSTATE[j+1]
                        apiSTATE[j+1] = tempNew
                    } else {
                        // do nothing
                    }
                }
            }
        } else if(sortTypeSTATE == "Rating low to high") {
            for(var i=0; i<ratingArray.length-1; i++) {
                for(var j=0; j<ratingArray.length-1; j++) {
                    if(ratingArray[j] > ratingArray[j+1]) {
                        var temp = ratingArray[j]
                        ratingArray[j] = ratingArray[j+1]
                        ratingArray[j+1] = temp
                        var tempNew = apiSTATE[j]
                        apiSTATE[j] = apiSTATE[j+1]
                        apiSTATE[j+1] = tempNew
                    } else {
                        // do nothing
                    }
                }
            }
        } else if(sortTypeSTATE == "Rating high to low") {
            for(var i=0; i<ratingArray.length-1; i++) {
                for(var j=0; j<ratingArray.length-1; j++) {
                    if(ratingArray[j] < ratingArray[j+1]) {
                        var temp = ratingArray[j]
                        ratingArray[j] = ratingArray[j+1]
                        ratingArray[j+1] = temp
                        var tempNew = apiSTATE[j]
                        apiSTATE[j] = apiSTATE[j+1]
                        apiSTATE[j+1] = tempNew
                    } else {
                        // do nothing
                    }
                }
            }
        } else if(sortTypeSTATE == "Most purchased") {
            for(var i=0; i<idArray.length-1; i++) {
                for(var j=0; j<idArray.length-1; j++) {
                    if(idArray[j] > idArray[j+1]) {
                        var temp = idArray[j]
                        idArray[j] = idArray[j+1]
                        idArray[j+1] = temp
                        var tempNew = apiSTATE[j]
                        apiSTATE[j] = apiSTATE[j+1]
                        apiSTATE[j+1] = tempNew
                    } else {
                        // do nothing
                    }
                }
            }
        }
        // console.log("Sorted array: ", priceArray)
    }
    bubleSorting()

    // bubble sorting from ChatGPT
    // var sampleArray = [10, 9, 2, 7, 5, 6, 18, 55, 51, 100, 8]
    // var sortType = "low2high" // low2high high2low
    // var sortType = "Price low to high" // "Price low to high"   "Price high to low"
    // function bubleSorting(array) {
    //     // console.log(sortTypeSTATE)
    //     if(sortTypeSTATE == "Price low to high") {
    //         for(var j=0; j<array.length-1; j++) {
    //             for(var i=0; i<array.length-j-1; i++) {
    //                 if(array[i] > array[i+1]) {
    //                     var temp = array[i]
    //                     array[i] = array[i+1]
    //                     array[i+1] = temp
    //                     // console.log(sampleArray)
    //                 } else {
    //                     // do nothing
    //                 }
    //             }
    //             // console.log(sampleArray)
    //         }
    //     } else if(sortTypeSTATE == "Price high to low") {
    //         for(var j=0; j<array.length-1; j++) {
    //             for(var i=0; i<array.length-j-1; i++) {
    //                 if(array[i] < array[i+1]) {
    //                     var temp = array[i]
    //                     array[i] = array[i+1]
    //                     array[i+1] = temp
    //                     // console.log(sampleArray)
    //                 } else {
    //                     // do nothing
    //                 }
    //             }
    //             // console.log(sampleArray)
    //         }
    //     } else {
    //         // do nothing for now
    //     }
    //     console.log(array)
    //     // console.log("-------------------------------------------")
    // }
    // bubleSorting(sampleArray)
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR ?? //
    // const [filterSTATE, setFilterSTATE] = useState(dataSource.english.products.filter)
    // const [sortSTATE, setSortSTATE] = useState(dataSource.english.products.sort)
    // const [buttonSTATE, setButtonSTATE] = useState(dataSource.english.products.button)

    const languageData = useSelector((state) => state.language.currentLanguage.products)
    const searchedElement = useSelector((state )=> state.searching.currentSearchValue)

    const [fprMinSTATE, setFprMinSTATE] = useState(0)
    const [fprMaxSTATE, setFprMaxSTATE] = useState(999999)

    const [filterPRangeSTATE, setFilterPRangeSTATE] = useState("")

    // const [searchSTATE, setSearchSTATE] = useState("")
    
    // useEffect(
    //     () => {
    //         var filterPriceRangeMin = document.querySelector("#price_min").value
    //         var filterPriceRangeMax = document.querySelector("#price_max").value

    //         if(filterPriceRangeMin == "") {
    //             setFprMinSTATE(0)
    //             console.log(fprMinSTATE)
    //         } else {
    //             setFprMinSTATE(filterPriceRangeMin)
    //             console.log(fprMinSTATE)
    //         }
    //         if(filterPriceRangeMax == "") {
    //             setFprMaxSTATE(999999)
    //             console.log(fprMaxSTATE)
    //         } else {
    //             setFprMaxSTATE(filterPriceRangeMax)
    //             console.log(fprMaxSTATE)
    //         }
    //     }, []
    // )

    // useEffect(
    //     () => {
    //         return () => {
    //             var languageData = document.querySelector("#language")
    //             languageData.addEventListener("change", () => {
    //                 if (languageData.value == "English") {
    //                     setFilterSTATE(dataSource.english.products.filter)
    //                     setSortSTATE(dataSource.english.products.sort)
    //                     setButtonSTATE(dataSource.english.products.button)
    //                 } else if (languageData.value == "Azərbaycan dili") {
    //                     setFilterSTATE(dataSource.azerbaijani.products.filter)
    //                     setSortSTATE(dataSource.azerbaijani.products.sort)
    //                     setButtonSTATE(dataSource.azerbaijani.products.button)
    //                 } else if (languageData.value == "Türkçe") {
    //                     setFilterSTATE(dataSource.turkish.products.filter)
    //                     setSortSTATE(dataSource.turkish.products.sort)
    //                     setButtonSTATE(dataSource.turkish.products.button)
    //                 }
    //             })
    //         }
    //     }, []
    // )
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR ?? //
    function handleFavoriteBtnVisual() {
        var currentUser = JSON.parse(localStorage.getItem("signedUser"))
        var arrOfActiveBtns = JSON.parse(localStorage.getItem(currentUser)).favorites

        arrOfActiveBtns.forEach(
            (productID) => {
                var thisButton = document.querySelector("#product_" + productID.toString())
                thisButton.style.transition = `var(--instant-fx)`
                thisButton.style.backgroundColor = `var(--buttons-active-color)`
                thisButton.style.opacity = `1.0`
                thisButton.style.color = `var(--link-active-color)`
            }
        )

        // console.log(arrOfActiveBtns)

        // var thisButton = document.querySelector("" + productID)
        // console.log(thisButton)
        
        // e.target.style. ???
        // e.target.style. ???
        // e.target.style. ???

        // if exist
        // .style.transition = `var(--instant-fx)`
        // .style.backgroundColor = `var(--buttons-active-color)`
        // .style.opacity = `1.0`
        // .style.color = `var(--link-active-color)`
        // else
        // .style.transition = `var(--quick-fx)`
        // .style.backgroundColor = `var(--buttons-color)`
        // .style.opacity = `0.5;`
        // .style.color = `var(--link-color)`

        // ~~~if product exist in favArray, make it active onLoad or onChange~~~ //
    }

    // useEffect(
    //     () => {
    //         handleFavoriteBtnVisual()
    //     }, []
    // )
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
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR ?? //
    // function handleRatingStars() {
    //     console.log(elements.rating.rate)
    //     var solidStarCount = Math.trunc(elements.rating.rate)
    //     var checkingHalf = apiSTATE.rating.rate % 10
    //     if(checkingHalf >= 5) {
    //         var halfStarCount = 1
    //     } else {
    //         var halfStarCount = 0
    //     }
    //     var filledStarsCount = solidStarCount + halfStarCount
    //     if(solidStarCount == 5 || filledStarsCount == 5) {
    //         var emptyStarCount = 0
    //     } else if(filledStarsCount != 5) {
    //         var emptyStarCount = 5 - filledStarsCount
    //     }
    //     var ratingStarsAll = []
    //     for(let i=0; i<solidStarCount; i++) {
    //         console.log(solidStarCount)
    //         ratingStarsAll.push(<i className='fa-solid fa-star fa-1x'></i>)
    //     }
    //     for(let i=0; i<halfStarCount; i++) {
    //         console.log(halfStarCount)
    //         ratingStarsAll.push(<i className='fa-solid fa-star-half-stroke fa-1x'></i>)
    //     }
    //     for(let i=0; i<emptyStarCount; i++) {
    //         console.log(emptyStarCount)
    //         ratingStarsAll.push(<i className='fa-regular fa-star fa-1x'></i>)
    //     }
    //     // console.log(ratingStarsAll)
    //     return ratingStarsAll
    // }

    function filterPriceRangeFunc(price) {
        if(fprMinSTATE > fprMaxSTATE) {
            alert("ERROR: Minimum price can't be larger than maxium.")
        } else if(fprMinSTATE == fprMaxSTATE) {
            // return product which exact same with min or max value which they are same | setFilterPRangeSTATE() filterPRangeSTATE
            if(price == fprMinSTATE) {
                console.log("TRUE")
            } else {
                console.log("FALSE")
            }
        } else if(fprMinSTATE < fprMaxSTATE) {
            // return product cards | setFilterPRangeSTATE() filterPRangeSTATE
            if(price >= fprMinSTATE && price <= fprMaxSTATE) {
                console.log("TRUE")
            } else {
                console.log("FALSE")
            }
        } else if(fprMinSTATE <= 0) {
            alert("ERROR: Please check minimum price value.")
        } else if(fprMaxSTATE > 999999) {
            alert("ERROR: Please check maximum price value.")
        } else {
            // is it possible ? :D
        }
    }
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR 04 //
return (
    <main className={s.products} onMouseEnter={
        () => {
            var currentUser = JSON.parse(localStorage.getItem("signedUser"))
            if(currentUser == "guest") {
                // do nothing
            } else {
                var arrOfActiveBtns = JSON.parse(localStorage.getItem(currentUser)).favorites
                // console.log("loading event working")
                arrOfActiveBtns.forEach(
                    (productID) => {
                        var thisButton = document.querySelector("#product_" + productID.toString())
                        thisButton.style.transition = `var(--instant-fx)`
                        thisButton.style.backgroundColor = `var(--buttons-active-color)`
                        thisButton.style.opacity = `1.0`
                        thisButton.style.color = `var(--link-active-color)`
                    }
                )
            }
        }
    }>
        {/* topside of product page - contains: filter show/hide (container 1100/1400 px) button, sort input select */}
        <div className={s.products__topside}>
            <button className={s.products__topside_filterbtn} id="filter-button" onClick={temName}> {languageData.filter[0]} </button>
            <span className={s.products__topside_filtertags}>
                <button className={s.products__topside_filtertags__selected}>
                    sample
                    <button className={s.xmark}>
                        <i className='fa-regular fa-circle-xmark fa-1x'></i>
                    </button>
                </button>
            </span>
            <select name="sorting" id="sorting" className={s.products__topside_sort} 
            // onClick={
            //     () => {
            //         bubleSorting(pricesSTATE)
            //     }
            // } 
            onChange={
                (e) => {
                    setSortTypeSTATE(e.target.value)
                }
            }>
                <option value="Most purchased"> {languageData.sort[0]} </option>
                <option value="Price low to high"> {languageData.sort[1]} </option>
                <option value="Price high to low"> {languageData.sort[2]} </option>
                <option value="Rating low to high"> {languageData.sort[3]} </option>
                <option value="Rating high to low"> {languageData.sort[4]} </option>
            </select>
        </div>

        {/* <FilterAside /> */}
        <form className={s.filteraside} id="filter-section">
            <h2 className={s.filteraside__header}> {languageData.filter[0]} </h2>

            <label htmlFor="price" className={s.filteraside__categories_label}> {languageData.filter[1]} </label>
            <span className={s.filteraside__categories}>
                <button className={s.filteraside__categories_buttons}> {languageData.filter[4]} </button>
                <button className={s.filteraside__categories_buttons}> {languageData.filter[5]} </button>
                <button className={s.filteraside__categories_buttons}> {languageData.filter[6]} </button>
                <button className={s.filteraside__categories_buttons}> {languageData.filter[7]} </button>
            </span>
            
            <label htmlFor="price" className={s.filteraside__price_label}> {languageData.filter[2]} </label>
            <span className={s.filteraside__price_container}>
                <input type="number" id="price_min" name="price" className={s.filteraside__price_container__input} placeholder="min. $ 0" min="0" max="999999" step="1" 
                onChange={
                    (e) => {
                        var filterPriceRangeMin = e.target.value
                        if(filterPriceRangeMin == "") {
                            setFprMinSTATE(0)
                            // console.log(fprMinSTATE)
                        } else {
                            setFprMinSTATE(filterPriceRangeMin)
                            // console.log(fprMinSTATE)
                        }
                    }
                }
                />
                <input type="number" id="price_max" name="price" className={s.filteraside__price_container__input} placeholder="max. $ 999'999" min="0" max="999999" step="1" 
                onChange={
                    (e) => {
                        var filterPriceRangeMax = e.target.value
                        if(filterPriceRangeMax == "") {
                            setFprMaxSTATE(999999)
                            // console.log(fprMaxSTATE)
                        } else {
                            setFprMaxSTATE(filterPriceRangeMax)
                            // console.log(fprMaxSTATE)
                        }
                    }
                }
                />
                <button className={s.filteraside__price_container__submit} 
                onClick={
                    (e) => {
                        e.preventDefault()

                        // filterPriceRangeFunc()

                        // console.log(fprMinSTATE)
                        // console.log(fprMaxSTATE)
                        // var tempFakeProductPrice = 50

                        // if(fprMinSTATE > fprMaxSTATE) {
                        //     alert("ERROR: Minimum price can't be larger than maxium.")
                        // } else if(fprMinSTATE == fprMaxSTATE) {
                        //     // return product which exact same with min or max value which they are same | setFilterPRangeSTATE() filterPRangeSTATE
                        //     if(tempFakeProductPrice == fprMinSTATE) {
                        //         console.log("TRUE")
                        //     } else {
                        //         console.log("FALSE")
                        //     }
                        // } else if(fprMinSTATE < fprMaxSTATE) {
                        //     // return product cards | setFilterPRangeSTATE() filterPRangeSTATE
                        //     if(tempFakeProductPrice >= fprMinSTATE && tempFakeProductPrice <= fprMaxSTATE) {
                        //         console.log("TRUE")
                        //     } else {
                        //         console.log("FALSE")
                        //     }
                        // } else if(fprMinSTATE <= 0) {
                        //     alert("ERROR: Please check minimum price value.")
                        // } else if(fprMaxSTATE > 999999) {
                        //     alert("ERROR: Please check maximum price value.")
                        // } else {
                        //     // is it possible ? :D
                        // }
                    }
                }
                > {languageData.filter[9]} </button>
            </span>
            {/* <span className={s.filteraside__price_sliders}>
                <input type="range" id={s.toMin} name="price" className={s.filteraside__price_sliders__input} min="0" max="100" step="1" defaultValue="10" />
                <input type="range" id={s.toMax} name="price" className={s.filteraside__price_sliders__input} min="0" max="100" step="1" defaultValue="90" />
            </span> */}
            <label htmlFor="rating" className={s.filteraside__rating_label}> {languageData.filter[3]} </label>
            <span className={s.filteraside__rating_container}>
                <span className={s.filteraside__rating_container__buttons}>
                    <button className={s.filteraside__rating_container__buttons_item}>
                        <i className='fa-solid fa-star fa-1x'></i>
                        <i className='fa-solid fa-star fa-1x'></i>
                        <i className='fa-solid fa-star fa-1x'></i>
                        <i className='fa-solid fa-star fa-1x'></i>
                        <i className='fa-solid fa-star-half-stroke fa-1x'></i>

                        <i className={s.filteraside__rating_container__buttons_item__text}> 4.5 {languageData.filter[8]} </i>
                    </button>
                </span>
                <span className={s.filteraside__rating_container__buttons}>
                    <button className={s.filteraside__rating_container__buttons_item}>
                        <i className='fa-solid fa-star fa-1x'></i>
                        <i className='fa-solid fa-star fa-1x'></i>
                        <i className='fa-solid fa-star fa-1x'></i>
                        <i className='fa-solid fa-star fa-1x'></i>
                        <i className='fa-regular fa-star fa-1x'></i>

                        <i className={s.filteraside__rating_container__buttons_item__text}> 4.0 {languageData.filter[8]} </i>
                    </button>
                </span>
                <span className={s.filteraside__rating_container__buttons}>
                    <button className={s.filteraside__rating_container__buttons_item}>
                        <i className='fa-solid fa-star fa-1x'></i>
                        <i className='fa-solid fa-star fa-1x'></i>
                        <i className='fa-solid fa-star fa-1x'></i>
                        <i className='fa-solid fa-star-half-stroke fa-1x'></i>
                        <i className='fa-regular fa-star fa-1x'></i>

                        <i className={s.filteraside__rating_container__buttons_item__text}> 3.5 {languageData.filter[8]} </i>
                    </button>
                </span>
                <span className={s.filteraside__rating_container__buttons}>
                    <button className={s.filteraside__rating_container__buttons_item}>
                        <i className='fa-solid fa-star fa-1x'></i>
                        <i className='fa-solid fa-star fa-1x'></i>
                        <i className='fa-solid fa-star fa-1x'></i>
                        <i className='fa-regular fa-star fa-1x'></i>
                        <i className='fa-regular fa-star fa-1x'></i>

                        <i className={s.filteraside__rating_container__buttons_item__text}> 3.0 {languageData.filter[8]} </i>
                    </button>
                </span>
            </span>
        </form>

        {/* container of product cards */}
        {statusHTMLstate == "greenLight" && <div className={s.container} id="products-container">
            {/* ----- product cards ----- */}
            {/* { getDataFromAPI() } */}
            {
                apiSTATE.map(
                    (elements, index) => 
                        {
                            // filterPriceRangeFunc(elements.price)
                            // var resultStatus = false
                            if(searchedElement == "") {
                                // console.log(elements.title.includes(searchedElement))
                            } else {
                                // console.log(elements.title.includes(searchedElement))
                                if(elements.title.includes(searchedElement)) {
                                    // console.log(elements)
                                }
                            }
                            if(searchedElement == "") {
                                // var resultStatus = true
                                return (
                                    <div className={s.products__cards} key={elements.id}> {/* apiSTATE[0].id */}
                                        <button className={s.products__cards_image__favbtn} id={"product_" + elements.id.toString()} onClick={
                                            (e) => {
                                                var currentUserIs = JSON.parse(localStorage.getItem("signedUser")) // get info from storage who is current user
                                                var arr = JSON.parse(localStorage.getItem(currentUserIs)) // get favorites array of current user
                                                var restOfIDs = [] // empty array for unfav action will contain all favorites except clicked one
                                                var newProduct = elements.id // current product id which clicked it's favorite button

                                                e.target.style.transition = `var(--instant-fx)`
                                                e.target.style.backgroundColor = `var(--buttons-active-color)`
                                                e.target.style.opacity = `1.0`
                                                e.target.style.color = `var(--link-active-color)`

                                                if(arr.favorites.length == 0) {
                                                    var doesExist = false
                                                    // console.log("Ofcourse its not added")
                                                } else {
                                                    for(var i=0; i<arr.favorites.length; i++) { // loop inside user's favorite products
                                                        if(newProduct == arr.favorites[i]) {
                                                            var doesExist = true
                                                            // console.log("Yes, this product is added to favorites before")
                                                            e.target.style.transition = `var(--quick-fx)`
                                                            e.target.style.backgroundColor = `var(--buttons-color)`
                                                            e.target.style.opacity = `0.5;`
                                                            e.target.style.color = `var(--link-color)`
                                                            break
                                                        } else {
                                                            var doesExist = false
                                                            // console.log("This product not your favorite")
                                                            e.target.style.transition = `var(--instant-fx)`
                                                            e.target.style.backgroundColor = `var(--buttons-active-color)`
                                                            e.target.style.opacity = `1.0`
                                                            e.target.style.color = `var(--link-active-color)`
                                                        }
                                                    }
                                                }

                                                if(arr.favorites.length == 0) {
                                                    var restOfIDs = []
                                                } else {
                                                    for(var j=0; j<arr.favorites.length; j++) {
                                                        if(newProduct != arr.favorites[j]) {
                                                            restOfIDs.push(arr.favorites[j])
                                                        } else {
                                                            // do nothing
                                                        }
                                                    }
                                                }

                                                // console.log(restOfIDs)
                                                // console.log(e.target)

                                                if(doesExist == false) {
                                                    arr.favorites.push(newProduct)
                                                    localStorage.setItem(currentUserIs, JSON.stringify(arr))
                                                    // alert("Added new product ID: " + elements.id)
                                                } else {
                                                    arr.favorites = restOfIDs
                                                    localStorage.setItem(currentUserIs, JSON.stringify(arr))
                                                    // alert("You already have this product on Favorites - ID: " + elements.id)
                                                }
                                            }
                                        }> <i className='fa-solid fa-heart fa-1x'></i> </button>
                                        {/* image */}
                                        <Link className={s.products__cards_image} to="/products/item_view" onClick={
                                            () => {
                                                var rateStars = document.querySelector(`.${s.products__cards_information__rating_stars}`).innerHTML
                                                {dispatch(setCurrentProduct({
                                                    id: elements.id,
                                                    image: elements.image,
                                                    title: elements.title,
                                                    category: elements.category,
                                                    price: elements.price,
                                                    rating: elements.rating.rate,
                                                    desc: elements.description,
                                                    stars: rateStars
                                                }))}
                                            }
                                        }>
                                            <img src={elements.image} alt={"product-"+index} className={s.products__cards_image__content} />
                                            {/* <button className={s.products__cards_image__favbtn}
                                            // onMouseEnter={
                                            //     () => {
                                            //         let currentUserIs = localStorage.getItem("signedUser")
                                            //         let cUserFavs = JSON.parse(currentUserIs)
                                            //         // JSON.parse(localStorage.getItem(currentUserIs)).favorites.push[elements.id]
                                            //         console.log("added", cUserFavs)
                                            //     }
                                            // }
                                            > <i className='fa-solid fa-heart fa-1x'></i> </button> */}
                                        </Link>
                                        {/* information */}
                                        <Link className={s.products__cards_information} to="/products/item_view" onClick={
                                            () => {
                                                var rateStars = document.querySelector(`.${s.products__cards_information__rating_stars}`).innerHTML
                                                {dispatch(setCurrentProduct({
                                                    id: elements.id,
                                                    image: elements.image,
                                                    title: elements.title,
                                                    category: elements.category,
                                                    price: elements.price,
                                                    rating: elements.rating.rate,
                                                    stars: rateStars
                                                }))}
                                            }
                                        }>
                                            {/* title & category */}
                                            <span className={s.products__cards_information__titleandcateg}>
                                                <p className={s.products__cards_information__titleandcateg_title}> {elements.title} </p>
                                                <i className={s.products__cards_information__titleandcateg_categ}> {elements.category} </i> {/* opacity 0.5, smaller text under title */}
                                            </span>
                                            {/* rating */}
                                            <span className={s.products__cards_information__rating}>
                                                <span className={s.products__cards_information__rating_stars}>
                                                    {
                                                        elements.rating.rate==5 && <>
                                                            <i className='fa-solid fa-star fa-1x'></i>
                                                            <i className='fa-solid fa-star fa-1x'></i>
                                                            <i className='fa-solid fa-star fa-1x'></i>
                                                            <i className='fa-solid fa-star fa-1x'></i>
                                                            <i className='fa-solid fa-star fa-1x'></i>
                                                        </>
                                                    }
                                                    {
                                                        elements.rating.rate>=4.5 && elements.rating.rate<5 && <>
                                                            <i className='fa-solid fa-star fa-1x'></i>
                                                            <i className='fa-solid fa-star fa-1x'></i>
                                                            <i className='fa-solid fa-star fa-1x'></i>
                                                            <i className='fa-solid fa-star fa-1x'></i>
                                                            <i className='fa-solid fa-star-half-stroke fa-1x'></i>
                                                        </>
                                                    }
                                                    {
                                                        elements.rating.rate>=4 && elements.rating.rate<4.5 && <>
                                                            <i className='fa-solid fa-star fa-1x'></i>
                                                            <i className='fa-solid fa-star fa-1x'></i>
                                                            <i className='fa-solid fa-star fa-1x'></i>
                                                            <i className='fa-solid fa-star fa-1x'></i>
                                                            <i className='fa-regular fa-star fa-1x'></i>
                                                        </>
                                                    }
                                                    {
                                                        elements.rating.rate>=3.5 && elements.rating.rate<4 && <>
                                                            <i className='fa-solid fa-star fa-1x'></i>
                                                            <i className='fa-solid fa-star fa-1x'></i>
                                                            <i className='fa-solid fa-star fa-1x'></i>
                                                            <i className='fa-solid fa-star-half-stroke fa-1x'></i>
                                                            <i className='fa-regular fa-star fa-1x'></i>
                                                        </>
                                                    }
                                                    {
                                                        elements.rating.rate>=3 && elements.rating.rate<3.5 && <>
                                                            <i className='fa-solid fa-star fa-1x'></i>
                                                            <i className='fa-solid fa-star fa-1x'></i>
                                                            <i className='fa-solid fa-star fa-1x'></i>
                                                            <i className='fa-regular fa-star fa-1x'></i>
                                                            <i className='fa-regular fa-star fa-1x'></i>
                                                        </>
                                                    }
                                                    {
                                                        elements.rating.rate>=2.5 && elements.rating.rate<3 && <>
                                                            <i className='fa-solid fa-star fa-1x'></i>
                                                            <i className='fa-solid fa-star fa-1x'></i>
                                                            <i className='fa-solid fa-star-half-stroke fa-1x'></i>
                                                            <i className='fa-regular fa-star fa-1x'></i>
                                                            <i className='fa-regular fa-star fa-1x'></i>
                                                        </>
                                                    }
                                                    {
                                                        elements.rating.rate>=2 && elements.rating.rate<2.5 && <>
                                                            <i className='fa-solid fa-star fa-1x'></i>
                                                            <i className='fa-solid fa-star fa-1x'></i>
                                                            <i className='fa-regular fa-star fa-1x'></i>
                                                            <i className='fa-regular fa-star fa-1x'></i>
                                                            <i className='fa-regular fa-star fa-1x'></i>
                                                        </>
                                                    }
                                                    {
                                                        elements.rating.rate>=1.5 && elements.rating.rate<2 && <>
                                                            <i className='fa-solid fa-star fa-1x'></i>
                                                            <i className='fa-solid fa-star-half-stroke fa-1x'></i>
                                                            <i className='fa-regular fa-star fa-1x'></i>
                                                            <i className='fa-regular fa-star fa-1x'></i>
                                                            <i className='fa-regular fa-star fa-1x'></i>
                                                        </>
                                                    }
                                                    {
                                                        elements.rating.rate>=1 && elements.rating.rate<1.5 && <>
                                                            <i className='fa-solid fa-star fa-1x'></i>
                                                            <i className='fa-regular fa-star fa-1x'></i>
                                                            <i className='fa-regular fa-star fa-1x'></i>
                                                            <i className='fa-regular fa-star fa-1x'></i>
                                                            <i className='fa-regular fa-star fa-1x'></i>
                                                        </>
                                                    }
                                                    {
                                                        elements.rating.rate>=0.5 && elements.rating.rate<1 && <>
                                                            <i className='fa-solid fa-star-half-stroke fa-1x'></i>
                                                            <i className='fa-regular fa-star fa-1x'></i>
                                                            <i className='fa-regular fa-star fa-1x'></i>
                                                            <i className='fa-regular fa-star fa-1x'></i>
                                                            <i className='fa-regular fa-star fa-1x'></i>
                                                        </>
                                                    }
                                                    {
                                                        elements.rating.rate>=0 && elements.rating.rate<0.5 && <>
                                                            <i className='fa-regular fa-star fa-1x'></i>
                                                            <i className='fa-regular fa-star fa-1x'></i>
                                                            <i className='fa-regular fa-star fa-1x'></i>
                                                            <i className='fa-regular fa-star fa-1x'></i>
                                                            <i className='fa-regular fa-star fa-1x'></i>
                                                        </>
                                                    }

                                                    {/* <i className='fa-solid fa-star fa-1x'></i>
                                                    <i className='fa-solid fa-star fa-1x'></i>
                                                    <i className='fa-solid fa-star fa-1x'></i>
                                                    <i className='fa-solid fa-star-half-stroke fa-1x'></i>
                                                    <i className='fa-regular fa-star fa-1x'></i> */}
                                                </span>
                                                <span className={s.products__cards_information__rating_point}> {elements.rating.rate} / 5 </span> {/* 5 or 10 */}
                                            </span>
                                            {/* <span className={s.products__cards_information__description}> {apiSTATE[0].description} </span> */}
                                            <strong className={s.products__cards_information__price}> $ {elements.price} USD </strong>
                                        </Link>
                                    </div>
                                )
                            } else if(elements.title.includes(searchedElement) || elements.description.includes(searchedElement) || elements.category.includes(searchedElement)) {
                                // var resultStatus = true
                                return (
                                    <div className={s.products__cards} key={elements.id}> {/* apiSTATE[0].id */}
                                        <button className={s.products__cards_image__favbtn} id={"product_" + elements.id.toString()} onClick={
                                            (e) => {
                                                var currentUserIs = JSON.parse(localStorage.getItem("signedUser")) // get info from storage who is current user
                                                var arr = JSON.parse(localStorage.getItem(currentUserIs)) // get favorites array of current user
                                                var restOfIDs = [] // empty array for unfav action will contain all favorites except clicked one
                                                var newProduct = elements.id // current product id which clicked it's favorite button

                                                e.target.style.transition = `var(--instant-fx)`
                                                e.target.style.backgroundColor = `var(--buttons-active-color)`
                                                e.target.style.opacity = `1.0`
                                                e.target.style.color = `var(--link-active-color)`

                                                if(arr.favorites.length == 0) {
                                                    var doesExist = false
                                                    // console.log("Ofcourse its not added")
                                                } else {
                                                    for(var i=0; i<arr.favorites.length; i++) { // loop inside user's favorite products
                                                        if(newProduct == arr.favorites[i]) {
                                                            var doesExist = true
                                                            // console.log("Yes, this product is added to favorites before")
                                                            e.target.style.transition = `var(--quick-fx)`
                                                            e.target.style.backgroundColor = `var(--buttons-color)`
                                                            e.target.style.opacity = `0.5;`
                                                            e.target.style.color = `var(--link-color)`
                                                            break
                                                        } else {
                                                            var doesExist = false
                                                            // console.log("This product not your favorite")
                                                            e.target.style.transition = `var(--instant-fx)`
                                                            e.target.style.backgroundColor = `var(--buttons-active-color)`
                                                            e.target.style.opacity = `1.0`
                                                            e.target.style.color = `var(--link-active-color)`
                                                        }
                                                    }
                                                }

                                                if(arr.favorites.length == 0) {
                                                    var restOfIDs = []
                                                } else {
                                                    for(var j=0; j<arr.favorites.length; j++) {
                                                        if(newProduct != arr.favorites[j]) {
                                                            restOfIDs.push(arr.favorites[j])
                                                        } else {
                                                            // do nothing
                                                        }
                                                    }
                                                }

                                                // console.log(restOfIDs)
                                                // console.log(e.target)

                                                if(doesExist == false) {
                                                    arr.favorites.push(newProduct)
                                                    localStorage.setItem(currentUserIs, JSON.stringify(arr))
                                                    // alert("Added new product ID: " + elements.id)
                                                } else {
                                                    arr.favorites = restOfIDs
                                                    localStorage.setItem(currentUserIs, JSON.stringify(arr))
                                                    // alert("You already have this product on Favorites - ID: " + elements.id)
                                                }
                                            }
                                        }> <i className='fa-solid fa-heart fa-1x'></i> </button>
                                        {/* image */}
                                        <Link className={s.products__cards_image} to="/products/item_view" onClick={
                                            () => {
                                                var rateStars = document.querySelector(`.${s.products__cards_information__rating_stars}`).innerHTML
                                                {dispatch(setCurrentProduct({
                                                    id: elements.id,
                                                    image: elements.image,
                                                    title: elements.title,
                                                    category: elements.category,
                                                    price: elements.price,
                                                    rating: elements.rating.rate,
                                                    desc: elements.description,
                                                    stars: rateStars
                                                }))}
                                            }
                                        }>
                                            <img src={elements.image} alt={"product-"+index} className={s.products__cards_image__content} />
                                            {/* <button className={s.products__cards_image__favbtn}
                                            // onMouseEnter={
                                            //     () => {
                                            //         let currentUserIs = localStorage.getItem("signedUser")
                                            //         let cUserFavs = JSON.parse(currentUserIs)
                                            //         // JSON.parse(localStorage.getItem(currentUserIs)).favorites.push[elements.id]
                                            //         console.log("added", cUserFavs)
                                            //     }
                                            // }
                                            > <i className='fa-solid fa-heart fa-1x'></i> </button> */}
                                        </Link>
                                        {/* information */}
                                        <Link className={s.products__cards_information} to="/products/item_view" onClick={
                                            () => {
                                                var rateStars = document.querySelector(`.${s.products__cards_information__rating_stars}`).innerHTML
                                                {dispatch(setCurrentProduct({
                                                    id: elements.id,
                                                    image: elements.image,
                                                    title: elements.title,
                                                    category: elements.category,
                                                    price: elements.price,
                                                    rating: elements.rating.rate,
                                                    stars: rateStars
                                                }))}
                                            }
                                        }>
                                            {/* title & category */}
                                            <span className={s.products__cards_information__titleandcateg}>
                                                <p className={s.products__cards_information__titleandcateg_title}> {elements.title} </p>
                                                <i className={s.products__cards_information__titleandcateg_categ}> {elements.category} </i> {/* opacity 0.5, smaller text under title */}
                                            </span>
                                            {/* rating */}
                                            <span className={s.products__cards_information__rating}>
                                                <span className={s.products__cards_information__rating_stars}>
                                                    {
                                                        elements.rating.rate==5 && <>
                                                            <i className='fa-solid fa-star fa-1x'></i>
                                                            <i className='fa-solid fa-star fa-1x'></i>
                                                            <i className='fa-solid fa-star fa-1x'></i>
                                                            <i className='fa-solid fa-star fa-1x'></i>
                                                            <i className='fa-solid fa-star fa-1x'></i>
                                                        </>
                                                    }
                                                    {
                                                        elements.rating.rate>=4.5 && elements.rating.rate<5 && <>
                                                            <i className='fa-solid fa-star fa-1x'></i>
                                                            <i className='fa-solid fa-star fa-1x'></i>
                                                            <i className='fa-solid fa-star fa-1x'></i>
                                                            <i className='fa-solid fa-star fa-1x'></i>
                                                            <i className='fa-solid fa-star-half-stroke fa-1x'></i>
                                                        </>
                                                    }
                                                    {
                                                        elements.rating.rate>=4 && elements.rating.rate<4.5 && <>
                                                            <i className='fa-solid fa-star fa-1x'></i>
                                                            <i className='fa-solid fa-star fa-1x'></i>
                                                            <i className='fa-solid fa-star fa-1x'></i>
                                                            <i className='fa-solid fa-star fa-1x'></i>
                                                            <i className='fa-regular fa-star fa-1x'></i>
                                                        </>
                                                    }
                                                    {
                                                        elements.rating.rate>=3.5 && elements.rating.rate<4 && <>
                                                            <i className='fa-solid fa-star fa-1x'></i>
                                                            <i className='fa-solid fa-star fa-1x'></i>
                                                            <i className='fa-solid fa-star fa-1x'></i>
                                                            <i className='fa-solid fa-star-half-stroke fa-1x'></i>
                                                            <i className='fa-regular fa-star fa-1x'></i>
                                                        </>
                                                    }
                                                    {
                                                        elements.rating.rate>=3 && elements.rating.rate<3.5 && <>
                                                            <i className='fa-solid fa-star fa-1x'></i>
                                                            <i className='fa-solid fa-star fa-1x'></i>
                                                            <i className='fa-solid fa-star fa-1x'></i>
                                                            <i className='fa-regular fa-star fa-1x'></i>
                                                            <i className='fa-regular fa-star fa-1x'></i>
                                                        </>
                                                    }
                                                    {
                                                        elements.rating.rate>=2.5 && elements.rating.rate<3 && <>
                                                            <i className='fa-solid fa-star fa-1x'></i>
                                                            <i className='fa-solid fa-star fa-1x'></i>
                                                            <i className='fa-solid fa-star-half-stroke fa-1x'></i>
                                                            <i className='fa-regular fa-star fa-1x'></i>
                                                            <i className='fa-regular fa-star fa-1x'></i>
                                                        </>
                                                    }
                                                    {
                                                        elements.rating.rate>=2 && elements.rating.rate<2.5 && <>
                                                            <i className='fa-solid fa-star fa-1x'></i>
                                                            <i className='fa-solid fa-star fa-1x'></i>
                                                            <i className='fa-regular fa-star fa-1x'></i>
                                                            <i className='fa-regular fa-star fa-1x'></i>
                                                            <i className='fa-regular fa-star fa-1x'></i>
                                                        </>
                                                    }
                                                    {
                                                        elements.rating.rate>=1.5 && elements.rating.rate<2 && <>
                                                            <i className='fa-solid fa-star fa-1x'></i>
                                                            <i className='fa-solid fa-star-half-stroke fa-1x'></i>
                                                            <i className='fa-regular fa-star fa-1x'></i>
                                                            <i className='fa-regular fa-star fa-1x'></i>
                                                            <i className='fa-regular fa-star fa-1x'></i>
                                                        </>
                                                    }
                                                    {
                                                        elements.rating.rate>=1 && elements.rating.rate<1.5 && <>
                                                            <i className='fa-solid fa-star fa-1x'></i>
                                                            <i className='fa-regular fa-star fa-1x'></i>
                                                            <i className='fa-regular fa-star fa-1x'></i>
                                                            <i className='fa-regular fa-star fa-1x'></i>
                                                            <i className='fa-regular fa-star fa-1x'></i>
                                                        </>
                                                    }
                                                    {
                                                        elements.rating.rate>=0.5 && elements.rating.rate<1 && <>
                                                            <i className='fa-solid fa-star-half-stroke fa-1x'></i>
                                                            <i className='fa-regular fa-star fa-1x'></i>
                                                            <i className='fa-regular fa-star fa-1x'></i>
                                                            <i className='fa-regular fa-star fa-1x'></i>
                                                            <i className='fa-regular fa-star fa-1x'></i>
                                                        </>
                                                    }
                                                    {
                                                        elements.rating.rate>=0 && elements.rating.rate<0.5 && <>
                                                            <i className='fa-regular fa-star fa-1x'></i>
                                                            <i className='fa-regular fa-star fa-1x'></i>
                                                            <i className='fa-regular fa-star fa-1x'></i>
                                                            <i className='fa-regular fa-star fa-1x'></i>
                                                            <i className='fa-regular fa-star fa-1x'></i>
                                                        </>
                                                    }

                                                    {/* <i className='fa-solid fa-star fa-1x'></i>
                                                    <i className='fa-solid fa-star fa-1x'></i>
                                                    <i className='fa-solid fa-star fa-1x'></i>
                                                    <i className='fa-solid fa-star-half-stroke fa-1x'></i>
                                                    <i className='fa-regular fa-star fa-1x'></i> */}
                                                </span>
                                                <span className={s.products__cards_information__rating_point}> {elements.rating.rate} / 5 </span> {/* 5 or 10 */}
                                            </span>
                                            {/* <span className={s.products__cards_information__description}> {apiSTATE[0].description} </span> */}
                                            <strong className={s.products__cards_information__price}> $ {elements.price} USD </strong>
                                        </Link>
                                    </div>
                                )
                            } else {
                                // alert("NO MATCH FOUND")
                            }
                        }
                )
            }
            {/* button for load more items from API */}
            <button className={s.loadmore} onClick={
                () => {
                    alert("Sorry, there is no more products yet. Try later.")
                }
            }> {languageData.button} </button>
        </div>}
    </main>
)
}
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR 05 //
export default Products
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ ENDING LINE //