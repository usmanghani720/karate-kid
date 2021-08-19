import React from "react";

import { BiCheck } from "react-icons/bi";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";
import customToast from "../../layout/CustomToast.js";
const recaptchaRef = React.createRef();

class InformationSection extends React.Component {
  state = {
    interests: [],
    disableSubmit: true,
    captchaValue: "",
  };

  sendEmail = (e) => {
    e.preventDefault();
    if (this.state.captchaValue !== "") {
      const form = e.target
      let interest = document.createElement("input");
      interest.type = "hidden";
      interest.name = "interest";
      interest.value = this.state.interests.toString()
      form.appendChild(interest)
      let captcha = document.createElement("input");
      captcha.type = "hidden";
      captcha.name = "g-recaptcha-response";
      captcha.value = this.state.captchaValue
      form.appendChild(captcha)
      emailjs.sendForm(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          form,
          process.env.REACT_APP_USER_ID
        )
        .then(
          (result) => {
            e.target.reset();
            recaptchaRef.current.reset();
            customToast.success("Email sent");
          },
          (error) => {
            e.target.reset();
            recaptchaRef.current.reset();
            customToast.error("Email not sent");
          }
        );
    } else {
      customToast.info("Please check recaptcha to proceed");
    }
  };

  onChange = () => {
    const recaptchaValue = recaptchaRef.current.getValue();
    this.setState({ captchaValue: recaptchaValue });
    //this.sendEmail(recaptchaValue);
  };

  onChangeInterest = (value) => {
    let interests = this.state.interests;
    if (interests.includes(value)) {
      interests = interests.filter((item) => item !== value);
    } else {
      interests.push(value);
    }
    this.setState({ interests: interests });
  };

  render() {
    return (
      <section id="information-section" className="information-section">
        <div className="container">
          <div className="info-text">
            <h4>Request Information</h4>
            <p>
              To request information regarding our school, products or training
              programs,
              <br />
              please complete the form and we will be in contact with your
              shortly.
              {/* <br />
              You may also <a href="/">sign up for our Monthly Newsletter.</a> */}
            </p>
          </div>
          <form className="info-form" onSubmit={this.sendEmail.bind(this)}>
            <ul>
              <li>
                <div className="input-holder">
                  <input type="text" name="fname" placeholder="First Name*" />
                </div>
              </li>
              <li>
                <div className="input-holder">
                  <input type="text" name="lname" placeholder="Last Name*" />
                </div>
              </li>
              <li>
                <div className="input-holder">
                  <input type="text" name="phone" placeholder="Phone No*" />
                </div>
              </li>
              <li>
                <div className="input-holder">
                  <input type="text" name="email" placeholder="E-Mail*" />
                </div>
              </li>
              <li>
                <div className="input-holder">
                  <strong>Location</strong>
                  <input
                    type="text"
                    name="location"
                    placeholder="No Preference"
                  />
                </div>
                <div className="input-holder">
                  <strong>Interests</strong>
                  <div className="checkbox-holder">
                    <div className="form-group">
                      <input
                        type="checkbox"
                        id="html"
                        onChange={this.onChangeInterest.bind(
                          this,
                          "Kinderkicker (Ages 4-6)"
                        )}
                      />
                      <label className="custom-checkbox-holder" htmlFor="html">
                        <span className="custom-checkbox">
                          <BiCheck />
                        </span>
                        <strong>Kinderkicker (Ages 4-6)</strong>
                      </label>
                    </div>
                    <div className="form-group">
                      <input
                        type="checkbox"
                        id="css"
                        onChange={this.onChangeInterest.bind(
                          this,
                          "Kids (Ages 7-11)"
                        )}
                      />
                      <label className="custom-checkbox-holder" htmlFor="css">
                        <span className="custom-checkbox">
                          <BiCheck />
                        </span>
                        <strong>Kids (Ages 7-11)</strong>
                      </label>
                    </div>
                    <div className="form-group">
                      <input
                        type="checkbox"
                        id="javascript"
                        onChange={this.onChangeInterest.bind(
                          this,
                          "Teens/Adults"
                        )}
                      />
                      <label
                        className="custom-checkbox-holder"
                        htmlFor="javascript"
                      >
                        <span className="custom-checkbox">
                          <BiCheck />
                        </span>
                        <strong>Teens/Adults</strong>
                      </label>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="input-holder">
                  <strong>Comments</strong>
                  <textarea
                    placeholder="Write Your Message Here..."
                    id="message"
                    className="textarea"
                    name="message"
                    rows="4"
                    cols="50"
                  ></textarea>
                </div>
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={process.env.REACT_APP_RECAPTCHA_KEY}
                  onChange={this.onChange.bind(this)}
                />
                <div className="input-holder">
                  <button type="submit" className="submit-btn">
                    Submit Request
                  </button>
                </div>
              </li>
            </ul>
          </form>
        </div>
      </section>
    );
  }
}
export default InformationSection;
