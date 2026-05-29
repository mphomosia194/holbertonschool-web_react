import {
  render,
  screen,
  fireEvent,
} from '@testing-library/react';

import App from './App';

describe('App', () => {
  test('renders login form', () => {
    render(<App />);

    expect(
      screen.getByText(
        /login to access the full dashboard/i
      )
    ).toBeInTheDocument();
  });

  test('calls logout when ctrl+h is pressed', () => {
    const logOutMock = jest.fn();

    render(<App logOut={logOutMock} />);

    fireEvent.keyDown(document, {
      key: 'h',
      ctrlKey: true,
    });

    expect(logOutMock).toHaveBeenCalledTimes(1);
  });

  test('shows alert when ctrl+h is pressed', () => {
    const alertMock = jest
      .spyOn(window, 'alert')
      .mockImplementation(() => {});

    render(<App />);

    fireEvent.keyDown(document, {
      key: 'h',
      ctrlKey: true,
    });

    expect(alertMock).toHaveBeenCalledWith(
      'Logging you out'
    );

    alertMock.mockRestore();
  });
});
