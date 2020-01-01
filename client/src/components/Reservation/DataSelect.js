import React from 'react';
import { Field, reduxForm } from 'redux-form';
import moment from 'moment';

const Dates = () => {
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

  return dates;
};

class DateSelect extends React.Component {
  componentWillMount() {
    this.props.initialize({ choosenDate: moment().format('MMMM Do YYYY') });
  }
  render() {
    //const { input: { value, onChange } } = this.props;
    return (
      <form>
        <Field name="choosenDate" type="text" component="select">
          <Dates />
        </Field>
        <button type="submit">Wybierz date</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'dateSelect',
})(DateSelect);
