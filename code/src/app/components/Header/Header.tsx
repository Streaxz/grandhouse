"use client";
import * as React from "react";
import { useState } from "react";
import "../../App.css";
import { Drawer, useMediaQuery } from "@mui/material";
import { HeaderLogo } from "@/app/icons/HeaderLogo";
import { DialogBubbleIcon } from "@/app/icons/DialogBubbleIcon";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect } from "react";
import Link from "next/link";
import { useModalFunctions } from "@/app/components/Modal/ModalContainer";
import { usePathname, useRouter } from "next/navigation";
import { IPageLink } from "@/app/utils/types/types";
import Dropdown from "react-dropdown";

const pages: IPageLink[] = [
  {
    name: "Философия",
    link: "/philosophy",
    desktopVisible: false,
    mobileVisible: true,
  },
  {
    name: "Компания",
    link: "/company",
    desktopVisible: true,
    mobileVisible: true,
  },
  {
    name: "Каталог проектов",
    link: "/company",
    desktopVisible: false,
    mobileVisible: true,
  },
  {
    name: "Проекты",
    link: "/catalog",
    desktopVisible: true,
    mobileVisible: false,
  },
  {
    name: "Услуги",
    link: "/offers",
    desktopVisible: true,
    mobileVisible: true,
    nestedLinks: [
      {
        name: "Индивидуальное проектирование",
        link: "/individual",
      },
      {
        name: "Отделочные работы",
        link: "/finishing-works",
      },
      {
        name: "Бизнесу",
        link: "/business",
      },
    ],
  },
  {
    name: "Лес",
    link: "/forest",
    desktopVisible: true,
    mobileVisible: true,
    nestedLinks: [
      {
        name: "Профилированый брус",
        link: "/profiled-brick",
      },
      {
        name: "Клееный брус",
        link: "/cleaned-brick",
      },
      {
        name: "Клееные столбы и балки",
        link: "/steps-and-slabs",
      },
      {
        name: "Хвойные пиломатериалы",
        link: "/timber",
      },
    ],
  },
  {
    name: "Поселки",
    link: "/settlements",
    desktopVisible: true,
    mobileVisible: false,
  },
  { name: "Работы и отзывы", link: "/reviews", desktopVisible: true },
  { name: "Контакты", link: "/contact", desktopVisible: true },
  { name: "Журнал", link: "/magazine", desktopVisible: true },
];

export const Header = () => {
  const router = useRouter();
  const [optionValue, setOptionValue] = useState("");
  const pathname = usePathname();
  const isMobile = useMediaQuery("(max-width:500px)");
  const isTablet = useMediaQuery("(min-width:500px) and (max-width:1100px)");
  const isDesktop = useMediaQuery("(min-width:1100px)");
  const [open, setOpen] = React.useState(false);
  const { openModal } = useModalFunctions();
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  // // Define background colors for different routes
  // const getBackgroundColor = () => {
  //   switch (pathname) {
  //     case "/":
  //       return "#68dcff";
  //     case "/magazine":
  //       return "#404040"; // example color for the about page
  //     case "/article":
  //       return "#404040"; // example color for the contact page
  //     // Add more cases as needed
  //     default:
  //       return "#68dcff"; // default color
  //   }
  // };

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
  const renderMenuItems = (items: IPageLink[]) => {
    return items.map((item, index) => {
      if (item.desktopVisible) {
        return item.nestedLinks ? (
          <div
            key={index}
            style={{
              position: "relative",
              display: "flex",
              textDecoration: "none",
              height: "200%",
            }}
          >
            <Dropdown
              className={"headerDropdown"}
              options={[
                {
                  value: item.link,
                  label: item.name,
                },
                ...item.nestedLinks.map((link) => ({
                  value: link.link,
                  label: link.name,
                })),
              ]}
              onChange={(option) => router.push(option.value)}
              menuClassName={"headerDropdownMenu"}
              arrowClassName={"headerDropdownArrow"}
              placeholder={item.name}
            />
            {/*<div*/}
            {/*  className={"navigationHover"}*/}
            {/*  style={{*/}
            {/*    position: "absolute",*/}
            {/*    width: "110%",*/}
            {/*    zIndex: 1000,*/}
            {/*    height: "180%",*/}
            {/*    translate: "-5% -20%",*/}
            {/*    borderRadius: "12px",*/}
            {/*  }}*/}
            {/*/>*/}
          </div>
        ) : (
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
        );
      }
      return null;
    });
  };
  //
  // const renderIcon = () => (
  //   <>
  //     <div
  //       style={{
  //         marginRight: "24px",
  //       }}
  //       className={"iconContainer clickable"}
  //     >
  //       <MagnifierIcon />
  //     </div>
  //   </>
  // getBackgroundColor()
  // );

  return (
    <div
      id={"header"}
      style={{
        background: "rgba(255, 255, 255, 0.25)",
        position: "sticky",
        zIndex: 10000,
        top: 0,
        backdropFilter: "blur(36px)",
      }}
    >
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
        {/*{isDesktop && renderIcon()}*/}
        <div onClick={openModal} className={"iconContainer"}>
          <DialogBubbleIcon />
        </div>
      </div>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        style={{ width: "60%", zIndex: 20000 }}
      >
        <div className={"menu"}>
          {pages.map((item, index) => (
            <>
              <div className={"menuItem "}>
                <Link
                  key={index}
                  href={item.link}
                  onClick={toggleDrawer(false)}
                  style={{ width: "100%" }}
                  className={"clickable removeUnderline"}
                >
                  <h4
                    key={`link-${index}`}
                    style={{ color: "#272B40", textDecoration: "none" }}
                    className={"clickable"}
                  >
                    {item.name}
                  </h4>
                </Link>
              </div>
              {item.nestedLinks &&
                item.nestedLinks?.length > 0 &&
                item.nestedLinks.map((item, index) => (
                  <div className={"menuItem nestedLink"}>
                    <Link
                      key={index}
                      href={item.link}
                      onClick={toggleDrawer(false)}
                      style={{ width: "100%" }}
                      className={"clickable removeUnderline"}
                    >
                      <h4
                        key={`link-${index}`}
                        style={{
                          color: "#272B40",
                          textDecoration: "none",
                          fontSize: "14px",
                        }}
                        className={"clickable"}
                      >
                        {item.name}
                      </h4>
                    </Link>
                  </div>
                ))}
            </>
          ))}
          <div style={{ height: "1000px" }} />
        </div>
      </Drawer>
    </div>
  );
};
