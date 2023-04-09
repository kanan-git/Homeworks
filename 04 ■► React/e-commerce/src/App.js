import logo from './logo.svg';
import './App.css';
import './global.css';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
      {/* ▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬ */}
      <header style={{display: "block"}} id="header"> {/* static header container for reference*/}
        <ul className="list"> {/* static list container for reference */}
          <span className="list_block_1"> {/* list block no 1 */}
            <li className="list_items"> ■ 1 </li> {/* static items for reference */}
            <li className="list_items"> ■ 2 </li> {/* static items for reference */}
            <li className="list_items"> ■ 3 </li> {/* static items for reference */}
            <li className="list_items"> ■ 4 </li> {/* static items for reference */}
          </span>
          <span className="list_block_2"> {/* list block no 2 */}
            <li className="list_items"> ■ 5 </li> {/* static items for reference */}
          </span>
        </ul>
      </header>
      {/* ▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬ */}
      <form method="get" className="searcbar" style={{display: "block"}}>
        <label for="search" className="searchbar_label">Search:</label>
        <input type="search" id="search" name="search" className="searchbar_input" />
        <button className="searchbar_magnifier_icon">■</button>
      </form>
      {/* ▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬ */}
      <main style={{display: "block"}} id="dashboard"> {/* static main container for reference */}
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
                <button className="product_card_buy_add2bag">■</button>
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
                <button className="product_card_buy_add2bag">■</button>
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
                <button className="product_card_buy_add2bag">■</button>
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
                <button className="product_card_buy_add2bag">■</button>
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
                <button className="product_card_buy_add2bag">■</button>
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
                <button className="product_card_buy_add2bag">■</button>
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
                <button className="product_card_buy_add2bag">■</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* ▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬ */}
      <aside className="bag" style={{display: "block"}}>  {/* bag side */}
        <h3 className="bag_header"> {/* header block of bag side */}
          Bag
        </h3>
        <span className="bag_icons_container"> {/* small view grids block of bag side */}
          <div className="bag_small_icons"> {/* small image */}
            <img src="#" alt="bag-item-001" className="icon_contents" />
          </div>
          <div className="bag_small_icons"> {/* small image */}
            <img src="#" alt="bag-item-002" className="icon_contents" />
          </div>
          <div className="bag_small_icons"> {/* small image */}
            <img src="#" alt="bag-item-003" className="icon_contents" />
          </div>
          <div className="bag_small_icons"> {/* small image */}
            <img src="#" alt="bag-item-004" className="icon_contents" />
          </div>
        </span>
        <button className="bag_button"> {/* button block of bag side */}
          ■ View Bag
        </button>
      </aside>
      {/* ▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬ */}
      <div id="add_address" style={{display: "block"}}> {/* add address form */}
        <form method="post" className="add_address">
          <span className="addaddress_name"> {/* name and lastname panel */}
            <label className="address_name_label" for="shopping_name">Shopping Name:</label>
            <input type="text" id="shopping_name" name="shopping_name" placeholder="John Maker" required className="address_name_input" />
          </span>
          <span className="addaddress_street"> {/* street name panel */}
            <label className="address_street_label" for="street_name">Street Name:</label>
            <input type="text" id="street_name" name="street_name" placeholder="123 Plae Grand Street" required className="address_street_input" />
          </span>
          <span className="addaddress_city"> {/* city name panel */}
            <label className="address_city_label" for="city_name">City:</label>
            <input type="text" id="city_name" name="city_name" placeholder="Vermont" required className="address_city_input" />
          </span>
          <span className="addaddress_state"> {/* state province panel */}
            <label className="address_state_label" for="state_province">State/Province:</label>
            <input type="text" id="state_province" name="state_province" placeholder="California" required className="address_state_input" />
          </span>
          <span className="addaddress_country"> {/* country panel */}
            <label className="address_country_label" for="country">Country:</label>
            <input type="text" id="country" name="country" placeholder="United States of America" required className="address_country_input" />
          </span>
          <span className="addaddress_checkbox"> {/* checkbox panel */}
            <input type="checkbox" id="checkbox" name="checkbox" required className="addaddress_checkbox_input" />
            <label for="checkbox" className="addaddaddress_checkbox_label">Save this as your default address</label>
          </span>
          <span className="addaddress_submit"> {/* submit panel */}
            <input type="submit" id="submit" name="submit" value="Add Address" className="addaddress_submit_input" />
          </span>
          <span className="addaddress_additionals"> {/* additionals panel */}
            <button className="addaddress_additionals_back">Back</button>
            <button className="addaddress_additionals_secure">■ Secure Connection</button>
          </span>
        </form>
      </div>
      {/* ▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬ */}
      <div id="select_card" style={{display: "block"}}> {/* select a card window */}
        <h1 className="select_card_header">SELECT A CARD</h1>
        <ul className="select_card_list">
          <li className="select_card_listitems">■ MasterCard ending in 4242</li>
          <li className="select_card_listitems">■ VISA Debit ending in 4242</li>
        </ul>
      </div>
      {/* ▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬ */}
      <div id="add_new_card" style={{display: "block"}}> {/* add a new card window */}
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
      {/* ▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬ */}
      <section id="check_bag" style={{display: "block"}}> {/* check your bag section */}
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
      {/* ▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬ */}
      <section id="item_view" style={{display: "block"}}> {/* item view components */}
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
      {/* ▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬ */}
      <div id="shipping_address" style={{display: "block"}}> {/* selected shipping address */}
        <ul className="shipping_list">
          <li className="shipping_list_items">John Maker</li>
          <li className="shipping_list_items">123 Plae Grand Street</li>
          <li className="shipping_list_items">Vermont, California</li>
          <li className="shipping_list_items">United States of America</li>
        </ul>
        <button className="change_btn">Change</button>
      </div>
      {/* ▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬ */}
      <div id="payment_method" style={{display: "block"}}> {/* selected payment method */}
        <ul className="payment_list">
          <li className="payment_list_items">■ MasterCard ending in 1252</li>
          <li className="payment_list_items">■ $53.21 gift card balance</li>
          <li className="payment_list_items">■ Billing address same as Shipping Address</li>
        </ul>
        <button className="change_btn">Change</button>
      </div>
      {/* ▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬ */}
      <div id="review_you_bag" style={{display: "block"}}> {/* product cards review from bag */}
        {/* review with product cards */}
      </div>
      {/* ▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬ */}
      <div id="order_summary" style={{display: "block"}}> {/* order summary */}
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
      {/* ▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬—▬▬▬▬▬ */}
    </>
  );
}

export default App;