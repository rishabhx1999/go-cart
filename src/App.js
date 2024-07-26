import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import HomoPromo from "./components/Home Promo/HomoPromo";
import ColorOfTheMonth from "./components/ColorOfTheMonth/ColorOfTheMonth";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <HomoPromo />
      <ColorOfTheMonth />
    </div>
  );
}

export default App;
