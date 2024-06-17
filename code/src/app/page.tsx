"use client";
import { MainLogo } from "@/app/icons/MainLogo";
import { MainHeader } from "@/app/components/MainHeader/MainHeader";
import { Navigation } from "@/app/components/Navigation/Navigation";
import { Catalog } from "@/app/components/Catalog/Catalog";
import { Works } from "@/app/components/Works/Works";
import React, { useEffect } from "react";
import { Company } from "@/app/components/Company/Company";
import { Shortcuts } from "@/app/components/Shortcuts/Shorcuts";
import { ShortcutItem } from "@/app/components/ShortcutItem/ShortcutItem";
import { Prices } from "@/app/components/Prices/Prices";
import { Magazine } from "@/app/components/Magazine/Magazine";
import { Carousel } from "@/app/components/Carousel/Carousel";
import { PhotoButton } from "@/app/components/PhotoButton/PhotoButton";
import { FeatureCardLarge } from "@/app/components/FeatureCardLarge/FeatureCardLarge";
import { useProject } from "@/app/hooks/useProject";

export default function Home() {
  const { projects, getProjects } = useProject();
  console.log(projects);
  useEffect(() => {
    getProjects();
  }, []);

  return (
    <main className={"App"}>
      <div className={"mainPageWrapper"}>
        <div className={"mainPage"}>
          <MainLogo />
          <MainHeader />
          {/*<PhotoCarousel />*/}
          {projects && projects?.length > 0 && (
            <Carousel
              isPagination={true}
              swiperEffect={"slide"}
              projectsLength={projects.length}
            >
              {projects?.map((project) => (
                <FeatureCardLarge
                  key={"project-" + project.id}
                  labelText={project.title || ""}
                  headerText={"House for a family"}
                  descriptionText={"Нажмите для просмотра"}
                  project={project}
                />
              ))}
            </Carousel>
          )}
          <Navigation />
          {/*{projects && projects?.length > 0 &&*/}
          <Catalog projects={projects || []} />
          {/*}*/}
          <PhotoButton
            backgroundSrc={"/clouds.jpeg"}
            buttonSrc={"/photoButton.png"}
            buttonText={"Обсудим ваши идеи?"}
            descriptionText={
              "Наши менеджеры всегда на связи - свяжитесь с нами и мы предложим решения конкретно под ваши задачи"
            }
          />
          <div className="ellipse"></div>
        </div>
      </div>
      <div className={"shortcutContainer"} style={{ background: "#D4F2FF" }}>
        <div className={"shortcutWrapper"}>
          <Shortcuts backgroundColor={"white"}>
            <ShortcutItem
              emoji={"/hammers.png"}
              title={"Заголовок ярлыка"}
              description={"Подзаголовок ярлыка"}
              color={"black"}
              descriptionColor={"rgba(98, 105, 140, 1)"}
            />
            <ShortcutItem
              emoji={"/womanEmoji.png"}
              title={"Заголовок ярлыка"}
              description={"Подзаголовок ярлыка"}
              color={"black"}
              descriptionColor={"rgba(98, 105, 140, 1)"}
            />
            <ShortcutItem
              emoji={"/tree.png"}
              title={"Заголовок ярлыка"}
              description={"Подзаголовок ярлыка"}
              color={"black"}
              descriptionColor={"rgba(98, 105, 140, 1)"}
            />
          </Shortcuts>
        </div>
      </div>
      <Works />
      <Company />
      <div className={"shortcutContainer"} style={{ background: "#10E17D" }}>
        <div className={"shortcutWrapper"}>
          <Shortcuts backgroundColor={"#000000"}>
            <ShortcutItem
              emoji={"/burningHeart.png"}
              title={"Заголовок ярлыка"}
              description={"Подзаголовок Ярлыка"}
              color={"#FFF"}
              descriptionColor={"#62698C"}
            ></ShortcutItem>
            <ShortcutItem
              emoji={"/triangleLinear.png"}
              title={"Заголовок ярлыка"}
              description={"Подзаголовок Ярлыка"}
              color={"#FFF"}
              descriptionColor={"#62698C"}
            ></ShortcutItem>
            <ShortcutItem
              emoji={"/hand.png"}
              title={"Заголовок ярлыка"}
              description={"Подзаголовок Ярлыка"}
              color={"#FFF"}
              descriptionColor={"#62698C"}
            ></ShortcutItem>
          </Shortcuts>
        </div>
      </div>
      <Prices />
      {/*<Reviews/>*/}
      <Magazine />
    </main>
  );
}
