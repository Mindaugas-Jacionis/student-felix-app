import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Movies from "./components/Movies/Movies";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Movies />
      <Footer />
    </div>
  );
};

export default App;
