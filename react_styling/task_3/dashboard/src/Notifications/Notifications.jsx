import React, { Component } from 'react';
import closeButton from '../assets/close-button.png';
import NotificationItem from './NotificationItem';

class Notifications extends Component {
  static defaultProps = {
    notifications: [],
    displayDrawer: false,
  };
shouldComponentUpdate(nextProps) {
 return (
	 nectProps.notifications.length >
	 this.props.notifications.length
 );
}
  markAsRead = (id) => {
    console.log(
      `Notification ${id} has been marked as read`
    );
  };

  handleClose = () => {
    console.log('Close button has been clicked');
  };

  render() {
    const {
      notifications,
      displayDrawer,
    } = this.props;

    return (
  <>
    <div className="text-right mr-4 mt-4">
      Your notifications
    </div>

    {displayDrawer && (
      <div
        className="
          border-2
          border-dashed
          border-[var(--main-color)]
          p-[6px]
          w-[25%]
          ml-auto
          mr-4
        "
      >
        <button
          type="button"
          aria-label="Close"
          onClick={this.handleClose}
          className="float-right bg-transparent border-none cursor-pointer"
        >
          <img
            src={closeButton}
            alt="close"
            width="15"
          />
        </button>

        {notifications.length === 0 ? (
          <p>No new notification for now</p>
        ) : (
          <>
            <p>
              Here is the list of notifications
            </p>

            <ul>
              {notifications.map(
                (notification) => (
                  <NotificationItem
                    key={notification.id}
                    id={notification.id}
                    type={notification.type}
                    value={notification.value}
                    html={notification.html}
                    markAsRead={this.markAsRead}
                  />
                )
              )}
            </ul>
          </>
        )}
      </div>
    )}
  </>
);
         
  }
}

export default Notifications;
