import React, { Component } from 'react';
import './Notifications.css';
import closeButton from '../assets/close-button.png';
import NotificationItem from './NotificationItem';

class Notifications extends Component {
  static defaultProps = {
    notifications: [],
    displayDrawer: false,
  };

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
        <div className="notification-title">
          Your notifications
        </div>

        {displayDrawer && (
          <div className="notification-items">
            <button
              type="button"
              aria-label="Close"
              onClick={this.handleClose}
              style={{
                float: 'right',
                border: 'none',
                background: 'transparent',
                cursor: 'pointer',
              }}
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
