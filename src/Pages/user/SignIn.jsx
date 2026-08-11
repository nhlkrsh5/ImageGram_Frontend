import { useEffect, useState } from "react";
import { GetUserDetail, UserSignIN } from "../../APIs/userAPIs";
import { useContext } from "react";
import { CurrUser, UserTocken } from "../../context/GlobleStates";
import { useNavigate } from "react-router-dom";

function SignIn(params) {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let { tocken, setTocken } = useContext(UserTocken);
  let { user, setUser } = useContext(CurrUser);
  const navigate = useNavigate();
  //let = useContext(UserTocken);

  const handleUserLogin = async (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);

    const data = await UserSignIN(email, password);

    if (data) {
      setTocken(data.data);
    }

    console.log(data.data);
  };
  useEffect(() => {
    async function GetUser() {
      try {
        const data = await GetUserDetail(tocken);

        console.log(data);
        if (!data) {
          throw new Error("User not found!");
        } else {
          setUser((prevUser) => ({
            ...prevUser,
            username: data.data.username,
            email: data.data.email,
            role: data.data.role,
          }));
        }
        //toast("Welcome Back!");
        navigate("/");
      } catch (error) {
        console.log("Getting user problem:", error);
      }
    }
    GetUser();
  }, [tocken]);

  useEffect(() => {
    console.log("Globel state", user.email);
    console.log("Globel state", user.username);
    console.log("Globle state:", user.role);
  }, [user]);
  return (
    <div className="min-h-screen w-full bg-white">
      <main className="flex justify-center px-4 py-12 sm:py-16">
        <div className="w-full max-w-sm">
          <div className="flex flex-col items-center mb-8">
            <h1 className="text-xl font-bold text-slate-900">Login</h1>
          </div>

          <form className="space-y-4">
            {/* Username */}

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-700 mb-1.5"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-colors focus:ring-2 focus:ring-indigo-500/25 focus:border-indigo-500"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-slate-700 mb-1.5"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="new-password"
                placeholder="Create a password"
                className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-colors focus:ring-2 focus:ring-indigo-500/25 focus:border-indigo-500"
              />
            </div>

            {/* Confirm password */}

            <button
              type="submit"
              className="w-full rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm py-2.5 transition-colors mt-2"
              onClick={handleUserLogin}
            >
              Login
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default SignIn;
