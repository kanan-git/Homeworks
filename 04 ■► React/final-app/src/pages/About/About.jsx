import React from 'react'
import s from './index.module.css'
import {dataSource} from '../../data/data-source'
import {useState, useEffect, useRef} from 'react'
import { useSelector } from 'react-redux'

import grid_img_1 from './about assets/grid/img_1.png'
import grid_img_2 from './about assets/grid/img_2.png'
import grid_img_3 from './about assets/grid/img_3.png'
import grid_img_4 from './about assets/grid/img_4.png'
import grid_img_5 from './about assets/grid/img_5.png'
import grid_img_6 from './about assets/grid/img_6.png'

import carousel_img_1 from './about assets/carousel/img_1.png'
import carousel_img_2 from './about assets/carousel/img_2.png'
import carousel_img_3 from './about assets/carousel/img_3.png'
import carousel_img_4 from './about assets/carousel/img_4.png'
import carousel_img_5 from './about assets/carousel/img_5.png'
import carousel_img_6 from './about assets/carousel/img_6.png'
import carousel_img_7 from './about assets/carousel/img_7.png'

function About() {
    const [textSTATE, setTextSTATE] = useState(dataSource.english.about.text)
    const [headersSTATE, setHeadersSTATE] = useState(dataSource.english.about.headers)

    const btnLeft = useRef()
    const btnRight = useRef()

    const languageData = useSelector(
        (state) => state.language.currentLanguage.about
    )

    function carouselGallery() {
        const carouselImages = Array.from(document.querySelectorAll(`.${s.about__container_carousel__image}`))
        var currentIndexCarousel = 0
        carouselImages.map(
            (image, index) => {
                image.style.transform = `translateY(-50%) translateX(${(index - currentIndexCarousel) * 149}%)`
                if (index-currentIndexCarousel == 2) {
                    image.style.filter = `drop-shadow(0 0 24px red)`
                } else if (index-currentIndexCarousel == 1 || index-currentIndexCarousel == 3) {
                    image.style.filter = `drop-shadow(0 0 16px gold)`
                } else if (index-currentIndexCarousel == 0 || index-currentIndexCarousel == 4) {
                    image.style.filter = `drop-shadow(0 0 4px yellowgreen)`
                }
            }
        )
        btnLeft.current.addEventListener("click", () => {
            if(currentIndexCarousel == 0) {
                currentIndexCarousel = carouselImages.length-1
            } else {
                currentIndexCarousel--
            }
            carouselImages.map(
                (image, index) => {
                    image.style.transform = `translateY(-50%) translateX(${(index - currentIndexCarousel) * 149}%)`
                    if (index-currentIndexCarousel == 2) {
                        image.style.filter = `drop-shadow(0 0 24px red)`
                    } else if (index-currentIndexCarousel == 1 || index-currentIndexCarousel == 3) {
                        image.style.filter = `drop-shadow(0 0 16px gold)`
                    } else if (index-currentIndexCarousel == 0 || index-currentIndexCarousel == 4) {
                        image.style.filter = `drop-shadow(0 0 4px yellowgreen)`
                    }
                }
            )
            // console.log(currentIndexCarousel)
        })
        btnRight.current.addEventListener("click", () => {
            if(currentIndexCarousel == carouselImages.length-1) {
                currentIndexCarousel = 0
            } else {
                currentIndexCarousel++
            }
            carouselImages.map(
                (image, index) => {
                    image.style.transform = `translateY(-50%) translateX(${(index - currentIndexCarousel) * 149}%)`
                    if (index-currentIndexCarousel == 2) {
                        image.style.filter = `drop-shadow(0 0 24px red)`
                    } else if (index-currentIndexCarousel == 1 || index-currentIndexCarousel == 3) {
                        image.style.filter = `drop-shadow(0 0 16px gold)`
                    } else if (index-currentIndexCarousel == 0 || index-currentIndexCarousel == 4) {
                        image.style.filter = `drop-shadow(0 0 4px yellowgreen)`
                    }
                }
            )
            // console.log(currentIndexCarousel)
        })
    }

    useEffect(
        () => {
            carouselGallery()
        }, []
    )
    
    return (
        <main className={s.about}>
            <div className={s.about__container}>
                <h3 className={s.about__container_headers}> { languageData.headers[0] } </h3>
                <div className={s.about__container_text}>
                    {/* text content 2/5 paragraph from chatgpt */}
                    { languageData.text[0] }
                    <br /> <br />
                    { languageData.text[1] }
                    <br /> <br />
                    { languageData.text[5] }
                    <br /> <br />
                    { languageData.text[6] }
                </div>

                <h3 className={s.about__container_headers}> { languageData.headers[1] } </h3>
                <div className={s.about__container_gallery}>
                    {/* grid 6 image gallery */}
                    <div className={s.about__container_gallery__image}> {/* 1 of 6 */}
                        <img src={grid_img_1} 
                        alt="grid-gallery-1" 
                        className={s.about__container_gallery__image_content}/>
                    </div>
                    <div className={s.about__container_gallery__image}> {/* 2 of 6 */}
                        <img src={grid_img_2} 
                        alt="grid-gallery-2" 
                        className={s.about__container_gallery__image_content}/>
                    </div>
                    <div className={s.about__container_gallery__image}> {/* 3 of 6 */}
                        <img src={grid_img_3} 
                        alt="grid-gallery-3" 
                        className={s.about__container_gallery__image_content}/>
                    </div>
                    <div className={s.about__container_gallery__image}> {/* 4 of 6 */}
                        <img src={grid_img_4} 
                        alt="grid-gallery-4" 
                        className={s.about__container_gallery__image_content}/>
                    </div>
                    <div className={s.about__container_gallery__image}> {/* 5 of 6 */}
                        <img src={grid_img_5} 
                        alt="grid-gallery-5" 
                        className={s.about__container_gallery__image_content}/>
                    </div>
                    <div className={s.about__container_gallery__image}> {/* 6 of 6 */}
                        <img src={grid_img_6} 
                        alt="grid-gallery-6" 
                        className={s.about__container_gallery__image_content}/>
                    </div>
                    <div className={s.about__container_gallery__image}> {/* additional repeat from 6 */}
                        <img src={grid_img_6} 
                        alt="grid-gallery-6" 
                        className={s.about__container_gallery__image_content}/>
                    </div>
                    <div className={s.about__container_gallery__image}> {/* additional repeat from 6 */}
                        <img src={grid_img_6} 
                        alt="grid-gallery-6" 
                        className={s.about__container_gallery__image_content}/>
                    </div>
                </div>

                <h3 className={s.about__container_headers}> { languageData.headers[2] } </h3>
                <div className={s.about__container_text}>
                    {/* text content 3/5 paragraph from chatgpt */}
                    { languageData.text[2] }
                    <br /> <br />
                    { languageData.text[3] }
                    <br /> <br />
                    { languageData.text[4] }
                    <br /> <br />
                    { languageData.text[7] }
                    <br /> <br />
                    { languageData.text[8] }
                    <br /> <br />
                    { languageData.text[9] }
                    <br /> <br />
                    { languageData.text[10] }
                    <br /> <br />
                    { languageData.text[11] }
                </div>

                <h3 className={s.about__container_headers}> { languageData.headers[3] } </h3>
                <div className={s.about__container_carousel}>
                    {/* centered infinite carousel 7 image gallery */}
                    <div className={s.about__container_carousel__image}> {/* 1 of 7 */}
                        <img src={carousel_img_1} 
                        alt="grid-carousel-1" 
                        className={s.about__container_carousel__image_content}/>
                    </div>
                    <div className={s.about__container_carousel__image}> {/* 2 of 7 */}
                        <img src={carousel_img_2} 
                        alt="grid-carousel-2" 
                        className={s.about__container_carousel__image_content}/>
                    </div>
                    <div className={s.about__container_carousel__image}> {/* 3 of 7 */}
                        <img src={carousel_img_3} 
                        alt="grid-carousel-3" 
                        className={s.about__container_carousel__image_content}/>
                    </div>
                    <div className={s.about__container_carousel__image}> {/* 4 of 7 */}
                        <img src={carousel_img_4} 
                        alt="grid-carousel-4" 
                        className={s.about__container_carousel__image_content}/>
                    </div>
                    <div className={s.about__container_carousel__image}> {/* 5 of 7 */}
                        <img src={carousel_img_5} 
                        alt="grid-carousel-5" 
                        className={s.about__container_carousel__image_content}/>
                    </div>
                    <div className={s.about__container_carousel__image}> {/* 6 of 7 */}
                        <img src={carousel_img_6} 
                        alt="grid-carousel-6" 
                        className={s.about__container_carousel__image_content}/>
                    </div>
                    <div className={s.about__container_carousel__image}> {/* 7 of 7 */}
                        <img src={carousel_img_7} 
                        alt="grid-carousel-7" 
                        className={s.about__container_carousel__image_content}/>
                    </div>
                    <button className={s.about__container_carousel__buttons} 
                    id={s.carousel__btn_previous} 
                    ref={btnLeft}> ◄ </button>
                    <button className={s.about__container_carousel__buttons} 
                    id={s.carousel__btn_next} 
                    ref={btnRight}> ► </button>
                </div>
            </div>
        </main>
    )
}

export default About