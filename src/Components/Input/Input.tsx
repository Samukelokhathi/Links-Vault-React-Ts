import type React from "react";
import inputStyle from "./Input.module.css";

type InputProps = {
  id?: string;
  value?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  style?: React.CSSProperties;
  label: string;
  error?: string;
  name?: string;
  type?: "text" | "textarea"
  rows?: number;
};

export const Input: React.FC<InputProps> = ({
  id,
  value,
  onChange,
  style,
  label,
  error,
  name,
  type = "text",
  rows = 4
}) => {
  return (
    <div className={inputStyle["input-label-container"]}>
      <label className={inputStyle["input-label"]}>{label}</label>

      {type === "textarea" ? (
        <textarea
          name={name}
          id={id}
          style={style}
          value={value}
          onChange={onChange}
          rows={rows}
          className={inputStyle.input}
        />
      ) : (
        <input
          name={name}
          type={type}
          id={id}
          style={style}
          value={value}
          onChange={onChange}
          className={inputStyle.input}
        />
      )}

      {error && <span className={inputStyle["input-error"]}>{error}</span>}
    </div>
  );
};
