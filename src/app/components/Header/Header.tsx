"use client"
import * as React from 'react';
import '../../App.css';
import {Typography, useMediaQuery} from "@mui/material";
import {HeaderLogo} from "@/app/icons/HeaderLogo";
import {MagnifierIcon} from "@/app/icons/MagnifierIcon";
import {DialogBubbleIcon} from "@/app/icons/DialogBubbleIcon";
import MenuIcon from '@mui/icons-material/Menu';
import {useEffect} from "react";
import Link from "next/link";

const pages = [
    { name: 'Компания', link: '/company' },
    { name: 'Проекты', link: '/catalog' },
    { name: 'Услуги', link: '/offers' },
    { name: 'Лес', link: '/forest' },
    { name: 'Поселки', link: '/settlements' },
    { name: 'Работы и отзывы', link: '/reviews' },
    { name: 'Контакты', link: '/contacts' },
    { name: 'Журнал', link: '/magazine' }
];

export const Header = () => {
    const isMobile = useMediaQuery('(max-width:500px)');
    const isTablet = useMediaQuery('(min-width:500px) and (max-width:1100px)');
    const isDesktop = useMediaQuery('(min-width:1100px)');

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


    }, [isMobile, isTablet, isDesktop])
    const renderMenuItems = (items: { name: string; link: string }[]) => {
        return items.map((item, index) => (
          <Typography key={index} variant="h6" component="div" sx={{flexGrow: 1}}>
              <Link key={index} href={item.link} style={{textDecoration: 'none'}}>
                  {item.name}
              </Link>
          </Typography>
        ));
    };

    const renderIcon = () => (
      <>
          <div className={'iconContainer'}>
              <MagnifierIcon/>
          </div>

      </>
    );

    return (
      <div style={{background: "rgba(255, 255, 255, 0.25)"}}>
          <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              maxWidth: "1350px",
              margin: "0 auto",
              padding: `${padding}px`,
              paddingBottom: `${padding}px`,
          }}>
              {(isMobile || isTablet) &&
                <div className={"iconContainer"}>
                    <MenuIcon/>
                </div>
              }
              <div
                style={{
                    flexGrow: 2,
                    display: "flex",
                    justifyContent: "center",
                }}
              >
                  <Link href={"/"}>
                      <HeaderLogo/>
                  </Link>
              </div>

              {isDesktop && renderMenuItems(pages)}

              {isDesktop && renderIcon()}
              <div className={'iconContainer'}>
                  <DialogBubbleIcon/>
              </div>
          </div>
      </div>
    );
}