import { ReactNode } from "react";

export interface IRoundFeatures {
  children: ReactNode;
}
export const Features = ({ children }: IRoundFeatures) => {
  return <div className={"roundedFeaturesContainer"}>{children}</div>;
};
