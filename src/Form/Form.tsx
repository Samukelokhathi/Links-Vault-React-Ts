import { Modal } from "../OverlayModal/Modal";
import formStyle from "./Form.module.css";
import { Input } from "../Input/Input";

const Form = () => {
  return (
    <Modal>
      <div className={formStyle["form-container"]}>
        <Input label="Title" onChange={() => {}} />
        <Input label="Url" onChange={() => {}} />
        <Input label="description" onChange={() => {}} />
      </div>
    </Modal>
  );
};

export default Form;
