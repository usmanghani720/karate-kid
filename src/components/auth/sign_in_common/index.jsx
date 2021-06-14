import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form, Input } from "antd";
import { isEmpty, getOr } from "lodash/fp";
import Footer from "./../../layouts/footer";

const FormItem = Form.Item;

class SignInCommon extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onSubmit(values["password"], values);
      }
    });
  };

  changeSide = (side, e) => {
    this.props.onClick(side);
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const event = this.props.event;


    return (
      <React.Fragment></React.Fragment>
    );
  }
}

export default Form.create()(SignInCommon);
