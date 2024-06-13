import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { BaseData } from "./data/data";
import "./App.css";
import Card from "./components/Card";
function App() {
  return (
    <>
      {/* H   E   A   D   E   R */}
      <section className="header">
        <div className="title">
          <h1>Anonime</h1>
          <p style={{ color: "#868686" }}>Home</p>
          <p style={{ color: "#868686" }}>List anime</p>
        </div>
        <input type="text" placeholder="Search anime or movie" />
      </section>
      <div className="thumbnailText">
        <h2>Explore</h2>
        <p style={{ color: "#868686" }}>What are you gonna watch today?</p>
      </div>
      <section className="thumbnailBoard">
        <img src="/pics/carousel.png" className="thumbnailPic" />
      </section>
      <h2 className="thumbnailText">New Release</h2>
      <main>
        {BaseData.map((item, index) => {
          return (
            <Card
              key={index}
              index={index}
              movieName={item.movieName}
              img={item.image}
              description={item.description}
              episode={item.episode}
            />
          );
        })}
      </main>
    </>
  );
}

export default App;
