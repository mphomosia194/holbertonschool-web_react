import {
  render,
  screen,
  fireEvent,
} from '@testing-library/react';

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
  test('renders title', () => {
    render(
      <Notifications notifications={notifications} />
    );

    expect(
      screen.getByText(/here is the list of notifications/i)
    ).toBeInTheDocument();
  });

  test('renders close button', () => {
    render(
      <Notifications notifications={notifications} />
    );

    expect(
      screen.getByRole('button', { name: /close/i })
    ).toBeInTheDocument();
  });

  test('renders 3 notifications', () => {
    render(
      <Notifications notifications={notifications} />
    );

    expect(
      screen.getAllByRole('listitem')
    ).toHaveLength(3);
  });

  test('logs message when button clicked', () => {
    const spy = jest.spyOn(console, 'log');

    render(
      <Notifications notifications={notifications} />
    );

    fireEvent.click(
      screen.getByRole('button', { name: /close/i })
    );

    expect(spy).toHaveBeenCalledWith(
      'Close button has been clicked'
    );

    spy.mockRestore();
  });
});
