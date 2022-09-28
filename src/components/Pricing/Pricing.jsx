import React from "react";

import PricingBar from "./Comps/PricingBar";
import PricingFAQ from "./Comps/PricingFAQ";
import PricingLastSection from "./Comps/PricingLastSection";

const Pricing = () => {
  return (
    <>
     <PricingBar/>
      <PricingFAQ/>
      <PricingLastSection/>
    </>
  );
};

export default Pricing;
