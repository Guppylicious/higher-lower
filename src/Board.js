import React from 'react';
import './css/Board.css';
import DealtCell from './DealtCell';

export default class Board extends React.Component {
  createRow = (suit) => {
    let row = []
    for (var i = 1; i <= 13; i++) {
      let card = suit + '_' + i;
      row.push(<DealtCell key={card} card={card} />);
    }

    return row;
  }

  render() {
    return (
      <div className="Board">
        <h3>Dealt Cards</h3>
        <table className="DealtTable">
          <tbody>
            <tr>
              <th className="DealtNo"></th>
              <th className="DealtNo">Ace</th>
              <th className="DealtNo">2</th>
              <th className="DealtNo">3</th>
              <th className="DealtNo">4</th>
              <th className="DealtNo">5</th>
              <th className="DealtNo">6</th>
              <th className="DealtNo">7</th>
              <th className="DealtNo">8</th>
              <th className="DealtNo">9</th>
              <th className="DealtNo">10</th>
              <th className="DealtNo">Jack</th>
              <th className="DealtNo">Queen</th>
              <th className="DealtNo">King</th>
            </tr>
            <tr>
              <th className="DealtSuit">Spades</th>
              {this.createRow('s')}
            </tr>
            <tr>
              <th className="DealtSuit">Hearts</th>
              {this.createRow('h')}
            </tr>
            <tr>
              <th className="DealtSuit">Clubs</th>
              {this.createRow('c')}
            </tr>
            <tr>
              <th className="DealtSuit">Diamonds</th>
              {this.createRow('d')}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
