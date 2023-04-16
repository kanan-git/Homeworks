import React from 'react'

export default function ShippingAddress() {
    return (
        <>
            <div id="shipping_address"> {/* selected shipping address */}
                <ul className="shipping_list">
                    <li className="shipping_list_items">John Maker</li>
                    <li className="shipping_list_items">123 Plae Grand Street</li>
                    <li className="shipping_list_items">Vermont, California</li>
                    <li className="shipping_list_items">United States of America</li>
                </ul>
                <button className="change_btn">Change</button>
            </div>
        </>
    )
}