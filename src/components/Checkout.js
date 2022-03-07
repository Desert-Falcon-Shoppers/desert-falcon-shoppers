import React, { useState, useEffect } from "react";
import {} from "react-router-dom";
import "./styles/Checkout.css";
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
      <div className="checkout_payform_container">
        <form className="pay_info_form">
          <p className="card_number">Credit or Debit Card Number</p>
          <input type="text" placeholder="Card Number" />
          <p className="expiry">Expiration Date</p>
          <Select
            data={months}
            name={"expireMM"}
            id={"expireMM"}
            initialOption={"Month"}
          />
          <Select
            data={years}
            name={"expireYY"}
            id={"expireYY"}
            initialOption={"Year"}
          />
          <p className="state_select">State</p>
          <Select
            data={stateAbbreviations}
            name={"states"}
            initialOption={"-State-"}
          />
        </form>
      </div>
      <div className="order_summary_container">
        <h1 className="order_summary_header">Order Summary</h1>
        <h2 className="order_summary_htwo">Subtotal: $100</h2>
        <h2 className="order_summary_htwo">Shipping Fee: $100</h2>
        <h2 className="order_summary_htwo">Tax: $100</h2>
        <h2 className="order_summary_htwo">Total: $300</h2>
        <div className="checkout_link_container">
          <a className="checkout_link" href="#">
            Checkout
          </a>
          <p>Or</p>
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

