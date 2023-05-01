import React from 'react'
import s from './index.module.css'
import {dataSource} from '../../data/data-source'
import {useState, useEffect} from 'react'

function About() {
    return (
        <main className={s.about}>
            <div className={s.about__container}>
                {/* TEXT CONCENT */}
                Welcome to ShopNet, your one-stop online shop for all your favorite products! Established in April 2023, we are a rapidly growing e-commerce platform based in 28 May, Baku, Azerbaijan, offering a wide range of high-quality products at affordable prices.
                At ShopNet, we understand the convenience and simplicity of online shopping, and we are committed to providing our customers with a seamless and enjoyable shopping experience. Our website is easy to navigate, and our product listings are detailed and informative, providing you with all the information you need to make an informed purchase decision.
                Our product range includes everything from fashion and beauty products to electronics, home appliances, and more, all sourced from trusted manufacturers and suppliers. We also offer fast and reliable shipping to anywhere in Azerbaijan, ensuring that you receive your order quickly and hassle-free.
                At ShopNet, we believe that customer satisfaction is our top priority, and we are dedicated to providing you with excellent customer service and support. If you have any questions or concerns, our friendly and knowledgeable customer service team is available to assist you.
                Thank you for choosing ShopNet as your preferred online shopping destination. We look forward to serving you and making your shopping experience a great one!
                {/* ADD GALLERY HERE */}
                {/* ... */}
            </div>
        </main>
    )
}

export default About