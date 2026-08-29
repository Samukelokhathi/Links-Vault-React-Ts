import React from "react";
import btnStyles from "./Button.module.css";

interface BtnProps {
  text: string;
  style?: React.CSSProperties;
  className?: string;
  onClick?: () => void;
  type?: "submit"
}

const Button: React.FC<BtnProps> = ({ text, style, className, onClick, type }) => {
  return (
    <button
      className={`${btnStyles.globalBtn} ${className || ""}`}
      style={style}
      onClick={onClick}
      type={type}

    >
      {text}
    </button>
  );
};

export default Button;
