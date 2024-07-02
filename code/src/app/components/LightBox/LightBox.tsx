"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import FsLightbox from "fslightbox-react";

interface LightBoxContentType {
  openLightboxOnSlide: (number: number) => void;
  lightboxController: {
    toggler: boolean;
    slide: number;
  };
  photos: string[];
  setPhotos: React.Dispatch<React.SetStateAction<string[]>>;
}

const LightBoxContext = createContext<LightBoxContentType | undefined>(
  undefined,
);

export const useLightBox = (): LightBoxContentType => {
  const context = useContext(LightBoxContext);
  if (!context) {
    throw new Error("useLightBox must be used within a LightBoxProvider");
  }
  return context;
};

interface LightBoxProviderProps {
  children: ReactNode;
}

export const LightBoxProvider: React.FC<LightBoxProviderProps> = ({
  children,
}) => {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });
  const [photos, setPhotos] = useState<string[]>([]);

  function openLightboxOnSlide(number: number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
  }

  return (
    <LightBoxContext.Provider
      value={{ openLightboxOnSlide, lightboxController, photos, setPhotos }}
    >
      {children}
    </LightBoxContext.Provider>
  );
};

export const useLightBoxFunctions = () => {
  const { openLightboxOnSlide } = useLightBox();
  return { openLightboxOnSlide };
};

export const LightBoxContainer: React.FC = () => {
  const { lightboxController, photos } = useLightBox();
  console.log(photos);
  console.log(lightboxController.toggler);
  return (
    <FsLightbox
      toggler={lightboxController.toggler}
      sources={photos}
      key={photos.length}
      type="image"
      slide={lightboxController.slide}
    />
  );
};
