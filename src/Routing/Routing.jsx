import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import PostDetail from "../Pages/PostDetail";
import MainLayout from "../components/Layout/MainLayout";
import Navbar from "../components/Navbar/Navbar";
import Signup from "../Pages/user/Signup";
import SignIn from "../Pages/user/SignIn";
import { UserTocken } from "../context/GlobleStates";
import { CurrUser } from "../context/GlobleStates";
import { useState } from "react";
import Profile from "../Pages/user/Profile";
import PostUplaod from "../Pages/post/PostUplaod";

function Routing(params) {
  const Queryclient = new QueryClient();
  const [tocken, setTocken] = useState("");
  const [user, setUser] = useState({ username: "", email: "", role: "" });
  return (
    <>
      {/*<CurrUser.Provider value={{ user, setUser }}></CurrUser.Provider>*/}
      <CurrUser.Provider value={{ user, setUser }}>
        <UserTocken.Provider value={{ tocken, setTocken }}>
          <QueryClientProvider client={Queryclient}>
            <Navbar />
            <Routes>
              <Route path="/" element={<MainLayout />} />
              <Route path="/detail/:id" element={<PostDetail />} />
              <Route path="/user/signup" element={<Signup />} />
              <Route path="/user/singin" element={<SignIn />} />
              <Route path="/user/profile" element={<Profile />} />
              <Route path="/post/upload" element={<PostUplaod />} />
            </Routes>
          </QueryClientProvider>
        </UserTocken.Provider>
      </CurrUser.Provider>
    </>
  );
}
export default Routing;
