import styles from "../header/header.module.css";
import Image from "next/image";
import { chevron } from "../../public/icons";
import { student } from "../../public/icons";
import { navLinks } from "public/src/utils";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
const Header = () => {
  const router = useRouter();
  const singleLocale = ["eng", "rus"];
  const links = ["course", "Career", "About Us", "Feedbacks", "contacts"];
  const [isClicked, setIsClicked] = useState(true);
  const [IsLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsClicked(false);
  }, [router.locale]);
  const [IsActive, setIsActive] = useState(false);
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
          <div className={styles.con}>
            {navLinks.map((link, index) => {
              return (
                <ul key={index} className={styles.li}>
                  <Link href={link.path} className={styles.linkcont}>
                    <span className={styles.dot}></span>
                    <li>{link.name}</li>
                  </Link>
                </ul>
              );
            })}
          </div>
          <div className={styles.cent}>
            <div className={`${styles.current_lang} ${styles.nav_link}`}>
              {router.locale}
              {chevron}{" "}
              {/* <div className={styles.dropdown}>
                <nav className={styles.dropdown_menu}>
                  {router.locales?.map((singleLocale) => {
                    return (
                      <Link
                        key={singleLocale}
                        href={router.asPath}
                        locale={singleLocale}
                      >
                        {singleLocale === "en"
                          ? "English"
                          : singleLocale === "ru"
                          ? "Русский"
                          : singleLocale}
                      </Link>
                    );
                  })}
                </nav>
              </div> */}
              <div></div>
            </div>
            <button className={styles.btn}>{student} Записаться на курс</button>
          </div>
          <div
            className={styles.hamburger}
            role={"button"}
            onClick={() => setIsClicked(!isClicked)}
          >
            <span className={isClicked ? styles.rotate1 : ""}></span>
            <span className={isClicked ? styles.hidden : ""}></span>
            <span className={isClicked ? styles.rotate2 : ""}></span>
          </div>
        </nav>
        <nav className={`container ${styles.navmobile}`}></nav>
      </header>
    </>
  );
};

export default Header;
