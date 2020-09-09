import React from "react";
import Navbar from "./components/Navbar";
import LoginScreen from "./components/login";
import RegisterScreen from "./components/register";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <LoginScreen />
      <RegisterScreen />
    </div>
  );
}

export default App;
