import React from 'react'
import s from './index.module.css'
import {dataSource} from '../../data/data-source'
import {useState, useEffect, useRef} from 'react'
import { BrowserRouter as Router, Switch, Route, Routes, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Fragment } from 'react';
import { useDispatch } from 'react-redux'
import { setCurrentProduct } from '../../features/counter/selectedProduct'
import { setCurrentSearchValue } from '../../features/counter/searchValueSlice'

function Products() {
    const [apiSTATE, setApiSTATE] = useState([])
    const [statusHTMLstate, setStatusHTMLstate] = useState("redLight")
    const [ratingFilterState, setRatingFilterState] = useState(0)
    const dispatch = useDispatch()

    async function getDataFromAPI() {
        await fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => {setApiSTATE(json)})
        setStatusHTMLstate("greenLight")
    }
    
    useEffect(
        () => {
            getDataFromAPI()
        }, []
    )

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
    }
    bubleSorting()

    const languageData = useSelector((state) => state.language.currentLanguage.products)
    const searchedElement = useSelector((state )=> state.searching.currentSearchValue)
    const productInfo = useSelector((state) => state.selectedProduct.productData)

    const [fprMinSTATE, setFprMinSTATE] = useState(0)
    const [fprMaxSTATE, setFprMaxSTATE] = useState(999999)

    const [fprMinSTATEafterSubmit, setFprMinSTATEafterSubmit] = useState(fprMinSTATE)
    const [fprMaxSTATEafterSubmit, setFprMaxSTATEafterSubmit] = useState(fprMaxSTATE)

    const [priceRangeSubmit, setPriceRangeSubmit] = useState(false)

    const [fstatSTATE, setFstatSTATE] = useState("disabled")

    function temName() {
        var filterSection = document.querySelector("#filter-section")
        var productsContainer = document.querySelector("#products-container")

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
                    {searchedElement != "" && (
                        <button className={s.products__topside_filtertags__selected}>
                        {searchedElement}
                        <button className={s.xmark} onClick={
                            () => {
                                dispatch(setCurrentProduct(""))
                                window.location.reload()
                            }
                        }>
                            <i className='fa-regular fa-circle-xmark fa-1x'></i>
                        </button>
                    </button>
                    )}
                </span>
                <select name="sorting" id="sorting" className={s.products__topside_sort} 
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
                    <button className={s.filteraside__categories_buttons} onClick={(e) => {dispatch(setCurrentSearchValue(dataSource.english.products.filter[4])); e.preventDefault()}}> {languageData.filter[4]} </button>
                    <button className={s.filteraside__categories_buttons} onClick={(e) => {dispatch(setCurrentSearchValue(dataSource.english.products.filter[5])); e.preventDefault()}}> {languageData.filter[5]} </button>
                    <button className={s.filteraside__categories_buttons} onClick={(e) => {dispatch(setCurrentSearchValue(dataSource.english.products.filter[6])); e.preventDefault()}}> {languageData.filter[6]} </button>
                    <button className={s.filteraside__categories_buttons} onClick={(e) => {dispatch(setCurrentSearchValue(dataSource.english.products.filter[7])); e.preventDefault()}}> {languageData.filter[7]} </button>
                </span>
                
                <label htmlFor="price" className={s.filteraside__price_label}> {languageData.filter[2]} </label>
                <span className={s.filteraside__price_container}>
                    <input type="number" id="price_min" name="price" className={s.filteraside__price_container__input} placeholder="min. $ 0" min="0" max="999999" step="1" 
                    onChange={
                        (e) => {
                            e.preventDefault()
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
                            e.preventDefault()
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

                            if(fprMinSTATE > fprMaxSTATE) {
                                alert("ERROR: Minimum price can't be larger than maxium.")
                            } else if(fprMinSTATE < 0) {
                                alert("ERROR: Please check minimum price value.")
                            } else if(fprMaxSTATE > 999999) {
                                alert("ERROR: Please check maximum price value.")
                            } else {
                                setPriceRangeSubmit(true)
                                setFprMinSTATEafterSubmit(fprMinSTATE)
                                setFprMaxSTATEafterSubmit(fprMaxSTATE)
                            }
                        }
                    }
                    > {languageData.filter[9]} </button>
                </span>
                <label htmlFor="rating" className={s.filteraside__rating_label}> {languageData.filter[3]} </label>
                <span className={s.filteraside__rating_container}>
                    <span className={s.filteraside__rating_container__buttons} onClick={
                        (e) => {
                            if(ratingFilterState == 4.5) {
                                e.preventDefault()
                                setRatingFilterState(0)
                            } else {
                                e.preventDefault()
                                setRatingFilterState(4.5)
                                // console.log(ratingFilterState)
                            }
                        }
                    }>
                        <button className={s.filteraside__rating_container__buttons_item}>
                            <i className='fa-solid fa-star fa-1x'></i>
                            <i className='fa-solid fa-star fa-1x'></i>
                            <i className='fa-solid fa-star fa-1x'></i>
                            <i className='fa-solid fa-star fa-1x'></i>
                            <i className='fa-solid fa-star-half-stroke fa-1x'></i>

                            <i className={s.filteraside__rating_container__buttons_item__text}> 4.5 {languageData.filter[8]} </i>
                        </button>
                    </span>
                    <span className={s.filteraside__rating_container__buttons} onClick={
                        (e) => {
                            if(ratingFilterState == 4) {
                                e.preventDefault()
                                setRatingFilterState(0)
                            } else {
                                e.preventDefault()
                                setRatingFilterState(4)
                                // console.log(ratingFilterState)
                            }
                        }
                    }>
                        <button className={s.filteraside__rating_container__buttons_item}>
                            <i className='fa-solid fa-star fa-1x'></i>
                            <i className='fa-solid fa-star fa-1x'></i>
                            <i className='fa-solid fa-star fa-1x'></i>
                            <i className='fa-solid fa-star fa-1x'></i>
                            <i className='fa-regular fa-star fa-1x'></i>

                            <i className={s.filteraside__rating_container__buttons_item__text}> 4.0 {languageData.filter[8]} </i>
                        </button>
                    </span>
                    <span className={s.filteraside__rating_container__buttons} onClick={
                        (e) => {
                            if(ratingFilterState == 3.5) {
                                e.preventDefault()
                                setRatingFilterState(0)
                            } else {
                                e.preventDefault()
                                setRatingFilterState(3.5)
                                // console.log(ratingFilterState)
                            }
                        }
                    }>
                        <button className={s.filteraside__rating_container__buttons_item}>
                            <i className='fa-solid fa-star fa-1x'></i>
                            <i className='fa-solid fa-star fa-1x'></i>
                            <i className='fa-solid fa-star fa-1x'></i>
                            <i className='fa-solid fa-star-half-stroke fa-1x'></i>
                            <i className='fa-regular fa-star fa-1x'></i>

                            <i className={s.filteraside__rating_container__buttons_item__text}> 3.5 {languageData.filter[8]} </i>
                        </button>
                    </span>
                    <span className={s.filteraside__rating_container__buttons} onClick={
                        (e) => {
                            if(ratingFilterState == 3) {
                                e.preventDefault()
                                setRatingFilterState(0)
                            } else {
                                e.preventDefault()
                                setRatingFilterState(3)
                                // console.log(ratingFilterState)
                            }
                        }
                    }>
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
                {
                    apiSTATE.map(
                        (elements, index) => 
                            {
                                // if(priceRangeSubmit == true) {
                                    var priceRangeStatus = true
                                    if(fprMinSTATEafterSubmit > fprMaxSTATEafterSubmit) {
                                    } else if(fprMinSTATEafterSubmit == fprMaxSTATEafterSubmit) {
                                        // return product which exact same with min or max value which they are same | setFilterPRangeSTATE() filterPRangeSTATE
                                        if(elements.price == fprMinSTATEafterSubmit) {
                                            // console.log("TRUE")
                                            var priceRangeStatus = true
                                        } else {
                                            // console.log("FALSE")
                                            var priceRangeStatus = false
                                        }
                                    } else if(fprMinSTATEafterSubmit < fprMaxSTATEafterSubmit) {
                                        // return product cards | setFilterPRangeSTATE() filterPRangeSTATE
                                        if(elements.price >= fprMinSTATEafterSubmit && elements.price <= fprMaxSTATEafterSubmit) {
                                            // console.log("TRUE")
                                            var priceRangeStatus = true
                                        } else {
                                            // console.log("FALSE")
                                            var priceRangeStatus = false
                                        }
                                    } else if(fprMinSTATEafterSubmit < 0) {
                                        // alert("ERROR: Please check minimum price value.")
                                        // setFprMinSTATE(0)
                                    } else if(fprMaxSTATEafterSubmit > 999999) {
                                        // alert("ERROR: Please check maximum price value.")
                                        // setFprMaxSTATE(999999)
                                    } else {
                                        // is it possible ? :D
                                    }
                                
                                if(searchedElement.toLowerCase() == "" && priceRangeStatus == true) {
                                    // console.log(ratingFilterState)
                                    // var resultStatus = true
                                    if(elements.rating.rate >= ratingFilterState) {return (
                                        <div className={s.products__cards} key={elements.id}> {/* apiSTATE[0].id */}
                                            <button className={s.products__cards_image__favbtn} id={"product_" + elements.id.toString()} onClick={
                                                (e) => {
                                                    var currentUserIs = JSON.parse(localStorage.getItem("signedUser")) // get info from storage who is current user
                                                    if(currentUserIs != "guest") {
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
                                                }
                                            }> <i className='fa-solid fa-heart fa-1x'></i> </button>
                                            {/* image */}
                                            <Link className={s.products__cards_image} to={"/products/item_view_id="+elements.id} onClick={
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
                                            </Link>
                                            {/* information */}
                                            <Link className={s.products__cards_information} to={"/products/item_view_id="+elements.id} onClick={
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
                                                <strong className={s.products__cards_information__price}> $ {elements.price} USD </strong>
                                            </Link>
                                        </div>
                                    )}
                                } else if(elements.title.toLowerCase().includes(searchedElement.toLowerCase()) || elements.description.toLowerCase().includes(searchedElement.toLowerCase()) || elements.category.toLowerCase().includes(searchedElement.toLowerCase())) {
                                    // var resultStatus = true
                                    if(priceRangeStatus == true && elements.rating.rate >= ratingFilterState) {
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
                                                <Link className={s.products__cards_image} to={"/products/item_view_id="+elements.id} onClick={
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
                                                </Link>
                                                {/* information */}
                                                <Link className={s.products__cards_information} to={"/products/item_view_id="+elements.id} onClick={
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
                                                        </span>
                                                        <span className={s.products__cards_information__rating_point}> {elements.rating.rate} / 5 </span> {/* 5 or 10 */}
                                                    </span>
                                                    <strong className={s.products__cards_information__price}> $ {elements.price} USD </strong>
                                                </Link>
                                            </div>
                                        )
                                    }
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
    )}

export default Products