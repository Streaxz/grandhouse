"use client";
import { PAGES } from "@/app/utils/consts/pages";
import Link from "next/link";
import { Drawer } from "@mui/material";
import * as React from "react";
import { createContext, ReactNode, useContext, useState } from "react";

interface NavigationContextType {
  isOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
}

export const useNavigationFunctions = () => {
  const { openDrawer, closeDrawer } = useDrawer();
  return { openDrawer, closeDrawer };
};

const NavigationDrawerContext = createContext<
  NavigationContextType | undefined
>(undefined);

export const useDrawer = (): NavigationContextType => {
  const context = useContext(NavigationDrawerContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

interface NavigationProviderProps {
  children: ReactNode;
}

export const NavigationProvider: React.FC<NavigationProviderProps> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openDrawer = () => setIsOpen(true);
  const closeDrawer = () => setIsOpen(false);

  return (
    <NavigationDrawerContext.Provider
      value={{ isOpen, openDrawer, closeDrawer }}
    >
      {children}
    </NavigationDrawerContext.Provider>
  );
};

export const NavigationDrawer = () => {
  const { isOpen, closeDrawer } = useDrawer();
  return (
    <Drawer
      open={isOpen}
      anchor={"left"}
      onClose={closeDrawer}
      style={{ zIndex: 20000, position: "fixed", left: 0, top: 0 }}
    >
      <div className={"menu"}>
        {PAGES.map((item, index) => (
          <>
            <div className={"menuItem "}>
              <Link
                key={index}
                href={item.link}
                onClick={closeDrawer}
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
                    onClick={closeDrawer}
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
  );
};
