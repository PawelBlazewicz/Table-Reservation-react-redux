import { combineReducers } from 'redux';
import { reducer as formReducer, combineForms  } from 'react-redux-form';
import authReducer from './authReducer.js';
import moment from 'moment';


export default combineReducers({
  auth: authReducer,
  form: formReducer,
  forms: combineForms({
    choosenDate: moment().format('LL'),
  },'forms'),
});
