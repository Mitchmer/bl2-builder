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

class HarmonySelector extends React.Component {

  mayaSkill = (skill, modifier) => {
    const { 
      callbackState,
      maya,
    } = this.props

    switch(skill) {
      case 'minds_eye':
        callbackState({ maya: {...maya, minds_eye: maya.minds_eye + modifier } }, 'harmony' )
        break
      case 'sweet_release':
        callbackState({ maya: {...maya, sweet_release: maya.sweet_release + modifier } }, 'harmony' )
        break
      case 'restoration':
        callbackState({ maya: {...maya, restoration: maya.restoration + modifier } }, 'harmony' )
        break
      case 'wreck':
        callbackState({ maya: {...maya, wreck: maya.wreck + modifier } }, 'harmony' )
        break
      case 'elated':
        callbackState({ maya: {...maya, elated: maya.elated + modifier } }, 'harmony' )
        break
      case 'recompense':
        callbackState({ maya: {...maya, recompense: maya.recompense + modifier } }, 'harmony' )
        break
      case 'res':
        callbackState({ maya: {...maya, res: maya.res + modifier } }, 'harmony' )
        break
      case 'sustenance':
        callbackState({ maya: {...maya, sustenance: maya.sustenance + modifier } }, 'harmony' )
        break
      case 'life_tap':
        callbackState({ maya: {...maya, life_tap: maya.life_tap + modifier } }, 'harmony' )
        break
      case 'scorn':
        callbackState({ maya: {...maya, scorn: maya.scorn + modifier } }, 'harmony' )
        break
      default: break
    }
  }
  
  render() {
    const { 
      maya, 
      level, 
      harmony,
    } = this.props

    return (
      <div>
        <Divider horizontal>
          Harmony: {harmony}
        </Divider>
        <Grid.Row>
          <div style={twoSkill}>
            <div style={skillMindsEye}>
              <div style={modifyBox}>
                {
                  maya.minds_eye < 5 && level < 72 ?
                    <img src={addCircle} style={circles} onClick={() => this.mayaSkill('minds_eye', 1)}/>
                  :
                    <img src={addCircleDisabled} style={circles} />                
                }
                {
                  maya.minds_eye > 0 ?
                    <img src={removeCircle} style={circles} onClick={() => this.mayaSkill('minds_eye', -1)}/>
                  :
                    <img src={removeCircleDisabled} style={circles} />
                }
              </div>
              <div style={counterBox}>
                {maya.minds_eye}/5
              </div>
            </div>
            <div style={skillSweetRelease}>
              <div style={modifyBox}>
                {
                  maya.sweet_release < 5 && level < 72 ?
                    <img src={addCircle} style={circles} onClick={() => this.mayaSkill('sweet_release', 1)}/>
                  :
                    <img src={addCircleDisabled} style={circles} />                
                }
                {
                  maya.sweet_release > 0 ?
                    <img src={removeCircle} style={circles} onClick={() => this.mayaSkill('sweet_release', -1)}/>
                  :
                    <img src={removeCircleDisabled} style={circles} />
                }
              </div>
              <div style={counterBox}>
                {maya.sweet_release}/5
              </div>
            </div>
          </div>
        </Grid.Row>
        <Grid.Row>
          <div style={twoSkill}>
            <div style={skillRestoration}>
              <div style={modifyBox}>
                {
                  maya.restoration < 5 && level < 72 && harmony >= 5 ?
                    <img src={addCircle} style={circles} onClick={() => this.mayaSkill('restoration', 1)}/>
                  :
                    <img src={addCircleDisabled} style={circles} />                
                }
                {
                  maya.restoration > 0 ?
                    <img src={removeCircle} style={circles} onClick={() => this.mayaSkill('restoration', -1)}/>
                  :
                    <img src={removeCircleDisabled} style={circles} />
                }
              </div>
              <div style={counterBox}>
                {maya.restoration}/5
              </div>
            </div>
            <div style={skillWreck}>
              <div style={modifyBox}>
                {
                  maya.wreck < 5 && level < 72 && harmony >= 5 ?
                    <img src={addCircle} style={circles} onClick={() => this.mayaSkill('wreck', 1)}/>
                  :
                    <img src={addCircleDisabled} style={circles} />                
                }
                {
                  maya.wreck > 0 ?
                    <img src={removeCircle} style={circles} onClick={() => this.mayaSkill('wreck', -1)}/>
                  :
                    <img src={removeCircleDisabled} style={circles} />
                }
              </div>
              <div style={counterBox}>
                {maya.wreck}/5
              </div>
            </div>
          </div>
        </Grid.Row>
        <Grid.Row>
          <div style={twoSkill}>
            <div style={skillElated}>
              <div style={modifyBox}>
                {
                  maya.elated < 5 && level < 72 && harmony >= 10 ?
                    <img src={addCircle} style={circles} onClick={() => this.mayaSkill('elated', 1)}/>
                  :
                    <img src={addCircleDisabled} style={circles} />                
                }
                {
                  maya.elated > 0 ?
                    <img src={removeCircle} style={circles} onClick={() => this.mayaSkill('elated', -1)}/>
                  :
                    <img src={removeCircleDisabled} style={circles} />
                }
              </div>
              <div style={counterBox}>
                {maya.elated}/5
              </div>
            </div>
            <div style={skillRes}>
              <div style={modifyBox}>
                {
                  maya.res < 1 && level < 72 && harmony >= 10 ?
                    <img src={addCircle} style={circles} onClick={() => this.mayaSkill('res', 1)}/>
                  :
                    <img src={addCircleDisabled} style={circles} />                
                }
                {
                  maya.res > 0 ?
                    <img src={removeCircle} style={circles} onClick={() => this.mayaSkill('res', -1)}/>
                  :
                    <img src={removeCircleDisabled} style={circles} />
                }
              </div>
              <div style={counterBox}>
                {maya.res}/1
              </div>
            </div>
            <div style={skillRecompense}>
              <div style={modifyBox}>
                {
                  maya.recompense < 5 && level < 72 && harmony >= 10 ?
                    <img src={addCircle} style={circles} onClick={() => this.mayaSkill('recompense', 1)}/>
                  :
                    <img src={addCircleDisabled} style={circles} />                
                }
                {
                  maya.recompense > 0 ?
                    <img src={removeCircle} style={circles} onClick={() => this.mayaSkill('recompense', -1)}/>
                  :
                    <img src={removeCircleDisabled} style={circles} />
                }
              </div>
              <div style={counterBox}>
                {maya.recompense}/5
              </div>
            </div>
          </div>
        </Grid.Row>
        <Grid.Row>
          <div style={oneSkill}>
            <div style={skillSustenance}>
              <div style={modifyBox}>
                {
                  maya.sustenance < 5 && level < 72 && harmony >= 15 ?
                    <img src={addCircle} style={circles} onClick={() => this.mayaSkill('sustenance', 1)}/>
                  :
                    <img src={addCircleDisabled} style={circles} />                
                }
                {
                  maya.sustenance > 0 ?
                    <img src={removeCircle} style={circles} onClick={() => this.mayaSkill('sustenance', -1)}/>
                  :
                    <img src={removeCircleDisabled} style={circles} />
                }
              </div>
              <div style={counterBox}>
                {maya.sustenance}/5
              </div>
            </div>
          </div>
        </Grid.Row>
        <Grid.Row>
          <div style={oneSkill}>
            <div style={skillLifeTap}>
              <div style={modifyBox}>
                {
                  maya.life_tap < 5 && level < 72 && harmony >= 20 ?
                    <img src={addCircle} style={circles} onClick={() => this.mayaSkill('life_tap', 1)}/>
                  :
                    <img src={addCircleDisabled} style={circles} />                
                }
                {
                  maya.life_tap > 0 ?
                    <img src={removeCircle} style={circles} onClick={() => this.mayaSkill('life_tap', -1)}/>
                  :
                    <img src={removeCircleDisabled} style={circles} />
                }
              </div>
              <div style={counterBox}>
                {maya.life_tap}/5
              </div>
            </div>
          </div>
        </Grid.Row>
        <Grid.Row>
          <div style={oneSkill}>
            <div style={skillScorn}>
              <div style={modifyBox}>
                {
                  maya.scorn < 1 && level < 72 && harmony >= 25 ?
                    <img src={addCircle} style={circles} onClick={() => this.mayaSkill('scorn', 1)}/>
                  :
                    <img src={addCircleDisabled} style={circles} />                
                }
                {
                  maya.scorn > 0 ?
                    <img src={removeCircle} style={circles} onClick={() => this.mayaSkill('scorn', -1)}/>
                  :
                    <img src={removeCircleDisabled} style={circles} />
                }
              </div>
              <div style={counterBox}>
                {maya.scorn}/1
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

const skillMindsEye = {
  ...skillsSquare,
  backgroundPosition: '-67px -204px',
}

const skillSweetRelease = {
  ...skillsSquare,
  backgroundPosition: '-129px -204px',
}

const skillRestoration = {
  ...skillsSquare,
  backgroundPosition: '-191px -204px',
}

const skillWreck = {
  ...skillsSquare,
  backgroundPosition: '-253px -204px',
}

const skillElated = {
  ...skillsSquare,
  backgroundPosition: '-315px -204px',
}

const skillRes = {
  ...skillsSquare,
  backgroundPosition: '-5px -267px',
}

const skillRecompense = {
  ...skillsSquare,
  backgroundPosition: '-67px -267px',
}

const skillSustenance = {
  ...skillsSquare,
  backgroundPosition: '-129px -267px',
}

const skillLifeTap = {
  ...skillsSquare,
  backgroundPosition: '-191px -267px',
}

const skillScorn = {
  ...skillsSquare,
  backgroundPosition: '-253px -267px',
}

export default HarmonySelector