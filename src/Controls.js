import React from 'react';
import './css/Controls.css';
import Options from './Options';
import Cards from './Cards';
import Score from './Score';
import Backs from './Backs';

export default class Controls extends React.Component {
  render() {
    return (
      <div class="Controls">
        <Options />
        <Cards />
        <table class="ControlTable">
          <tr>
            <td><button class="ControlButton" onclick="highLow('h')">Higher</button></td>
            <td><button class="ControlButton" onclick="highLow('l')">Lower</button></td>
          </tr>
        </table>
        <Score />
        <Backs />
      </div>
    );
  }
}
