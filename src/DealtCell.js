import React, { useState } from 'react';

export default function DealtCell(props) {
  const cardImg = `${process.env.PUBLIC_URL}/img/cards/${props.card}.png`;

  return (
      <td
        id={props.card}
        className="DealtCell"
      >
        {props.dealtCards.includes(props.card) ? <img className="DealtImage" src={cardImg} /> : ''}
      </td>
  );
}
