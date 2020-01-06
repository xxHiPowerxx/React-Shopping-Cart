import React, { Component } from "react";
import ProductsOnPageForm from "./productsonpageform";

// Stateless Functional Component

class NavBar extends Component {
  render() {
    const { onSubmit, totalCounters } = this.props;
    return (
      <nav className="navbar navbar-light bg-light container">
        <ProductsOnPageForm onSubmit={onSubmit} />
        <span className="navbar-brand">
          <span className="m-2">Products In Cart</span>
          <span className="badge badge-pill badge-secondary">
            {totalCounters}
          </span>
        </span>
      </nav>
    );
  }
}

export default NavBar;
