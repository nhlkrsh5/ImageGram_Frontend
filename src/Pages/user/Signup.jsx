import { useState } from "react";
import { UserRegister } from "../../APIs/userAPIs";
import { ToastContainer, toast } from "react-toastify";
function Signup() {
  /* let [form, setform] = useState({
    username: "",
    email: "",
    password: "",
    con_pass: "",
  });*/
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [connpass, setConnpass] = useState("");

  function ClearData() {
    setUsername("");
    setEmail("");
    setPassword("");
    setConnpass("");
  }
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log("username:", username);
    console.log("email", email);
    console.log("Password", password);
    console.log("Confim pass", connpass);
    toast.success("User created");

    /*if (password === connpass) {
      const data = await UserRegister(username, email, password);

      if (data) {
        console.log(data);
        toast("User created");
        ClearData();
      }
    }*/
  };
  return (
    <div className="min-h-screen w-full bg-white">
      <main className="flex justify-center px-4 py-12 sm:py-16">
        <div className="w-full max-w-sm">
          <div className="flex flex-col items-center mb-8">
            <h1 className="text-xl font-bold text-slate-900">
              Create your account
            </h1>
            <p className="text-sm text-slate-500 mt-1.5">
              Already on ImageGram?{" "}
              <a
                href="/user/singin"
                className="text-indigo-600 font-semibold hover:text-indigo-700"
              >
                Sign in
              </a>
            </p>
          </div>

          <form className="space-y-4">
            {/* Username */}
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-slate-700 mb-1.5"
              >
                Username
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
                  @
                </span>
                <input
                  id="username"
                  name="username"
                  type="text"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  autoComplete="username"
                  placeholder="yourname"
                  className="w-full rounded-xl border border-slate-200 bg-white pl-8 pr-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-colors focus:ring-2 focus:ring-indigo-500/25 focus:border-indigo-500"
                />
              </div>
            </div>

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
            <div>
              <label
                htmlFor="confirmpass"
                className="block text-sm font-medium text-slate-700 mb-1.5"
              >
                Confirm password
              </label>
              <input
                id="confirmpass"
                name="confirmpass"
                type="password"
                autoComplete="new-password"
                onChange={(e) => setConnpass(e.target.value)}
                placeholder="Re-enter your password"
                className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-colors focus:ring-2 focus:ring-indigo-500/25 focus:border-indigo-500"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm py-2.5 transition-colors mt-2"
              onClick={handleFormSubmit}
            >
              Sign up
            </button>
          </form>
        </div>
      </main>
      <ToastContainer />
    </div>
  );
}

export default Signup;
