import React from 'react'

export default function AddNewCard() {
    return (
        <>
            <div id="add_new_card"> {/* add a new card window */}
                <h1 className="add_new_card_header"></h1>
                <form method="post" className="add_new_card">
                <span className="add_new_card_name"> {/* name panel */}
                    <label for="card_name" className="add_new_card_name_label">Cardholder Name:</label>
                    <input type="text" id="card_name" name="card_name" className="add_new_card_name_input" placeholder="John Maker" required />
                </span>
                <span className="add_new_card_cnumber"> {/* card number panel */} {/* JS make rule for card number like '■ 5126-5987-2214-7621' */}
                    <label for="card_number" className="add_new_card_cnumber_label">Card Number:</label>
                    <input type="text" id="card_number" name="card_number" className="add_new_card_cnumber_input" placeholder="■ 5126-5987-2214-7621" required /> {/* add icons from script like fontawesome */}
                </span>
                <span className="add_new_card_expirecvc"> {/* name panel */}
                    <span className="add_new_card_block">
                    <label for="card_expire" className="add_new_card_expire_label">Expire Date:</label>
                    <input type="text" id="card_expire" name="card_expire" className="add_new_card_expire_input" placeholder="■ MM / YYYY" required />
                    </span>
                    <span className="add_new_card_block">
                    <label for="card_cvc" className="add_new_card_cvc_label">CVC:</label>
                    <input type="text" id="card_cvc" name="card_cvc" className="add_new_card_cvc_input" placeholder="123" required />
                    </span>
                    <span className="add_new_card_block"></span>
                </span>
                <span className="add_new_card_checkbox"> {/* checkbox panel */}
                    <input type="checkbox" id="cardcheckbox" name="cardcheckbox" required className="add_new_card_checkbox_input" />
                    <label for="cardcheckbox" className="add_new_card_checkbox_label">Save this as your default address</label>
                </span>
                <span className="add_new_card_submit"> {/* submit panel */}
                    <input type="submit" id="submit" name="submit" value="Add Address" className="add_new_card_submit_input" />
                </span>
                <span className="add_new_card_additionals"> {/* additionals panel */}
                    <button className="add_new_card_additionals_back">Back</button>
                    <button className="add_new_card_additionals_secure">■ Secure Connection</button>
                </span>
                </form>
            </div>
        </>
    )
}