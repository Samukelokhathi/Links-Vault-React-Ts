import linkCardStyle from "./LinkCard.module.css";
import { Text } from "../Text/Text";

const LinkCard = () => {
  return (
    <div className={linkCardStyle["link-card"]}>
      <Text variant={"p"} children={"Title"} />
      <Text variant={"p"} children={"Url"} />
      <Text variant={"p"} children={"Description"} />
    </div>
  );
};

export default LinkCard;
