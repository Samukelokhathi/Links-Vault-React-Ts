import { Modal } from "../OverlayModal/Modal";
import formStyle from "./Form.module.css";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";

const Form = () => {
  return (
    <Modal>
      <div className={formStyle["form-container"]}>
        <Input label="Title" onChange={() => {}} />
        <Input label="Url" onChange={() => {}} />
        <Input label="description" onChange={() => {}} />
        <Button value={"Save"} />
      </div>
    </Modal>
  );
};

export default Form;
