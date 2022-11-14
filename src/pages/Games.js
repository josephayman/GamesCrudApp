import { useState, useEffect } from "react";
import axios from "axios";
import GameTable from "../components/GameTable";
import GameGrid from "../components/GameGrid";
import NewEditForm from "../components/NewEditForm";

const Games = () => {
  const [toggleView, setToggleView] = useState(false);
  const [form, setForm] = useState(false);

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
        <div className="row">
          <h2>Games</h2>
          <div>
            <button onClick={() => setForm(!form)}>
              {form ? "Close Form" : "Add New Game"}
            </button>
            <button
              className="toggle-button"
              onClick={() => setToggleView(!toggleView)}
            >
              {toggleView ? "Grid View" : "Table View"}
            </button>
          </div>
        </div>
        <div className="divider"></div>
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
        {form ? <NewEditForm close={()=> setForm(!form)} /> : null}
      </div>
    </div>
  );
};

export default Games;
