import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Form, message } from "antd";
import { isEmpty, getOr } from "lodash/fp";
import { push } from "react-router-redux";
import * as sActions from "./../../../actions/auth/sign_in";
import * as stActions from "./../../../actions/auth/sign_in_with_token";
// import * as recActions from "./../../../actions/recruiters";
// import * as srecActions from "./../../../actions/recruiter";
// import * as cpActions from "./../../../actions/complete_profile";
// import * as reActions from "./../../../actions/register_event";
// import * as cdActions from "./../../../actions/candidate_database";
import * as chatroomActions from "./../../../actions/user_chatrooms";
// import * as onlineUsersActions from "./../../../actions/online_users";
// import * as seekerActions from "./../../../actions/seeker";
// import * as visitActions from "./../../../actions/lobby_visit";
// import * as companyActions from "./../../../actions/company_visit";
// import * as dashboardActions from "./../../../actions/dashboard_visit";
// import * as ueActions from "./../../../actions/user_experience";
// import * as jAActions from "./../../../actions/job_applications";
// import * as ceActions from "./../../../actions/current_event";
// import * as eActions from "./../../../actions/events";
// import * as ueeActions from "./../../../actions/upcoming_event";
// import Recruiters from "./../../../api/recruiters";
import Registrations from "./../../../api/auth/registrations";
import SignInVirtual from "./../../../api/auth/sign_in_virtual";
import SignOutVirtual from "./../../../api/auth/sign_out_virtual";
import SignInCommon from "./../sign_in_common";
import ViewUser from "./../../../api/users";
//import Events from "./../../../api/events";
import Defender from "./../../../helpers/defender";
import * as qs from "query-string";
import Loader from "./../../loader";
const EMPLOYEE_ROLE = 1;

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      password: "",
      side: "seeker",
      event: null,
      brand: null,
    };
    this.signIn = this.signIn.bind(this);
    this.createUser = this.createUser.bind(this);
  }

  signIn = (data) => {
    // SignInVirtual.verify({ user: data }).then((response) => {
    //   if (
    //     (getOr("", "status", response) === 200 ||
    //       getOr("", "status", response) === 201) &&
    //     isEmpty(getOr({}, "data.errors", response))
    //   ) {
    //     const token = response.headers["authorization"];
    //     let virtualSignedIn = {};
    //     virtualSignedIn = response.data;
    //     Defender.loggedIn(virtualSignedIn, token);
    //     if (response.data.id) {
    //       this.props.clearUserChatroom();
    //       SignOutVirtual.destroy_existing_connections().then((res) => {
    //         ViewUser.get_online_users().then((r) => {
    //           if (getOr("", "status", r) === 200) {
    //             if (!isEmpty(r.data.users)) {
    //               for (let i = 0; i < r.data.users.length; i++) {
    //                 let data = {};
    //                 data["user"] = r.data.users[i];
    //                 data["online"] = "online";
    //                 this.props.dispatch(onlineUsersActions.addOnlineUser(data));
    //               }
    //             }
    //             if (response.data._r.includes("seeker")) {
    //               let data = {};
    //               data["type"] = "add";
    //               data["online"] = "online";
    //               ViewUser.update({ user: data }).then((response) => {
    //                 window.location = "/dashboard";
    //               });
    //             }
    //             if (response.data._r.includes("employer")) {
    //               let data = {};
    //               data["type"] = "add";
    //               data["online"] = "online";
    //               ViewUser.update({ user: data }).then((response) => {
    //                 window.location = "/home";
    //               });
    //             }
    //           }
    //         });
    //       });
    //     } else {
    //       this.props.history.push(`/login`);
    //     }
    //   } else {
    //     this.setState({ loading: false });
    //   }
    // });
  };

  createUser = (userData, reason) => {
    // const { password } = this.state;
    // const { loggedInReducer } = this.props;
    // if (!loggedInReducer.success && !isEmpty(reason)) {
    //   if (isEmpty(password)) {
    //     message.error(reason);
    //   }
    // } else {
    //   let dataEmail = {};
    //   dataEmail["email"] = userData.email;
    //   ViewUser.check_user(dataEmail).then((response) => {
    //     if (getOr(404, "status", response) === 200) {
    //       if (response.data.user) {
    //         let dataSignIn = {};
    //         dataSignIn["email"] = userData.email;
    //         if (!isEmpty(getOr("", "password", userData))) {
    //           dataSignIn["password"] = getOr("", "password", userData);
    //         } else {
    //           dataSignIn["password"] = !isEmpty(password)
    //             ? password
    //             : getOr("", "token", userData);
    //         }
    //         this.signIn(dataSignIn);
    //       } else {
    //         let data = {};
    //         data["id"] = userData.user_id ? userData.user_id : userData.id;
    //         data["first_name"] = userData.first_name;
    //         data["last_name"] = userData.last_name;
    //         data["email"] = userData.email;
    //         data["token"] = userData.token;
    //         if (userData.image_url) {
    //           data["military_avatar"] = userData.image_url
    //             ? userData.image_url
    //             : userData.military_avatar;
    //         }
    //         data["role_adder"] = EMPLOYEE_ROLE;
    //         data["is_complete"] = userData.is_complete;
    //         if (!isEmpty(getOr("", "password", userData))) {
    //           data["password"] = getOr("", "password", userData);
    //         } else {
    //           data["password"] = !isEmpty(password)
    //             ? password
    //             : getOr("", "token", userData);
    //           data["password_confirmation"] = data["password"];
    //         }
    //         Registrations.save({ user: { ...data } }).then((response) => {
    //           let signedInUser = {};
    //           signedInUser = userData;
    //           signedInUser["sign_in_count"] = response.data.sign_in_count;
    //           let signInData = {};
    //           signInData["email"] = userData.email;
    //           if (!isEmpty(getOr("", "password", userData))) {
    //             signInData["password"] = getOr("", "password", userData);
    //           } else {
    //             signInData["password"] = !isEmpty(password)
    //               ? password
    //               : getOr("", "token", userData);
    //           }
    //           this.signIn(signInData);

    //           this.props.dispatch(cpActions.showCompleteProfile(true));
    //         });
    //       }
    //     }
    //   });
    // }
  };

  componentDidMount() {
    // sessionStorage.removeItem("https://virtual.militaryx.com:state");
    // const parsed = qs.parse(this.props.location.search);
    // if (parsed["event"]) {
    //   //this.setState({loading: true})
    //   let dataEvent = {};
    //   dataEvent["event"] = parsed["event"];
    //   this.props.dispatch(reActions.assignRegisterEvent(dataEvent));
    //   Events.get_event_info(parsed["event"]).then((response) => {
    //     if (getOr(404, "status", response) === 200) {
    //       this.setState({ event: response.data.event });
    //       if (Defender.currentUser()) {
    //         if (Defender.currentUser()._r.includes("seeker"))
    //           window.location = "/dashboard";
    //         return true;
    //       }
    //     }
    //   });
    // } else if (parsed["role"]) {
    //   if (parsed["role"] === "employer") {
    //     this.setState({ side: "employer" });
    //     if (Defender.currentUser()) {
    //       if (Defender.currentUser()._r.includes("employer")) {
    //         window.location = "/home";
    //       } else window.location = "/events";
    //     }
    //   }
    // } else if (parsed["page"]) {
    //   if (parsed["page"] === "candidate_database") {
    //     if (
    //       Defender.currentUser() &&
    //       Defender.currentUser()._r.includes("employer")
    //     ) {
    //       window.location = "/passed-events";
    //       return true;
    //     } else if (
    //       Defender.currentUser() &&
    //       Defender.currentUser()._r.includes("seeker")
    //     ) {
    //       window.location = "/events";
    //       return true;
    //     } else {
    //       this.setState({ side: "employer" });
    //       let dataDb = {};
    //       dataDb["database"] = true;
    //       this.props.dispatch(cdActions.assignCandidateDatabase(dataDb));
    //     }
    //   }
    // } else if (parsed["token"]) {
    //   if (Defender.currentUser()) {
    //     Defender.logout();
    //     return true;
    //   }
    //   this.setState({ loading: true });
    //   this.props
    //     .dispatch(stActions.checkLoggedIn(parsed["token"]))
    //     .then((res) => {
    //       if (!isEmpty(res.data)) {
    //         this.createUser(res.data);
    //       } else {
    //         this.setState({ loading: false });
    //       }
    //     });
    // } else if (parsed["recruiter"] && parsed["status"]) {
    //   if (Defender.currentUser()) {
    //     SignOutVirtual.destroy().then((response) => {
    //       this.props.dispatch(dashboardActions.assignDashboardVisit(0));
    //       this.props.dispatch(visitActions.assignLobbyVisit(0));
    //       this.props.dispatch(companyActions.assignCompanyVisit(0));
    //       this.props.dispatch(seekerActions.emptySeeker());
    //       this.props.dispatch(jAActions.clearJobApplications());
    //       this.props.dispatch(ueActions.emptyUserExperience());
    //       this.props.dispatch(chatroomActions.clearUserChatroom());
    //       this.props.dispatch(onlineUsersActions.emptyOnlineUser());
    //       this.props.dispatch(ceActions.emptyCurrentEvent());
    //       this.props.dispatch(ueeActions.emptyUpComingEvent());
    //       sessionStorage.removeItem("https://virtual.militaryx.com:state");
    //       this.props.dispatch(eActions.emptyEvents());
    //       Defender.logout();
    //       window.location = `/login?recruiter=${parsed["recruiter"]}&status=${parsed["status"]}`;
    //     });
    //   }
    //   this.setState({ loading: true });
    //   Recruiters.get(parsed["recruiter"]).then((response) => {
    //     if (!isEmpty(response.data)) {
    //       const recruiter = response.data;
    //       this.props.dispatch(srecActions.assignRecruiter(recruiter));
    //       let data = {};
    //       if (recruiter.status === "pending") {
    //         if (parsed["status"] === "1") {
    //           data["status"] = "accepted";
    //         } else {
    //           data["status"] = "rejected";
    //         }
    //         this.props
    //           .dispatch(recActions.update(parsed["recruiter"], data))
    //           .then((data) => {});
    //       }
    //       if (parsed["status"] === "1" && recruiter.status !== "rejected") {
    //         let data = {};
    //         const name = recruiter.invited_user_name.split(" ");
    //         data["fname"] = name[0];
    //         data["lname"] = name[1];
    //         data["email"] = recruiter.invited_user_email;
    //         data["user_id"] = recruiter.employer.id;
    //         data["event_id"] = recruiter.event.id;
    //         Recruiters.addRecruiter(data).then((response) => {
    //           if (response.data.success === true) {
    //             let data = {};
    //             const user = response.data.data;
    //             data["invited_user_id"] = user.user_id;
    //             this.props
    //               .dispatch(recActions.update(parsed["recruiter"], data))
    //               .then((data) => {});
    //             this.createUser(user, "");
    //           }
    //         });
    //       } else {
    //         this.setState({ loading: false });
    //       }
    //     }
    //   });
    // } else if (parsed["brand"]) {
    //   if (Defender.currentUser()) {
    //     if (Defender.currentUser()._r.includes("employer")) {
    //       window.location = "/home";
    //     } else window.location = "/events";
    //   } else {
    //     this.setState({ brand: parsed["brand"] });
    //   }
    // } else if (Defender.currentUser()) {
    //   if (Defender.currentUser()._r.includes("employer")) {
    //     window.location = "/home";
    //   } else window.location = "/events";
    // }
  }

  handleSubmit = (password, values) => {
    // this.setState({ loading: true });
    // let data = {};
    // data["email"] = values.email.toLowerCase();
    // ViewUser.check_user(data).then((response) => {
    //   if (getOr(404, "status", response) === 200) {
    //     if (response.data.user) {
    //       let dataRole = {};
    //       dataRole["email"] = values["email"].toLowerCase();
    //       dataRole["role"] = this.state.side;
    //       ViewUser.check_user_role(dataRole).then((response) => {
    //         if (getOr(404, "status", response) === 200) {
    //           if (
    //             getOr(true, "data.success", response) === false &&
    //             !isEmpty(password)
    //           ) {
    //             message.error(`Invalid email or password`);
    //             this.setState({ loading: false });
    //           } else {
    //             if (this.state.side === "seeker") {
    //               let dataSignIn = {};
    //               dataSignIn["email"] = values["email"].toLowerCase();
    //               dataSignIn["password"] = password;
    //               this.signIn(dataSignIn);
    //             } else {
    //               let dataSignIn = {};
    //               dataSignIn["email"] = values["email"].toLowerCase();
    //               dataSignIn["password"] = password;
    //               this.props
    //                 .dispatch(sActions.checkLoggedIn(dataSignIn))
    //                 .then((res) => {
    //                   if (res.reason) {
    //                     message.error(`Invalid email or password`);
    //                     this.setState({ loading: false });
    //                   } else {
    //                     if (!isEmpty(res.data)) {
    //                       let existingData = {};
    //                       existingData["id"] = res.data.user_id
    //                         ? res.data.user_id
    //                         : res.data.id;
    //                       existingData["first_name"] = res.data.first_name;
    //                       existingData["last_name"] = res.data.last_name;
    //                       existingData["email"] = res.data.email.toLowerCase();
    //                       existingData["token"] = res.data.token;
    //                       existingData["password"] = password;
    //                       if (res.data.image_url) {
    //                         existingData["military_avatar"] = res.data.image_url
    //                           ? res.data.image_url
    //                           : res.data.military_avatar;
    //                       }
    //                       Registrations.save({
    //                         user: { ...existingData },
    //                       }).then((response) => {
    //                         this.signIn(dataSignIn);
    //                       });
    //                     }
    //                   }
    //                 });
    //             }
    //           }
    //         }
    //       });
    //     } else {
    //       this.setState({ password: password });
    //       this.props.dispatch(sActions.checkLoggedIn(values)).then((res) => {
    //         if (res.reason) {
    //           message.error(`Invalid email or password`);
    //           this.setState({ loading: false });
    //         } else {
    //           if (!isEmpty(res.data)) {
    //             this.createUser(res.data);
    //           }
    //           let dataRole = {};
    //           dataRole["email"] = values.email.toLowerCase();
    //           dataRole["role"] = this.state.side;
    //           ViewUser.check_user_role(dataRole).then((response) => {
    //             if (getOr(404, "status", response) === 200) {
    //               if (
    //                 getOr(true, "data.success", response) === false &&
    //                 !isEmpty(password)
    //               ) {
    //                 this.setState({ loading: false });
    //                 //message.error(`Invalid email or password`)
    //               } else {
    //                 let dataSignInCopy = {};
    //                 dataSignInCopy["email"] = values["email"].toLowerCase();
    //                 dataSignInCopy["password"] = password;
    //                 this.signIn(dataSignInCopy);
    //               }
    //             }
    //           });
    //         }
    //       });
    //     }
    //   }
    // });
  };

  changeSide = (side, e) => {
    this.setState({ side: side });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.loading === true ? <Loader /> : null}
        <SignInCommon
          onSubmit={this.handleSubmit.bind(this)}
          onClick={this.changeSide.bind(this)}
          side={this.state.side}
          event={this.state.event}
          brand={this.state.brand}
        />
      </React.Fragment>
    );
  }
}
function mapPropsToState(state) {
  return {
    loggedInReducer: state.logInReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    clearUserChatroom: () => {
      return dispatch(chatroomActions.clearUserChatroom());
    },
    dispatch,
  };
}

const wrappedSignInForm = Form.create()(SignIn);
export default withRouter(
  connect(mapPropsToState, mapDispatchToProps)(wrappedSignInForm)
);
