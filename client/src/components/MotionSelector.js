import React from 'react'
import { 
  List, 
  Header,
  Divider,
  Loader,
  Icon,
  Grid,
} from 'semantic-ui-react'
import mayaskills from '../assets/images/mayaskills.png'
import addCircle from '../assets/images/addcircle.png'
import addCircleDisabled from '../assets/images/addcircle_disabled.png'
import removeCircle from '../assets/images/removecircle.png'
import removeCircleDisabled from '../assets/images/removecircle_disabled.png'

class MotionSelector extends React.Component {
  state = {
    tier2: 0,
    tier3: 0,
    tier4: 0,
    tier5: 0,
    tier6: 0,
  }

  tierModifier = (tier, mod) => {
    const {
      tier2,
      tier3,
      tier4,
      tier5,
      tier6,
    } = this.state
    switch(tier) {
      case 2:
        this.setState({ tier2: tier2 + mod })
        break
      case 3:
        this.setState({ tier3: tier3 + mod })
        break
      case 4:
        this.setState({ tier4: tier4 + mod })
        break
      case 5:
        this.setState({ tier5: tier5 + mod })
        break
      case 6:
        this.setState({ tier6: tier6 + mod })
        break
      default: break
    }
  }

  mayaSkill = (skill, modifier) => {
    const { 
      callbackState,
      maya,
    } = this.props

    switch(skill) {
      case 'ward':
        callbackState({ maya: {...maya, ward: maya.ward + modifier } }, 'motion' )
        break
      case 'accelerate':
        callbackState({ maya: {...maya, accelerate: maya.accelerate + modifier } }, 'motion' )
        break
      case 'kinetic_reflection':
        callbackState({ maya: {...maya, kinetic_reflection: maya.kinetic_reflection + modifier } }, 'motion' )
        break
      case 'suspension':
        callbackState({ maya: {...maya, suspension: maya.suspension + modifier } }, 'motion' )
        break
      case 'inertia':
        callbackState({ maya: {...maya, inertia: maya.inertia + modifier } }, 'motion' )
        break
      case 'fleet' :
        callbackState({ maya: {...maya, fleet: maya.fleet + modifier } }, 'motion' )
        break
      case 'converge':
        callbackState({ maya: {...maya, converge: maya.converge + modifier } }, 'motion' )
        break
      case 'quicken':
        callbackState({ maya: {...maya, quicken: maya.quicken + modifier } }, 'motion' )
        break
      case 'sub_sequence':
        callbackState({ maya: {...maya, sub_sequence: maya.sub_sequence + modifier } }, 'motion' )
        break
      case 'thoughtlock':
        callbackState({ maya: {...maya, thoughtlock: maya.thoughtlock + modifier } }, 'motion' )
        break
      default: break
    }
  }
  
  render() {
    const { 
      maya, 
      level, 
      motion,
    } = this.props

    const {
      tier2,
      tier3,
      tier4,
      tier5,
      tier6,
    } = this.state

    return (
      <div>
        <Divider horizontal>
          Motion: {motion}
        </Divider>
        <Grid.Row>
          <div style={twoSkill}>
            <div style={skillWard}>
              <div style={modifyBox}>
                {
                  maya.ward < 5 && level < 72 ?
                    <img src={addCircle} style={circles} onClick={() => this.mayaSkill('ward', 1)}/>
                  :
                    <img src={addCircleDisabled} style={circles} />                
                }
                {
                  maya.ward > 0 && tier2 < 1 ?
                    <img src={removeCircle} style={circles} onClick={() => this.mayaSkill('ward', -1)}/>
                  :
                    <img src={removeCircleDisabled} style={circles} />
                }
              </div>
              <div style={counterBox}>
                {maya.ward}/5
              </div>
            </div>
            <div style={skillAccelerate}>
              <div style={modifyBox}>
                {
                  maya.accelerate < 5 && level < 72 ?
                    <img src={addCircle} style={circles} onClick={() => this.mayaSkill('accelerate', 1)}/>
                  :
                    <img src={addCircleDisabled} style={circles} />                
                }
                {
                  maya.accelerate > 0 && tier2 < 1 ?
                    <img src={removeCircle} style={circles} onClick={() => this.mayaSkill('accelerate', -1)}/>
                  :
                    <img src={removeCircleDisabled} style={circles} />
                }
              </div>
              <div style={counterBox}>
                {maya.accelerate}/5
              </div>
            </div>
          </div>
        </Grid.Row>
        <Grid.Row>
          <div style={twoSkill}>
            <div style={skillSuspension}>
              <div style={modifyBox}>
                {
                  maya.suspension < 5 && level < 72 && motion >= 5 ?
                    <img src={addCircle} style={circles} onClick={() => {
                        this.mayaSkill('suspension', 1)
                        this.tierModifier(2, 1)
                      }}
                    />
                  :
                    <img src={addCircleDisabled} style={circles} />                
                }
                {
                  maya.suspension > 0 && tier3 < 1 ?
                    <img src={removeCircle} style={circles} onClick={() => {
                        this.mayaSkill('suspension', -1)
                        this.tierModifier(2, -1)
                      }}
                    />
                  :
                    <img src={removeCircleDisabled} style={circles} />
                }
              </div>
              <div style={counterBox}>
                {maya.suspension}/5
              </div>
            </div>
            <div style={skillKineticReflection}>
              <div style={modifyBox}>
                {
                  maya.kinetic_reflection < 5 && level < 72 && motion >= 5 ?
                    <img src={addCircle} style={circles} onClick={() => {
                        this.mayaSkill('kinetic_reflection', 1)
                        this.tierModifier(2, 1)
                      }}
                    />
                  :
                    <img src={addCircleDisabled} style={circles} />                
                }
                {
                  maya.kinetic_reflection > 0 && tier3 < 1 ?
                    <img src={removeCircle} style={circles} onClick={() => {
                        this.mayaSkill('kinetic_reflection', -1)
                        this.tierModifier(2, -1)
                      }}
                    />
                  :
                    <img src={removeCircleDisabled} style={circles} />
                }
              </div>
              <div style={counterBox}>
                  {maya.kinetic_reflection}/5
              </div>
            </div>
          </div>
        </Grid.Row>
        <Grid.Row>
          <div style={twoSkill}>
            <div style={skillFleet}>
              <div style={modifyBox}>
                {
                  maya.fleet < 5 && level < 72 && motion >= 10 ?
                    <img src={addCircle} style={circles} onClick={() => {
                        this.mayaSkill('fleet', 1)
                        this.tierModifier(3, 1)
                      }}
                    />
                  :
                    <img src={addCircleDisabled} style={circles} />                
                }
                {
                  maya.fleet > 0 && tier4 < 1 ?
                    <img src={removeCircle} style={circles} onClick={() => {
                        this.mayaSkill('fleet', -1)
                        this.tierModifier(3, -1)
                      }}
                    />
                  :
                    <img src={removeCircleDisabled} style={circles} />
                }
              </div>
              <div style={counterBox}>
                {maya.fleet}/5
              </div>
            </div>
            <div style={skillConverge}>
              <div style={modifyBox}>
                {
                  maya.converge < 1 && level < 72 && motion >= 10 ?
                    <img src={addCircle} style={circles} onClick={() => {
                        this.mayaSkill('converge', 1)
                        this.tierModifier(3, 1)
                      }}
                    />
                  :
                    <img src={addCircleDisabled} style={circles} />                
                }
                {
                  maya.converge > 0 && tier4 < 1 ?
                    <img src={removeCircle} style={circles} onClick={() => {
                        this.mayaSkill('converge', -1)
                        this.tierModifier(3, -1)
                      }}
                    />
                  :
                    <img src={removeCircleDisabled} style={circles} />
                }
              </div>
              <div style={counterBox}>
                {maya.converge}/1
              </div>
            </div>
            <div style={skillInertia}>
              <div style={modifyBox}>
                {
                  maya.inertia < 5 && level < 72 && motion >= 10 ?
                    <img src={addCircle} style={circles} onClick={() => {
                        this.mayaSkill('inertia', 1)
                        this.tierModifier(3, 1)
                      }}
                    />
                  :
                    <img src={addCircleDisabled} style={circles} />                
                }
                {
                  maya.inertia > 0 && tier4 < 1 ?
                    <img src={removeCircle} style={circles} onClick={() => {
                        this.mayaSkill('inertia', -1)
                        this.tierModifier(3, -1)
                      }}
                    />
                  :
                    <img src={removeCircleDisabled} style={circles} />
                }
              </div>
              <div style={counterBox}>
                {maya.inertia}/5
              </div>
            </div>
          </div>
        </Grid.Row>
        <Grid.Row>
          <div style={oneSkill}>
            <div style={skillQuicken}>
              <div style={modifyBox}>
                {
                  maya.quicken < 5 && level < 72 && motion >= 15 ?
                    <img src={addCircle} style={circles} onClick={() => {
                        this.mayaSkill('quicken', 1)
                        this.tierModifier(4, 1)
                      }}
                    />
                  :
                    <img src={addCircleDisabled} style={circles} />                
                }
                {
                  maya.quicken > 0 && tier5 < 1 ?
                    <img src={removeCircle} style={circles} onClick={() => {
                        this.mayaSkill('quicken', -1)
                        this.tierModifier(4, -1)
                      }}
                    />
                  :
                    <img src={removeCircleDisabled} style={circles} />
                }
              </div>
              <div style={counterBox}>
                {maya.quicken}/5
              </div>
            </div>
          </div>
        </Grid.Row>
        <Grid.Row>
          <div style={oneSkill}>
            <div style={skillSubSequence}>
              <div style={modifyBox}>
                {
                  maya.sub_sequence < 5 && level < 72 && motion >= 20 ?
                    <img src={addCircle} style={circles} onClick={() => {
                        this.mayaSkill('sub_sequence', 1)
                        this.tierModifier(5, 1)
                      }}
                    />
                  :
                    <img src={addCircleDisabled} style={circles} />                
                }
                {
                  maya.sub_sequence > 0 && tier6 < 1 ?
                    <img src={removeCircle} style={circles} onClick={() => {
                        this.mayaSkill('sub_sequence', -1)
                        this.tierModifier(5, -1)
                      }}
                    />
                  :
                    <img src={removeCircleDisabled} style={circles} />
                }
              </div>
              <div style={counterBox}>
                {maya.sub_sequence}/5
              </div>
            </div>
          </div>
        </Grid.Row>
        <Grid.Row>
          <div style={oneSkill}>
            <div style={skillThoughtlock}>
              <div style={modifyBox}>
                {
                  maya.thoughtlock < 1 && level < 72 && motion >= 25 ?
                    <img src={addCircle} style={circles} onClick={() => {
                        this.mayaSkill('thoughtlock', 1)
                        this.tierModifier(6, 1)
                      }}
                    />
                  :
                    <img src={addCircleDisabled} style={circles} />                
                }
                {
                  maya.thoughtlock > 0 ?
                    <img src={removeCircle} style={circles} onClick={() => {
                        this.mayaSkill('thoughtlock', -1)
                        this.tierModifier(6, -1)
                      }}
                    />
                  :
                    <img src={removeCircleDisabled} style={circles} />
                }
              </div>
              <div style={counterBox}>
                {maya.thoughtlock}/1
              </div>
            </div>
          </div>
        </Grid.Row>
      </div>
    )
  }
}

const skillsSquare = {
  backgroundImage: `url(${mayaskills})`,
  width: '52px',
  height: '53px',
}

const skillsHex = {
  backgroundImage: `url(${mayaskills})`,
  width: '55px',
  height: '63px',
}

const twoSkill = {
  padding: '10%',
  height: '65px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}

const oneSkill = {
  height: '65px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const modifyBox = {
  height: '50%',
  display: 'flex',
  justifyContent: 'space-between',
}

const counterBox = {
  height: '50%',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
  color: 'white',
}

const circles = {
  height: '20px',
  width: '20px',
}

const skillWard = {
  ...skillsSquare,
  backgroundPosition: '-315px -267px',
}

const skillAccelerate = {
  ...skillsSquare,
  backgroundPosition: '-356px -5px',
}

const skillSuspension = {
  ...skillsSquare,
  backgroundPosition: '-356px -68px',
}

const skillKineticReflection = {
  ...skillsHex,
  backgroundPosition: '-318px -131px',
}

const skillFleet = {
  ...skillsSquare,
  backgroundPosition: '-377px -204px',
}

const skillConverge = {
  ...skillsSquare,
  backgroundPosition: '-377px -267px',
}

const skillInertia = {
  ...skillsHex,
  backgroundPosition: '-5px -330px',
}

const skillQuicken = {
  ...skillsSquare,
  backgroundPosition: '-70px -330px',
}

const skillSubSequence = {
  ...skillsSquare,
  backgroundPosition: '-132px -330px',
}

const skillThoughtlock = {
  ...skillsSquare,
  backgroundPosition: '-194px -330px',
}

export default MotionSelector