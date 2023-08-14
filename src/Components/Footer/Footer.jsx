import React from "react";

import TopFooter from "./TopFooter";
import QuickSection from "./QuickSection";


import BottomFooter from "./BottomFooter";

function Footer() {
  return (
    <div className="bg-[#fff]">
      <div className="container mx-auto">
        <TopFooter />
        <QuickSection />
        <BottomFooter/>
      </div>
    </div>
  );
}

export default Footer;
