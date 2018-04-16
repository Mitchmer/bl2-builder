import { combineReducers } from 'redux';
import user from './user';
import userbuilds from './userbuilds'
import builds from './builds'
import flash from './flash';
import mayaSkills from './mayaSkills'

const rootReducer = combineReducers({
  user,
  userbuilds,
  flash,
  builds,
  mayaSkills,
});

export default rootReducer;
