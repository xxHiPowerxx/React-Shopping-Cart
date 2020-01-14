import React, { Component } from "react";

import "./ProductsOnPageForm.scss";

class ProductsOnPageForm extends Component {
  state = {
    productInput: null
  };
  handleChange = event => {
    console.log(event.target.value);
    this.setState({ productInput: event.target });
  };
  render() {
    return (
      <form
        className="products-on-page"
        // onSubmit={() => this.props.onSubmit(this.state.productInputValue)}
        onSubmit={event => this.props.onSubmit(event, this.state.productInput)}
      >
        <label className="form-label input-label" htmlFor="productInput">
          Number of Products on Page
        </label>
        <input
          type="number"
          className="form-control"
          id="productInput"
          onChange={this.handleChange}
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default ProductsOnPageForm;
