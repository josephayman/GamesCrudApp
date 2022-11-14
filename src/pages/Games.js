import GameTable from "../components/GameTable";

const Games = () => {
  let games = [
    {
      id: 1,
      title: "Marvel's Avengers",
      description: "Game 1 description",
    },
    {
      id: 2,
      title: "Marvel's Spider",
      description: "Game 2 description",
    },
  ];

  let api = true;

  return (
    <div>
      <div className="container">
        <h2>Games</h2>
        {api ? <GameTable games={games} /> : <h3>Loading...</h3>}
      </div>
    </div>
  );
};

export default Games;
