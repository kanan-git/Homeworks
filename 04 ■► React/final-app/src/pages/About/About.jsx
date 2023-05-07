import React from 'react'
import s from './index.module.css'
import {dataSource} from '../../data/data-source'
import {useState, useEffect, useRef} from 'react'

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

    
    const [] = useState(dataSource.english.about.___)

    useEffect(
        () => {
            // fake condition for now which will be replaced with input select language data with store (redux tlk)
            var languageData = "English" // "English", "Azərbaycan dili", "Türkçe"
            if (languageData == "English") {
                // .
            } else if (languageData == "Azərbaycan dili") {
                // .
            } else if (languageData == "Türkçe") {
                // .
            }
        }, []
    )

    return (
        <main className={s.about}>
            <div className={s.about__container}>
                <h3 className={s.about__container_headers}> Welcome to ShopNet </h3>
                <div className={s.about__container_text}>
                    {/* text content 2/5 paragraph from chatgpt */}
                    Your one-stop online shop for all your favorite products! Established in April 2023, we are a rapidly growing e-commerce platform based in 28 May, Baku, Azerbaijan, offering a wide range of high-quality products at affordable prices.
                    <br />
                    At ShopNet, we understand the convenience and simplicity of online shopping, and we are committed to providing our customers with a seamless and enjoyable shopping experience. Our website is easy to navigate, and our product listings are detailed and informative, providing you with all the information you need to make an informed purchase decision.
                </div>

                <h3 className={s.about__container_headers}> Gallery </h3>
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
                </div>

                <h3 className={s.about__container_headers}> Who we are ? </h3>
                <div className={s.about__container_text}>
                    {/* text content 3/5 paragraph from chatgpt */}
                    Our product range includes everything from fashion and beauty products to electronics, home appliances, and more, all sourced from trusted manufacturers and suppliers. We also offer fast and reliable shipping to anywhere in Azerbaijan, ensuring that you receive your order quickly and hassle-free.
                    <br />
                    At ShopNet, we believe that customer satisfaction is our top priority, and we are dedicated to providing you with excellent customer service and support. If you have any questions or concerns, our friendly and knowledgeable customer service team is available to assist you.
                    <br />
                    Thank you for choosing ShopNet as your preferred online shopping destination. We look forward to serving you and making your shopping experience a great one!
                </div>

                <h3 className={s.about__container_headers}> See more </h3>
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
                    <button className={s.about__container_carousel__buttons} id={s.carousel__btn_previous}> ◄ </button>
                    <button className={s.about__container_carousel__buttons} id={s.carousel__btn_next}> ► </button>
                </div>
            </div>
        </main>
    )
}

export default About