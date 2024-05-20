import Button from "../common/Button";
import "./Navbar.css";

const Navbar = () => {
  const handleSaveChanges = () => {
    alert("I go Meowww!!");
  };

  return (
    <div className="container">
      <Button
        cssClass="save-button"
        handleClick={handleSaveChanges}
        text="Save Changes"
      />
    </div>
  );
};

export default Navbar;
