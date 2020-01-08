import React, { Component } from "react";

class ProductsOnPageForm extends Component {
  state = {
    productInputValue: 0
  };
  handleChange = event => {
    console.log(event.target.value);
    this.setState({ productInputValue: event.target.value });
  };
  render() {
    return (
      <form
        className="products-on-page"
        // onSubmit={() => this.props.onSubmit(this.state.productInputValue)}
        onSubmit={event =>
          this.props.onSubmit(event, this.state.productInputValue)
        }
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
