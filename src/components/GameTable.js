const GameTable = ({games}) => {
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th></th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Platform</th>
                    <th>Release Year</th>
                </tr>
            </thead>
            <tbody>
                {games.map((game) => (
                    <tr key={game.id}>
                        <td>{game.id}</td>
                        <td><img style={{borderRadius: "50%"}} src={game.imageUrl} alt={game.title} width="50" height="50" /></td>
                        <td>{game.name}</td>
                        <td>{game.description}</td>
                        <td>{game.platform}</td>
                        <td>{game.releaseYear}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default GameTable