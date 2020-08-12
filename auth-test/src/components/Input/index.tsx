import React, { InputHTMLAttributes } from "react";
import "./styles.css";

/*Modelando os dados e extendendo a uma interface HTML para que os inputs
 tenham acesso a todos os dados que um input pode receber!*/
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Input: React.FC<InputProps> = ({ name, label, ...rest }) => {
  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} {...rest} />
    </div>
  );
};

export default Input;
