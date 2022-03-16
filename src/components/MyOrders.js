import React from "react";
import "./styles/MyOrders.css";
import applewatch from "../Images/apple-watch.png";

function MyOrders() {
  return (
    <div className="my_orders_container">
      <div className="my_orders_center_container">
        <div className="my_orders_header">
          <h1>My Orders</h1>
        </div>
        <div className="order_search_container">
          <input
            className="order_search"
            placeholder="Search by product name"
          ></input>
          <button type="submit" className="order_search_button">
            <i class="fa fas-search" aria-hidden="true"></i>
          </button>
        </div>
        <div className="order_status_view_container">
          <button className="all_orders_button">All Orders</button>
          <button className="in_progress_button">In Progress</button>
        </div>
        <div className="order_item_container">
          <div className="order_item_header">
            <h1 className="order_num_title">Order</h1>
            <p className="order_num">1121354780152</p>
            <p className="order_date">March 16, 2022</p>
            <p className="order_total">$366.84</p>
            <button className="view_order_details">See Details</button>
          </div>
          <div className="order_item_info_container">
            <div className="order_item_img_container">
              <img className="order_item_img" src={applewatch}></img>
            </div>
            <div className="order_item_name_container">
              <p className="order_item_name">
                Tag Heuer Aquaracer professional 300 stainless steel bracelet
                watch
              </p>
              <p className="order_item_qty">Qty: 1</p>
              <a href="#" className="buy_again_link">
                Buy it again
              </a>
            </div>
            <div className="shipping_info_container">
              <p className="shipping_info_title">Shipping Address</p>
              <p className="shipping_info_name">Devin Vogt</p>
              <p className="shipping_info_address">217 S Lewis St</p>
              <p className="shipping_info_CSZ">Stillwater, Ok 740753818</p>
            </div>
            <div className="order_status_container">
              <p className="order_status_title">Order Status</p>
              <p className="order_status_failure">Failure</p>
            </div>
          </div>
        </div>
        <div className="order_item_container">
          <div className="order_item_header">
            <h1 className="order_num_title">Order</h1>
            <p className="order_num">1121354780152</p>
            <p className="order_date">March 16, 2022</p>
            <p className="order_total">$366.84</p>
            <button className="view_order_details">See Details</button>
          </div>
          <div className="order_item_info_container">
            <div className="order_item_img_container">
              <img className="order_item_img" src={applewatch}></img>
            </div>
            <div className="order_item_name_container">
              <p className="order_item_name">
                Tag Heuer Aquaracer professional 300 stainless steel bracelet
                watch
              </p>
              <p className="order_item_qty">Qty: 1</p>
              <a href="#" className="buy_again_link">
                Buy it again
              </a>
            </div>
            <div className="shipping_info_container">
              <p className="shipping_info_title">Shipping Address</p>
              <p className="shipping_info_name">Devin Vogt</p>
              <p className="shipping_info_address">217 S Lewis St</p>
              <p className="shipping_info_CSZ">Stillwater, Ok 740753818</p>
            </div>
            <div className="order_status_container">
              <p className="order_status_title">Order Status</p>
              <p className="order_status_accepted">Accepted</p>
            </div>
          </div>
          <div className="order_item_info_container">
            <div className="order_item_img_container">
              <img className="order_item_img" src={applewatch}></img>
            </div>
            <div className="order_item_name_container">
              <p className="order_item_name">
                Tag Heuer Aquaracer professional 300 stainless steel bracelet
                watch
              </p>
              <p className="order_item_qty">Qty: 1</p>
              <a href="#" className="buy_again_link">
                Buy it again
              </a>
            </div>
            <div className="shipping_info_container">
              <p className="shipping_info_title">Shipping Address</p>
              <p className="shipping_info_name">Devin Vogt</p>
              <p className="shipping_info_address">217 S Lewis St</p>
              <p className="shipping_info_CSZ">Stillwater, Ok 740753818</p>
            </div>
            <div className="order_status_container">
              <p className="order_status_title">Order Status</p>
              <p className="order_status_pending">Pending</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyOrders;
