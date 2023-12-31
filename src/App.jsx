import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import FeauContext from "./context/FeauContext";
import Feautered from "./Components/Feautered/Feautered";
import TopTags from "./Components/TopTags/TopTags";
import MainWrapper from "./Components/MainWrapper/MainWrapper";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <FeauContext>
      <div className="">
        <Navbar />
        <Hero />
        <Feautered />
        <TopTags/>
        <MainWrapper/>
        <Footer/>
      </div>
    </FeauContext>
  );
}

export default App;
