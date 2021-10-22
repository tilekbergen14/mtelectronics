import React from "react";
import styles from "../styles/Home.module.css";
import img2 from "../public/images/1rtx3060.jpg";
import Image from "next/image";
import data from "../data.js";
import Link from "next/link";

export default function Home() {
  const items = data;

  return (
    <div className={styles.homepage}>
      <header className={styles.header}>
        <div className={styles.first}>
          <Image src={img2} layout="fill" />
        </div>
        <div className={styles.second}>
          <h4 className={styles.sliderText}>New graphic cards fron NVIDIA</h4>
        </div>
        <div className={styles.third}>
          <Image src={img2} layout="fill" />
        </div>
      </header>
      <main className={styles.main}>
        <h3>All goods</h3>
        <div className={styles.mainGrid}>
          {items.map((item) => (
            <Link href={`/store/${item.id}`}>
              <div key={item.id} className={styles.stuffBox}>
                <Image
                  src={item.img[0]}
                  layout="fill"
                  objectFit
                  className={styles.stuffImg}
                />
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
