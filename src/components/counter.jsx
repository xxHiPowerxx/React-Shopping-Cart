import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div className="counter smooth-transition">
        <h4 className="counter-title">Product #{this.props.counter.id}</h4>
        <div className="counter-controls">
          <div className="ctnr-counter-value">
            <span className={this.getBadgeClasses() + " counter-value"}>
              {this.formatValue()}
            </span>
          </div>
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-increment-counter btn-secondary btn-sm"
          >
            Increment
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
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
