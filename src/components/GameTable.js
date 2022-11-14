import React from 'react'

const GameTable = ({games}) => {
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {games.map((game) => (
                    <tr key={game.id}>
                        <td>{game.title}</td>
                        <td>{game.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default GameTable