"use client";
import styles from "./article.module.css";
import { MagazineLogo } from "@/app/components/Magazine/MagazineLogo/MagazineLogo";
import { MagazineCardLarge } from "@/app/components/Magazine/MagazineCardLarge/MagazineCardLarge";
import React from "react";
import { MagazineNavigation } from "@/app/components/MagazineNavigation/MagazineNavigation";
import { MagazineCardSmall } from "@/app/components/Magazine/MagazineCardSmall/MagazineCardSmall";
import { Button } from "@/app/components/Button/Button";
import { TextBlock } from "@/app/components/TextBlock/TextBlock";

const ArticlePage = () => {
  return (
    <main className={`${styles.page} ${styles.darkBackground}`}>
      <div className={`${styles.pageWrapper} ${styles.lightBackground}`}>
        <div className={styles.pageContainer}>
          <div className={styles.magazineArticle}>
            <img
              src={"/magazineArticle.png"}
              style={{ width: "100%" }}
              alt={"cover"}
            />
          </div>
          <TextBlock
            rectangleColor={"#272B40"}
            textColor={"#272B40"}
            mainText={"Место для markdown"}
          />
        </div>
      </div>
      <div className={`${styles.pageWrapper}`}>
        <div className={styles.pageContainer}>
          <MagazineLogo />
          <MagazineNavigation />
          <MagazineCardLarge />
          <div className={"doubleItem"}>
            <MagazineCardSmall />
            <MagazineCardSmall />
          </div>
          <Button onClick={() => {}} buttonText={"Все статьи"}></Button>
          <div className="magazineEllipse"></div>
        </div>
      </div>
    </main>
  );
};

export default ArticlePage;
