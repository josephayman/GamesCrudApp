import { useState, useEffect } from "react";
import axios from "axios";
import GameTable from "../components/GameTable";
import GameGrid from "../components/GameGrid";

const Games = () => {
  const [toggleView, setToggleView] = useState(false);

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
        <button onClick={() => setToggleView(!toggleView)}>
          {toggleView ? "Grid View" : "Table View"}
        </button>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
          <>
          {toggleView ? (
            <GameTable games={games} />
          ) : (
            <GameGrid games={games} />
          )}
          </>
        )}
      </div>
    </div>
  );
};

export default Games;
