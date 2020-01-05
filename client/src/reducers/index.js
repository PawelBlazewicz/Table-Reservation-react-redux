import { combineReducers } from 'redux';
import { combineForms } from 'react-redux-form';
import authReducer from './authReducer.js';

export default combineReducers({
  auth: authReducer,
  forms: combineForms(
    {
      choosenDate: '',
    },
    'forms',
  ),
});
