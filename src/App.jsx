import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import FeauContext from "./context/FeauContext";
import Feautered from "./Components/Feautered/Feautered";

function App() {
  return (
    <FeauContext>
      <div className="">
        <Navbar />
        <Hero />
        <Feautered />
      </div>
    </FeauContext>
  );
}

export default App;
