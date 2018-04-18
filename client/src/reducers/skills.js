const skills = (state = {}, skills) => {
  switch (skills.type) {
    case 'MODIFY_SKILL':
      return ({...state, maya: skills.skills})
    case 'INITIAL_SKILLS':
      return skills.skills
    default:
      return state
  }
}

export default skills