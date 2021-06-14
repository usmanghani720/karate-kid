import React, { Component } from "react";
import { connect } from "react-redux";

class AuthenticatedMenu extends Component {
  componentDidMount() {}

  render() {
    return <React.Fragment></React.Fragment>;
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticatedMenu);
