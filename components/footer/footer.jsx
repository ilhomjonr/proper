import styles from "./footer.module.css";
import Image from "next/image";

import { phone } from "../../public/icons";
import { location } from "../../public/icons";

import { insta } from "../../public/icons";
import { youtube } from "../../public/icons";
import { telegram } from "../../public/icons";
import { navLinks } from "public/src/utils";
import Link from "next/link";
const footer = () => {
  return (
    <>
      <footer className={`${styles.container} container`}>
        <div className={styles.foot_cont}>
          <div>
            <Image
              src="/logoprop.png"
              alt="Picture of the author"
              width={186}
              height={76}
            />
            <div className={styles.foot_conta}>
              {/* {links.map((name) => (
                <div className={styles.footlink}>
                  <div className={styles.foot_link}>
                    {linkid.map((linkid) => (
                      <a href={linkid}> {name}</a>
                    ))}
                  </div>
                </div>
              ))} */}
              {navLinks.map((link, index) => {
                return (
                  <ul className={styles.foot_conta}>
                    <Link href={link.path}>
                      <li key={index}>{link.name}</li>
                    </Link>
                  </ul>
                );
              })}
            </div>
            <div className={styles.foot_social}>
              <a href="#"> {insta}</a>
              <a href="#">{telegram}</a>
              <a href="#">{youtube}</a>
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
            <Image  
              src="/logoprop.png"
              alt="Picture of the author"
              width={186}
              height={76}
            />{" "}
            <div className={styles.foot_social}>
              <a href="#"> {insta}</a>
              <a href="#">{telegram}</a>
              <a href="#">{youtube}</a>
            </div>
          </div>
          <div className={styles.foot_conta}>
            {/* {links.map((name) => (
                <div className={styles.footlink}>
                  <div className={styles.foot_link}>
                    {linkid.map((linkid) => (
                      <a href={linkid}> {name}</a>
                    ))}
                  </div>
                </div>
              ))} */}
            {navLinks.map((link, index) => {
              return (
                <ul className={styles.foot_conta}>
                  <Link href={link.path}>
                    <li key={index}>{link.name}</li>
                  </Link>
                </ul>
              );
            })}
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
      </footer>
    </>
  );
};

export default footer;
