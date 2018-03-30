import { combineReducers } from 'redux';
import user from './user';
import builds from './builds'
import flash from './flash';

const rootReducer = combineReducers({
  user,
  flash,
  builds,
});

export default rootReducer;
