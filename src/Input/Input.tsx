import type React from "react";
import inputStyle from "./Input.module.css";

type InputProps = {
  id?: string;
  value?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  style?: React.CSSProperties;
  label: string;
  error?: string;
  name?: string;
};

export const Input = () => {
  return <div>Input</div>;
};
