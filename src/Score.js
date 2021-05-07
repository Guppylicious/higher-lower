import React from 'react';
import './css/Score.css';

export default function Score(props) {
  return (
    <table className="ScoreTable">
      <tbody>
        <tr>
            <th>Correct</th>
            <th>Wrong</th>
        </tr>
        <tr>
            <td><span id="Correct">{props.correct}</span></td>
            <td><span id="Wrong">{props.wrong}</span></td>
        </tr>
      </tbody>
    </table>
  );
}
