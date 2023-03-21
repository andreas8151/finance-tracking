import { FaRegSadCry } from "react-icons/fa";
import { CgSmileNeutral } from "react-icons/cg";
import { AiOutlineSmile } from "react-icons/ai";
import { BiHappyBeaming } from "react-icons/bi";
import { FaRegKissWinkHeart } from "react-icons/fa";

export function determineColor(balance) {
  if (balance >= 200000) {
    return { icon: <FaRegKissWinkHeart />, color: "#Ffa8B8" };
  }
  if (balance >= 100000) {
    return { icon: <BiHappyBeaming />, color: "#b3E1EA" };
  } else if (balance >= 50000 && balance < 100000) {
    return { icon: <AiOutlineSmile />, color: "#F2ECCE" };
  } else if (balance >= 25000 && balance < 50000) {
    return { icon: <CgSmileNeutral />, color: "#dfb7E5" };
  } else {
    return { icon: <FaRegSadCry />, color: "#b5a4DA" };
  }
}
