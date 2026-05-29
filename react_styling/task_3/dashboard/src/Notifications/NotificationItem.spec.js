import {
  render,
  screen,
  fireEvent,
} from '@testing-library/react';

import NotificationItem from './NotificationItem';

describe('NotificationItem', () => {

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
