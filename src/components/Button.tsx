import React, { ReactNode, useState } from "react";
import setClickBoolean from "./Alert";

interface Props {
  children: ReactNode;
  color?:string;
  onClick?:()=>void;
}



const Button = ({ color, children, onClick}: Props) => {

  return (
    <button
      onClick={onClick}
      className={"btn btn-" + color}
    >
      {children}
    </button>
  );
};

export default Button;
