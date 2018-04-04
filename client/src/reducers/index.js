import { combineReducers } from 'redux';
import user from './user';
import userbuilds from './userbuilds'
import builds from './builds'
import flash from './flash';

const rootReducer = combineReducers({
  user,
  userbuilds,
  flash,
  builds,
});

export default rootReducer;
