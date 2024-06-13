import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { BaseData } from "./data/data";
import "./App.css";
import Card from "./components/Card";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section className="header">
        <div className="title">
          <h1>Anonime</h1>
          <p style={{ color: "#868686" }}>Home</p>
          <p style={{ color: "#868686" }}>List anime</p>
        </div>
        <input type="text" placeholder="Search anime or movie" />
      </section>
      <section className="thumbnailBoard">
        <div className="thumbnailText">
          <h2>Explore</h2>
          <p style={{ color: "#868686" }}>What are you gonna watch today?</p>
        </div>
       <img src="/pics/thumbnail.jpg" className="thumbnailPic"/>
      </section>
      <h2>New Release</h2>
      <main>
        {BaseData.map((item, index) => {
          return (
            <Card
              key={index}
              moviewName={item.movieName}
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
