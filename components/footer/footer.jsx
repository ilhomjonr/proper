import styles from "./footer.module.css";
import Image from "next/image";

import { phone } from "../../public/icons";
import { location } from "../../public/icons";
import { Key } from "react";

import { insta } from "../../public/icons";
import { youtube } from "../../public/icons";
import { telegram } from "../../public/icons";
import { navLinks } from "public/src/utils";
import Link from "next/link";
const footer = () => {
  return (
    <>
      <footer className={`${styles.container} container`}>
        <div className={styles.css}>
          <div className={styles.foot_cont}>
            <div>
              <Image
                src="/logoprop.png"
                alt="Picture of the author"
                width={186}
                height={76}
              />
              <div className={styles.foot_conta}>
                {navLinks.map((link, index) => {
                  return (
                    <ul key={index} className={styles.foot_conta}>
                      <Link href={link.path}>
                        <li>{link.name}</li>
                      </Link>
                    </ul>
                  );
                })}
              </div>
              <div className={styles.foot_social}>
                <div className={styles.social_link}>
                  <a href="#"> {insta}</a>
                </div>{" "}
                <div className={styles.social_link}>
                  <a href="#">{telegram}</a>
                </div>{" "}
                <div className={styles.social_link}>
                  <a href="#">{youtube}</a>
                </div>
              </div>
            </div>
            <div className={`${styles.cent} ${styles.src}`}>
              <div className={styles.footnum}>
                <a href="tel:+99899 999 99 99">{phone}+99899 999 99 99</a>
                <p> {location} г.Ташкент, Узбекситан</p>
              </div>{" "}
              <p className={`${styles.foot_link} ${styles.colorwhite} `}>
                Авторское право © 2023 Proper. Все права защищены.
              </p>
              <div className={styles.cent}>
                <p>Designed by </p>
                <Image
                  src="/logomazmoon.png"
                  alt="Picture of the author"
                  width={45}
                  height={32}
                />
              </div>
            </div>
          </div>
          <div className={styles.foot_cont_mobile}>
            <div className={styles.foot_cent}>
              <div className={styles.logo_footer}>
                <Image
                  src="/logoprop.png"
                  alt="Picture of the author"
                  width={186}
                  height={76}
                />
              </div>
              <div className={styles.foot_social}>
                <div className={styles.social_link}>
                  <a href="#"> {insta}</a>
                </div>{" "}
                <div className={styles.social_link}>
                  <a href="#">{telegram}</a>
                </div>{" "}
                <div className={styles.social_link}>
                  <a href="#">{youtube}</a>
                </div>
              </div>
            </div>

            <div className={`${styles.cent} ${styles.src}`}>
              <div className={styles.footnum}>
                <a href="tel:+99899 999 99 99">{phone}+99899 999 99 99</a>
                <p> {location} г.Ташкент, Узбекситан</p>
              </div>{" "}
              <div>
                {" "}
                <p className={`${styles.foot_link} ${styles.colorwhite} `}>
                  Авторское право © 2023 Proper.
                </p>{" "}
                <p className={`${styles.foot_link} ${styles.colorwhite} `}>
                  Все права защищены.
                </p>
                <div className={styles.center}>
                  <p className={styles.foot_link}>Designed by </p>
                  <Image
                    src="/logomazmoon.png"
                    alt="Picture of the author"
                    width={45}
                    height={32}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default footer;
