import React, { Component } from "react";
import { connect } from "react-redux";
import Defender from "../../helpers/defender";

class Footer extends Component {
  render() {
    return (
      <footer>
        <p>Footer</p>
      </footer>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
