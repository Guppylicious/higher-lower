import React from 'react';
import './css/Controls.css';
import Options from './Options';
import Cards from './Cards';
import Score from './Score';
import Backs from './Backs';

export default function Controls(props) {
  return (
    <div className="Controls">
      <Options onClick={props.onOptionsClick} />
      <Cards
        drawnCard={props.drawnCard}
        remaining={props.remaining}
        backColour={props.backColour}
      />
      <table className="ControlTable">
        <tbody>
          <tr>
            <td><button className="ControlButton" onClick={props.onHigherClick}>Higher</button></td>
            <td><button className="ControlButton" onClick={props.onLowerClick}>Lower</button></td>
          </tr>
        </tbody>
      </table>
      <Score
        correct={props.correct}
        wrong={props.wrong}
      />
      <Backs />
    </div>
  );
}
