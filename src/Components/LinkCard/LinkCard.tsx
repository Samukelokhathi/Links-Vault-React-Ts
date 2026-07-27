import linkCardStyle from "./LinkCard.module.css";
import { Text } from "../Text/Text";
import Button from "../Button/Button";
import type { itemLinks } from "../Types/ItemLinks";
import type React from "react";

type CardProps = itemLinks;

// const storedTask = localStorage.getItem("links")
// console.log(storedTask)




const LinkCard: React.FC<CardProps> = ({ id, title, url, description }) => {
  return (
    <div className={linkCardStyle["link-card"]}>
      <div className={linkCardStyle["text-container"]}>
        <Text variant={"h1"} children={title} />
        <Text variant={"p"} children={url} />
        <Text variant={"p"} children={description} />
      </div>
      <div className={linkCardStyle["btns-container"]}>
        <Button text={"edit"} className={"edit-btn"} />
        <Button text={"del"} className={"del-btn"} />
      </div>
    </div>
  );
};

export default LinkCard;
