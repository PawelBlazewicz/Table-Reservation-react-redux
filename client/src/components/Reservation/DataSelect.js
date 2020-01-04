import React from 'react';
import { connect } from 'react-redux';
import { Control } from 'react-redux-form';
import moment from 'moment';
import store from '../../index.js';
import Table from './Table.js';
import { Description } from './TableDesciption.js';
moment.locale('pl');

const Dates = () => {
  let dates = [...Array(7).keys()];
  dates = dates.map((i) =>
    moment()
      .add(i, 'day')
      .format('LL'),
  );

  dates = dates.map((e) => (
    <option key={e} value={e}>
      {e}
    </option>
  ));

  return dates;
};

const showReservations = () => {
  const date = store.getState().forms.choosenDate;
  const rez = document.querySelectorAll(`.reserved`);
  rez.forEach((e) => e.classList.remove(`reserved`));

  fetch(`/day/`, {
    method: 'Post',
    body: JSON.stringify({ date: date }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(
    fetch(`/reservations/${date}`)
      .then((data) => data.json())
      .then((data) => {
        data.reservations.forEach((e) => {
          document
            .querySelector(`.table${e.table} li[class*="${e.time}"]`)
            .classList.add(`reserved`);
        });
      }),
  );
};

class DateSelect extends React.Component {
  componentDidUpdate() {
    showReservations();
  }

  componentDidMount() {
    showReservations();
  }

  render() {
    let { forms } = this.props;
    console.log(this.props, this.state)
    const tableList = Description.map((e) => (
      <Table
        key={e.number + '-' + store.getState().forms.choosenDate}
        number={e.number}
        desc={e.desc}
        url={e.url}
        data={store.getState().forms.choosenDate}
      />
    ));
    return (
      <div>
        <form>
          <Control.select model="forms.choosenDate" id="forms.choosenDate">
            <Dates />
          </Control.select>
        </form>
        <div className="reservation">{tableList}</div>
      </div>
    );
  }
}

const selector = (state) => ({ forms: state.forms });

export default connect(selector)(DateSelect);
