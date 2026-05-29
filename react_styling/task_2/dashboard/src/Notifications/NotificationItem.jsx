import React, { PureComponent } from 'react';

class NotificationItem extends PureComponent {
  static defaultProps = {
    type: 'default',
    value: '',
    html: null,
    markAsRead: () => {},
    id: 0,
  };

  const colorClass =
  type === 'urgent'
    ? 'text-[var(--urgent-notification-item)]'
    : 'text-[var(--default-notification-item)]';

if (html) {
  return (
    <li
      data-notification-type={type}
      className={colorClass}
      dangerouslySetInnerHTML={html}
      onClick={() => markAsRead(id)}
    />
  );
}

return (
  <li
    data-notification-type={type}
    className={colorClass}
    onClick={() => markAsRead(id)}
  >
    {value}
  </li>
);
}

export default NotificationItem;
