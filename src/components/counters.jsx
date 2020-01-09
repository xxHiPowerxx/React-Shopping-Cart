import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const {
      counters,
      onReset,
      onDelete,
      onIncrement,
      onDecrement
    } = this.props;
    return (
      <div className="counters">
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        <div className="counters-inner">
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counter}
          />
        ))}
        </div>
      </div>
    );
  }
}

export default Counters;
