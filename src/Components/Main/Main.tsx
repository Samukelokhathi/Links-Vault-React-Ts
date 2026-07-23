import { Modal } from "../OverlayModal/Modal";
import mainStyle from "./Main.module.css";
import logo from "./main asset/link-45deg.svg";

const Main = () => {
  return (
    <div className={mainStyle["main-container"]}>
      <div className={mainStyle["logo-heading"]}>
        <div className={mainStyle["logo-container"]}>
          <img src={logo} alt="link-img" height={20} width={20} />
        </div>
      </div>
    </div>
  );
};

export default Main;
