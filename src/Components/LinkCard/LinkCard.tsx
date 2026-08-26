import linkCardStyle from "./LinkCard.module.css";
import { Text } from "../Text/Text";

import Button from "../Button/Button";
import type { itemLinks } from "../Types/ItemLinks";
import type React from "react";

type LinkCardProps = itemLinks & {
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
};




const LinkCard: React.FC<LinkCardProps> = ({ id, title, url, description, tags, onDelete, onEdit }) => {

  return (
    <div className={linkCardStyle["link-card"]}>

      <div className={linkCardStyle["text-container"]}>
        <Text variant={"h1"} children={title} />
        <Text variant={"p"} children={url} />
        <Text variant={"p"} children={description} />
        {tags && (
          <Text variant={"p"}>`Tags: ${tags}`</Text>
        )}

      </div>

      <div className={linkCardStyle["btns-container"]}>

        <Button text={"edit"} className={"edit-btn"} onClick={() => onEdit(id)} />
        <Button text={"del"} className={"del-btn"} onClick={() => onDelete(id)} />
      </div>
    </div>
  );
};

export default LinkCard;
