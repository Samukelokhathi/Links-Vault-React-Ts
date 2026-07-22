import React from "react";
import modalStyle from "./Modal.module.css";
import closingIcon from "./Asset/x-circle (1).svg";

type ModalProps = {
  children: React.ReactNode;
};

export const Modal: React.FC<ModalProps> = ({ children }) => {
  return (
    <div className={modalStyle["modal"]}>
      <div className={modalStyle["modal-child"]}>
        <img
          className={modalStyle["close-icon"]}
          src={closingIcon}
          alt="closing-icon"
        />
        {children}
      </div>
    </div>
  );
};
