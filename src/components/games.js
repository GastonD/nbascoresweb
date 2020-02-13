import React from 'react'

const Games = ({ games }) => {
    return (
        <div>
            <center><h1>Today Games</h1></center>
            {games.map((game) => (
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{game.homeTeam} vs {game.awayTeam}</h5>
                        <h6 class="card-subtitle mb-2 text-muted"> {game.homeScore} - {game.awayScore}</h6>
                        <p class="card-text">"blabla"</p>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Games