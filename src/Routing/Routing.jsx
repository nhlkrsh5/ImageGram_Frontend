import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import PostDetail from "../Pages/PostDetail";
import MainLayout from "../components/Layout/MainLayout";
import Navbar from "../components/Navbar/Navbar";
import Signup from "../Pages/user/Signup";
import SignIn from "../Pages/user/SignIn";

function Routing(params) {
  const Queryclient = new QueryClient();
  return (
    <>
      <Navbar />
      <QueryClientProvider client={Queryclient}>
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/detail/:id" element={<PostDetail />} />
          <Route path="/user/signup" element={<Signup />} />
          <Route path="/user/singin" element={<SignIn />} />
        </Routes>
      </QueryClientProvider>
    </>
  );
}
export default Routing;
