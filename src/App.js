import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

import "./assets/sass/App.scss";

class App extends Component {
  numOfCounters(numOfCounters) {
    return numOfCounters;
  }
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
  initiateCounters() {
    const numOfCounters = this.numOfCounters(5);
    const counters =
      this.state && this.state.counters > numOfCounters
        ? this.state.counters
        : this.constructCounters(numOfCounters);
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

    counters: this.initiateCounters()
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

  handleIncrement = counter => {
    console.log(counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
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
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
