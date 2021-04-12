import React from 'react';
import './css/Options.css';

export default class Options extends React.Component {
  render() {
    return (
      <table class="OptionTable">
        <tr>
          <td><button class="OptionButton" id="start" onclick="start()">New Game</button></td>
        </tr>
      </table>
    );
  }
}
