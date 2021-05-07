import React, { useState, useEffect } from 'react';
import './css/App.css';
import Controls from './Controls';
import Board from './Board';

export default function App() {
  const [deck, setDeck] = useState([]);
  const [dealtCards, setDealtCards] = useState([]);
  const [drawnCard, setDrawnCard] = useState('');
  const [currentCard, setCurrentCard] = useState('');
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [remainingCards, setRemainingCards] = useState(0);
  const [backColour, setBackColour] = useState('grey');

  const suits = ['s', 'h', 'c', 'd'];

  var card = '';

  function handleOptionsClick() {
    const newDeck = buildDeck();
    const newDrawnCard = newDeck[0];
    newDeck.shift();

    setDeck(newDeck);
    setDrawnCard(newDrawnCard);
    setDealtCards([]);
    setCorrect(0);
    setWrong(0);
    setRemainingCards(51);
  }

  function handleHigherClick() {
    var correctScore = correct;
    var wrongScore = wrong;

    const result = deck.length > 0 ? drawCard() : '' ;

    result == ('higher' || 'equal') ? setCorrect(correctScore + 1) : setWrong(wrongScore + 1);
  }

  function handleLowerClick() {
    const correctScore = correct;
    const wrongScore = wrong;

    const result = deck.length > 0 ? drawCard() : '' ;

    result == ('lower' || 'equal') ? setCorrect(correctScore + 1) : setWrong(wrongScore + 1);
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

  function drawCard() {
    const newCurrentCard = drawnCard;
    const newDrawnCard = deck[0];
    const newDeck = deck;
    const newDealtCards = dealtCards;

    newDeck.shift();
    newDealtCards.push(newCurrentCard);

    setCurrentCard(newCurrentCard);
    setDrawnCard(newDrawnCard);
    setDeck(newDeck);
    setDealtCards(newDealtCards);
    setRemainingCards(remainingCards - 1);

    const drawnCardValue = newDrawnCard.split('_');
    const currentCardValue = newCurrentCard.split('_');
    var result = drawnCardValue[1] > currentCardValue[1] ? 'higher' : 'lower';

    if (drawnCardValue[1] == currentCardValue[1]) {
      result = 'equal';
    }

    console.log('Drawn card ' + drawnCardValue[1] + ' is ' + result + 'than Current card ' + currentCardValue[1]);

    return result;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Higher or Lower</h1>
      </header>
      <div className="Game">
        <Controls
          onOptionsClick={handleOptionsClick}
          onHigherClick={handleHigherClick}
          onLowerClick={handleLowerClick}
          drawnCard={drawnCard}
          correct={correct}
          wrong={wrong}
          remaining={remainingCards}
          backColour={backColour}
        />
        <Board
          dealtCards={dealtCards}
        />
      </div>
    </div>
  );
}
