import { render, screen } from '@testing-library/react';
import BodySection from './BodySection';

describe('BodySection', () => {
  test('renders title', () => {
    render(
      <BodySection title="Test Title">
        <p>Test</p>
      </BodySection>
    );

    expect(
      screen.getByRole('heading', {
        name: 'Test Title',
      })
    ).toBeInTheDocument();
  });

  test('renders children', () => {
    render(
      <BodySection title="Test">
        <p>Child One</p>
        <p>Child Two</p>
      </BodySection>
    );

    expect(
      screen.getByText('Child One')
    ).toBeInTheDocument();

    expect(
      screen.getByText('Child Two')
    ).toBeInTheDocument();
  });
});
