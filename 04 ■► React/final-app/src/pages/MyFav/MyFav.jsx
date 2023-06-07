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
import { BrowserRouter as Router, Switch, Route, Routes, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setCurrentProduct } from '../../features/counter/selectedProduct'
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR 02 //
function MyFav() {
    // ...
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR 03 //
    // const [myfavSTATE, setMyfavSTATE] = useState(dataSource.english.myfav)

    const dispatch = useDispatch()
    const languageData = useSelector((state) => state.language.currentLanguage.myfav)

    const [isLoggedSTATE, setIsLoggedSTATE] = useState(JSON.parse(localStorage.getItem("isLogged")))

    // useEffect(
    //     () => {
    //         return () => {
    //             var languageData = document.querySelector("#language")
    //             languageData.addEventListener("change", () => {
    //                 if (languageData.value == "English") {
    //                     setMyfavSTATE(dataSource.english.myfav)
    //                 } else if (languageData.value == "Azərbaycan dili") {
    //                     setMyfavSTATE(dataSource.azerbaijani.myfav)
    //                 } else if (languageData.value == "Türkçe") {
    //                     setMyfavSTATE(dataSource.turkish.myfav)
    //                 }
    //             })
    //         }
    //     }, []
    // )

    // cancel fetch data, get data with store redux toolkit from products to my_fav
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR ?? //
    const [fakeStoreAPI, setFakeStoreAPI] = useState([])

    // ------------->> for put data into fakeStoreAPI - use it for authentication may be
    // fetch('https://fakestoreapi.com/products',{
    //     method:"POST",
    //     body:JSON.stringify(
    //         {
    //             title: 'test product',
    //             price: 13.5,
    //             description: 'lorem ipsum set',
    //             image: 'https://i.pravatar.cc',
    //             category: 'electronic'
    //         }
    //     )
    // })
    //     .then(res=>res.json())
    //     .then(json=>console.log(json))
    // ------------->> update data inside fakeStoreAPI
    // fetch('https://fakestoreapi.com/products/7',{
    //         method:"PUT",
    //         body:JSON.stringify(
    //             {
    //                 title: 'test product',
    //                 price: 13.5,
    //                 description: 'lorem ipsum set',
    //                 image: 'https://i.pravatar.cc',
    //                 category: 'electronic'
    //             }
    //         )
    //     })
    //         .then(res=>res.json())
    //         .then(json=>console.log(json))
    // fetch('https://fakestoreapi.com/products/7',{
    //     method:"PATCH",
    //     body:JSON.stringify(
    //         {
    //             title: 'test product',
    //             price: 13.5,
    //             description: 'lorem ipsum set',
    //             image: 'https://i.pravatar.cc',
    //             category: 'electronic'
    //         }
    //     )
    // })
    //     .then(res=>res.json())
    //     .then(json=>console.log(json))
    // ------------->> delete product or data from fakeStoreAPI
    // fetch('https://fakestoreapi.com/products/6',{
    //     method:"DELETE"
    // })
    //     .then(res=>res.json())
    //     .then(json=>console.log(json))

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
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR 04 //
    return (
        <main className={s.myfav}>
            <div className={s.myfav__topside}>
                { handleFavCounter() }
            </div>
            <div className={s.myfav__container}>

                { handleFavCards() }

                {/* product card in favorites 001 */}
                {/* <div className={s.myfav__container_cards}>
                    <div className={s.myfav__container_cards__image}>
                        <img src="#" alt="image-favorites-001" className={s.myfav__container_cards__image_content} />
                    </div>
                    <p className={s.myfav__container_cards__title}> Product Name </p>
                    <strong className={s.myfav__container_cards__price}> $ 100 USD </strong>
                </div> */}

                
                {/* <div className={s.myfav__container_cards}>
                    <div className={s.myfav__container_cards__image}>
                        <img src="#" alt="image-favorites-001" className={s.myfav__container_cards__image_content} />
                    </div>
                    <p className={s.myfav__container_cards__title}> Product Name </p>
                    <strong className={s.myfav__container_cards__price}> $ 100 USD </strong>
                </div>
                <div className={s.myfav__container_cards}>
                    <div className={s.myfav__container_cards__image}>
                        <img src="#" alt="image-favorites-001" className={s.myfav__container_cards__image_content} />
                    </div>
                    <p className={s.myfav__container_cards__title}> Product Name </p>
                    <strong className={s.myfav__container_cards__price}> $ 100 USD </strong>
                </div>
                <div className={s.myfav__container_cards}>
                    <div className={s.myfav__container_cards__image}>
                        <img src="#" alt="image-favorites-001" className={s.myfav__container_cards__image_content} />
                    </div>
                    <p className={s.myfav__container_cards__title}> Product Name </p>
                    <strong className={s.myfav__container_cards__price}> $ 100 USD </strong>
                </div>
                <div className={s.myfav__container_cards}>
                    <div className={s.myfav__container_cards__image}>
                        <img src="#" alt="image-favorites-001" className={s.myfav__container_cards__image_content} />
                    </div>
                    <p className={s.myfav__container_cards__title}> Product Name </p>
                    <strong className={s.myfav__container_cards__price}> $ 100 USD </strong>
                </div>
                <div className={s.myfav__container_cards}>
                    <div className={s.myfav__container_cards__image}>
                        <img src="#" alt="image-favorites-001" className={s.myfav__container_cards__image_content} />
                    </div>
                    <p className={s.myfav__container_cards__title}> Product Name </p>
                    <strong className={s.myfav__container_cards__price}> $ 100 USD </strong>
                </div>
                <div className={s.myfav__container_cards}>
                    <div className={s.myfav__container_cards__image}>
                        <img src="#" alt="image-favorites-001" className={s.myfav__container_cards__image_content} />
                    </div>
                    <p className={s.myfav__container_cards__title}> Product Name </p>
                    <strong className={s.myfav__container_cards__price}> $ 100 USD </strong>
                </div><div className={s.myfav__container_cards}>
                    <div className={s.myfav__container_cards__image}>
                        <img src="#" alt="image-favorites-001" className={s.myfav__container_cards__image_content} />
                    </div>
                    <p className={s.myfav__container_cards__title}> Product Name </p>
                    <strong className={s.myfav__container_cards__price}> $ 100 USD </strong>
                </div>
                <div className={s.myfav__container_cards}>
                    <div className={s.myfav__container_cards__image}>
                        <img src="#" alt="image-favorites-001" className={s.myfav__container_cards__image_content} />
                    </div>
                    <p className={s.myfav__container_cards__title}> Product Name </p>
                    <strong className={s.myfav__container_cards__price}> $ 100 USD </strong>
                </div>
                <div className={s.myfav__container_cards}>
                    <div className={s.myfav__container_cards__image}>
                        <img src="#" alt="image-favorites-001" className={s.myfav__container_cards__image_content} />
                    </div>
                    <p className={s.myfav__container_cards__title}> Product Name </p>
                    <strong className={s.myfav__container_cards__price}> $ 100 USD </strong>
                </div><div className={s.myfav__container_cards}>
                    <div className={s.myfav__container_cards__image}>
                        <img src="#" alt="image-favorites-001" className={s.myfav__container_cards__image_content} />
                    </div>
                    <p className={s.myfav__container_cards__title}> Product Name </p>
                    <strong className={s.myfav__container_cards__price}> $ 100 USD </strong>
                </div>
                <div className={s.myfav__container_cards}>
                    <div className={s.myfav__container_cards__image}>
                        <img src="#" alt="image-favorites-001" className={s.myfav__container_cards__image_content} />
                    </div>
                    <p className={s.myfav__container_cards__title}> Product Name </p>
                    <strong className={s.myfav__container_cards__price}> $ 100 USD </strong>
                </div>
                <div className={s.myfav__container_cards}>
                    <div className={s.myfav__container_cards__image}>
                        <img src="#" alt="image-favorites-001" className={s.myfav__container_cards__image_content} />
                    </div>
                    <p className={s.myfav__container_cards__title}> Product Name </p>
                    <strong className={s.myfav__container_cards__price}> $ 100 USD </strong>
                </div><div className={s.myfav__container_cards}>
                    <div className={s.myfav__container_cards__image}>
                        <img src="#" alt="image-favorites-001" className={s.myfav__container_cards__image_content} />
                    </div>
                    <p className={s.myfav__container_cards__title}> Product Name </p>
                    <strong className={s.myfav__container_cards__price}> $ 100 USD </strong>
                </div>
                <div className={s.myfav__container_cards}>
                    <div className={s.myfav__container_cards__image}>
                        <img src="#" alt="image-favorites-001" className={s.myfav__container_cards__image_content} />
                    </div>
                    <p className={s.myfav__container_cards__title}> Product Name </p>
                    <strong className={s.myfav__container_cards__price}> $ 100 USD </strong>
                </div>
                <div className={s.myfav__container_cards}>
                    <div className={s.myfav__container_cards__image}>
                        <img src="#" alt="image-favorites-001" className={s.myfav__container_cards__image_content} />
                    </div>
                    <p className={s.myfav__container_cards__title}> Product Name </p>
                    <strong className={s.myfav__container_cards__price}> $ 100 USD </strong>
                </div><div className={s.myfav__container_cards}>
                    <div className={s.myfav__container_cards__image}>
                        <img src="#" alt="image-favorites-001" className={s.myfav__container_cards__image_content} />
                    </div>
                    <p className={s.myfav__container_cards__title}> Product Name </p>
                    <strong className={s.myfav__container_cards__price}> $ 100 USD </strong>
                </div>
                <div className={s.myfav__container_cards}>
                    <div className={s.myfav__container_cards__image}>
                        <img src="#" alt="image-favorites-001" className={s.myfav__container_cards__image_content} />
                    </div>
                    <p className={s.myfav__container_cards__title}> Product Name </p>
                    <strong className={s.myfav__container_cards__price}> $ 100 USD </strong>
                </div>
                <div className={s.myfav__container_cards}>
                    <div className={s.myfav__container_cards__image}>
                        <img src="#" alt="image-favorites-001" className={s.myfav__container_cards__image_content} />
                    </div>
                    <p className={s.myfav__container_cards__title}> Product Name </p>
                    <strong className={s.myfav__container_cards__price}> $ 100 USD </strong>
                </div><div className={s.myfav__container_cards}>
                    <div className={s.myfav__container_cards__image}>
                        <img src="#" alt="image-favorites-001" className={s.myfav__container_cards__image_content} />
                    </div>
                    <p className={s.myfav__container_cards__title}> Product Name </p>
                    <strong className={s.myfav__container_cards__price}> $ 100 USD </strong>
                </div>
                <div className={s.myfav__container_cards}>
                    <div className={s.myfav__container_cards__image}>
                        <img src="#" alt="image-favorites-001" className={s.myfav__container_cards__image_content} />
                    </div>
                    <p className={s.myfav__container_cards__title}> Product Name </p>
                    <strong className={s.myfav__container_cards__price}> $ 100 USD </strong>
                </div>
                <div className={s.myfav__container_cards}>
                    <div className={s.myfav__container_cards__image}>
                        <img src="#" alt="image-favorites-001" className={s.myfav__container_cards__image_content} />
                    </div>
                    <p className={s.myfav__container_cards__title}> Product Name </p>
                    <strong className={s.myfav__container_cards__price}> $ 100 USD </strong>
                </div><div className={s.myfav__container_cards}>
                    <div className={s.myfav__container_cards__image}>
                        <img src="#" alt="image-favorites-001" className={s.myfav__container_cards__image_content} />
                    </div>
                    <p className={s.myfav__container_cards__title}> Product Name </p>
                    <strong className={s.myfav__container_cards__price}> $ 100 USD </strong>
                </div>
                <div className={s.myfav__container_cards}>
                    <div className={s.myfav__container_cards__image}>
                        <img src="#" alt="image-favorites-001" className={s.myfav__container_cards__image_content} />
                    </div>
                    <p className={s.myfav__container_cards__title}> Product Name </p>
                    <strong className={s.myfav__container_cards__price}> $ 100 USD </strong>
                </div>
                <div className={s.myfav__container_cards}>
                    <div className={s.myfav__container_cards__image}>
                        <img src="#" alt="image-favorites-001" className={s.myfav__container_cards__image_content} />
                    </div>
                    <p className={s.myfav__container_cards__title}> Product Name </p>
                    <strong className={s.myfav__container_cards__price}> $ 100 USD </strong>
                </div> */}


            </div>
        </main>
    )
}
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR 05 //
export default MyFav
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ ENDING LINE //