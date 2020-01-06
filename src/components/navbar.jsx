import React, { Component } from "react";
import ProductsOnPageForm from "./productsonpageform";
import ProductsInCart from "./productsincart";

// Stateless Functional Component

class NavBar extends Component {
  render() {
    const { onSubmit, totalCounters } = this.props;
    return (
      <nav className="navbar navbar-dark bg-dark text-light">
        <div className="container container-navbar-inner">
          <ProductsOnPageForm onSubmit={onSubmit} />
          <ProductsInCart totalCounters={totalCounters} />
        </div>
      </nav>
    );
  }
}

export default NavBar;
