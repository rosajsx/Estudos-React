import React, { ButtonHTMLAttributes } from "react";
import "./styles.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
}

//...rest é o uso do spread operator para retornar todos os outros valores existentes
const Button: React.FC<ButtonProps> = ({ name, ...rest }) => {
  return (
    <button className="button" {...rest}>
      <span>{name}</span>
    </button>
  );
};

export default Button;
