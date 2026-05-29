import {
  render,
  screen,
  fireEvent,
} from '@testing-library/react';

import NotificationItem from './NotificationItem';

describe('NotificationItem', () => {
  test('renders default notification in blue', () => {
    render(
      <NotificationItem
        type="default"
        value="test"
      />
    );

    const item = screen.getByText('test');

    expect(item).toHaveStyle({
      color: 'blue',
    });

    expect(item).toHaveAttribute(
      'data-notification-type',
      'default'
    );
  });

  test('renders urgent notification in red', () => {
    render(
      <NotificationItem
        type="urgent"
        value="test"
      />
    );

    const item = screen.getByText('test');

    expect(item).toHaveStyle({
      color: 'red',
    });

    expect(item).toHaveAttribute(
      'data-notification-type',
      'urgent'
    );
  });

  test('calls markAsRead when clicked', () => {
    const markAsRead = jest.fn();

    render(
      <NotificationItem
        id={1}
        type="default"
        value="test"
        markAsRead={markAsRead}
      />
    );

    fireEvent.click(
      screen.getByText('test')
    );

    expect(markAsRead).toHaveBeenCalledWith(
      1
    );
  });
});
