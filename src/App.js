import React, { useState } from "react";
import Card from "./Card";
import "./App.css";

const App = () => {
  const [images, setImages] = useState([
    { url: "https://source.unsplash.com/random/1" },
    { url: "https://source.unsplash.com/random/2" },
    { url: "https://source.unsplash.com/random/3" },
    { url: "https://source.unsplash.com/random/4" },
    { url: "https://source.unsplash.com/random/5" },
    { url: "https://source.unsplash.com/random/6" },
  ]);
  return (
    <div className="App">
      <div className="cardContainer">
        <Card images={images} />
      </div>
      <div className="btnContainer">
        <button>Remove</button>
        <button>Add</button>
      </div>
    </div>
  );
};

export default App;
