import {
  render,
  screen,
  fireEvent,
} from '@testing-library/react';

import Login from './Login';

describe('Login component', () => {
  test('renders 2 labels, 2 inputs and 1 button', () => {
    render(<Login />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);

    const emailLabel = screen.getByText(/email/i);
    const passwordLabel = screen.getByText(/password/i);

    const button = screen.getByRole('button', {
      name: /ok/i,
    });

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();

    expect(emailLabel).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();

    expect(button).toBeInTheDocument();
  });

  test('focuses input when label is clicked', () => {
    render(<Login />);

    const emailLabel = screen.getByText(/email/i);
    const passwordLabel = screen.getByText(/password/i);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);

    fireEvent.click(emailLabel);

    expect(emailInput).toHaveFocus();

    fireEvent.click(passwordLabel);

    expect(passwordInput).toHaveFocus();
  });
});
