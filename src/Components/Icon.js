import React from "react";
import { FaTimes } from "react-icons/fa";
import { TiMinus } from "react-icons/ti";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";

const icon = ({ name }) => {
  switch (name) {
    case "Cross":
      return <FaTimes className="cross" />;
      break;
    case "Circle":
      return <RiCheckboxBlankCircleLine className="circle" />;
      break;
    default:
      return <TiMinus className="pen" />;
      break;
  }
};

export default icon;
