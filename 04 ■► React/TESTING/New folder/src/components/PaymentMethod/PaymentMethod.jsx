import React from 'react'

export default function PaymentMethod() {
    return (
        <>
            <div id="payment_method"> {/* selected payment method */}
                <ul className="payment_list">
                <li className="payment_list_items">■ MasterCard ending in 1252</li>
                <li className="payment_list_items">■ $53.21 gift card balance</li>
                <li className="payment_list_items">■ Billing address same as Shipping Address</li>
                </ul>
                <button className="change_btn">Change</button>
            </div>
        </>
    )
}