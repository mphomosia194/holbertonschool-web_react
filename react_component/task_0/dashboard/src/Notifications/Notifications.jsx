import './Notifications.css';
import closeButton from '../assets/close-button.png';
import NotificationItem from './NotificationItem';

function Notifications({
  notifications = [],
  displayDrawer = false,
}) {
  const handleClose = () => {
    console.log('Close button has been clicked');
  };

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
            onClick={handleClose}
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
              <p>Here is the list of notifications</p>

              <ul>
                {notifications.map((notification) => (
                  <NotificationItem
                    key={notification.id}
                    type={notification.type}
                    value={notification.value}
                    html={notification.html}
                  />
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default Notifications;
