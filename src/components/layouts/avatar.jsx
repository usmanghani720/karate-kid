import React, { Component } from "react";
import { connect } from "react-redux";

import { Upload, message } from "antd";
import * as uActions from "./../../actions/avatar";

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJPG = file.type === "image/jpg";
  const isJPEG = file.type === "image/jpeg";
  const isPNG = file.type === "image/png";
  const isLt10M = file.size / 1024 / 1024 < 5;
  if (!isLt10M) {
    message.error("Image must smaller than 5MB!");
  } else if (isPNG === true && isLt10M === true) {
    return isPNG && isLt10M;
  }
  if (isJPG === true && isLt10M === true) {
    return isJPG && isLt10M;
  }
  if (isJPEG === true && isLt10M === true) {
    return isJPEG && isLt10M;
  } else {
    message.error("Invalid File Format");
    return false;
  }
}

class Avatar extends Component {
  state = {
    loading: false,
  };
  handleChange = (info) => {
    if (info.file.status === "uploading") {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === "done") {
      var element = document.getElementById("uploading_text");
      if (element) {
        element.parentNode.removeChild(element);
      }
      // Get this url from response in real world.
      if (info.file.type.includes("image")) {
        getBase64(info.file.originFileObj, (imageUrl) => {
          this.props.updateAvatarPhoto(info.file.response);
          this.setState({
            imageUrl,
            loading: false,
          });
        });
      }
    }
    else{
      //message.error("File uploaded failed")
    }
  };
  render() {
    const uploadButton = (
      <div>
        <img
          style={{ borderRadius: this.props.borderRadius }}
          className={this.props.designatedClass}
          src={this.props.defaultImage}
          alt="logo"
        />
      </div>
    );
    const imageUrl = this.state.imageUrl;
    return (
      <Upload
        name="tmp_file"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action={`https://vmx.militaryx.com/tmp_fileuploader`}
        beforeUpload={beforeUpload}
        onChange={this.handleChange}
      >
        {imageUrl ? (
          <img
            style={{ borderRadius: this.props.borderRadius }}
            src={imageUrl}
            className={this.props.designatedClass}
            alt="uploaded"
          />
        ) : (
          uploadButton
        )}
      </Upload>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateAvatarPhoto: (data) => dispatch(uActions.updateUserPhoto(data)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Avatar);
