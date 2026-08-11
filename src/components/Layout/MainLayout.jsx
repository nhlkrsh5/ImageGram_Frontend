import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "../../Pages/Home";
import Navbar from "../Navbar/Navbar";
import { useContext } from "react";
import { CurrUser } from "../../context/GlobleStates";

function MainLayout(params) {
  const Queryclient = new QueryClient();
  let { user } = useContext(CurrUser);
  console.log("username", user.username);

  return (
    <>
      <QueryClientProvider client={Queryclient}>
        <Home />
      </QueryClientProvider>
    </>
  );
}
export default MainLayout;
