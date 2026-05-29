import './CourseList.css';
import CourseListRow from './CourseListRow';
import WithLogging from '../HOC/WithLogging';

function CourseList({ courses = [] }) {
  return (
    <table id="CourseList">
      <thead>
        <CourseListRow
          isHeader
          textFirstCell="Available courses"
        />

        {courses.length === 0 ? (
          <CourseListRow
            isHeader
            textFirstCell="No course available yet"
          />
        ) : (
          <CourseListRow
            isHeader
            textFirstCell="Course name"
            textSecondCell="Credit"
          />
        )}
      </thead>

      <tbody>
        {courses.map((course) => (
          <CourseListRow
            key={course.id}
            textFirstCell={course.name}
            textSecondCell={course.credit}
          />
        ))}
      </tbody>
    </table>
  );
}

export default WithLogging(CourseList);
