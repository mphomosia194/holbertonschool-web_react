import { render, screen } from '@testing-library/react';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

describe('BodySectionWithMarginBottom', () => {
  test('contains div with bodySectionWithMargin class', () => {
    const { container } = render(
      <BodySectionWithMarginBottom title="Test">
        <p>Content</p>
      </BodySectionWithMarginBottom>
    );

    expect(
      container.querySelector(
        '.bodySectionWithMargin'
      )
    ).toBeInTheDocument();
  });

  test('renders BodySection component', () => {
    render(
      <BodySectionWithMarginBottom title="Test Title">
        <p>Content</p>
      </BodySectionWithMarginBottom>
    );

    expect(
      screen.getByRole('heading', {
        name: 'Test Title',
      })
    ).toBeInTheDocument();
  });
});
