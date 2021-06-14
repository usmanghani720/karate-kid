import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Input, message } from "antd";
import { get } from "lodash/fp";
import Defender from "./../../../helpers/defender";
const FormItem = Form.Item;

class EditPassword extends Component {
  componentDidMount() {
    if (Defender.currentUser()) {
      Defender.logout();
    }
  }

  render() {
    return <React.Fragment></React.Fragment>;
  }
}

function mapPropsToState(state) {
  return {
    editPasswordReducer: state.editPasswordReducer,
  };
}
const wrappedEditPasswordForm = Form.create()(EditPassword);

export default connect(mapPropsToState)(wrappedEditPasswordForm);
