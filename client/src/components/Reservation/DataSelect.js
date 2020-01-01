import React from 'react';
import moment from 'moment';

const DateSelect = () => {
  let dates = [...Array(7).keys()];
  dates = dates.map((i) =>
    moment()
      .add(i, 'day')
      .format('MMMM Do YYYY'),
  );

  dates = dates.map((e) => (
    <option key={e} value={e}>
      {e}
    </option>
  ));

  return <select>{dates}</select>;
};

export default DateSelect;