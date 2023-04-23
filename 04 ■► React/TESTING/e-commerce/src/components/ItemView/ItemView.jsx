import React from 'react'

export default function ItemView() {
    return (
        <>
            <section id="item_view"> {/* item view components */}
                <button className="back_from_item_view">◄ Back</button>
                <div className="item_view_product_container">
                    <div className="selected_product">
                        <div className="selected_product_smallimg">
                        <div className="selected_product_imgitem">
                            <img className="selected_product_imgcontent" src="#" alt="small-image-view" />
                        </div>
                        <div className="selected_product_imgitem">
                            <img className="selected_product_imgcontent" src="#" alt="small-image-view" />
                        </div>
                        <div className="selected_product_imgitem">
                            <img className="selected_product_imgcontent" src="#" alt="small-image-view" />
                        </div>
                        </div>
                        <div className="selected_product_preview">
                        <img className="selected_product_preview_imgcontent" />
                        </div>
                        <div className="selected_product_information">
                        <h1 className="selected_product_title">Apple Watch</h1>
                        <i className="selected_product_detail">Series 5 SE</i>
                        <span className="selected_product_rating">
                            <span className="selected_product_rating_stars">
                            •
                            •
                            •
                            •
                            ○
                            </span>
                            <span className="selected_product_rating_point">
                            <i className="selected_product_rating_point_current">4.5</i>
                            <i className="selected_product_rating_point_top">/5</i>
                            </span>
                        </span>
                        <strong className="selected_product_price">$ 529.99</strong>
                        <p className="selected_product_description">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Quisquam, labore! Commodi quia impedit sint ea accusantium quis nesciunt eaque consequatur.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Quisquam, labore! Commodi quia impedit sint ea accusantium quis nesciunt eaque consequatur.
                        </p>
                        </div>
                    </div>
                    <button className="add2bag_button">■ Add to Bag</button>
                    </div>
                    <div className="item_view_description">
                    <h1 className="item_view_description_header">Description</h1>
                    <span className="item_view_description_text">
                        <p className="item_view_description_text_paragraph">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Quisquam, labore! Commodi quia impedit sint ea accusantium quis nesciunt eaque consequatur.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Quisquam, labore! Commodi quia impedit sint ea accusantium quis nesciunt eaque consequatur.
                        </p>
                        <p className="item_view_description_text_paragraph">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Quisquam, labore! Commodi quia impedit sint ea accusantium quis nesciunt eaque consequatur.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Quisquam, labore! Commodi quia impedit sint ea accusantium quis nesciunt eaque consequatur.
                        </p>
                        <p className="item_view_description_text_paragraph">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Quisquam, labore! Commodi quia impedit sint ea accusantium quis nesciunt eaque consequatur.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Quisquam, labore! Commodi quia impedit sint ea accusantium quis nesciunt eaque consequatur.
                        </p>
                        <p className="item_view_description_text_paragraph">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Quisquam, labore! Commodi quia impedit sint ea accusantium quis nesciunt eaque consequatur.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Quisquam, labore! Commodi quia impedit sint ea accusantium quis nesciunt eaque consequatur.
                        </p>
                    </span>
                </div>
            </section>
        </>
    )
}