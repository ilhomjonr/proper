import styles from "./teacher.module.css";
import Image from "next/image";
const Teacher = () => {
  return (
    <>
      <section className="container">
        <div className={styles.teacher_container}>
          <div className={styles.teacher_desc}>
            <div>
              <p className="h1a">О авторах курса</p>
            </div>
            <div>
              <button className={`${styles.teacher} ${styles.teacher_p}`}>
                Nosir Toxtamurodov
              </button>
              <button className={`${styles.teacher} ${styles.teacher_p}`}>
                Nosir Toxtamurodov
              </button>
            </div>
            <div className={styles.desc}>
              <p>
                Я работаю с камандой уже около 2,5 лет. Я начал с монетизации
                своего блога, и теперь у меня есть несколько других сайтов, где
                я продолжаю продвигать их предложения. Я начал с монетизации
                своего блога, и теперь у меня есть несколько других сайтов, где
                я продолжаю продвигать их предложения. где я продолжаю
                продвигать их предложения. Я начал с монетизации своего блога, и
                теперь у меня есть несколько других сайтов, где я продолжаю
                продвигать их предложения.
              </p>
              <p>
                Это действительно заслуживающая доверия сеть. У них
                действительно большой список рекламодателей практически для всех
                существующих ниш.
              </p>
            </div>
          </div>
          <div className={styles.teachers_right}>
            <div className={styles.teacher_img}>
              <div className={styles.linearbgc}></div>
              <Image
                src="/media/teachers.png"
                alt="picture of the teacher"
                width={528}
                height={657}
              />
            </div>
            <div className={styles.teacher_name}>
              <p className={styles.teacher_bt_h}>Nosir Toxtamurodov</p>
              <p className={styles.profession}>SMM specialist</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Teacher;
