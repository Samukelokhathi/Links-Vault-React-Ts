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
};



export const Modal: React.FC<ModalProps> = ({ onClose, isOpen }) => {
  const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const [links, setLinks] = useState<itemLinks[]>([])
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");


  const handleSave = () => {
    const newLink: itemLinks = {
      id: Date.now(),
      title,
      url,
      description
    }
    const updatedLinks = [...links, newLink]
    localStorage.setItem('links', JSON.stringify(updatedLinks))
    setLinks(updatedLinks)
  }


  // const getFormLinks = () => {
  //   const storedLinks = localStorage.getItem('links');
  //   if (!storedLinks) return {
  //     id: Date.now(),
  //     title,
  //     description
  //   }

  //   return JSON.parse(storedLinks)
  // }

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
          <Button text={"SaveLink"} onClick={handleSave} />
        </form>
      </div>
    </dialog>
  );
};
