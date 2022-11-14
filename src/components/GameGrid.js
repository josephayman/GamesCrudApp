import "../styles/App.css";

const GameGrid = ({games}) => {
  return (
    <div className="featured-games">
        {games.map((game) => (
            <div className="game" key={game.id}>
                <img src={game.image} alt={game.title} width="50" height="50" />
                <p>{game.name}</p>
                <p>{game.description}</p>
                <p>{game.platform}</p>
                <p>{game.releaseYear}</p>
                </div>
        ))}
    </div>
  )
}

export default GameGrid