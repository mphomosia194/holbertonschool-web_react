import {
  render,
  screen,
  fireEvent,
} from '@testing-library/react';
import React from 'react';
import Notifications from './Notifications';

const notifications = [
  {
    id: 1,
    type: 'default',
    value: 'New course available',
  },
  {
    id: 2,
    type: 'urgent',
    value: 'New resume available',
  },
  {
    id: 3,
    type: 'urgent',
    html: {
      __html:
        '<strong>Urgent requirement</strong> - complete by EOD',
    },
  },
];

describe('Notifications component', () => {
  test('always displays Your notifications', () => {
    render(<Notifications />);

    expect(
      screen.getByText(/your notifications/i)
    ).toBeInTheDocument();
  });

  test('does not display drawer when displayDrawer is false', () => {
    render(
      <Notifications
        notifications={notifications}
      />
    );

    expect(
      screen.queryByRole('button')
    ).not.toBeInTheDocument();

    expect(
      screen.queryByText(
        /here is the list of notifications/i
      )
    ).not.toBeInTheDocument();

    expect(
      screen.queryByRole('list')
    ).not.toBeInTheDocument();
  });

  test('displays drawer when displayDrawer is true', () => {
    render(
      <Notifications
        displayDrawer
        notifications={notifications}
      />
    );

    expect(
      screen.getByRole('button')
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /here is the list of notifications/i
      )
    ).toBeInTheDocument();

    expect(
      screen.getAllByRole('listitem')
    ).toHaveLength(3);
  });

  test('shows empty message when notifications array is empty', () => {
    render(
      <Notifications
        displayDrawer
        notifications={[]}
      />
    );

    expect(
      screen.getByText(
        /no new notification for now/i
      )
    ).toBeInTheDocument();
  });
	test('logs notification read message when item clicked', () => {
  const consoleSpy = jest
    .spyOn(console, 'log')
    .mockImplementation(() => {});

  render(
    <Notifications
      displayDrawer
      notifications={notifications}
    />
  );

  fireEvent.click(
    screen.getByText(
      /new course available/i
    )
  );

  expect(consoleSpy).toHaveBeenCalledWith(
    'Notification 1 has been marked as read'
  );

  consoleSpy.mockRestore();
});
test(
  'does not re-render when notifications length stays the same',
  () => {
    const { rerender } = render(
      <Notifications
        displayDrawer
        notifications={[
          {
            id: 1,
            type: 'default',
            value: 'test',
          },
        ]}
      />
    );

    const instanceText =
      screen.getByText('test');

    rerender(
      <Notifications
        displayDrawer
        notifications={[
          {
            id: 2,
            type: 'urgent',
            value: 'changed',
          },
        ]}
      />
    );

    expect(instanceText).toBeInTheDocument();

    expect(
      screen.queryByText('changed')
    ).not.toBeInTheDocument();
  }
);
test(
  're-renders when notifications length changes',
  () => {
    const { rerender } = render(
      <Notifications
        displayDrawer
        notifications={[
          {
            id: 1,
            type: 'default',
            value: 'test',
          },
        ]}
      />
    );

    rerender(
      <Notifications
        displayDrawer
        notifications={[
          {
            id: 1,
            type: 'default',
            value: 'test',
          },
          {
            id: 2,
            type: 'urgent',
            value: 'new',
          },
        ]}
      />
    );

    expect(
      screen.getByText('new')
    ).toBeInTheDocument();
  }
);
});
