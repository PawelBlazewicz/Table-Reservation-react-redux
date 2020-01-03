import React from 'react';
import Hours from './Hours.js';
import store from '../../index.js';

class Table extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const makeReservation = (e) => {
      if (store.getState().auth.isSignedIn) {
        if (e.target.matches('li.reserved')) {
          return;
        } else if (e.target.matches('li')) {
          const email = store.getState().auth.email;
          const date = e.target.parentElement.parentElement.dataset.data;
          const table = e.target.parentElement.parentElement.dataset.number;
          const time = e.target.childNodes[0].nodeValue;

          name = prompt(
            `

              Rezerwacja stolika nr ${table} na godzinę ${time} dnia ${date}.
           Potwierdzenia rezerwacji zostanie wysłane za adres
           e-mail: ${email}.
           Proszę podać swoje nazwisko i potwierdzić rezerwacje.`,
            '',
          );
          if (name != 'null' && name != '') {
            fetch(`/reservations/`, {
              method: 'Post',
              body: JSON.stringify({
                date: date,
                table: table,
                time: time,
                email: email,
                message: name,
              }),
              headers: {
                'Content-Type': 'application/json',
              },
            }).then(
              document
                .querySelector(`.table${table} li[class*="${time}"]`)
                .classList.add(`reserved`),
            );
          }
        }
      } else {
        alert('W celu wykonania rezerwacji należy się zalogowac.');
      }
    };

    document
      .querySelector(`.table${this.props.number}`)
      .addEventListener('click', makeReservation);
  }

  render() {
    return (
      <div
        className={'table table' + this.props.number}
        data-data={this.props.data}
        data-number={this.props.number}
      >
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
