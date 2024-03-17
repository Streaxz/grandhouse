"use client"
import * as React from 'react';
import '../../App.css';
import {AppBar, Box, Button, IconButton, Toolbar, Typography, useMediaQuery} from "@mui/material";
import {HeaderLogo} from "@/app/icons/HeaderLogo";
import {MagnifierIcon} from "@/app/icons/MagnifierIcon";
import {DialogBubbleIcon} from "@/app/icons/DialogBubbleIcon";
import MenuIcon from '@mui/icons-material/Menu';
import {useEffect} from "react";

const pages = ['Компания', 'Проекты', 'Услуги', 'Лес', 'Поселки', 'Работы и отзывы', 'Контакты', 'Журнал'];
export const Header = () => {
    const isMobile = useMediaQuery('(max-width:366px)');
    const isTablet = useMediaQuery('(min-width:366px) and (max-width:768px)');
    const isDesktop = useMediaQuery('(min-width:768px)');

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



    },[isMobile, isTablet, isDesktop])
    const renderMenuItems = (items: string[]) => {
        return items.map((item, index) => (
          <Typography key={index} variant="h6" component="div" sx={{flexGrow: 1}}>
              {item}
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
      <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1350px",
          margin: "0 auto",
          padding: `${padding}px`,
          paddingBottom: `${padding}px`
      }}>
          {(isMobile || isTablet) &&
            <div className = {"iconContainer"}>
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
              <HeaderLogo/>
          </div>

          {isDesktop && renderMenuItems(pages)}

          {isDesktop && renderIcon()}
          <div className={'iconContainer'}>
              <DialogBubbleIcon/>
          </div>
      </div>
    );
}