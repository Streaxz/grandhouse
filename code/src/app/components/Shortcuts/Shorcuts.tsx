import { ReactNode } from "react";

export interface IShortcutsProps {
  children: ReactNode;
  backgroundColor: string;
}

export const Shortcuts = ({ children, backgroundColor }: IShortcutsProps) => {
  return (
    <div className={"shortcut"} style={{ backgroundColor: backgroundColor }}>
      {children}
    </div>
  );
};
