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

class CataclysmSelector extends React.Component {

  tierModifier = (tier, mod) => {
    const {
      setTiers,
      tier2,
      tier3,
      tier4,
      tier5,
      tier6,
    } = this.props
    switch(tier) {
      case 2:
        setTiers({ cataclysm2: tier2 + mod })
        break
      case 3:
        setTiers({ cataclysm3: tier3 + mod })
        break
      case 4:
        setTiers({ cataclysm4: tier4 + mod })
        break
      case 5:
        setTiers({ cataclysm5: tier5 + mod })
        break
      case 6:
        setTiers({ cataclysm6: tier6 + mod })
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
      case 'flicker':
        callbackState({ maya: {...maya, flicker: maya.flicker + modifier } }, 'cataclysm' )
        break
      case 'foresight':
        callbackState({ maya: {...maya, foresight: maya.foresight + modifier } }, 'cataclysm' )
        break
      case 'immolate':
        callbackState({ maya: {...maya, immolate: maya.immolate + modifier } }, 'cataclysm' )
        break
      case 'helios':
        callbackState({ maya: {...maya, helios: maya.helios + modifier } }, 'cataclysm' )
        break
      case 'chain_reaction':
        callbackState({ maya: {...maya, chain_reaction: maya.chain_reaction + modifier } }, 'cataclysm' )
        break
      case 'backdraft':
        callbackState({ maya: {...maya, backdraft: maya.backdraft + modifier } }, 'cataclysm' )
        break
      case 'cloud_kill':
        callbackState({ maya: {...maya, cloud_kill: maya.cloud_kill + modifier } }, 'cataclysm' )
        break
      case 'reaper':
        callbackState({ maya: {...maya, reaper: maya.reaper + modifier } }, 'cataclysm' )
        break
      case 'blight_phoenix':
        callbackState({ maya: {...maya, blight_phoenix: maya.blight_phoenix + modifier } }, 'cataclysm' )
        break
      case 'ruin':
        callbackState({ maya: {...maya, ruin: maya.ruin + modifier } }, 'cataclysm' )
        break
      default: break
    }
  }

  render() {
    const { 
      maya, 
      level, 
      cataclysm,
      tier2,
      tier3,
      tier4,
      tier5,
      tier6,
    } = this.props

    return (
      <div>
        <Divider horizontal>
          Cataclysm: {cataclysm}
        </Divider>
        <Grid.Row>
          <div style={twoSkill}>
            <div style={skillFlicker}>
              <div style={modifyBox}>
                {
                  maya.flicker < 5 && level < 72 ?
                    <img src={addCircle} style={circles} onClick={() => this.mayaSkill('flicker', 1)}/>
                  :
                    <img src={addCircleDisabled} style={circles} />                
                }
                {
                  maya.flicker > 0 && tier2 < 1 ?
                    <img src={removeCircle} style={circles} onClick={() => this.mayaSkill('flicker', -1)}/>
                  :
                    <img src={removeCircleDisabled} style={circles} />
                }
              </div>
              <div style={counterBox}>
                {maya.flicker}/5
              </div>
            </div>
            <div style={skillForesight}>
              <div style={modifyBox}>
                {
                  maya.foresight < 5 && level < 72 ?
                    <img src={addCircle} style={circles} onClick={() => this.mayaSkill('foresight', 1)}/>
                  :
                    <img src={addCircleDisabled} style={circles} />                
                }
                {
                  maya.foresight > 0 && tier2 < 1 ?
                    <img src={removeCircle} style={circles} onClick={() => this.mayaSkill('foresight', -1)}/>
                  :
                    <img src={removeCircleDisabled} style={circles} />
                }
              </div>
              <div style={counterBox}>
                {maya.foresight}/5
              </div>
            </div>
          </div>
        </Grid.Row>
        <Grid.Row>
          <div style={twoSkill}>
            <div style={skillImmolate}>
              <div style={modifyBox}>
                {
                  maya.immolate < 5 && level < 72 && cataclysm >= 5 ?
                    <img src={addCircle} style={circles} onClick={() => {
                        this.mayaSkill('immolate', 1)
                        this.tierModifier(2, 1)
                      }}
                    />
                  :
                    <img src={addCircleDisabled} style={circles} />                
                }
                {
                  maya.immolate > 0 && tier3 < 1 ?
                    <img src={removeCircle} style={circles} onClick={() => {
                        this.mayaSkill('immolate', -1)
                        this.tierModifier(2, -1)
                      }}
                    />
                  :
                    <img src={removeCircleDisabled} style={circles} />
                }
              </div>
              <div style={counterBox}>
                {maya.immolate}/5
              </div>
            </div>
            <div style={skillHelios}>
              <div style={modifyBox}>
                {
                  maya.helios < 5 && level < 72 && cataclysm >= 5 ?
                    <img src={addCircle} style={circles} onClick={() => {
                        this.mayaSkill('helios', 1)
                        this.tierModifier(2, 1)
                      }}
                    />
                  :
                    <img src={addCircleDisabled} style={circles} />                
                }
                {
                  maya.helios > 0 && tier3 < 1 ?
                    <img src={removeCircle} style={circles} onClick={() => {
                        this.mayaSkill('helios', -1)
                        this.tierModifier(2, -1)
                      }}
                    />
                  :
                    <img src={removeCircleDisabled} style={circles} />
                }
              </div>
              <div style={counterBox}>
                {maya.helios}/5
              </div>
            </div>
          </div>
        </Grid.Row>
        <Grid.Row>
          <div style={twoSkill}>
            <div style={skillChainReaction}>
              <div style={modifyBox}>
                {
                  maya.chain_reaction < 5 && level < 72 && cataclysm >= 10 ?
                    <img src={addCircle} style={circles} onClick={() => {
                        this.mayaSkill('chain_reaction', 1)
                        this.tierModifier(3, 1)
                      }}
                    />
                  :
                    <img src={addCircleDisabled} style={circles} />                
                }
                {
                  maya.chain_reaction > 0 && tier4 < 1 ?
                    <img src={removeCircle} style={circles} onClick={() => {
                        this.mayaSkill('chain_reaction', -1)
                        this.tierModifier(3, -1)
                      }}
                    />
                  :
                    <img src={removeCircleDisabled} style={circles} />
                }
              </div>
              <div style={counterBox}>
                {maya.chain_reaction}/5
              </div>
            </div>
            <div style={skillCloudKill}>
              <div style={modifyBox}>
                {
                  maya.cloud_kill < 1 && level < 72 && cataclysm >= 10 ?
                    <img src={addCircle} style={circles} onClick={() => {
                        this.mayaSkill('cloud_kill', 1)
                        this.tierModifier(3, 1)
                      }}
                    />
                  :
                    <img src={addCircleDisabled} style={circles} />                
                }
                {
                  maya.cloud_kill > 0 && tier4 < 1 ?
                    <img src={removeCircle} style={circles} onClick={() => {
                        this.mayaSkill('cloud_kill', -1)
                        this.tierModifier(3, -1)
                      }}
                    />
                  :
                    <img src={removeCircleDisabled} style={circles} />
                }
              </div>
              <div style={counterBox}>
                {maya.cloud_kill}/1
              </div>
            </div>
            <div style={skillBackdraft}>
              <div style={modifyBox}>
                {
                  maya.backdraft < 5 && level < 72 && cataclysm >= 10 ?
                    <img src={addCircle} style={circles} onClick={() => {
                        this.mayaSkill('backdraft', 1)
                        this.tierModifier(3, 1)
                      }}
                    />
                  :
                    <img src={addCircleDisabled} style={circles} />                
                }
                {
                  maya.backdraft > 0 && tier4 < 1 ?
                    <img src={removeCircle} style={circles} onClick={() => {
                        this.mayaSkill('backdraft', -1)
                        this.tierModifier(3, -1)
                      }}
                    />
                  :
                    <img src={removeCircleDisabled} style={circles} />
                }
              </div>
              <div style={counterBox}>
                {maya.backdraft}/5
              </div>
            </div>
          </div>
        </Grid.Row>
        <Grid.Row>
          <div style={oneSkill}>
            <div style={skillReaper}>
              <div style={modifyBox}>
                {
                  maya.reaper < 5 && level < 72 && cataclysm >= 15 ?
                    <img src={addCircle} style={circles} onClick={() => {
                        this.mayaSkill('reaper', 1)
                        this.tierModifier(4, 1)
                      }}
                    />
                  :
                    <img src={addCircleDisabled} style={circles} />                
                }
                {
                  maya.reaper > 0 && tier5 < 1 ?
                    <img src={removeCircle} style={circles} onClick={() => {
                        this.mayaSkill('reaper', -1)
                        this.tierModifier(4, -1)
                      }}
                    />
                  :
                    <img src={removeCircleDisabled} style={circles} />
                }
              </div>
              <div style={counterBox}>
                {maya.reaper}/5
              </div>
            </div>
          </div>
        </Grid.Row>
        <Grid.Row>
          <div style={oneSkill}>
            <div style={skillBlightPhoenix}>
              <div style={modifyBox}>
                {
                  maya.blight_phoenix < 5 && level < 72 && cataclysm >= 20 ?
                    <img src={addCircle} style={circles} onClick={() => {
                        this.mayaSkill('blight_phoenix', 1)
                        this.tierModifier(5, 1)
                      }}
                    />
                  :
                    <img src={addCircleDisabled} style={circles} />                
                }
                {
                  maya.blight_phoenix > 0 && tier6 < 1 ?
                    <img src={removeCircle} style={circles} onClick={() => {
                        this.mayaSkill('blight_phoenix', -1)
                        this.tierModifier(5, -1)
                      }}
                    />
                  :
                    <img src={removeCircleDisabled} style={circles} />
                }
              </div>
              <div style={counterBox}>
                {maya.blight_phoenix}/5
              </div>
            </div>
          </div>
        </Grid.Row>
        <Grid.Row>
          <div style={oneSkill}>
            <div style={skillRuin}>
              <div style={modifyBox}>
                {
                  maya.ruin < 1 && level < 72 && cataclysm >= 20 ?
                    <img src={addCircle} style={circles} onClick={() => {
                        this.mayaSkill('ruin', 1)
                        this.tierModifier(6, 1)
                      }}
                    />
                  :
                    <img src={addCircleDisabled} style={circles} />                
                }
                {
                  maya.ruin > 0 ?
                    <img src={removeCircle} style={circles} onClick={() => {
                        this.mayaSkill('ruin', -1)
                        this.tierModifier(6, -1)
                      }}
                    />
                  :
                    <img src={removeCircleDisabled} style={circles} />
                }
              </div>
              <div style={counterBox}>
                {maya.ruin}/1
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

const skillFlicker = {
  ...skillsSquare,
  backgroundPosition: '-232px -5px',
}

const skillForesight = {
  ...skillsSquare,
  backgroundPosition: '-294px -5px',
}

const skillImmolate = {
  ...skillsSquare,
  backgroundPosition: '-232px -68px',
}

const skillHelios = {
  ...skillsSquare,
  backgroundPosition: '-294px -68px',
}

const skillChainReaction = {
  ...skillsSquare,
  backgroundPosition: '-5px -131px',
}

const skillCloudKill = {
  ...skillsSquare,
  backgroundPosition: '-67px -131px',
}

const skillBackdraft = {
  ...skillsSquare,
  backgroundPosition: '-129px -131px',
}

const skillReaper = {
  ...skillsSquare,
  backgroundPosition: '-191px -131px',
}

const skillBlightPhoenix = {
  ...skillsHex,
  backgroundPosition: '-253px -131px',
}

const skillRuin = {
  ...skillsSquare,
  backgroundPosition: '-5px -204px',
}

export default CataclysmSelector