import React, { useState } from "react";
import "./card.css";
import Modal from "../assets/modal/modal";
function Card({ img, movieName, description, episode, index }) {
  // D   A   T   A      C   O   N   T   R   O   L

  // B   E   H   A   V   I   O   R
  let [newStatus, setStatus] = useState(false);
  const dataStatus = () => {
    setStatus(newStatus ? false : true);
  };
  return (
    <div
      className="movieCard"
      onClick={() => {
        dataStatus();
      }}
    >
      <section className="subMovieCard">
        <p className="episode">Episode {episode}</p>
        <img src={img} className="cardImg" />
        <div className="background"></div>
      </section>
      <h4>{movieName}</h4>
      {newStatus && (
        <Modal
          movieName={movieName}
          description={description}
          dataStatus={dataStatus}
          img={img}
        />
      )}
    </div>
  );
}

export default Card;
