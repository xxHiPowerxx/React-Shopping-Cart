import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

class ProductsInCart extends Component {
  render() {
    const { totalCounters } = this.props;
    return (
      <div className="ctnr-products-in-cart">
        <span className="products-in-cart">Products In Cart</span>
        <div className="ctnr-products-in-cart-qty">
          <span className="products-in-cart-qty badge badge-pill badge-secondary">
            {totalCounters}
          </span>
          <FontAwesomeIcon className="cart-icon" icon={faShoppingCart} />
        </div>
      </div>
    );
  }
}

export default ProductsInCart;
