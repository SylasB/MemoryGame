import React from "react";

function Card(props) {
    const { name, picture, gameLogic } = props;
    return (
        <div>
            <div>
                <img
                    className="cardImg"
                    alt={name}
                    onClick={gameLogic.bind(this, name)}
                > </img>
            </div>
            <div className="cardName">
                {name}
                TESTING
            </div>
        </div>
    );
}

export default Card;