import React from 'react'

export default function CheckBag() {
    return (
        <>
            <section id="check_bag"> {/* check your bag section */}
                <h1 className="check_bag_header">Check your Bag items</h1>
                <div className="bagcards_container">
                    <div className="bag_productcard"> {/* product cards in bag section */}
                        <div className="bag_productcard_image">
                        <img className="bag_productcard_image_content" src="#" alt="product-image" />
                        </div>
                        <div className="bag_productcard_info">
                        <h1 className="bag_productcard_title">Dell XPS 13</h1>
                        <i className="bag_productcard_detail">White</i>
                        <p className="bag_productcard_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam</p>
                        <span className="bag_productcard_rating">
                            <span className="bag_productcard_rating_stars">
                            •
                            •
                            •
                            •
                            ○
                            </span>
                            <span className="bag_productcard_rating_point">
                            <i className="bag_productcard_rating_point_current">4.5</i>
                            <i className="bag_productcard_rating_point_top">/5</i>
                            </span>
                        </span>
                        <span className="bag_productcard_purchase">
                            <strong className="bag_productcard_purchase_price">$ 1799.99 {/* add count with prop */} </strong>
                            <span className="bag_productcard_selectcount">
                            <button className="bag_productcard_minus"> - </button>
                            <span className="bag_productcard_count"> 1 </span>
                            <button className="bag_productcard_plus"> + </button>
                            </span>
                        </span>
                        </div>
                    </div>
                    <div className="bag_productcard"> {/* product cards in bag section */}
                        <div className="bag_productcard_image">
                        <img className="bag_productcard_image_content" src="#" alt="product-image" />
                        </div>
                        <div className="bag_productcard_info">
                        <h1 className="bag_productcard_title">iPhone 11</h1>
                        <i className="bag_productcard_detail">Navy Blue</i>
                        <p className="bag_productcard_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam</p>
                        <span className="bag_productcard_rating">
                            <span className="bag_productcard_rating_stars">
                            •
                            •
                            •
                            •
                            ○
                            </span>
                            <span className="bag_productcard_rating_point">
                            <i className="bag_productcard_rating_point_current">4.5</i>
                            <i className="bag_productcard_rating_point_top">/5</i>
                            </span>
                        </span>
                        <span className="bag_productcard_purchase">
                            <strong className="bag_productcard_purchase_price">$ 729.99 {/* add count with prop */} </strong>
                            <span className="bag_productcard_selectcount">
                            <button className="bag_productcard_minus"> - </button>
                            <span className="bag_productcard_count"> 3 </span>
                            <button className="bag_productcard_plus"> + </button>
                            </span>
                        </span>
                        </div>
                    </div>
                    <div className="bag_productcard"> {/* product cards in bag section */}
                        <div className="bag_productcard_image">
                        <img className="bag_productcard_image_content" src="#" alt="product-image" />
                        </div>
                        <div className="bag_productcard_info">
                        <h1 className="bag_productcard_title">iPhone 11</h1>
                        <i className="bag_productcard_detail">Milky White</i>
                        <p className="bag_productcard_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam</p>
                        <span className="bag_productcard_rating">
                            <span className="bag_productcard_rating_stars">
                            •
                            •
                            •
                            •
                            ○
                            </span>
                            <span className="bag_productcard_rating_point">
                            <i className="bag_productcard_rating_point_current">4.5</i>
                            <i className="bag_productcard_rating_point_top">/5</i>
                            </span>
                        </span>
                        <span className="bag_productcard_purchase">
                            <strong className="bag_productcard_purchase_price">$ 619.99 {/* add count with prop */} </strong>
                            <span className="bag_productcard_selectcount">
                            <button className="bag_productcard_minus"> - </button>
                            <span className="bag_productcard_count"> 1 </span>
                            <button className="bag_productcard_plus"> + </button>
                            </span>
                        </span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}