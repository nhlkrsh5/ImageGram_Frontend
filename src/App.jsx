import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import MainLayout from "./components/Layout/MainLayout";
import Routing from "./Routing/Routing";

function App() {
  return (
    <>
      <Routing />
    </>
  );
}

export default App;
