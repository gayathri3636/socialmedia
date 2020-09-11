import React from "react";
import Navbar from "./components/Navbar";
import LoginScreen from "./components/login";
// import RegisterScreen from "./components/register";
// import Catalog from "./components/catalog";
// import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <LoginScreen />
      {/* <RegisterScreen /> */}
      {/* <Footer /> */}
      {/* <Catalog /> */}
    </div>
  );
}

export default App;
