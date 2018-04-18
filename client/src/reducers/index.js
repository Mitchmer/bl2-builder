import { combineReducers } from 'redux';
import user from './user';
import userbuilds from './userbuilds'
import builds from './builds'
import flash from './flash';
import skills from './skills'

const rootReducer = combineReducers({
  user,
  userbuilds,
  flash,
  builds,
  skills,
});

export default rootReducer;
