import React from 'react'
import { useState, useEffect } from 'react'
import { Fragment } from 'react'

export default function Dashboard() {

    const [productData, setProductData] = useState([])
    async function fetchDataFromApi() {
        const res = await fetch('https://fakestoreapi.com/products')
        .then( res => res.json() )
        // console.log(productData)
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

    return (
        <>
            <main id="dashboard"> {/* static main container for reference */}
                <section className="dashboard"> {/* products list in grid view page */}
                <div className="products_container"> {/* product cards container */}

                    <Fragment key="1">
                        <div className="product_card"> {/* product card 001 */}
                            <div className="product_card_image"> {/* image */}
                                <img src={productData.image} alt="product-image-001" className="product_card_image_content" />
                            </div>
                            <div className="product_card_info"> {/* item info */}
                                {/* <h4 className="product_card_info_title">Apple Watch</h4> */}
                                <h4 className="product_card_info_title"> {productData.title} </h4>
                                <p className="product_card_inf_details"> {productData.category} </p>
                            </div>
                            <div className="product_card_buy"> {/* price and purchase */}
                                <strong className="product_card_buy_price"> $ {productData.price} </strong>
                                <button className="product_card_buy_add2bag"> <i className="fa-solid fa-shopping-bag fa-1x"></i> </button>
                            </div>
                        </div>
                    </Fragment>
                    
                </div>
                </section>
            </main>
        </>
    )
}