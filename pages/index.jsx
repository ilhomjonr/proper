import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
const inter = Inter({ subsets: ["latin"] });
import Header from "../components/header/header.jsx";
import Footer from "../components/footer/footer";
import Hero from "../components/hero/hero";
import CenterChildren from "components/two/layout";
import Forwho from "components/forwho/forwho";
import Learning from "components/learn/learn";
import Teacher from "components/teacher/teacher";
import Tariff from "components/tariff/tariff";
import StudentVideos from "components/contactus/contactus";
import SwiperComponent from "components/swiper/swiper";
import Twoco from "components/two/layout";
export default function Home() {
  return (
    <>
      <div className={styles.body}>
        <Head>
          <title>Proper</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* <Header /> */}

        <main className={styles.main}>
          {/* <Hero /> */}
          <Twoco />
          {/* <Teacher />
          <Tariff />
          <StudentVideos /> */}
        </main>
        {/* <Footer /> */}
      </div>
    </>
  );
}
