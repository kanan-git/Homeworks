import React from 'react'
import s from './index.module.css'
import {dataSource} from '../../data/data-source'
import {useState, useEffect, useRef} from 'react'
import { useSelector } from 'react-redux'

function MyCart() {
    const languageData = useSelector((state) => state.language.currentLanguage.mycart)

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

export default MyCart