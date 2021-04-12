import React from 'react';

export default class DealtCell extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <td id={this.props.card} className="DealtCell"></td>
    );
  }
}
