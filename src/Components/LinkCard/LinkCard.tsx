import linkCardStyle from "./LinkCard.module.css";
import { Text } from "../Text/Text";
import Button from "../Button/Button";

const LinkCard = () => {
  return (
    <div className={linkCardStyle["link-card"]}>
      <div className={linkCardStyle["text-container"]}>
        <Text variant={"h1"} children={"Title"} />
        <Text variant={"p"} children={"Url"} />
        <Text variant={"p"} children={"Description"} />
      </div>
      <div className={linkCardStyle["btns-container"]}>
        <Button text={"edit"} className={"edit-btn"} />
        <Button text={"del"} className={"del-btn"} />
      </div>
    </div>
  );
};

export default LinkCard;
