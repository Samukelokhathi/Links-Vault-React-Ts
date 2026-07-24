import React from "react";
import btnStyles from "./Button.module.css";

interface BtnProps {
  text: string;
  style?: React.CSSProperties;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<BtnProps> = ({ text, style, className, onClick }) => {
  return (
    <button
      className={`${btnStyles.globalBtn} ${className || ""}`}
      style={style}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
