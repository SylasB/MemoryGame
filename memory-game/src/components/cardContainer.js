import React, { useState, useEffect } from 'react';
import Card from './card';
import data from './data';

function CardContainer(props) {
    const { gameLogic, score, highScore } = props;
    let validContainer = false;

    const generateDeck = () => {
        let numOfCards = data.cards.length;
        let generatedCards = [];
        for (let i=0; i < 5; i++) {
            let randomId = Math.floor(Math.random() * numOfCards);
            while (generatedCards.includes(data.cards[randomId])) 
            {
                randomId = Math.floor(Math.random() * numOfCards);
            }
            if (!data.cards[randomId].chosen) 
            {
                validContainer = true;
            } 
            generatedCards = [...generatedCards, data.cards[randomId]];
        }
        if (validContainer) 
        {
            validContainer = false;
            return generatedCards;
        } 
        else 
        {
            validContainer = false;
            return correctGeneratedCards(generatedCards);
        }
    };

    const correctGeneratedCards = (cards) => {
        const unchosenCards = data.cards.filter(card => !card.chosen);
        if (unchosenCards === []) {
            return [];
        } 
        cards[Math.floor(Math.random() * cards.length)] = unchosenCards[Math.floor(Math.random() * unchosenCards.length)];
        return cards;
    };

    const [ displayCards, setDisplayCards ] = useState([]);

    useEffect(() => {
        const newCards = generateDeck();
        if (newCards !== [ ]) {
            setDisplayCards(newCards);
            console.log(displayCards);
        } else {
            console.log('Test')
        }
    }, [score, highScore]);


    return (
      <div className='cardContainer'>

          {displayCards.map((card) => (
              <Card  
              key = {card.id}
              name = {card.title}
              gameLogic = {gameLogic}
              />
          ))}
      </div>  
    );
}

export default CardContainer;