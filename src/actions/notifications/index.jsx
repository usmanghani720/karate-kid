import NotificationsList from './../../api/notifications';

export function fetchNotifications(){
  return function(dispatch) {
    return NotificationsList.fetch().then( response => {
      dispatch({type: 'FETCH_USER_NOTIFICATIONS', ...response});
    })
  }
}

export function fetchAllNotifications(){
  return function(dispatch) {
    return NotificationsList.fetch_all().then( response => {
      dispatch({type: 'FETCH_ALL_USER_NOTIFICATIONS', ...response});
    })
  }
}

export function markNotificationAsRead(notification_id){
  return function(dispatch) {
    return NotificationsList.update(notification_id).then( response => {
      dispatch({type: 'FETCH_USER_NOTIFICATIONS', ...response});
    })
  }
}

export function markAllNotificationAsRead(){
  return function(dispatch) {
    return NotificationsList.mark_all_as_read().then( response => {
      dispatch({type: 'FETCH_USER_NOTIFICATIONS', ...response});
    })
  }
}

export function getNotifications(userId){
  return function(dispatch) {
    return NotificationsList.get_notifications(userId).then( response => {
      dispatch({type: 'FETCH_USER_NOTIFICATIONS', ...response});
    })
  }
}


