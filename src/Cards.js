import React from 'react';
import './css/Cards.css';

export default function Cards(props) {
  const cardImg = props.drawnCard ? require(`./img/cards/${props.drawnCard}.png`).default : null;
  const backImg = props.backColour ? require(`./img/backs/${props.backColour}_back.png`).default : null;

  return (
    <table className="CardTable">
      <tbody>
        <tr>
          <th>Card Pile (<span id="Remaining">{props.remaining}</span>)</th>
          <th>Drawn Card</th>
        </tr>
        <tr>
          <td>
            <img
              className="CardPile"
              src={backImg}
            />
          </td>
          <td>
            <img
              className="DrawnCard"
              src={cardImg}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
