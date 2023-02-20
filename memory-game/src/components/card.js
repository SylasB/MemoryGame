import React from "react";


function Card(props) {
    const { name, picture, gameLogic } = props;
    return (
        <div className="card">
            <div className="cardImgContainer">
                <img
                    src={process.env.PUBLIC_URL+picture}
                    className="cardImg"
                    alt={name}
                    onClick={gameLogic.bind(this, name)}
                ></img>
            </div>
            <div className="cardName">
                {name}
            </div>
        </div>
    );
}

export default Card;