import React from 'react';
import Hours from './Hours.js';
//import _ from 'lodash';

class Table extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={"table table"+this.props.number} data-data={this.props.data}>
        Hello from table {this.props.number}
        <br />
        <img className="tableMinFoto" src={this.props.url} />
        <br />
        <p className="description">{this.props.desc} </p>
        <Hours />
      </div>
    );
  }
}

export default Table;
