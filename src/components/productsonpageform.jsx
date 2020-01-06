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
        onSubmit={() => this.props.onSubmit(this.state.productInputValue)}
      >
        <div className="form-group">
          <label className="form-label input-label" htmlFor="productInput">
            Number of Products on Page
          </label>
          <input
            type="number"
            className="form-control"
            id="productInput"
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default ProductsOnPageForm;