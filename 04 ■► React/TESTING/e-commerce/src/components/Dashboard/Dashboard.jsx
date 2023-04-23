import React from 'react'
import { useState, useEffect } from 'react'
import { Fragment } from 'react'
import sDash from './index.module.css'
import ProductCard from './ProductCard/ProductCard'

export default function Dashboard() {
    const [productData, setProductData] = useState([])
    async function fetchDataFromApi() {
        const res = await fetch('https://fakestoreapi.com/products')
        .then( res => res.json() )
        // console.log(productData)
        var productCount = res.length
        // console.log(productCount)
        setProductData(
            {
                title: res[0].title, 
                price: res[0].price, 
                image: res[0].image, 
                rate: res[0].rating.rate, 
                category: res[0].category
            }
        )
    }
    useEffect(
        () => {
            fetchDataFromApi()
        }, []
    )

    // ◄------------ REFERENCE ------------ REFERENCE ------------ REFERENCE ------------ REFERENCE ------------►
    // import React, { Fragment } from "react"
    // import styleMenuList from "./styles.module.css"
    // import MenuListItem from "../MenuListItem"
    // import levels from "../../utils/constants"

    // export default function MenuList(props) {
    //     const { diffLevel, handleChange } = props
    //     return (
    //         <div className={styleMenuList.menulist}>
    //             {
    //                 // levels.map((level, index) => {<MenuListItem diffLevel="Low" />})
    //                 levels.map((level, index) => (
    //                     <Fragment key={index}>
    //                         <MenuListItem isSelected={diffLevel === level} handleChange={handleChange} diffLevel={level} />
    //                     </Fragment>
    //                 ))
    //             }
    //         </div>
    //     )
    // }
    // ◄------------ REFERENCE ------------ REFERENCE ------------ REFERENCE ------------ REFERENCE ------------►
    return (
        <>
            <main id={sDash.dashboard}> {/* static main container for reference */}
                <section className={sDash.dashboard}> {/* products list in grid view page */}
                <div className={sDash.products_container}> {/* product cards container */}

                    <Fragment key="1">
                        <ProductCard />
                        <p> {productData} </p>
                    </Fragment>
                    
                </div>
                </section>
            </main>
        </>
    )
}