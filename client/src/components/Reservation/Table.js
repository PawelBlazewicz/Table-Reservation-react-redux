import React from 'react';
import Hours from './Hours.js';

const Table = (props) => {
  return (
    <div className="table">
      Hello from table {props.number}
      <br />
      <img className="tableMinFoto" src={props.url} />
      <br />
      <p className="description">{props.desc} </p>
      <Hours />
    </div>
  );
};

export default Table;
