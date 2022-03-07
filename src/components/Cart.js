import React from 'react'
import "./styles/Cart.css"
import applewatch from "../Images/apple-watch.png"

function Cart() {
    return (
        <div className='cart_container'>
            <div className='cart_product_container'>
                <div className='cart_num_item'>
                    <span className='cart_head'>Your Cart</span>
                    <span className='cart_head'>(0)</span>
                </div>
                <div className='cart_item_container'>
                    <div className='cart_item_img'>
                        <img className="cart_product_picture" src={applewatch}></img>
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
                        <img className="cart_product_picture" src={applewatch}></img>
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
                        <img className="cart_product_picture" src={applewatch}></img>
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
                        <img className="cart_product_picture" src={applewatch}></img>
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
                        <img className="cart_product_picture" src={applewatch}></img>
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
                        <img className="cart_product_picture" src={applewatch}></img>
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
                        <img className="cart_product_picture" src={applewatch}></img>
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
                        <img className="cart_product_picture" src={applewatch}></img>
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
                        <img className="cart_product_picture" src={applewatch}></img>
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
                <div className='order_summary_line_container'>
                    <span className='order_summary_line'>Subtotal:</span>
                    <span className='order_summary_line'>$100</span>
                </div>
                <div className='order_summary_line_container'>
                    <span className='order_summary_line'>Tax:</span>
                    <span className='order_summary_line'>$100</span>
                </div>
                <div className='order_summary_line_container'>
                    <span className='order_summary_line'>Discount:</span>
                    <span className='order_summary_line'>$100</span>
                </div>
                <div className='order_summary_line_total_container'>
                    <span className='order_summary_line_total'>Total:</span>
                    <span className='order_summary_line_total'>$100</span>
                </div>
                <div className='checkout_link_container'>
                    <a className="checkout_link" href="#">Checkout</a>
                    <a className="checkout_link" href="#">Checkout with PayPal</a>
                </div>

            </div>
        </div>
    )
}

export default Cart