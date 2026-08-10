import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "../../Pages/Home";
import Navbar from "../Navbar/Navbar";

function MainLayout(params) {
  const Queryclient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={Queryclient}>
        <Home />
      </QueryClientProvider>
    </>
  );
}
export default MainLayout;
