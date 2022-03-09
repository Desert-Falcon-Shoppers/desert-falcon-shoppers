import React, { useState, useEffect } from "react";
import {} from "react-router-dom";
import "./styles/Checkout.css";
import "./styles/Cart.css";
import { getCheckoutCart } from "../axios-services";
import { stateAbbreviations, months, years } from "./checkout-data";

const Select = ({ data, name, id, initialOption }) => (
  <select className="select" name={name} id={id}>
    <option value="">{initialOption}</option>
    {data.map((ele, idx) => (
      <option key={idx} value={idx}>
        {ele}
      </option>
    ))}
  </select>
);

export default function Checkout() {
  return (
    <div className="checkout_container">
      <div className="checkout_payment_header_container">
        <h1 className="checkout_payment_header">How do you want to pay?</h1>
      </div>
      <div className="checkout_form_container">
        <form className="checkout_form">
          <div className="payment_info">
            <input
              className="card_input"
              type="text"
              placeholder="Card Number"
            />
            <div className="expiry_cvc_input_container">
              <Select
                data={months}
                name={"expireMM"}
                id={"expireMM"}
                placeholder={"MM"}
                initialOption={"Month"}
              />
              <Select
                data={years}
                name={"expireYY"}
                id={"expireYY"}
                initialOption={"Year"}
              />

              <input className="card_cvc" type="text" placeholder="CVC" />
            </div>
            <input
              className="card_name"
              type="text"
              placeholder="Name on Card"
            />
          </div>

          <div className="shipping_info">
            <div className="personal_info">
              <div className="name_div">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
              </div>
              <input type="text" placeholder="Address" />
            </div>
            <div className="location_info">
              <div className="city_state_input">
                {/* <div className="city_state_div"></div> */}
                <input type="text" placeholder="City" />
                <Select
                  data={stateAbbreviations}
                  name={"states"}
                  initialOption={"-State-"}
                />
              </div>
              <input type="text" placeholder="Enter ZIP" />
            </div>
          </div>
          <button className="payment_button">Place Order</button>
        </form>
      </div>
      <div className="order_summary_container">
        <h1 className="order_summary_header">Order Summary</h1>
        <div className="order_summary_line_container">
          <span className="order_summary_line">Subtotal:</span>
          <span className="order_summary_line">$100</span>
        </div>
        <div className="order_summary_line_container">
          <span className="order_summary_line">Tax:</span>
          <span className="order_summary_line">$100</span>
        </div>
        <div className="order_summary_line_container">
          <span className="order_summary_line">Discount:</span>
          <span className="order_summary_line">$100</span>
        </div>
        <div className="order_summary_line_total_container">
          <span className="order_summary_line_total">Total:</span>
          <span className="order_summary_line_total">$100</span>
        </div>
        <div className="checkout_link_container">
          <a className="checkout_link" href="#">
            Checkout
          </a>
          <a className="checkout_link" href="#">
            Checkout with PayPal
          </a>
        </div>
      </div>
    </div>
  );
}

// const [checkoutCart, setCheckoutCart] = useState({});

/// useEffect(() => {
//   const fetchCheckoutCart = async () => {
//     try {
//       // eventually we need to figure out how to grab
//       // this cart id
//       // i think that it'll probably be best to have it fetche in
//       // on the USER object when the user logs in / registers and logs in
//       // so we'll need a user route like /api/users/me
//       // where we can have access to the cart identifier
//       // ie, the shopSessionId that getCheckoutCart expects
//       // { userId: 1, name: 'watchfan', cartId: 1, cart: { ... cart object fetched from db ...} }
//       const checkoutCart = await getCheckoutCart(1);
//       setCheckoutCart(checkoutCart);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   fetchCheckoutCart();
// }, []);

// // ideally you'll use the checkoutCart
// // to render your screen of confirming to the user
// // amounts, quantities, show icons/product_urls etc
// return <pre>{JSON.stringify(checkoutCart, null, 2)}</pre>;
