import React, { useState } from "react";
import "./modal.css";
function Modal({ movieName, description, dataStatus, img }) {
  return (
    <>
      <div className="modal">
        <div className="body">
          <div className="innerModal">
            <img src={img} className="pic" />
            <div className="mainContent">
            <h3>{movieName}</h3>
            <p>{description}</p>
            <button onClick={dataStatus} style={{ color: "white" }}>
              Close
            </button></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
