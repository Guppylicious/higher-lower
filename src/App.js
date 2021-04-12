import React from 'react';
import './css/App.css';
import Controls from './Controls';
import Board from './Board';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Higher or Lower</h1>
        </header>
        <div className="Game">
          <Controls />
          <Board />
        </div>
      </div>
    );
  }
}
