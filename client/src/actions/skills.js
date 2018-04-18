

export const skillSender = (skills) => {
  return (dispatch) => {
    dispatch({ type: 'MODIFY_SKILL', skills })
  }
}



export const initialSkills = () => {
  let skills = {
    maya: {
      ward: 0, 
      accelerate: 0, 
      kinetic_reflection: 0, 
      suspension: 0, 
      inertia: 0, 
      fleet: 0, 
      converge: 0,
      quicken: 0,
      sub_sequence: 0,
      thoughlock: 0,
      minds_eye: 0,
      sweet_release: 0,
      restoration: 0,
      wreck: 0,
      elated: 0,
      recompense: 0,
      res: 0,
      sustenance: 0,
      life_tap: 0,
      scorn: 0,
      flicker: 0,
      foresight: 0,
      immolate: 0,
      helios: 0,
      chain_reaction: 0,
      backdraft: 0,
      cloud_kill: 0,
      reaper: 0,
      blight_pheonix: 0,
      ruin: 0,
    }
  }
  return (dispatch) => {
    dispatch({ type: 'INITIAL_SKILLS', skills })
  }
}