import React from "react";
import modalStyle from "./Modal.module.css";
import closingIcon from "./Asset/x-circle (1).svg";

type ModalProps = {
  children: React.ReactNode;
  close: () => void;
};

export const Modal: React.FC<ModalProps> = ({ children, close }) => {
  const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation;
  };
  return (
    <div className={modalStyle["modal"]}>
      <div className={modalStyle["modal-child"]} onClick={stopPropagation}>
        <img
          className={modalStyle["close-icon"]}
          src={closingIcon}
          alt="closing-icon"
          onClick={close}
        />
        {children}
      </div>
    </div>
  );
};
