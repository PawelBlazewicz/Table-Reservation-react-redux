import { combineReducers } from 'redux';
import { combineForms } from 'react-redux-form';
import authReducer from './authReducer.js';
import moment from 'moment';

export default combineReducers({
  auth: authReducer,
  forms: combineForms(
    {
      choosenDate: moment().format('LL'),
    },
    'forms',
  ),
});
