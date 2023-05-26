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
function MyCart() {
    // ...
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR 03 //
    // const [mycartSTATE, setMycartSTATE] = useState(dataSource.english.mycart)

    const languageData = useSelector((state) => state.language.currentLanguage.mycart)

    // useEffect(
    //     () => {
    //         return () => {
    //             var languageData = document.querySelector("#language")
    //             languageData.addEventListener("change", () => {
    //                 if (languageData.value == "English") {
    //                     setMycartSTATE(dataSource.english.mycart)
    //                 } else if (languageData.value == "Azərbaycan dili") {
    //                     setMycartSTATE(dataSource.azerbaijani.mycart)
    //                 } else if (languageData.value == "Türkçe") {
    //                     setMycartSTATE(dataSource.turkish.mycart)
    //                 }
    //             })
    //         }
    //     }, []
    // )
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR 04 //
    return (
        <main className={s.mycart}>
            <div className={s.mycart__topside}>
                <b className={s.mycart__topside_header}> {languageData[0]}: "10" </b>
                <i className={s.mycart__topside_price}> {languageData[1]}: $ "9'999" USD </i>
            </div>
            <div className={s.mycart__container}>


                {/* product card in basket 001 */}
                <div className={s.mycart__container_cards}>
                    <div className={s.mycart__container_cards__image}>
                        <img src="#" alt="image-basket-001" className={s.mycart__container_cards__image_content} />
                    </div>
                    <p className={s.mycart__container_cards__title}> Product Name </p>
                    <strong className={s.mycart__container_cards__price}> $ 100 USD </strong>
                </div>


                <div className={s.mycart__container_cards}>
                    <div className={s.mycart__container_cards__image}>
                        <img src="#" alt="image-basket-001" className={s.mycart__container_cards__image_content} />
                    </div>
                    <p className={s.mycart__container_cards__title}> Product Name </p>
                    <strong className={s.mycart__container_cards__price}> $ 100 USD </strong>
                </div>
                <div className={s.mycart__container_cards}>
                    <div className={s.mycart__container_cards__image}>
                        <img src="#" alt="image-basket-001" className={s.mycart__container_cards__image_content} />
                    </div>
                    <p className={s.mycart__container_cards__title}> Product Name </p>
                    <strong className={s.mycart__container_cards__price}> $ 100 USD </strong>
                </div>
                <div className={s.mycart__container_cards}>
                    <div className={s.mycart__container_cards__image}>
                        <img src="#" alt="image-basket-001" className={s.mycart__container_cards__image_content} />
                    </div>
                    <p className={s.mycart__container_cards__title}> Product Name </p>
                    <strong className={s.mycart__container_cards__price}> $ 100 USD </strong>
                </div>
                <div className={s.mycart__container_cards}>
                    <div className={s.mycart__container_cards__image}>
                        <img src="#" alt="image-basket-001" className={s.mycart__container_cards__image_content} />
                    </div>
                    <p className={s.mycart__container_cards__title}> Product Name </p>
                    <strong className={s.mycart__container_cards__price}> $ 100 USD </strong>
                </div>
                <div className={s.mycart__container_cards}>
                    <div className={s.mycart__container_cards__image}>
                        <img src="#" alt="image-basket-001" className={s.mycart__container_cards__image_content} />
                    </div>
                    <p className={s.mycart__container_cards__title}> Product Name </p>
                    <strong className={s.mycart__container_cards__price}> $ 100 USD </strong>
                </div>
                <div className={s.mycart__container_cards}>
                    <div className={s.mycart__container_cards__image}>
                        <img src="#" alt="image-basket-001" className={s.mycart__container_cards__image_content} />
                    </div>
                    <p className={s.mycart__container_cards__title}> Product Name </p>
                    <strong className={s.mycart__container_cards__price}> $ 100 USD </strong>
                </div>
                <div className={s.mycart__container_cards}>
                    <div className={s.mycart__container_cards__image}>
                        <img src="#" alt="image-basket-001" className={s.mycart__container_cards__image_content} />
                    </div>
                    <p className={s.mycart__container_cards__title}> Product Name </p>
                    <strong className={s.mycart__container_cards__price}> $ 100 USD </strong>
                </div>
                <div className={s.mycart__container_cards}>
                    <div className={s.mycart__container_cards__image}>
                        <img src="#" alt="image-basket-001" className={s.mycart__container_cards__image_content} />
                    </div>
                    <p className={s.mycart__container_cards__title}> Product Name </p>
                    <strong className={s.mycart__container_cards__price}> $ 100 USD </strong>
                </div>
                <div className={s.mycart__container_cards}>
                    <div className={s.mycart__container_cards__image}>
                        <img src="#" alt="image-basket-001" className={s.mycart__container_cards__image_content} />
                    </div>
                    <p className={s.mycart__container_cards__title}> Product Name </p>
                    <strong className={s.mycart__container_cards__price}> $ 100 USD </strong>
                </div>


            </div>
        </main>
    )
}
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR 05 //
export default MyCart
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ ENDING LINE //