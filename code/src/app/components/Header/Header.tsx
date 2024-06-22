"use client";
import * as React from "react";
import "../../App.css";
import { Drawer, useMediaQuery } from "@mui/material";
import { HeaderLogo } from "@/app/icons/HeaderLogo";
import { MagnifierIcon } from "@/app/icons/MagnifierIcon";
import { DialogBubbleIcon } from "@/app/icons/DialogBubbleIcon";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect } from "react";
import Link from "next/link";
import { useModalFunctions } from "@/app/components/Modal/ModalContainer";
import { useRouter } from "next/navigation";

const pages = [
  { name: "Компания", link: "/company" },
  { name: "Проекты", link: "/catalog" },
  { name: "Услуги", link: "/offers" },
  { name: "Лес", link: "/forest" },
  { name: "Поселки", link: "/settlements" },
  { name: "Работы и отзывы", link: "/reviews" },
  { name: "Контакты", link: "/contact" },
  { name: "Журнал", link: "/magazine" },
];

export const Header = () => {
  const router = useRouter();
  const isMobile = useMediaQuery("(max-width:500px)");
  const isTablet = useMediaQuery("(min-width:500px) and (max-width:1100px)");
  const isDesktop = useMediaQuery("(min-width:1100px)");
  const [open, setOpen] = React.useState(false);
  const { openModal } = useModalFunctions();
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const [padding, setPadding] = React.useState<string>("12px");

  useEffect(() => {
    if (isMobile) {
      setPadding("12px 26px");
    }
    if (isTablet) {
      setPadding("12px 24px");
    }
    if (isDesktop) {
      setPadding("24px");
    }
  }, [isMobile, isTablet, isDesktop]);
  const renderMenuItems = (items: { name: string; link: string }[]) => {
    return items.map((item, index) => (
      <div
        onClick={() => {
          router.push(item.link);
        }}
        key={index}
        style={{
          position: "relative",
          display: "flex",
          textDecoration: "none",
          height: "200%",
        }}
      >
        <h5 className={"clickable"}>{item.name}</h5>
        <div
          className={"navigationHover"}
          onClick={() => {
            router.push(item.link);
          }}
          style={{
            position: "absolute",
            width: "110%",
            height: "180%",
            translate: "-5% -20%",

            borderRadius: "12px",
          }}
        />
      </div>
    ));
  };

  const renderIcon = () => (
    <>
      <div
        style={{
          marginRight: "24px",
        }}
        className={"iconContainer clickable"}
      >
        <MagnifierIcon />
      </div>
    </>
  );

  return (
    <div id={"header"} style={{ background: "rgba(255, 255, 255, 0.25)" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1350px",
          margin: "0 auto",
          padding: `${padding}`,
        }}
      >
        <button
          onClick={toggleDrawer(true)}
          className={"iconContainer clickable burger"}
        >
          <MenuIcon />
        </button>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Link href={"/"}>
            <HeaderLogo />
          </Link>
        </div>
        <div className={"desktopNavigation"}>{renderMenuItems(pages)}</div>
        {isDesktop && renderIcon()}
        <div onClick={openModal} className={"iconContainer"}>
          <DialogBubbleIcon />
        </div>
      </div>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        style={{ width: "60%" }}
      >
        <div className={"menu"}>
          {pages.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              onClick={toggleDrawer(false)}
              style={{ width: "100%" }}
              className={"clickable"}
            >
              <div className={"menuItem "}>
                <h4
                  key={index}
                  style={{ color: "#272B40", textDecoration: "none" }}
                  className={"clickable"}
                >
                  {item.name}
                </h4>
              </div>
            </Link>
          ))}
        </div>
      </Drawer>
    </div>
  );
};
