import { useState } from "react";
import Image from "next/image";

function Teacher() {
  const [teachers, setTeachers] = useState([
    {
      name: "John Doe",
      profession: "Math Teacher",
      photoUrl: "https://via.placeholder.com/150",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget dolor euismod, pretium est vel, gravida mauris. Sed tincidunt libero id orci bibendum, vel vulputate est convallis. Nam tincidunt orci nec eleifend bibendum.",
    },
    {
      name: "Jane Smith",
      profession: "Science Teacher",
      photoUrl: "https://via.placeholder.com/200",
      description:
        "Suspendisse dictum massa vel laoreet tincidunt. Nam a elit purus. Aliquam vitae ligula et ante sagittis bibendum vel ac est. Integer sit amet libero id eros mollis tincidunt. Fusce efficitur libero eu elit malesuada faucibus.",
    },
  ]);

  const [currentTeacher, setCurrentTeacher] = useState(teachers[0]);

  function handleTeacherButtonClick(teacher) {
    setCurrentTeacher(teacher);
  }

  return (
    <div>
      <Image
        src={currentTeacher.photoUrl}
        alt={currentTeacher.name}
        width={186}
        height={76}
      />
      <h2></h2>
      <h3>{currentTeacher.profession}</h3>
      <p></p>
      {teachers.map((teacher) => (
        <button
          key={teacher.name}
          onClick={() => handleTeacherButtonClick(teacher)}
        >
          {teacher.name}
        </button>
      ))}
    </div>
  );
}

export default Teacher;
