import { useNavigate } from "react-router-dom";
import Button from "../Buttons/Button";
import { CurrUser } from "../../context/GlobleStates";
import { useContext } from "react";

function Navbar(params) {
  const navigate = useNavigate();
  let { user } = useContext(CurrUser);
  function UserSignUp() {
    navigate("/user/signup");
  }
  return (
    <div className="navbar flex justify-between bg-base-100 shadow-sm">
      <div className="flex">
        <a className="btn btn-ghost text-xl">ImageGram</a>
      </div>
      <div className="flex gap-2">
        {user.username == "" && (
          <>
            <Button text="SignIn" type="btn-primary" />
            <Button onclick={UserSignUp} text="SignUp" type="btn-primary" />
          </>
        )}
        {user.username && <Button text="Logout" type="btn-primary" />}
      </div>
    </div>
  );
}
export default Navbar;
