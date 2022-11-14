import React from "react";

const Docs = () => {
  return (
    <div>
      <div className="container">
        <h2>Docs</h2>
        <div className="divider"></div>
        <div className="docs">
          <h3>API</h3>
          <p>API documentation</p>
          <h4>GET /api/games</h4>
          <p>Get all games</p>
          <h4>GET /api/games/:id</h4>
          <p>Get a single game</p>
          <h4>GET /api/games?title=NAME</h4>
          <p>Get a game by title</p>
          <h4>GET /api/games?platform=NAME</h4>
          <p>Get a game by platform</p>
          <h4>GET /api/games?title=NAME?platform=NAME</h4>
          <p>Get a single game by title and platform</p>
          <h4>POST /api/games</h4>
          <p>Create a game</p>
          <h4>PUT /api/games/:id</h4>
          <p>Update a game</p>
          <h4>DELETE /api/games/:id</h4>
          <p>Delete a game</p>
        </div>
      </div>
    </div>
  );
};

export default Docs;
