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
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR 02 //
function MyFav() {
    // ...
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR 03 //
    const [myfavSTATE, setMyfavSTATE] = useState(dataSource.english.myfav)
    useEffect(
        () => {
            return () => {
                var languageData = document.querySelector("#language")
                languageData.addEventListener("change", () => {
                    if (languageData.value == "English") {
                        setMyfavSTATE(dataSource.english.myfav)
                    } else if (languageData.value == "Azərbaycan dili") {
                        setMyfavSTATE(dataSource.azerbaijani.myfav)
                    } else if (languageData.value == "Türkçe") {
                        setMyfavSTATE(dataSource.turkish.myfav)
                    }
                })
            }
        }, []
    )
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR 04 //
    return (
        <main className={s.myfav}>
            <div className={s.myfav__topside}>
                <b className={s.myfav__topside_header}> {myfavSTATE}: "25" </b>
            </div>
            <div className={s.myfav__container}>


                {/* product card in favorites 001 */}
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
                </div>


            </div>
        </main>
    )
}
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ SECTOR 05 //
export default MyFav
// ▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬|▬▬▬▬▬ ENDING LINE //