import React from 'react'

export default function SelectCard() {
    return (
        <>
            <div id="select_card"> {/* select a card window */}
                <h1 className="select_card_header">SELECT A CARD</h1>
                <ul className="select_card_list">
                <li className="select_card_listitems">■ MasterCard ending in 4242</li>
                <li className="select_card_listitems">■ VISA Debit ending in 4242</li>
                </ul>
            </div>
        </>
    )
}