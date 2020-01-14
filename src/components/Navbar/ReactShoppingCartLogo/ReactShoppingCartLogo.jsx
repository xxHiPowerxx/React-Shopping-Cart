import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";

import "./ReactShoppingCartLogo.scss";

class ReactShoppingCartLogo extends Component {
  state = {};
  render() {
    return (
      <div className="site-logo">
        <div className="react-logo">
          <FontAwesomeIcon
            className="react-shopping-cart-logo site-logo-icon fa-spin"
            icon={faReact}
          />
          <span className="site-logo-text-react">React</span>
        </div>
        <span className="site-logo-text-shopping-cart">Shopping-Cart</span>
      </div>
    );
  }
}

export default ReactShoppingCartLogo;
