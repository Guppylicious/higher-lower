import React from 'react';
import './css/Cards.css';

export default class Cards extends React.Component {
  render() {
    return (
      <table class="CardTable">
        <tr>
          <th>Card Pile (<span id="Remaining">0</span>)</th>
          <th>Drawn Card</th>
        </tr>
        <tr>
          <td class="CardPile" id="CardPile"></td>
          <td class="DrawnCard" id="DrawnCard"></td>
        </tr>
      </table>
    );
  }
}
