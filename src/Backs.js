import React from 'react';
import './css/Backs.css';

export default class Backs extends React.Component {
  render() {
    return(
      <table className="BacksTable">
        <tbody>
          <tr>
            <th colSpan="6">Change Colour</th>
          </tr>
          <tr>
            <td><button className="BacksButton" id="GreyBack" onClick="changeBack('grey')"></button></td>
            <td><button className="BacksButton" id="BlueBack" onClick="changeBack('blue')"></button></td>
            <td><button className="BacksButton" id="GreenBack" onClick="changeBack('green')"></button></td>
            <td><button className="BacksButton" id="RedBack" onClick="changeBack('red')"></button></td>
            <td><button className="BacksButton" id="PurpleBack" onClick="changeBack('purple')"></button></td>
            <td><button className="BacksButton" id="YellowBack" onClick="changeBack('yellow')"></button></td>
          </tr>
        </tbody>
      </table>
    );
  }
}
