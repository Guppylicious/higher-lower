import React, { useState, useEffect } from 'react';
import './css/App.css';
import Controls from './Controls';
import Board from './Board';

export default function App() {
  const [deck, setDeck] = useState([]);
  const [drawnCard, setDrawnCard] = useState('');
  const [currentCard, setCurrentCard] = useState('');
  const [remainingCards, setRemainingCards] = useState(0);
  const [backColour, setBackColour] = useState('grey');

  const suits = ['s', 'h', 'c', 'd'];

  var card = '';

  function handleOptionsClick() {
    let newDeck = buildDeck();
    const newDrawnCard = newDeck[0];
    newDeck.shift();

    setDeck(newDeck);
    setDrawnCard(newDrawnCard);
    setRemainingCards(51);
  }

  function buildDeck()
  {
    let d = [];
    suits.forEach(function(suit) {
      for (var i = 1; i <= 13; i++) {
        card = suit + '_' + i;
        d.push(card);
      }
    });

    return shuffleDeck(d);
  }

  function shuffleDeck(d) {
    var card = d.length, shuffleCard, randomCard;

    // While there remain elements to shuffle...
    while (0 !== card) {
      // Pick a remaining element...
      randomCard = Math.floor(Math.random() * card);
      card -= 1;

      // And swap it with the current element.
      shuffleCard = d[card];
      d[card] = d[randomCard];
      d[randomCard] = shuffleCard;
    }

    return d;
  }

  function drawCard(d) {
    var card = d[0];

    return card;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Higher or Lower</h1>
      </header>
      <div className="Game">
        <Controls
          onOptionsClick={handleOptionsClick}
          drawnCard={drawnCard}
          remaining={remainingCards}
          backColour={backColour}
        />
        <Board
          current={currentCard}
        />
      </div>
    </div>
  );
}
