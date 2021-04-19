import React from 'react';
import './css/Options.css';

export default function Options(props) {
  return (
    <table className="OptionTable">
      <tbody>
        <tr>
          <td><button className="OptionButton" onClick={props.onClick}>New Game</button></td>
        </tr>
      </tbody>
    </table>
  );
}
