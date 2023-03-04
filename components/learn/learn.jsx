import { tick } from "public/icons";
import styles from "./learn.module.css";
import Image from "next/image";
const Learning = () => {
  return (
    <section>
      <div className="container">
        <div className={styles.learn_main}>
          <div>
            <p className="h1a">Программа обучения</p>
          </div>
          <div className={styles.modul_main}>
            <div className={styles.modul_wrap}>
              <div className={styles.learn_top}>
                <p className="h1a">Модуль 2</p>{" "}
                <div className={styles.modul_img}>
                  {" "}
                  <Image
                    src="/media/learn.png"
                    alt="Picture of the author"
                    width={600}
                    height={200}
                  />
                </div>
              </div>
              <div className={styles.program_container}>
                <div className={styles.program_item}>
                  {tick}
                  <p>Знакомства с Таргетированной рекламы</p>
                </div>
                <div className={styles.program_item}>
                  {tick}
                  <p>Знакомства с Таргетированной рекламы</p>
                </div>{" "}
                <div className={styles.program_item}>
                  {tick}
                  <p>Знакомства с Таргетированной рекламы</p>
                </div>{" "}
                <div className={styles.program_item}>
                  {tick}
                  <p>Знакомства с Таргетированной рекламы</p>
                </div>{" "}
                <div className={styles.program_item}>
                  {tick}
                  <p>Знакомства с Таргетированной рекламы</p>
                </div>{" "}
                <div className={styles.program_item}>
                  {tick}
                  <p>Знакомства с Таргетированной рекламы</p>
                </div>{" "}
                <div className={styles.program_item}>
                  {tick}
                  <p>Знакомства с Таргетированной рекламы</p>
                </div>{" "}
                <div className={styles.program_item}>
                  {tick}
                  <p>Знакомства с Таргетированной рекламы</p>
                </div>{" "}
                <div className={styles.program_item}>
                  {tick}
                  <p>Знакомства с Таргетированной рекламы</p>
                </div>
                <div className={styles.program_item}>
                  {tick}
                  <p>Знакомства с Таргетированной рекламы</p>
                </div>
                <div className={styles.program_item}>
                  {tick}
                  <p>Знакомства с Таргетированной рекламы</p>
                </div>
                <div className={styles.program_item}>
                  {tick}
                  <p>Знакомства с Таргетированной рекламы</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Learning;
