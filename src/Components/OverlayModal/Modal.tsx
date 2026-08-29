import React, { useState, useEffect } from "react";
import modalStyle from "./Modal.module.css";
import closingIcon from "../OverlayModal/Asset/x-circle (1).svg";
import { Input } from "../Input/Input";
import Button from "../Button/Button";
import type { itemLinks } from "../../Types/ItemLinks"

type ModalProps = {
  onClose: () => void;
  isOpen: boolean;
  handleSave: (itemLink: itemLinks) => void
  links: itemLinks[]
  editingLink?: itemLinks | null;

};


export const Modal: React.FC<ModalProps> = ({ onClose, isOpen, handleSave, editingLink }) => {

  const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");

  useEffect(() => {

    if (editingLink) {

      setTitle(editingLink.title);
      setUrl(editingLink.url);
      setDescription(editingLink.description);
      setTags(editingLink.tags);

    } else {

      setTitle("");
      setUrl("");
      setDescription("");
      setTags("");

    }

  }, [editingLink, isOpen]);

  const onSave = () => {

    const newLink: itemLinks = {
      id: editingLink ? editingLink.id : Date.now(),
      title,
      url,
      description,
      tags

    }
    handleSave(newLink)

    setTitle("");
    setUrl("");
    setDescription("");
    setTags("");

    onClose();

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

          <Input
            label="TAGS (OPTIONAL)"
            value={tags}
            onChange={(e) => {
              setTags(e.target.value);
            }}
          />
          <Input
            label="DESCRIPTION"
            type="textarea"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}

          />
          <Button text={editingLink ? "Update Link" : "Save Link"} onClick={onSave} />

        </form>

      </div>

    </dialog>
  );
};
