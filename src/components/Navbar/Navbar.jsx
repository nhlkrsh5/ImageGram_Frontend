import { useNavigate } from "react-router-dom";
import Button from "../Buttons/Button";
import { CurrUser, UserTocken } from "../../context/GlobleStates";
import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import User_img from "../../assets/User.avif";

function Navbar(params) {
  const navigate = useNavigate();
  let { user, setUser } = useContext(CurrUser);
  let { tocken, setTocken } = useContext(UserTocken);

  const storedTocken = localStorage.getItem("authToken");

  const storedUserString = localStorage.getItem("userInfo");
  const storedUser = JSON.parse(storedUserString);
  function UserSignUp() {
    navigate("/user/signup");
  }

  function UserLogin(params) {
    navigate("/user/singin");
  }

  function userLogout(params) {
    //console.log("Before:" + storedTocken);

    setUser((prevUser) => ({
      ...prevUser,
      username: "",
      email: "",
      role: "",
    }));
    setTocken("");
    localStorage.removeItem("authToken");
    localStorage.removeItem("userInfo");
    // console.log("After:" + storedTocken);

    //toast("User Logout..");
  }

  function UserProfile() {
    navigate("/user/profile");
  }

  const RedirectTOHome = () => {
    navigate("/");
  };
  return (
    <>
      <div className="navbar flex justify-between bg-base-100 shadow-sm">
        <div className="flex">
          <a onClick={RedirectTOHome} className="btn btn-ghost text-xl">
            ImageGram
          </a>
        </div>
        <div className="flex">
          <div className="flex gap-2">
            {storedTocken == null && (
              <>
                <Button onclick={UserLogin} text="SignIn" type="btn-primary" />
                <Button onclick={UserSignUp} text="SignUp" type="btn-primary" />
              </>
            )}
            {storedTocken && storedUser && (
              <div className="dropdown dropdown-end">
                <div className="flex justify-center">
                  <div className="mt-2">
                    {storedUser.username && <p>{storedUser.username}</p>}
                  </div>
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img alt="Tailwind CSS Navbar component" src={User_img} />
                    </div>
                  </div>
                </div>
                <ul
                  tabIndex="-1"
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a onClick={UserProfile} className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>

                  <li>
                    <a onClick={userLogout}>Logout</a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
