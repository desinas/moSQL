import { combineReducers } from 'redux';
import { CONVERT_MONGO_SQL } from '../actions/actions';

const convert = (state = '', action) => {
  switch (action.type) {
    case CONVERT_MONGO_SQL:
      return 'hello';
    default:
      return 'hello';
  }
};

export default combineReducers({ convert });
