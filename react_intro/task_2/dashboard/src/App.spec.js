import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('renders the h1 element with School dashboard text', () => {
    render(<App />);

    const heading = screen.getByRole('heading', {
      name: /school dashboard/i,
    });

    expect(heading).toBeInTheDocument();
  });

  test('renders the correct paragraph texts', () => {
    render(<App />);

    const loginText = screen.getByText(
      /login to access the full dashboard/i
    );

    const footerText = screen.getByText(
      /copyright .* - holberton school/i
    );

    expect(loginText).toBeInTheDocument();
    expect(footerText).toBeInTheDocument();
  });

  test('renders the holberton logo image', () => {
    render(<App />);

    const image = screen.getByAltText(/holberton logo/i);

    expect(image).toBeInTheDocument();
  });

  test('renders 2 input elements', () => {
  render(<App />);

  const emailInput = screen.getByLabelText(/email/i);
  const passwordInput = screen.getByLabelText(/password/i);

  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
});

  test('renders Email and Password labels', () => {
    render(<App />);

    const emailLabel = screen.getByText(/email/i);
    const passwordLabel = screen.getByText(/password/i);

    expect(emailLabel).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();
  });

  test('renders OK button', () => {
    render(<App />);

    const button = screen.getByRole('button', {
      name: /ok/i,
    });

    expect(button).toBeInTheDocument();
  });
});
