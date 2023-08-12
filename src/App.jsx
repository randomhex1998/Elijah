import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import FeauContext from "./context/FeauContext";

function App() {
  return (
    <FeauContext>
      <div className="">
        <Navbar />
        <Hero />
      </div>
    </FeauContext>
  );
}

export default App;
