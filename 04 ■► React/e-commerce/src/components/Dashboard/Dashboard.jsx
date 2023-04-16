import React from 'react'

export default function Dashboard() {

    // async function testAPI() {
    //     await fetch('https://fakestoreapi.com/products')
    //     .then(res=>res.json())
    //     // .then(json=>console.log(json[2].title))
    //     .then(json=>console.log(json))
    // }
    // testAPI()

    const gettingData = fetch('https://fakestoreapi.com/products')
    gettingData.then(
        (res) => {
            res = res.json()
            console.log(res)
        }
    )

    return (
        <>
            <main id="dashboard"> {/* static main container for reference */}
                <section className="dashboard"> {/* products list in grid view page */}
                <div className="products_container"> {/* product cards container */}
                    <div className="product_card"> {/* product card 001 */}
                    <div className="product_card_image"> {/* image */}
                        <img src="#" alt="product-image-001" className="product_card_image_content" />
                    </div>
                    <div className="product_card_info"> {/* item info */}
                        <h4 className="product_card_info_title">Apple Watch</h4>
                        <p className="product_card_inf_details">Series 5 SE</p>
                    </div>
                    <div className="product_card_buy"> {/* price and purchase */}
                        <strong className="product_card_buy_price">$ 529.99</strong>
                        <button className="product_card_buy_add2bag"> <i className="fa-solid fa-shopping-bag fa-1x"></i> </button>
                    </div>
                    </div>
                    <div className="product_card"> {/* product card 002 */}
                    <div className="product_card_image"> {/* image */}
                        <img src="#" alt="product-image-002" className="product_card_image_content" />
                    </div>
                    <div className="product_card_info"> {/* item info */}
                        <h4 className="product_card_info_title">Sony ZX330BT</h4>
                        <p className="product_card_inf_details">Light Grey</p>
                    </div>
                    <div className="product_card_buy"> {/* price and purchase */}
                        <strong className="product_card_buy_price">$ 39.99</strong>
                        <button className="product_card_buy_add2bag"> <i className="fa-solid fa-shopping-bag fa-1x"></i> </button>
                    </div>
                    </div>
                    <div className="product_card"> {/* product card 003 */}
                    <div className="product_card_image"> {/* image */}
                        <img src="#" alt="product-image-003" className="product_card_image_content" />
                    </div>
                    <div className="product_card_info"> {/* item info */}
                        <h4 className="product_card_info_title">iPhone 11</h4>
                        <p className="product_card_inf_details">Serious Black</p>
                    </div>
                    <div className="product_card_buy"> {/* price and purchase */}
                        <strong className="product_card_buy_price">$ 619.99</strong>
                        <button className="product_card_buy_add2bag"> <i className="fa-solid fa-shopping-bag fa-1x"></i> </button>
                    </div>
                    </div>
                    <div className="product_card"> {/* product card 004 */}
                    <div className="product_card_image"> {/* image */}
                        <img src="#" alt="product-image-004" className="product_card_image_content" />
                    </div>
                    <div className="product_card_info"> {/* item info */}
                        <h4 className="product_card_info_title">iPhone 11</h4>
                        <p className="product_card_inf_details">Subway Blue</p>
                    </div>
                    <div className="product_card_buy"> {/* price and purchase */}
                        <strong className="product_card_buy_price">$ 619.99</strong>
                        <button className="product_card_buy_add2bag"> <i className="fa-solid fa-shopping-bag fa-1x"></i> </button>
                    </div>
                    </div>
                    <div className="product_card"> {/* product card 005 */}
                    <div className="product_card_image"> {/* image */}
                        <img src="#" alt="product-image-005" className="product_card_image_content" />
                    </div>
                    <div className="product_card_info"> {/* item info */}
                        <h4 className="product_card_info_title">Macbook Pro 16"</h4>
                        <p className="product_card_inf_details">Silver M1 Pro</p>
                    </div>
                    <div className="product_card_buy"> {/* price and purchase */}
                        <strong className="product_card_buy_price">$ 3249.99</strong>
                        <button className="product_card_buy_add2bag"> <i className="fa-solid fa-shopping-bag fa-1x"></i> </button>
                    </div>
                    </div>
                    <div className="product_card"> {/* product card 006 */}
                    <div className="product_card_image"> {/* image */}
                        <img src="#" alt="product-image-006" className="product_card_image_content" />
                    </div>
                    <div className="product_card_info"> {/* item info */}
                        <h4 className="product_card_info_title">iPhone 11</h4>
                        <p className="product_card_inf_details">Product RED</p>
                    </div>
                    <div className="product_card_buy"> {/* price and purchase */}
                        <strong className="product_card_buy_price">$ 619.99</strong>
                        <button className="product_card_buy_add2bag"> <i className="fa-solid fa-shopping-bag fa-1x"></i> </button>
                    </div>
                    </div>
                    <div className="product_card"> {/* product card 007 */}
                    <div className="product_card_image"> {/* image */}
                        <img src="#" alt="product-image-007" className="product_card_image_content" />
                    </div>
                    <div className="product_card_info"> {/* item info */}
                        <h4 className="product_card_info_title">iPhone 11</h4>
                        <p className="product_card_inf_details">Milky White</p>
                    </div>
                    <div className="product_card_buy"> {/* price and purchase */}
                        <strong className="product_card_buy_price">$ 619.99</strong>
                        <button className="product_card_buy_add2bag"> <i className="fa-solid fa-shopping-bag fa-1x"></i> </button>
                    </div>
                    </div>
                </div>
                </section>
            </main>
        </>
    )
}