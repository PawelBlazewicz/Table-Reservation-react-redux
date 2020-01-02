import React from 'react';
import Hours from './Hours.js';
import _ from 'lodash';

class Table extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    function init(day) {
      fetch(`/day/`, {
        method: 'Post',
        body: JSON.stringify({ date : day }),
      headers: {
        "Content-Type": "application/json",
      }
      })
    };
    const memoInit = _.memoize(init);    

    memoInit(this.props.data);    
  }

  render() {
    return (
      <div className="table" data-data={this.props.data}>
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
