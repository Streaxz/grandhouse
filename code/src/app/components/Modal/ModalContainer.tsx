"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import { AmoCrmModal } from "@/app/components/Modal/AmoCrmModal";
import ReactDOM from "react-dom";
import Modal from "react-modal";
interface ModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

Modal.setAppElement("#modal");

export const useModalFunctions = () => {
  const { openModal, closeModal } = useModal();
  return { openModal, closeModal };
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const ModalContainer: React.FC = () => {
  const { isOpen, closeModal } = useModal();

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={{
        content: {
          top: `${typeof window !== "undefined" && window.scrollY}px`,
          padding: "0 0 0 0",
        },
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "90%",
          top: 0,
          flexDirection: "column",
        }}
      >
        <AmoCrmModal isModal={true} closeModal={closeModal} />
      </div>
    </Modal>
  );
};
