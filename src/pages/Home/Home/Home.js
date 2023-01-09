import React from "react";
import AffordablePricing from "../AffordablePricing/AffordablePricing";
import Banner from "../Banner/Banner";
import CompanyBenefit from "../CompanyBenefit/CompanyBenefit";
import OurBlog from "../OurBlog/OurBlog";
import OurMission from "../OurMission/OurMission";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Banner />
      <OurMission />
      <CompanyBenefit />
      <AffordablePricing />
      <OurBlog />
    </div>
  );
};

export default Home;
