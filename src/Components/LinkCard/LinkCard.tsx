import linkCardStyle from "./LinkCard.module.css";
import { Text } from "../Text/Text";

import Button from "../Button/Button";
import type { itemLinks } from "../../Types/ItemLinks";
import type React from "react";

type LinkCardProps = itemLinks & {
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
};


const LinkCard: React.FC<LinkCardProps> = ({ id, title, url, description, tags, onDelete, onEdit }) => {


  const handleCardClick = () => {
    window.open(url, "_blank")
  }

  const handleButtonClick = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    e.stopPropagation();
  };



  return (
    <div className={linkCardStyle["link-card"]}
      onClick={handleCardClick}
    >

      <div className={linkCardStyle["text-container"]}>
        <Text variant={"h1"} children={title} />
        <Text variant={"p"} children={url} />
        <Text variant={"p"} children={description} />
        {tags && (
          <Text variant={"p"}>Tag: {tags}</Text>
        )}

      </div>

      <div className={linkCardStyle["btns-container"]}
        onClick={handleButtonClick}
      >
        <Button
          text={"edit"}
          className={"edit-btn"}
          onClick={() => onEdit(id)}
        />
        <Button
          text={"del"}
          className={"del-btn"}
          onClick={() => onDelete(id)}
        />
      </div>
    </div>
  );
};

export default LinkCard;
