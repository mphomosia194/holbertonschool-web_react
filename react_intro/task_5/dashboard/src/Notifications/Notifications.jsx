import './Notifications.css';
import closeButton from '../assets/close-button.png';
import { getLatestNotification } from '../utils/utils';

function Notifications() {
  const handleClose = () => {
    // eslint-disable-next-line no-console
    console.log('Close button has been clicked');
  };

  return (
    <div className="notification-items">
      <button
        type="button"
        aria-label="Close"
        onClick={handleClose}
        style={{
          float: 'right',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        <img
          src={closeButton}
          alt="close"
          width="15"
        />
      </button>

      <p>Here is the list of notifications</p>

      <ul>
        <li data-priority="default">
          New course available
        </li>

        <li data-priority="urgent">
          New resume available
        </li>

        <li
          data-priority="urgent"
          dangerouslySetInnerHTML={{
            __html: getLatestNotification(),
          }}
        />
      </ul>
    </div>
  );
}

export default Notifications;
