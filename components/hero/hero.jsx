import styles from "./hero.module.css";
import Image from "next/image";
import { applicantion } from "public/icons";
const Hero = () => {
  return (
    <>
      <div className={` container`}>
        <div className={`${styles.cs} ${styles.cont}`}>
          <div>
            <p className={styles.header_h1}>Курс с трудоусторойством</p>
            <p className={styles.headh}>
              <span className={styles.pink}>SMM</span> - актуальная профессия за
              20 занятий
            </p>
            <div className={styles.headbtns}>
              <button className={`${styles.btn} ${styles.btnleft}`}>
                {applicantion}{" "}
                <span className={styles.pink}>Ariza topshirish</span>
              </button>
              <button className={`${styles.btn} ${styles.btnright}`}>
                Biz bilan bog’lanish
              </button>
            </div>
          </div>
          <div className={styles.header_right}>
            <Image
              src="/media/header.png"
              alt="Picture of the author"
              width={762}
              height={800}
            />
          </div>
        </div>
        <div className={`${styles.cont_mobile} `}>
          <div className={`${styles.cs} `}>
            {" "}
            <div>
              <p className={styles.header_h1}>Курс с трудоусторойством</p>
              <p className={styles.headh}>
                <span className={styles.pink}>SMM</span> - актуальная профессия
                за 20 занятий
              </p>
            </div>
            <div className={styles.headimage}>
              <Image
                src="/media/header.png"
                alt="Picture of the author"
                width={330}
                height={400}
              />
            </div>
          </div>
          <div className={styles.headbtns}>
            <button className={`${styles.btn} ${styles.btnleft}`}>
              {applicantion}{" "}
              <span className={styles.pink}>Ariza topshirish</span>
            </button>
            <button className={`${styles.btn} ${styles.btnright}`}>
              Biz bilan bog’lanish
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
