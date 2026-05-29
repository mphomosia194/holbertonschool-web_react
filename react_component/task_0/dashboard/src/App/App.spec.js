import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders login form', () => {
    render(<App />);

    expect(
      screen.getByText(/login to access the full dashboard/i)
    ).toBeInTheDocument();
  });

  test('app component exists', () => {
    render(<App />);

    expect(document.body).toBeInTheDocument();
  });
});
