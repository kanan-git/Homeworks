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
import { useSelector } from 'react-redux'
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR 02 //
function MyFav() {
    // ...
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR 03 //
    // const [myfavSTATE, setMyfavSTATE] = useState(dataSource.english.myfav)

    const languageData = useSelector((state) => state.language.currentLanguage.myfav)

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
    function handleCards() {
        var currentUserIs = JSON.parse(localStorage.getItem("signedUser"))
        var arrayOfFavoriteProducts = JSON.parse(localStorage.getItem(currentUserIs)).favorites

        return arrayOfFavoriteProducts.map(
            (index) => 
            <div className={s.myfav__container_cards} key={index}>
                <div className={s.myfav__container_cards__image}>
                    <img src="" alt={"image-favorites-" + index} 
                    className={s.myfav__container_cards__image_content} />
                </div>
                <p className={s.myfav__container_cards__title}> {index} </p>
                <strong className={s.myfav__container_cards__price}> $ {index} USD </strong>
                {console.log(index)}
            </div>
        )
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

                { handleCards() }

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