import { AiOutlineComment } from "react-icons/ai";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { FaBars } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";

export default function Icons({ name, color = "black", extraCSS, iconAction }) {
  switch (name) {
    case "search":
      return (
        <FaMagnifyingGlass
          color={color}
          className={`${extraCSS}`}
          onClick={iconAction}
        />
      );
    case "Bars":
      return (
        <FaBars color={color} className={`${extraCSS}`} onClick={iconAction} />
      );
    case "love":
      return (
        <CiHeart color={color} className={`${extraCSS}`} onClick={iconAction} />
      );
    case "comment":
      return (
        <AiOutlineComment
          color={color}
          className={`${extraCSS}`}
          onClick={iconAction}
        />
      );
    case "close":
      return (
        <IoCloseSharp
          color={color}
          className={`${extraCSS}`}
          onClick={iconAction}
        />
      );
    default:
      return "";
  }
}
