import Button from "./Button";
import { FaBell } from "react-icons/fa";

const Header = ({ title, onAdd, showAdd }) => {
  // const onClick = (e) => {
  //   console.log("Click");
  //   console.log(e);
  // };
  return (
    <header className="header">
      <h1>
        <FaBell style={{ color: "black" }} />
        {title}
      </h1>
      <Button
        text={showAdd ? "Close" : "Add"}
        color={showAdd ? "red" : "green"}
        click={onAdd}
        showAdd={showAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Event Tracker",
};

export default Header;