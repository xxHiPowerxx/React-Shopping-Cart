import React, { Component } from "react";
import ProductsOnPageForm from "./productsonpageform";

// Stateless Functional Component

class NavBar extends Component {
  render() {
    const { onSubmit, totalCounters } = this.props;
    return (
      <nav className="navbar navbar-dark bg-dark text-light">
        <div className="container container-navbar-inner">
          <ProductsOnPageForm onSubmit={onSubmit} />
          <div className="ctnr-products-in-cart">
            <span className="products-in-cart">Products In Cart</span>
            <div className="ctnr-products-in-cart-qty">
              <span className="products-in-cart-qty badge badge-pill badge-secondary">
                {totalCounters}
              </span>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
