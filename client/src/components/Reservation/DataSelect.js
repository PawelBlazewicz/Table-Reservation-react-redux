import React from 'react';
import { Field, reduxForm } from 'redux-form';
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

class DateSelect extends React.Component {
  componentDidUpdate() {
    let date = store.getState().form.dateSelect.values.choosenDate;

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
          console.log(data.reservations);
          data.reservations.forEach((e) => {
            document
              .querySelector(`.table${e.table} li[class*="${e.time}"]`)
              .classList.add(`reserved`);
            document.querySelector(`.table${e.table} li[class*="${e.time}"]`)
            .innerHTML = 'zarezerwowany';
          });
        }),
    );
  }

  componentWillMount() {
    this.props.initialize({ choosenDate: moment().format('LL') });
  }

  render() {
    //const { input: { value, onChange } } = this.props;
    const tableList = Description.map((e) => (
      <Table
        key={e.number}
        number={e.number}
        desc={e.desc}
        url={e.url}
        data={store.getState().form.dateSelect.values.choosenDate}
      />
    ));
    return (
      <div>
        <form>
          <Field name="choosenDate" type="text" component="select">
            <Dates />
          </Field>
        </form>
        <div className="reservation">{tableList}</div>
      </div>
    );
  }
}

export default reduxForm({
  form: 'dateSelect',
})(DateSelect);
