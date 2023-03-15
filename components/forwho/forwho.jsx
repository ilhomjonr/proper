import { applicantion, user } from "public/icons";
import styles from "./forwho.module.css";

const Forwho = () => {
  return (
    <>
      <section className={` `} id="course">
        <div className={styles.container_forwho}>
          <div>
            <p className="h1a">Кому подходит этот курс?</p>
          </div>
          <div className={styles.alls}>
            <div className={styles.conts}>
              <div className={styles.cont_user}>
                <div className={styles.userimg}>{user}</div>
                <p className={styles.h_who}>Новичками</p>
                <p className={styles.p_who}>
                  Я работаю с камандой уже около 2,5 лет. Я начал с монетизации
                  своего блога, и теперь у меня есть несколько других
                </p>
              </div>
              <div className={styles.cont_user}>
                <div className={styles.userimg}>{user}</div>
                <p className={styles.h_who}>Новичками</p>
                <p className={styles.p_who}>
                  Я работаю с камандой уже около 2,5 лет. Я начал с монетизации
                  своего блога, и теперь у меня есть несколько других
                </p>
              </div>
              <div className={styles.cont_user}>
                <div className={styles.userimg}>{user}</div>
                <p className={styles.h_who}>Новичками</p>
                <p className={styles.p_who}>
                  Я работаю с камандой уже около 2,5 лет. Я начал с монетизации
                  своего блога, и теперь у меня есть несколько других
                </p>
              </div>
            </div>
            <div>
              <div>
                <button className={`btn ${styles.mobile_btn}`}>
                  {applicantion} <span className="pinkp">Записаться</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Forwho;
