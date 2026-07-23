import React, { useState } from "react";
import modalStyle from "./Modal.module.css";
import closingIcon from "../OverlayModal/Asset/x-circle (1).svg";
import { Input } from "../Input/Input";
import Button from "../Button/Button";
// import formStyle from "../Form/Form.module.css";

export const Modal: React.FC = () => {
  const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const [isOpen, setIsOpen] = useState(true);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
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
          <Input
            label="Title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <Input
            label="Url"
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
            }}
          />
          <textarea
            name="description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>
          <Button text={"SaveLink"} />
        </form>
      </div>
    </dialog>
  );
};
