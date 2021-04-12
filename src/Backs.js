import React from 'react';
import './css/Backs.css';

export default class Backs extends React.Component {
  render() {
    return(
      <table class="BacksTable">
          <tr>
              <th colspan="6">Change Colour</th>
          </tr>
          <tr>
              <td><button class="BacksButton" id="GreyBack" onclick="changeBack('grey')"></button></td>
              <td><button class="BacksButton" id="BlueBack" onclick="changeBack('blue')"></button></td>
              <td><button class="BacksButton" id="GreenBack" onclick="changeBack('green')"></button></td>
              <td><button class="BacksButton" id="RedBack" onclick="changeBack('red')"></button></td>
              <td><button class="BacksButton" id="PurpleBack" onclick="changeBack('purple')"></button></td>
              <td><button class="BacksButton" id="YellowBack" onclick="changeBack('yellow')"></button></td>
          </tr>
      </table>
    );
  }
}
