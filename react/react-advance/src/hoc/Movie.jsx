import React, { Component } from "react";
import withTooltip from "./withTooltip";

class Movie extends Component {
  state = {};
  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <span>Movie</span>
        {this.props.visible && <p>hi</p>}
      </React.Fragment>
    );
  }
}

export default withTooltip(Movie);
