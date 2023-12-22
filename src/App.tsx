import React, { useRef } from "react";
import "./App.scss";
import About from "./page/About/About";
import TrackRecord from "./page/TrackRecord/TrackRecord";
import Article from "./page/Article/Article";
import Footer from "./page/Footer/Footer";
import Ecosystem from "./page/Ecosystem/Ecosystem";
import Wedo from "./page/Wedo/Wedo";

function App() {
  return (
    <div className="app">
      <About />
      <Ecosystem />
      <Wedo />
      <TrackRecord />
      <Article />
      <Footer />
    </div>
  );
}

export default App;
