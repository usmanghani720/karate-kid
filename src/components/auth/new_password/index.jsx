import React, { Component } from "react";
import { connect } from "react-redux";
import { get } from "lodash/fp";
import { Form, Input, message } from "antd";
import Defender from './../../../helpers/defender';

class NewPassword extends Component {
  state = {
    emailSent: false,
    disabled: false,
  };

  componentDidMount() {
    if (Defender.currentUser()) {
      Defender.logout();
    }
  }

  render() {
    return (
      <React.Fragment></React.Fragment>
    );
  }
}
function mapPropsToState(state) {
  return {
    newPasswordReducer: state.newPasswordReducer,
  };
}

const wrappedNewPasswordForm = Form.create()(NewPassword);

export default connect(mapPropsToState)(wrappedNewPasswordForm);
