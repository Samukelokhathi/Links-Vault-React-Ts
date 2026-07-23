import type React from "react";
import btnStyle from "./Button.module.css";

export const Button: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  ...rest
}) => {
  return <input type="button" {...rest} />;
};
