import React from "react";
import Hero from "../../components/Hero/Hero";
import ColorOfTheMonth from "../../components/ColorOfTheMonth/ColorOfTheMonth";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import IntroVideo from "../../components/IntroVideo/IntroVideo";
import ReadyDesigns from "../../components/ReadyDesigns/ReadyDesigns";
import HomePromo2 from "../../components/HomePromo2/HomePromo2";
import HomePromo from "../../components/HomePromo/HomePromo";

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
