import React, { PureComponent } from 'react';

class NotificationItem extends PureComponent {
  static defaultProps = {
    type: 'default',
    value: '',
    html: null,
    markAsRead: () => {},
    id: 0,
  };

  render() {
    const {
      type,
      value,
      html,
      markAsRead,
      id,
    } = this.props;

    const style = {
      color: type === 'urgent' ? 'red' : 'blue',
    };

    if (html) {
      return (
        <li
          data-notification-type={type}
          style={style}
          dangerouslySetInnerHTML={html}
          onClick={() => markAsRead(id)}
        />
      );
    }

    return (
      <li
        data-notification-type={type}
        style={style}
        onClick={() => markAsRead(id)}
      >
        {value}
      </li>
    );
  }
}

export default NotificationItem;
