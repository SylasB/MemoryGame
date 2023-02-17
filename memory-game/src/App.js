import './App.css';
import React, { useState } from 'react';
import data from './components/data';
import Header from './components/Header';
import CardContainer from './components/cardContainer';

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [chosenCards, addCards] = useState([]);
  const [text, setText] = useState('');

//--------------------------------------------------------------------------------------

  const handleHighScore = () => {
    if (score >= highScore) {
      setHighScore(score + 1);
    }
  };
  
  const handleScore = () => {
      setScore((prevScore) => prevScore + 1)
      handleHighScore();
  };

  const handleChoice = (cardName) => {
    let index = data.cards.findIndex(x => x.title === cardName);
    data.cards[index].choosen = true;
    addCards((chosenCards) => [...chosenCards,cardName]);
  };
  
  const handleText = (input) => {
    setText((input));
  }

  const reset = () => {
    data.cards.forEach(element => {
      element.choosen = false;
    });
    addCards([]);
    setScore(0);
  };

  const gameLogic = (cardName) => {
    if (!chosenCards.includes(cardName)) {
        if (chosenCards.length + 1 === data.cards.length){
          handleScore();
          setText('You Win!!!')
          reset();
          return;
        } else {
          handleChoice(cardName);
          handleScore();
          setText('');
        }
    } else {
      reset();
      setText('You chose the same card twice, try again')
    }
  };

  return (
    <div className="App">
        <Header 
          score = {score}
          highScore = {highScore}
          text = {text}
          />
        <CardContainer 
        score = {score}
        highScore = {highScore}
        gameLogic = {gameLogic}
        />
        <p>
          <a href='https://github.com/SylasB/MemoryGame'>Copyright Sylas Boniek 2023</a>
        </p>
    </div>
  );
  
}

export default App;