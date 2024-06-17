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
  const isMobile = useMediaQuery("(max-width:500px)");
  const isTablet = useMediaQuery("(min-width:500px) and (max-width:1100px)");
  const isDesktop = useMediaQuery("(min-width:1100px)");
  const [open, setOpen] = React.useState(false);
  const { openModal } = useModalFunctions();
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const [padding, setPadding] = React.useState(12);

  useEffect(() => {
    if (isMobile) {
      setPadding(12);
    }
    if (isTablet) {
      setPadding(12);
    }
    if (isDesktop) {
      setPadding(24);
    }
  }, [isMobile, isTablet, isDesktop]);
  const renderMenuItems = (items: { name: string; link: string }[]) => {
    return items.map((item, index) => (
      <Link
        key={index}
        href={item.link}
        style={{ textDecoration: "none", flexGrow: 1 }}
      >
        <h6>{item.name}</h6>
      </Link>
    ));
  };

  const renderIcon = () => (
    <>
      <div className={"iconContainer clickable"}>
        <MagnifierIcon />
      </div>
    </>
  );

  return (
    <div style={{ background: "rgba(255, 255, 255, 0.25)" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1350px",
          margin: "0 auto",
          padding: `${padding}px`,
          paddingBottom: `${padding}px`,
        }}
      >
        {(isMobile || isTablet) && (
          <button
            onClick={toggleDrawer(true)}
            className={"iconContainer clickable"}
          >
            <MenuIcon />
          </button>
        )}
        <div
          style={{
            flexGrow: 2,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Link href={"/"}>
            <HeaderLogo />
          </Link>
        </div>
        {isDesktop && renderMenuItems(pages)}
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
