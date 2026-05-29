import React from 'react';
import {
  render,
  screen,
  cleanup,
} from '@testing-library/react';

import WithLogging from './WithLogging';

class MockApp extends React.Component {
  render() {
    return (
      <h1>
        Hello from Mock App Component
      </h1>
    );
  }
}

describe('WithLogging', () => {
  afterEach(() => {
    cleanup();
  });

  test('renders wrapped component', () => {
    const WrappedMock =
      WithLogging(MockApp);

    render(<WrappedMock />);

    expect(
      screen.getByText(
        /hello from mock app component/i
      )
    ).toBeInTheDocument();
  });
});
