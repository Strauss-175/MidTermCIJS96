import React, { useState } from "react";
import "./modal.css"
function Modal({img, description, movieName, episode, index  }) {
  return (
    <>
      <div className="movieCard">
        <section className="subMovieCard">
          <p className="episode">Episode {episode}</p>
          <img src={img} className="cardImg" />
        </section>
        <h3 id={index + "name"}>{movieName}</h3>
        <p id={index + "description"}>{description}</p>
      </div>
    </>
  );
}

export default Modal;
