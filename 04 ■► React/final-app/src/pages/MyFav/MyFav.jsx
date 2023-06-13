import React from 'react'
import s from './index.module.css'
import {dataSource} from '../../data/data-source'
import {useState, useEffect, useRef} from 'react'
import { BrowserRouter as Router, Switch, Route, Routes, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setCurrentProduct } from '../../features/counter/selectedProduct'

function MyFav() {
    const dispatch = useDispatch()
    const languageData = useSelector((state) => state.language.currentLanguage.myfav)

    const [isLoggedSTATE, setIsLoggedSTATE] = useState(JSON.parse(localStorage.getItem("isLogged")))
    const [fakeStoreAPI, setFakeStoreAPI] = useState([])

    async function fn4api() {
        try {
            const response = await fetch("https://fakestoreapi.com/products") // ?limit=5
            const json = await response.json()
            const arrJson = json
            // console.log(arrJson)
            setFakeStoreAPI(arrJson)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(
        () => {
            fn4api()
        }, []
    )

    function handleFavCards() {
        try {
            var currentUserIs = JSON.parse(localStorage.getItem("signedUser"))
            var arrayOfFavoriteProducts = JSON.parse(localStorage.getItem(currentUserIs)).favorites
    
            return arrayOfFavoriteProducts.map(
                (index) => 
                    // {fetch("https://fakestoreapi.com/products/"+index)}
                    <Link className={s.myfav__container_cards} to="/products/item_view" 
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
                        <div className={s.myfav__container_cards__image}>
                            {/* {console.log(fakeStoreAPI[index-1].image)} */}
                            <img src={fakeStoreAPI[index-1].image} 
                            alt={"image-favorites-" + fakeStoreAPI[index-1].id} 
                            className={s.myfav__container_cards__image_content} />
                        </div>
                        <p className={s.myfav__container_cards__title}> {fakeStoreAPI[index-1].title} </p>
                        <strong className={s.myfav__container_cards__price}> $ {fakeStoreAPI[index-1].price} USD </strong>
                    </Link>
            )
        } catch(error) {
            console.log(error)
        }
    }

    function handleFavCounter() {
        var currentUserIs = JSON.parse(localStorage.getItem("signedUser"))
        var productCounter = JSON.parse(localStorage.getItem(currentUserIs)).favorites.length

        return <b className={s.myfav__topside_header}> {languageData}: {productCounter} </b>
    }

    return (
        <main className={s.myfav}>
            <div className={s.myfav__topside}>
                { handleFavCounter() }
            </div>
            <div className={s.myfav__container}>
                { handleFavCards() }
            </div>
        </main>
    )
}
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR 05 //
export default MyFav
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ ENDING LINE //