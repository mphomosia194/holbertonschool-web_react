import CourseListRow from './CourseListRow';

function CourseList({
  courses = [],
}) {
  return (
    <div className="w-4/5 mx-auto my-10">
      <table
        id="CourseList"
        className="w-full border-collapse"
      >
        <thead>
          <CourseListRow
            isHeader
            textFirstCell="Available courses"
          />

          <CourseListRow
            isHeader
            textFirstCell="Course name"
            textSecondCell="Credit"
          />
        </thead>

        <tbody>
          {courses.length === 0 ? (
            <CourseListRow
              textFirstCell="No course available yet"
              textSecondCell={null}
            />
          ) : (
            courses.map((course) => (
              <CourseListRow
                key={course.id}
                textFirstCell={course.name}
                textSecondCell={course.credit}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default CourseList;
