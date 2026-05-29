import { render, screen } from '@testing-library/react';
import CourseListRow from './CourseListRow';

describe('CourseListRow', () => {
  test('renders one th with colspan 2', () => {
    render(
      <table>
        <thead>
          <CourseListRow
            isHeader
            textFirstCell="test"
          />
        </thead>
      </table>
    );

    const th = screen.getByRole('columnheader');

    expect(th).toHaveAttribute('colspan', '2');
  });

  test('renders two th cells', () => {
    render(
      <table>
        <thead>
          <CourseListRow
            isHeader
            textFirstCell="test"
            textSecondCell="value"
          />
        </thead>
      </table>
    );

    expect(
      screen.getAllByRole('columnheader')
    ).toHaveLength(2);
  });

  test('renders two td cells', () => {
    render(
      <table>
        <tbody>
          <CourseListRow
            textFirstCell="test"
            textSecondCell="value"
          />
        </tbody>
      </table>
    );

    expect(
      screen.getAllByRole('cell')
    ).toHaveLength(2);
  });
});
