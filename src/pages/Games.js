import { useState, useEffect } from "react";
import axios from "axios";
import GameTable from "../components/GameTable";

const Games = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5262/Game")
      .then((response) => {
        setGames(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <div className="container">
        <h2>Games</h2>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
          <GameTable games={games} />
        )}
      </div>
    </div>
  );
};

export default Games;
