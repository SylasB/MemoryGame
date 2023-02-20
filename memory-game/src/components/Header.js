import React from "react";

function Header(props) {
    const {score, highScore, text } = props; 
    return (
        <div className='header'>
            <div>
                <h1>Memory Game</h1>
                <p>
                Don't choose the same card twice!
                </p>
                <p>
                    {text}
                </p>
            </div>
            <div className="scoreBoard">
                <div>
                    Score: {score} <br/>
                {/* </div>
                <div> */}
                    HighScore: {highScore}
                </div>
            </div>  
        </div>
    );
}

export default Header;