import React from "react";

import { BiCheck } from "react-icons/bi";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";
const recaptchaRef = React.createRef();

class InformationSection extends React.Component {
  state = {
    interests: "",
    disableSubmit: true,
    statusMessage: "",
  };

  sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_rh00suv",
        "template_83e4abd",
        e.target,
        "user_ee6WXesOWCxQZ2DzHcoHg"
      )
      .then(
        (result) => {
          e.target.reset();
          this.setState({ statusMessage: "Email Sent" });
          recaptchaRef.current.reset();
          setTimeout(() => {
            this.setState({ statusMessage: "" });
          }, 2000);
        },
        (error) => {
          e.target.reset();
          this.setState({ statusMessage: "Email Not Sent" });
          console.log(error.text);
          setTimeout(() => {
            this.setState({ statusMessage: "" });
          }, 2000);
        }
      );
  };

  onChange = () => {
    const recaptchaValue = recaptchaRef.current.getValue();
    this.setState({ disableSubmit: false });
    //this.sendEmail(recaptchaValue);
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
                      <input type="checkbox" id="html" />
                      <label className="custom-checkbox-holder" htmlFor="html">
                        <span className="custom-checkbox">
                          <BiCheck />
                        </span>
                        <strong>Kinderkicker (Ages 4-6)</strong>
                      </label>
                    </div>
                    <div className="form-group">
                      <input type="checkbox" id="css" />
                      <label className="custom-checkbox-holder" htmlFor="css">
                        <span className="custom-checkbox">
                          <BiCheck />
                        </span>
                        <strong>Kids (Ages 7-11)</strong>
                      </label>
                    </div>
                    <div className="form-group">
                      <input type="checkbox" id="javascript" />
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
                  sitekey="6Le6qYkUAAAAAPV6uTAbMO6h4ElsQBV5OuJIXlIV"
                  onChange={this.onChange.bind(this)}
                />
                <div className="input-holder">
                  <button
                    type="submit"
                    className="submit-btn"
                    disabled={this.state.disableSubmit}
                  >
                    Submit Request
                  </button>
                  <p className="status-message">{this.state.statusMessage}</p>
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
