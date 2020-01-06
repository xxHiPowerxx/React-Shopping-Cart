import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

import "./assets/sass/App.scss";

class App extends Component {
  numOfProductsValue = 5;

  constructCounters(num, index, value) {
    const counters = [];
    for (let i = 0; i < num; i++) {
      counters.push({ id: i + 1, value: 0 });
    }
    // function setCountersValue(index, value) {
    //   if (index && value) {
    //     return (counters[index].value = value);
    //   } else {
    //     return (value = 0);
    //   }
    // }
    // setCountersValue(index, value);
    return counters;
  }
  initiateCounters(numOfCounters) {
    numOfCounters = numOfCounters ? numOfCounters : this.numOfProductsValue;
    const counters = this.constructCounters(numOfCounters);
    counters.map(c => {
      c.value = 0;
      return c;
    });
    return counters;
  }
  state = {
    // counters: [
    //   { id: 1, value: 0 },
    //   { id: 1, value: 0 },
    //   { id: 1, value: 0 },
    //   { id: 1, value: 0 }
    // ]
    numOfProductsValue: this.numOfProductsValue,
    counters: this.initiateCounters(this.numOfProductsValue)
    // counters: this.constructCounters(5, 2, 4)
  };

  constructor(props) {
    super(props);
    console.log("App - Constructor", this.props);
  }

  componentDidMount() {
    // Ajax Call
    console.log("App - Mounted");
  }

  getThisCounter(counter) {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    return { counters, index };
  }

  handleIncrement = counter => {
    console.log(counter);
    const { counters, index } = this.getThisCounter(counter);
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = counter => {
    const { counters, index } = this.getThisCounter(counter);
    let thisCounter = counters[index];

    if (thisCounter.value > 0) {
      thisCounter.value--;
      this.setState({ counters });
    }
  };
  handleSubmit = productInputValue => {
    const numOfCounters = productInputValue;
    // console.log("numOfCounters", numOfCounters);

    const counters = this.initiateCounters(numOfCounters);
    // console.log("counters", counters);
    this.setState({ counters });
  };
  handleReset = () => {
    const counters = this.initiateCounters();
    this.setState({ counters });
  };

  handleDelete = counterId => {
    // console.log("Event Handler Called", counterId);
    // function filterId(c) {
    //   return c.id !== counterId;
    // }
    // const counters = this.state.counters.filter(filterId);
    // this.setState({ counters: counters });

    // Simplified Version of the Above Code
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
    console.log("App - Rendered");

    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
          onSubmit={this.handleSubmit}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
