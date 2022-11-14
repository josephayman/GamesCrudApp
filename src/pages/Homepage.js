import React from "react";

const Homepage = () => {
  return (
    <div>
      <div className="hero">
        <h1 className="title">Electric Games Inc</h1>
        <p className="subtitle">Games for everyone</p>
      </div>
      <div className="container">
        <h2>Featured Games</h2>
        <div className="divider"></div>
        <div className="featured-games">
          <div className="game">
            <h3>Marvel's Avengers</h3>
            <p>Marvel's Avengers is an upcoming action-adventure video game</p>
          </div>
          <div className="game">
            <h3>Marvel's Spider-Man</h3>
            <p>
              Spider-Man is a action-adventure video game based on the Marvel
              Comics character Spider-Man.
            </p>
          </div>
          <div className="game">
            <h3>Batman: Arkham Knight</h3>
            <p>
              {" "}
              Batman is a action-adventure video game based on the DC Comics.
            </p>
          </div>
          <div className="game">
            <h3>God of War</h3>
            <p>
              God of War is a action-adventure video game based on the Greek.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
