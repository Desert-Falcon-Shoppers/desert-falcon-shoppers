import React, { useState, useEffect } from 'react';
import { } from 'react-router-dom';
import { getCheckoutCart } from '../axios-services';

export default function Checkout() {
  return (
    <div></div>
  )
  // const [checkoutCart, setCheckoutCart] = useState({});

  // useEffect(() => {
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
  // return 
}
