import React, { Component } from "react";
import Header from "./Header";
import Image from "./Image";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgWidth: 350,
      isImageVisible: true,
    };
  }

  handleAddClick = () => {
    this.setState({ isImageVisible: true });
  };

  handleDeleteClick = () => {
    this.setState({ isImageVisible: false });
  };

  handleZoomInClick = () => {
    this.setState((prevState) => ({ imgWidth: prevState.imgWidth + 100 }));
  };

  handleZoomOutClick = () => {
    this.setState((prevState) => ({
      imgWidth:
        prevState.imgWidth > 50 ? prevState.imgWidth - 100 : prevState.imgWidth,
    }));
  };

  render() {
    return (
      <div>
        <Header />
        <Image
          isVisible={this.state.isImageVisible}
          onAddClick={this.handleAddClick}
          onDeleteClick={this.handleDeleteClick}
          onZoomInClick={this.handleZoomInClick}
          onZoomOutClick={this.handleZoomOutClick}
          imgWidth={this.state.imgWidth}
        />
      </div>
    );
  }
}

export default Content;
