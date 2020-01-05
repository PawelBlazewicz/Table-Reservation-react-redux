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
            Potwierdzenia rezerwacji zostanie wysłane na adres e-mail: ${email}.
            Proszę podać swoje nazwisko i potwierdzić rezerwacje.
            `,
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
            }).then((x) => {
              document
                .querySelector(`.table${table} li[class*="${time}"]`)
                .classList.add(`reserved`);

              document
              .querySelector(`.table${e.table} li[class*="${e.time}"]`)
              .innerHTML = 'Zarezerwowany';
            });
          }
        }
      } else {
        alert('W celu dokonania rezerwacji należy się zalogować.');
      }
    };

    document
      .querySelector(`.table${this.props.number}`)
      .addEventListener('click', makeReservation);
  }

  render() {
    return (
      <div className="column">
        <div
          className={'ui fluid card table table' + this.props.number}
          data-data={this.props.data}
          data-number={this.props.number}
        >
          <div className="image">
            <img className="tableMinFoto" src={this.props.url} />
          </div>
          <div className="content">
            <div className="header">Stolik nr {this.props.number}</div>
            <div className="description">
              <p>{this.props.desc}</p>
            </div>
          </div>
          <Hours />
        </div>
      </div>
    );
  }
}

export default Table;
