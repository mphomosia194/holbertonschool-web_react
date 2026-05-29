import {
  render,
  screen,
  fireEvent,
} from '@testing-library/react';

import Login from './Login';

describe('Login component', () => {
  test('renders 2 labels, 2 inputs and 1 button', () => {
    render(<Login />);

    expect(screen.getAllByLabelText(/email|password/i)).toHaveLength(2);

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();

    expect(
      screen.getByRole('button', { name: /ok/i })
    ).toBeInTheDocument();
  });

  test('focuses input when label is clicked', () => {
    render(<Login />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);

    fireEvent.click(screen.getByText('Email:'));
    emailInput.focus();
    expect(emailInput).toHaveFocus();

    fireEvent.click(screen.getByText('Password:'));
    passwordInput.focus();
    expect(passwordInput).toHaveFocus();
  });
});
