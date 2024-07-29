import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import HomoPromo from "./components/HomePromo/HomoPromo";
import ColorOfTheMonth from "./components/ColorOfTheMonth/ColorOfTheMonth";
import FeaturedProducts from "./components/FeaturedProducts/FeaturedProducts";
import IntroVideo from "./components/IntroVideo/IntroVideo";
import ReadyDesigns from "./components/ReadyDesigns/ReadyDesigns";
import HomePromo2 from "./components/HomePromo2/HomePromo2";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="non-header">
        <Hero />
        <HomoPromo />
        <ColorOfTheMonth />
        <FeaturedProducts />
        <IntroVideo />
        <ReadyDesigns />
        <HomePromo2 />
      </div>
    </div>
  );
}

export default App;
