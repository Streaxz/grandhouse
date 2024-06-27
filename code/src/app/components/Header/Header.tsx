"use client";
import * as React from "react";
import "../../App.css";
import { HeaderLogo } from "@/app/icons/HeaderLogo";
import { DialogBubbleIcon } from "@/app/icons/DialogBubbleIcon";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { useModalFunctions } from "@/app/components/Modal/ModalContainer";
import { useRouter } from "next/navigation";
import { IPageLink } from "@/app/utils/types/types";
import Dropdown from "react-dropdown";
import { PAGES } from "@/app/utils/consts/pages";
import { useNavigationFunctions } from "@/app/components/NavigationDrawer/NavigationDrawer";

export const Header = () => {
  const router = useRouter();
  const { openModal } = useModalFunctions();
  const { openDrawer } = useNavigationFunctions();

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

  const renderMenuItems = (items: IPageLink[]) => {
    return items.map((item, index) => {
      if (item.desktopVisible) {
        return item.nestedLinks && false ? (
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
                ...(item.nestedLinks &&
                  item.nestedLinks.map((link) => ({
                    value: link.link,
                    label: link.name,
                  }))),
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
        }}
        className={"headerPadding"}
      >
        <button
          onClick={openDrawer}
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
        <div className={"desktopNavigation"}>{renderMenuItems(PAGES)}</div>
        {/*{isDesktop && renderIcon()}*/}
        <div onClick={openModal} className={"iconContainer"}>
          <DialogBubbleIcon />
        </div>
      </div>
    </div>
  );
};
