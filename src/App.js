import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import HomoPromo from "./components/Home Promo/HomoPromo";
import ColorOfTheMonth from "./components/ColorOfTheMonth/ColorOfTheMonth";
import FeaturedProducts from "./components/FeaturedProducts/FeaturedProducts";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="non-header">
        <Hero />
        <HomoPromo />
        <ColorOfTheMonth />
        <FeaturedProducts />
      </div>
    </div>
  );
}

export default App;
