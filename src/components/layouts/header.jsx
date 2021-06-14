import React, { Component } from "react";
import { connect } from "react-redux";
import AuthenticatedMenu from "./authenticated_menu";
import * as unreadMessagesActions from "./../../actions/unread_messages";
import * as notificationActions from "./../../actions/notifications";
import Defender from "./../../helpers/defender";
import { isEmpty } from "lodash/fp";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    };
  }

  componentDidMount() {
    let el = document.getElementById("root");
    if (!isEmpty(Defender.currentUser())) {
      if (el) {
        el.setAttribute("style", "background: #FFFFFF");
      }
      this.props.fetchAllNotifications();
      //this.props.fetchUnreadMessagesCount(Defender.currentUser().id);
    } else {
      if (el) {
        el.setAttribute(
          "style",
          "background: transparent linear-gradient(137deg, #FFFFFF 0%, #E9E9E9 100%);"
        );
      }
    }
  }

  mark_notification_as_read(obj_notification_id, e) {
    this.props.updateNotificationStatus(obj_notification_id);
  }

  render() {
    // const { total_unread_messages } = this.props.unread_messages_reducer;
    // const { unread_counts } = this.props.notifications_reducer;
    return <React.Fragment>
      <p>Header</p>
    </React.Fragment>;
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    unread_messages_reducer: state.unread_messages_reducer,
    notifications_reducer: state.notifications_reducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateNotificationStatus: (notification_id) => {
      dispatch(notificationActions.markNotificationAsRead(notification_id));
    },
    fetchUnreadMessagesCount: (user_id) => {
      dispatch(unreadMessagesActions.fetch(user_id));
    },
    fetchAllNotifications: () => {
      dispatch(notificationActions.fetchAllNotifications());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
