import React, { Component } from "react";
import ReactShoppingCartLogo from "./reactshoppingcartlogo";
import ProductsOnPageForm from "./productsonpageform";
import ProductsInCart from "./productsincart";
import ResizeSensor from "css-element-queries/src/ResizeSensor";

// Stateless Functional Component No Longer

const InvertOrderComponent = ({ condition, props }) => {
  const { onSubmit, totalCounters } = props;
  const firstComponent = <ProductsOnPageForm onSubmit={onSubmit} />;
  const secondComponent = <ProductsInCart totalCounters={totalCounters} />;
  const [first, second] = condition
    ? [firstComponent, secondComponent]
    : [secondComponent, firstComponent];

  return (
    <React.Fragment>
      {first}
      {second}
    </React.Fragment>
  );
};

class NavBar extends Component {
  componentDidMount() {
    const that = this;
    const node = this._nav;
    new ResizeSensor(node, function() {
      const invertOrder = node.clientWidth > 576;
      return that.setState({ invertOrder });
    });
  }
  state = {
    invertOrder: false
  };

  render() {
    const { invertOrder } = this.state;
    // const { onSubmit, totalCounters } = this.props;

    // ref={c => (this._nav = c)} Below refers to this Nav Element created by the <Navbar /> Component
    // This way we don't need to import ReactDOM in order to use ReactDOM.findDOMNode(this); yay efficiency.
    return (
      <nav
        className="navbar navbar-dark bg-dark text-light"
        ref={c => (this._nav = c)}
      >
        <div className="container container-navbar-inner">
          <ReactShoppingCartLogo />
          <InvertOrderComponent condition={invertOrder} props={this.props} />
        </div>
      </nav>
    );
  }
}

export default NavBar;
