import React, { Component } from "react";
import ReactModal from "react-modal";

class BlogModal extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ReactModal
        onRequestClose={() => {
          this.props.handleModalClose();
        }}
        isOpen={this.props.modalIsOpen}
      >
        <h1>Im in a modal!</h1>
      </ReactModal>
    );
  }
}

export default BlogModal;
