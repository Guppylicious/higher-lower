import React from 'react';
import './css/Score.css';

export default class Score extends React.Component {
  render() {
    return (
      <table class="ScoreTable">
          <tr>
              <th>Correct</th>
              <th>Wrong</th>
          </tr>
          <tr>
              <td><span id="Correct">0</span></td>
              <td><span id="Wrong">0</span></td>
          </tr>
      </table>
    );
  }
}
