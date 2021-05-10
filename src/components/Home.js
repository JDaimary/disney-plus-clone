import React from "react";

import "../css/Home.css";
import ImageSlider from "./ImageSlider";
import Viewers from "./Viewers";

function Home() {
  return (
    <div className="container">
      <ImageSlider />
      <Viewers />
    </div>
  );
}

export default Home;
