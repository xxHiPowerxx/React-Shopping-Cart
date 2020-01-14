import React, { Component } from "react";
import componentId from "./Counter";

import "./Counter.scss";

class Counter extends Component {
  componentWillMount() {
    this.componentId = this.constructor.name + "-" + componentId();
  }
  render() {
    const counter = this.props.counter;
    const productNum = "Product #" + counter.id;
    return (
      <div className="counter smooth-transition" componentId={this.componentId}>
        <h4 className="counter-title">{productNum}</h4>
        <img
          className="counter-image"
          src={"https://picsum.photos/309/174?random=" + counter.id}
          alt={"image of " + productNum}
        />
        <div className="counter-controls">
          <div className="ctnr-counter-value">
            <small className="quantity">Qty.</small>
            <span className={this.getBadgeClasses() + " counter-value"}>
              {this.formatValue()}
            </span>
          </div>
          <button
            onClick={() => this.props.onIncrement(counter)}
            className="btn btn-increment-counter btn-success btn-sm"
          >
            Increment
          </button>
          <button
            onClick={() => this.props.onDecrement(counter)}
            className="btn btn-decrement-counter btn-secondary btn-sm"
          >
            Decrement
          </button>
          <button
            onClick={() => this.props.onDelete(counter.id)}
            className="btn btn-delete-counter btn-danger btn-sm"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatValue() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
