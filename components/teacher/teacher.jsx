import styles from "./teacher.module.css";
import Image from "next/image";
import { useState } from "react";
import ins from "../../public/media/teacher1.png";
import inss from "../../public/media/teacher1.png";
const Teacher = () => {
  const [teachers, setTeachers] = useState([
    {
      name: "Nosir Toxtamurodov",
      profession: "Math Teacher",
      photoUrl: ins,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget dolor euismod, pretium est vel, gravida mauris. Sed tincidunt libero id orci bibendum, vel vulputate est convallis. Nam tincidunt orci nec eleifend bibendum.",
    },
    {
      name: "Nosir dov",
      profession: "Science Teacher",
      photoUrl: "/public/media/teacher1",
      description:
        "Suspendisse dictum massa vel laoreet tincidunt. Nam a elit purus. Aliquam vitae ligula et ante sagittis bibendum vel ac est. Integer sit amet libero id eros mollis tincidunt. Fusce efficitur libero eu elit malesuada faucibus.",
    },
  ]);

  const [currentTeacher, setCurrentTeacher] = useState(teachers[0]);

  function handleTeacherButtonClick(teacher) {
    setCurrentTeacher(teacher);
  }
  return (
    <>
      <section className="container">
        <div className={styles.teacher_container}>
          <div className={styles.teacher_desc}>
            <div>
              <p className="h1a">О авторах курса</p>
            </div>

            <div>
              {teachers.map((teacher) => (
                <button
                  key={teacher.name}
                  onClick={() => handleTeacherButtonClick(teacher)}
                  className={`${styles.teacher} ${styles.teacher_p}`}
                >
                  {teacher.name}
                </button>
              ))}
            </div>
            <div className={styles.desc}>
              <p>{currentTeacher.description}</p>
              <p>{currentTeacher.description2}</p>
            </div>
          </div>
          <div className={styles.teachers_right}>
            <div className={styles.teacher_img}>
              <div className={styles.linearbgc}></div>
              <Image
                src={currentTeacher.photoUrl}
                alt="picture of the teacher"
                width={528}
                height={657}
              />
            </div>
            <div className={styles.teacher_name}>
              <p className={styles.teacher_bt_h}>{currentTeacher.name}</p>
              <p className={styles.profession}>{currentTeacher.profession}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Teacher;
