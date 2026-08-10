import { useNavigate } from "react-router-dom";
import Button from "../Buttons/Button";

function Navbar(params) {
  const navigate = useNavigate();
  function UserSignUp() {
    navigate("/user/signup");
  }
  return (
    <div className="navbar flex justify-between bg-base-100 shadow-sm">
      <div className="flex">
        <a className="btn btn-ghost text-xl">ImageGram</a>
      </div>
      <div className="flex gap-2">
        <Button text="SignIn" type="btn-primary" />
        <Button onclick={UserSignUp} text="SignUp" type="btn-primary" />
      </div>
    </div>
  );
}
export default Navbar;
