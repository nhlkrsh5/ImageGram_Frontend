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

function Routing(params) {
  const Queryclient = new QueryClient();
  const [tocken, setTocken] = useState("");
  const [user, setUser] = useState({ username: "", email: "", role: "" });
  return (
    <>
      <Navbar />
      <CurrUser.Provider value={{ user, setUser }}>
        <UserTocken.Provider value={{ tocken, setTocken }}>
          <QueryClientProvider client={Queryclient}>
            <Routes>
              <Route path="/" element={<MainLayout />} />
              <Route path="/detail/:id" element={<PostDetail />} />
              <Route path="/user/signup" element={<Signup />} />
              <Route path="/user/singin" element={<SignIn />} />
            </Routes>
          </QueryClientProvider>
        </UserTocken.Provider>
      </CurrUser.Provider>
    </>
  );
}
export default Routing;
