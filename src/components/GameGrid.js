import "../styles/App.css";

const GameGrid = ({games}) => {
  return (
    <div className="featured-games">
        {games.map((game) => (
            <div onClick={() => console.log(game.name)} className="game" key={game.id}>
                <img style={{borderRadius: "50%"}} src={game.imageUrl} alt={game.title} width="50" height="50" />
                <p>{game.name}</p>
                <p>{game.description}</p>
                <p>{game.platform}</p>
                <p>{game.releaseYear}</p>
                <div>
                  <button className="edit-button">Edit</button>
                  <button className="delete-button">X</button>
                </div>
            </div>
        ))}
    </div>
  )
}

export default GameGrid