export const CourseCard = ({ course }) => {
  return (
    <div className="rounded-[20px] m-1 border bg-[#FAFAFA] border-[#EAEAEA] py-6 px-5">
      {course.icon}
      <div className="my-3">
        <h3 className="text-xl font-semibold">{course.name}</h3>
        <p className="text-[#595566] font-normal text-sm">{course.description}</p>
      </div>
    </div>
  );
};
