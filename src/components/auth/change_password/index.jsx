import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Input, message } from "antd";
import { get, isEmpty, getOr } from "lodash/fp";
import Defender from "./../../../helpers/defender";
import Loader from "./../../loader";
//import UserExperiences from "../../../api/user_experiences";
const FormItem = Form.Item;

class ChangePassword extends Component {
  state = {
    loading: false,
  };

  componentDidMount() {}

  render() {
    return <React.Fragment></React.Fragment>;
  }
}

function mapPropsToState(state) {
  return {};
}
const wrappedChangePasswordForm = Form.create()(ChangePassword);

export default connect(mapPropsToState)(wrappedChangePasswordForm);
