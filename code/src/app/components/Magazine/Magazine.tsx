"use client";
import { Button } from "@/app/components/Button/Button";
import { MagazineLogo } from "@/app/components/Magazine/MagazineLogo/MagazineLogo";
import { Socials } from "@/app/components/Socials/Socials";
import { MagazineCardLarge } from "@/app/components/Magazine/MagazineCardLarge/MagazineCardLarge";
import { MagazineCardSmall } from "@/app/components/Magazine/MagazineCardSmall/MagazineCardSmall";
import React from "react";
import { useRouter } from "next/navigation";

export const Magazine = () => {
  const router = useRouter();
  return (
    <div className={"magazinePage"}>
      <div className={"magazineWrapper"}>
        <MagazineLogo />
        <Socials />
        <MagazineCardLarge />
        <div className={"doubleItem"}>
          <MagazineCardSmall />
          <MagazineCardSmall />
        </div>
        <Button
          onClick={() => router.push("/magazine")}
          buttonText={"Все статьи"}
        />
        {/*<div className="magazineEllipse"></div>*/}
      </div>
    </div>
  );
};
