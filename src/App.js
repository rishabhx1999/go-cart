import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Shop from "./components/Shop/Shop";
import AboutHDX from "./components/AboutHDX/AboutHDX";
import Contact from "./components/Contact/Contact";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="non-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product-category/tshirts/" element={<Shop />} />
          <Route path="/product-category/mugs/" element={<Shop />} />
          <Route path="/about-hdx/" element={<AboutHDX />} />
          <Route path="/contact/" element={<Contact />} />
          <Route path="/login/" element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
