import React from "react";
import { FaPlay } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";

interface ButtonInterface {
  children: React.ReactNode;
  type?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  buttonClassName?: string;
}

function Button({ type, children, onClick, buttonClassName }: ButtonInterface) {
  const getButtonType = () => {
    if (type === "info") {
      return "info-button";
    }
    return "play-button";
  };

  return (
    <button
      onClick={onClick}
      className={`${getButtonType()} ${buttonClassName} flex items-center justify-center`}
    >
      {type === "info" ? (
        <IoMdInformationCircleOutline className="mr-2 text-[40px]" />
      ) : (
        <FaPlay className="mr-2 text-[30px]" />
      )}
      {children}
    </button>
  );
}

export default Button;
