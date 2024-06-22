"use client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { AmoCrmModal } from "@/app/components/Modal/AmoCrmModal";
import Modal from "react-modal";
interface ModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

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
  useEffect(() => {
    Modal.setAppElement(document.getElementById("modal")!);
  }, []);

  return (
    <Modal
      isOpen={isOpen}
      ariaHideApp={false}
      onRequestClose={closeModal}
      aria={{
        labelledby: "heading",
        describedby: "full_description",
      }}
      style={{
        overlay: {
          display: "flex",
          justifyContent: "center",
        },
        content: {
          display: "table",
          top: `${typeof window !== "undefined" && window.scrollY + window.innerHeight / 2}px`,
          left: "50%",
          border: "unset",
          background: "transparent",
          padding: "0 0 0 0",
          height: "fit-content",
          width: "80%",
          translate: "-50% -50%",
        },
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          height: "90%",
          top: 0,
          flexDirection: "column",
        }}
      >
        <div className={"modalScale"}>
          <AmoCrmModal isModal={true} closeModal={closeModal} />
        </div>
      </div>
    </Modal>
  );
};
