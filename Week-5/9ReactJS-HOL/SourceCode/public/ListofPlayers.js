import React from "react";

export default function ListofPlayers(props) {
    return (
        <div>
            {props.players.map((item, index) => (
                <div key={index}>
                    <li>
                        Mr. {item.name} <span>{item.score}</span>
                    </li>
                </div>
            ))}
        </div>
    );
}

export function ScoreBelow70(props) {

    const players70 = props.players.filter(item => item.score <= 70);

    return (
        <div>
            {players70.map((item, index) => (
                <div key={index}>
                    <li>
                        Mr. {item.name} <span>{item.score}</span>
                    </li>
                </div>
            ))}
        </div>
    );
}
