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
            <td>
              <img
                className="greyBack"
                src={`${process.env.PUBLIC_URL}/img/backs/grey_back.png`}
              />
            </td>
            <td>
              <img
                className="greyBack"
                src={`${process.env.PUBLIC_URL}/img/backs/blue_back.png`}
              />
            </td>
            <td>
              <img
                className="greyBack"
                src={`${process.env.PUBLIC_URL}/img/backs/green_back.png`}
              />
            </td>
            <td>
              <img
                className="greyBack"
                src={`${process.env.PUBLIC_URL}/img/backs/red_back.png`}
              />
            </td>
            <td>
              <img
                className="greyBack"
                src={`${process.env.PUBLIC_URL}/img/backs/purple_back.png`}
              />
            </td>
            <td>
              <img
                className="greyBack"
                src={`${process.env.PUBLIC_URL}/img/backs/yellow_back.png`}
              />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}
