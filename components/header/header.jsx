import styles from "../header/header.module.css";
import Image from "next/image";
import { chevron } from "../../public/icons";
import { student } from "../../public/icons";
const Header = () => {
  const links = ["course", "Career", "About Us", "Feedbacks", "contacts"];
  return (
    <>
      <header>
        <nav className={`container ${styles.container}`}>
          <Image
            src="/logoprop.png"
            alt="Picture of the author"
            width={186}
            height={76}
          />
          <ul className={styles.con}></ul>
          <div className={styles.cent}>
            <div className={`${styles.current_lang} ${styles.nav_link}`}>
              Ru{chevron}
            </div>
            <button className={styles.btn}>{student} Записаться на курс</button>
          </div>{" "}
        </nav>
      </header>
    </>
  );
};

export default Header;
