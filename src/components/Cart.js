import React from 'react'
import "./styles/Cart.css"

function Cart() {
    return (
        <div className='cart_container'>
            <div className='cart_product_container'>
                <div className='cart_num_item'>
                    <h1>Your Cart</h1>
                    <h1>(0) </h1>
                </div>
                <p>Cart Items</p>
                <div className='cart_item_container'>
                    <div className='cart_item_img'>
                        <img src="apple-watch.png"></img>
                    </div>
                    <div className='cart_item_details'>
                        <p>product name</p>
                        <p>size</p>
                        <p>color</p>
                        <p>productId</p>
                        <div className='cart_item_buttons'>
                            <button className='edit_button'>Edit</button>
                            <button className='remove_button'>Remove</button>
                        </div>
                    </div>

                    <div className='cart_item_price'>
                        <p>$100</p>
                    </div>
                </div>
                <div className='cart_item_container'>
                    <div className='cart_item_img'>
                        <img src="apple-watch.png"></img>
                    </div>
                    <div className='cart_item_details'>
                        <p>product name</p>
                        <p>size</p>
                        <p>color</p>
                        <p>productId</p>
                        <div className='cart_item_buttons'>
                            <button className='edit_button'>Edit</button>
                            <button className='remove_button'>Remove</button>
                        </div>
                    </div>

                    <div className='cart_item_price'>
                        <p>$100</p>
                    </div>
                </div>
                <div className='cart_item_container'>
                    <div className='cart_item_img'>
                        <img src="apple-watch.png"></img>
                    </div>
                    <div className='cart_item_details'>
                        <p>product name</p>
                        <p>size</p>
                        <p>color</p>
                        <p>productId</p>
                        <div className='cart_item_buttons'>
                            <button className='edit_button'>Edit</button>
                            <button className='remove_button'>Remove</button>
                        </div>
                    </div>

                    <div className='cart_item_price'>
                        <p>$100</p>
                    </div>
                </div>
                <div className='cart_item_container'>
                    <div className='cart_item_img'>
                        <img src="apple-watch.png"></img>
                    </div>
                    <div className='cart_item_details'>
                        <p>product name</p>
                        <p>size</p>
                        <p>color</p>
                        <p>productId</p>
                        <div className='cart_item_buttons'>
                            <button className='edit_button'>Edit</button>
                            <button className='remove_button'>Remove</button>
                        </div>
                    </div>

                    <div className='cart_item_price'>
                        <p>$100</p>
                    </div>
                </div>
                <div className='cart_item_container'>
                    <div className='cart_item_img'>
                        <img src="apple-watch.png"></img>
                    </div>
                    <div className='cart_item_details'>
                        <p>product name</p>
                        <p>size</p>
                        <p>color</p>
                        <p>productId</p>
                        <div className='cart_item_buttons'>
                            <button className='edit_button'>Edit</button>
                            <button className='remove_button'>Remove</button>
                        </div>
                    </div>

                    <div className='cart_item_price'>
                        <p>$100</p>
                    </div>
                </div>
                <div className='cart_item_container'>
                    <div className='cart_item_img'>
                        <img src="apple-watch.png"></img>
                    </div>
                    <div className='cart_item_details'>
                        <p>product name</p>
                        <p>size</p>
                        <p>color</p>
                        <p>productId</p>
                        <div className='cart_item_buttons'>
                            <button className='edit_button'>Edit</button>
                            <button className='remove_button'>Remove</button>
                        </div>
                    </div>

                    <div className='cart_item_price'>
                        <p>$100</p>
                    </div>
                </div>
                <div className='cart_item_container'>
                    <div className='cart_item_img'>
                        <img src="apple-watch.png"></img>
                    </div>
                    <div className='cart_item_details'>
                        <p>product name</p>
                        <p>size</p>
                        <p>color</p>
                        <p>productId</p>
                        <div className='cart_item_buttons'>
                            <button className='edit_button'>Edit</button>
                            <button className='remove_button'>Remove</button>
                        </div>
                    </div>

                    <div className='cart_item_price'>
                        <p>$100</p>
                    </div>
                </div>
                <div className='cart_item_container'>
                    <div className='cart_item_img'>
                        <img src="apple-watch.png"></img>
                    </div>
                    <div className='cart_item_details'>
                        <p>product name</p>
                        <p>size</p>
                        <p>color</p>
                        <p>productId</p>
                        <div className='cart_item_buttons'>
                            <button className='edit_button'>Edit</button>
                            <button className='remove_button'>Remove</button>
                        </div>
                    </div>

                    <div className='cart_item_price'>
                        <p>$100</p>
                    </div>
                </div>
                <div className='cart_item_container'>
                    <div className='cart_item_img'>
                        <img src="apple-watch.png"></img>
                    </div>
                    <div className='cart_item_details'>
                        <p>product name</p>
                        <p>size</p>
                        <p>color</p>
                        <p>productId</p>
                        <div className='cart_item_buttons'>
                            <button className='edit_button'>Edit</button>
                            <button className='remove_button'>Remove</button>
                        </div>
                    </div>

                    <div className='cart_item_price'>
                        <p>$100</p>
                    </div>
                </div>
            </div>
            <div className="order_summary_container">
                <h1 className='order_summary_header'>Order Summary</h1>
                <h2 className='order_summary_htwo'>Subtotal: $100</h2>
                <h2 className='order_summary_htwo'>Shipping Fee: $100</h2>
                <h2 className='order_summary_htwo'>Tax: $100</h2>
                <h2 className='order_summary_htwo'>Total: $300</h2>
                <div className='checkout_link_container'>
                    <a className="checkout_link" href="#">Checkout</a>
                    <p>Or</p>
                    <a className="checkout_link" href="#">Checkout with PayPal</a>
                </div>

            </div>
        </div>
    )
}

export default Cart