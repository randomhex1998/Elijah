import React from "react";

import TopFooter from "./TopFooter";
import QuickSection from "./QuickSection";

function Footer() {
  return (
    <div className="bg-[#eee]">
      <div className="container mx-auto">
        <TopFooter/>
        <QuickSection/>

      </div>
    </div>
  );
}

export default Footer;
