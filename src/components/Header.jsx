import Button from "./Button";
import { FaBell } from "react-icons/fa";

const Header = ({ title, onAdd, showAdd }) => {
  // const onClick = (e) => {
  //   console.log("Click");
  //   console.log(e);
  // };
  return (
    <header className="header">
      <h1 class="gradient-text">
        <FaBell style={{ color: "gold" }} />
        {title}
      </h1>
      <Button className="addButton"
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