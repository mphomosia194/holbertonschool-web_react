import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer component', () => {
  test('renders copyright text', () => {
    render(<Footer />);

    const currentYear = new Date().getFullYear();

    const footerText = screen.getByText(
      `Copyright ${currentYear} - Holberton School`
    );

    expect(footerText).toBeInTheDocument();
  });
});
