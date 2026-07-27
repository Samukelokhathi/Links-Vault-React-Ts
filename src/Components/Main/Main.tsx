import { useState } from "react";
import { Text } from "../Text/Text";
import { Modal } from "../OverlayModal/Modal";
import LinkCard from "../LinkCard/LinkCard";

import textStyle from "../Text/Text.module.css";
import Button from "../Button/Button";

import logo from "./main asset/link-45deg.svg";

import inputStyle from "../Input/Input.module.css";
import mainStyle from "./Main.module.css";
import type { itemLinks } from "../Types/ItemLinks";
import LinkCardList from "../LinkCard/LinkCardList";

interface CardProps {
  listItems: itemLinks;
}

const Main = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [links, setLinks] = useState<itemLinks[]>([])

  const onOpen = () => {
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };



  return (
    <div className={mainStyle["main-container"]}>
      <div className={mainStyle["logo-heading"]}>
        <div className={mainStyle["logo-container"]}>
          <img src={logo} alt="link-img" height={20} width={20} />
        </div>
        <div className={mainStyle["heading-parent"]}>
          <Text
            variant={"h2"}
            children={"Link Vault"}
            className={textStyle["variant-h2"]}
          />
          <Text
            variant={"p"}
            children={"YOUR BOOKMARKS, ANYWHERE"}
            className={textStyle["variant-p"]}
          />
        </div>
      </div>

      <div className={mainStyle["opening-head-container"]}>
        <Text
          variant={"h1"}
          children={"Keep every link that matters."}
          className={textStyle["variant-h1"]}
        />
      </div>

      <div className={inputStyle["input-btn-container"]}>
        <input
          type="text"
          className={inputStyle["search-input"]}
          placeholder="Search by title, URL, description, or tag..."
        />

        <Button
          onClick={() => {
            onOpen();
          }}
          text={"Add New Link"}
          className={mainStyle["add-link-btn"]}
        />

        {isOpen && <Modal onClose={onClose} isOpen={isOpen} />}
      </div>

      <div className={mainStyle["display-cards"]}>
        <LinkCardList listItems={links} />
      </div>
    </div>
  );
};

export default Main;
