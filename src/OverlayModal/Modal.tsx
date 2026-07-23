import React, { useState } from "react";
import modalStyle from "./Modal.module.css";
import closingIcon from "../OverlayModal/Asset/x-circle (1).svg";
import { Input } from "../Input/Input";
import { Button } from "../Components/Button/Button";
// import formStyle from "../Form/Form.module.css";

export const Modal: React.FC = () => {
  const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const [isOpen, setIsOpen] = useState(true);
  return (
    <dialog open={isOpen}>
      <div className={modalStyle["modal-child"]} onClick={stopPropagation}>
        <img
          className={modalStyle["close-icon"]}
          src={closingIcon}
          alt="closing-icon"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
        <form>
          <Input label="Title" onChange={() => {}} />
          <Input label="Url" onChange={() => {}} />
          <Input label="description" onChange={() => {}} />
          <Button value={"Save"} />
        </form>
      </div>
    </dialog>
  );
};
