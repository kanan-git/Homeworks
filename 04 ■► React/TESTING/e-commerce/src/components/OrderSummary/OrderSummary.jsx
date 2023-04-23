import React from 'react'

export default function OrderSummary() {
    return (
        <>
            <div id="order_summary"> {/* order summary */}
                <div className="order_summary">
                <h3 className="order_summary_header">Order Summary</h3>
                <div className="order_summary_blocks">
                    <i className="order_summary_type">Items:</i>
                    <i className="order_summary_value">$ 5849.37</i>
                </div>
                <div className="order_summary_blocks">
                    <i className="order_summary_type">Shipping:</i>
                    <i className="order_summary_value">$ 6.99</i>
                </div>
                <div className="order_summary_blocks">
                    <i className="order_summary_type">Estimated GST:</i>
                    <i className="order_summary_value">$ 760.41</i>
                </div>
                <div className="order_summary_blocks">
                    <i className="order_summary_type">Gift Card:</i>
                    <i className="order_summary_value">$ 0.00</i>
                </div>
                <div className="order_summary_total">
                    <span className="order_summary_total_text">Order Total:</span>
                    <h3 className="order_summary_total_price">$ 6609.78</h3>
                </div>
                <button className="order_summary_order">Place your order</button>
                </div>
                <button className="backfrom_checkout_purchase">◄ Back</button>
            </div>
        </>
    )
}