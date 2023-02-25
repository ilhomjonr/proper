import React, { useState } from "react";
import styles from "./contactus.module.css";
import ReCAPTCHA from "react-google-recaptcha";
import Image from "next/image";
import { applicantion } from "public/icons";
const ContactUs = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [isHuman, setIsHuman] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handleRecaptchaChange = (value) => {
    setIsHuman(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section>
      <div className="container">
        <div className={styles.contactus_container}>
          <div className={styles.image_container}>
            <Image
              src="/media/contactus.png"
              alt="Contact Us"
              width={643}
              height={876}
            />
          </div>
          <div>
            <div className={styles.head}>
              <p className={`${styles.h1s} h1a`}>Запишитесь на курс</p>
              <p className={styles.desc}>
                Хочешь работать на себе то свяжись с нами
              </p>
            </div>
            <form className={styles.contactus_form} onSubmit={handleSubmit}>
              <input
                type="text"
                id="name"
                value={name}
                placeholder="John Wihck *"
                onChange={handleNameChange}
                className={styles.input_place}
              />

              <input
                type="number"
                id="number"
                value={number}
                onChange={handleNumberChange}
                placeholder="+998 (--) --- -- --"
                className={styles.input_place}
              />

              <div className={styles.sendbtn}>
                <ReCAPTCHA
                  sitekey="6LdMUrEkAAAAAFh3HZgk4IOKZuVsgBXBiXn3yRsy"
                  onChange={handleRecaptchaChange}
                />{" "}
                <button type="submit" className={styles.btn}>
                  {applicantion}
                  Отправить
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
