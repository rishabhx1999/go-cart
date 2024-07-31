import React from "react";
import Hero from "../Hero/Hero";
import ColorOfTheMonth from "../ColorOfTheMonth/ColorOfTheMonth";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import IntroVideo from "../IntroVideo/IntroVideo";
import ReadyDesigns from "../ReadyDesigns/ReadyDesigns";
import HomePromo2 from "../HomePromo2/HomePromo2";
import HomePromo from "../HomePromo/HomePromo";

const Home = () => {
  return (
    <div>
      <Hero />
      <HomePromo />
      <ColorOfTheMonth />
      <FeaturedProducts />
      <IntroVideo />
      <ReadyDesigns />
      <HomePromo2 />
    </div>
  );
};

export default Home;
