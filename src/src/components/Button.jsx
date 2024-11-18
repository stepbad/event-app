import { FaPlus } from "react-icons/fa";
import { FaBolt } from "react-icons/fa";

const Button = ({ text, color, click, showAdd }) => {
  return (
    <button className="btn" style={{ backgroundColor: color }} onClick={click}>
      {showAdd ? < FaBolt/> : <FaPlus />}
      {text}
    </button>
  );
};

export default Button;