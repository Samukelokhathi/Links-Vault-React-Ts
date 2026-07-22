import React from "react";
import modalStyle from "./Modal.module.css";

type ModalProps = {
  children: React.ReactNode;
};

export const Modal: React.FC<ModalProps> = ({ children }) => {
  return (
    <div>
      <div>
        <img
          className={modalStyle["close-icon"]}
          src=""
          alt="closing-icon"
          onClick={}
        />
        {children}
      </div>
    </div>
  );
};
