import { Modal } from "../OverlayModal/Modal";
import mainStyle from "./Main.module.css";
import logo from "./main asset/link-45deg.svg";
import { Text } from "../Text/Text";
import textStyle from "../Text/Text.module.css";
import inputStyle from "../Input/Input.module.css";
import Button from "../Button/Button"

const Main = () => {
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
        <input type="text" className={inputStyle["search-input"]} />

        <Button text={"Add New Link"} className={mainStyle["add-link"]} />
      </div>

    </div>
  );
};

export default Main;
