import {
  BUILDS,
  ADD_BUILD,
} from '../actions/builds'

const builds =( state = [], action ) => {
  switch (action.type) {
    case BUILDS:
      return action.builds
    case ADD_BUILD:
      return [action.build, ...state]
    default:
      return state
  }
}

export default builds