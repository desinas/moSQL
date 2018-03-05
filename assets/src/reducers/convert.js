import { combineReducers } from 'redux';
import { CONVERT_MONGO_SQL } from '../actions/actions';
import convertMongoToSql from '../components/Utils';

const convert = (state = '', action) => {
  switch (action.type) {
    case CONVERT_MONGO_SQL:
      return convertMongoToSql(action.value);
    default:
      return state;
  }
};

export default combineReducers({ convert });
