import React, { useState } from "react";
import modalStyle from "./Modal.module.css";
import closingIcon from "../OverlayModal/Asset/x-circle (1).svg";
import { Input } from "../Input/Input";
import Button from "../Button/Button";
import { Text } from "../Text/Text";
import type { itemLinks } from "../Types/ItemLinks"

type ModalProps = {
  onClose: () => void;
  isOpen: boolean;
  handleSave: (itemLink: itemLinks) => void
  links: itemLinks[]

};



export const Modal: React.FC<ModalProps> = ({ onClose, isOpen, handleSave, links }) => {
  const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");

  const onSave = () => {
    const newLink: itemLinks = {
      id: Date.now(),
      title,
      url,
      description

    }
    handleSave(newLink)

  }

  return (
    <dialog open={isOpen}>
      <div className={modalStyle["modal-child"]} onClick={stopPropagation}>
        <img
          height={30}
          width={30}
          className={modalStyle["close-icon"]}
          src={closingIcon}
          alt="closing-icon"
          onClick={() => {
            onClose();
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
            label="URL"
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
            }}
          />

          <Text
            variant={"p"}
            children={"Description"}
            className={modalStyle.description}
          />
          <textarea
            name="Description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>
          <Button text={"SaveLink"} onClick={onSave} />
        </form>
      </div>
    </dialog>
  );
};
