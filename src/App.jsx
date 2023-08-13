import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import FeauContext from "./context/FeauContext";
import Feautered from "./Components/Feautered/Feautered";
import TopTags from "./Components/TopTags/TopTags";

function App() {
  return (
    <FeauContext>
      <div className="">
        <Navbar />
        <Hero />
        <Feautered />
        <TopTags/>
      </div>
    </FeauContext>
  );
}

export default App;
