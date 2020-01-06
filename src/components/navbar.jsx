import React, { Component } from "react";

// Stateless Functional Component

class NavBar extends Component {
  state = {
    productInputValue: 0
  };
  handleChange = event => {
    console.log(event.target.value);
    this.setState({ productInputValue: event.target.value });
  };
  render() {
    return (
      <nav className="navbar navbar-light bg-light container">
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
        <span className="navbar-brand">
          <span className="m-2">Products In Cart</span>
          <span className="badge badge-pill badge-secondary">
            {this.props.totalCounters}
          </span>
        </span>
      </nav>
    );
  }
}

export default NavBar;
