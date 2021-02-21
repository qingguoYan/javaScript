import React from "react";

export default function withTooltip(Component) {
  return class MovieTool extends React.Component {
    state = { visible: false };
    handleMouseOver = () => this.setState({ visible: true });
    handleMouseOut = () => this.setState({ visible: false });
    render() {
      const { visible } = this.state;
      return (
        <div
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOut}
        >
          <Component {...this.props} visible={visible} />
        </div>
      );
    }
  };
}
