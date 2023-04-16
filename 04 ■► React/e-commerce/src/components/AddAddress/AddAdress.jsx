import React from 'react'

export default function AddAddress() {
    return (
        <>
            <div id="add_address"> {/* add address form */}
                <form method="post" className="add_address">
                    <div className="addaddress_name"> {/* name and lastname panel */}
                        <label className="address_name_label" for="shopping_name">Shopping Name:</label>
                        <input type="text" id="shopping_name" name="shopping_name" placeholder="John Maker" required className="address_name_input" />
                    </div>
                    <div className="addaddress_street"> {/* street name panel */}
                        <label className="address_street_label" for="street_name">Street Name:</label>
                        <input type="text" id="street_name" name="street_name" placeholder="123 Plae Grand Street" required className="address_street_input" />
                    </div>
                    <div className="addaddress_city"> {/* city name panel */}
                        <label className="address_city_label" for="city_name">City:</label>
                        <input type="text" id="city_name" name="city_name" placeholder="Vermont" required className="address_city_input" />
                    </div>
                    <div className="addaddress_state"> {/* state province panel */}
                        <label className="address_state_label" for="state_province">State/Province:</label>
                        <input type="text" id="state_province" name="state_province" placeholder="California" required className="address_state_input" />
                    </div>
                    <div className="addaddress_country"> {/* country panel */}
                        <label className="address_country_label" for="country">Country:</label>
                        <input type="text" id="country" name="country" placeholder="United States of America" required className="address_country_input" />
                    </div>
                    <div className="addaddress_checkbox"> {/* checkbox panel */}
                        <input type="checkbox" id="checkbox" name="checkbox" required className="addaddress_checkbox_input" />
                        <label for="checkbox" className="addaddaddress_checkbox_label">Save this as your default address</label>
                    </div>
                    <div className="addaddress_submit"> {/* submit panel */}
                        <input type="submit" id="submit" name="submit" value="Add Address" className="addaddress_submit_input" />
                    </div>
                    <div className="addaddress_additionals"> {/* additionals panel */}
                        <button className="addaddress_additionals_back">Back</button>
                        <button className="addaddress_additionals_secure">
                            <i class="fa-solid fa-lock fa-1x"></i>
                            Secure Connection
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}