import React from 'react'
import { 
  Divider,
  Grid,
  Header,
  Popup,
} from 'semantic-ui-react'
import mayaskills from '../assets/images/mayaskills.png'
import addCircle from '../assets/images/addcircle.png'
import addCircleDisabled from '../assets/images/addcircle_disabled.png'
import removeCircle from '../assets/images/removecircle.png'
import removeCircleDisabled from '../assets/images/removecircle_disabled.png'
import styled from 'styled-components'
import greenBackground from '../assets/images/grnbkdline.png'

class MotionSelector extends React.Component {

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
        setTiers({ motion2: tier2 + mod })
        break
      case 3:
        setTiers({ motion3: tier3 + mod })
        break
      case 4:
        setTiers({ motion4: tier4 + mod })
        break
      case 5:
        setTiers({ motion5: tier5 + mod })
        break
      case 6:
        setTiers({ motion6: tier6 + mod })
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
      tier2,
      tier3,
      tier4,
      tier5,
      tier6,
    } = this.props

    const Wrapper = styled.div`
      width: 247px;
      height: 396px;
      padding: 10px 0 0 0;
      background-size: 2600%;
      background-image: url('${greenBackground}');
      background-position: ${ f => {
        if (motion === 0)
          return '0 0'
        else if (motion >= 25)
          return '100% 0'
        else {
          switch(motion) {
            case 1: return '4% 0'
            case 2: return '8% 0'
            case 3: return '12% 0'
            case 4: return '16% 0'
            case 5: return '20% 0'
            case 6: return '24% 0'
            case 7: return '28% 0'
            case 8: return '32% 0'
            case 9: return '36% 0'
            case 10: return '40% 0'
            case 11: return '44% 0'
            case 12: return '48% 0'
            case 13: return '52% 0'
            case 14: return '56% 0'
            case 15: return '60% 0'
            case 16: return '64% 0'
            case 17: return '68% 0'
            case 18: return '72% 0'
            case 19: return '76% 0'
            case 20: return '80% 0'
            case 21: return '84% 0'
            case 22: return '88% 0'
            case 23: return '92% 0'
            case 24: return '96% 0'
          }
        }
      }}
    `

    // const Wrapper = styled.div`
    //   padding: 10px;
    //   background-image: url('${greenTier1}');
    //   background-size: 100% 400px;
    //   background-repeat: no-repeat;
    //   background-position: center;
    // `

    return (
      <Wrapper>
        <Grid.Row>
          <div style={twoSkill}>
            <Popup
              trigger={
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
              }
              inverted
              style={popupStyle}
              content={
                <div>
                  <Header as="h4">
                    Ward
                  </Header>
                  <div>
                    {`Improves your Shield Capacity by `}<strong>{`${maya.ward * 5}%`}</strong>{` and Shield Recharge Delay by `}<strong>{`-${maya.ward * 8}%.`}</strong>
                  </div>
                </div>
              }
            />
            <Popup
              inverted
              style={popupStyle}
              trigger={
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
              }
              content={
                <div>
                  <Header as="h4">
                    Accelerate
                  </Header>
                  <div>
                    {`Increases your Damage by `}<strong>{`${maya.accelerate * 3}%`}</strong>{` and Bulled Speed by `}<strong>{`${maya.accelerate * 4}%`}</strong>{` with all gun types.`}
                  </div>
                </div>
              }
            />
          </div>
        </Grid.Row>
        <Grid.Row>
          <div style={twoSkill}>
            <Popup
              inverted
              style={popupStyle}
              trigger={
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
              }
              content={
                <div>
                  <Header as="h4">
                    Suspension
                  </Header>
                  <div>
                    {`Increases the duration of Phaselock by `}<strong>{`${maya.suspension * .5}`}</strong>{` seconds.`}
                  </div>
                </div>
              }
            />
            <Popup
              inverted
              style={popupStyle}
              trigger={
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
              }
              content={
                <div>
                  <Header as="h4">
                    Kinetic Reflection
                  </Header>
                  <div>
                    {`Kill Skill. After killing an enemy, you gain a `}<strong>{`100%`}</strong>{` chance to deflect enemy bullets, sending them flying toward nearby enemies doing `}<strong>{`${maya.kinetic_reflection * 20}%`}</strong>{` of the bullet's damage. You take `}<strong>{`${maya.kinetic_reflection * 10}%`}</strong>{` reduced damage from deflected bullets. Kinetic Reflection only works with bullets. This effect lasts for a short time.`}
                  </div>
                </div>
              }
            />
          </div>
        </Grid.Row>
        <Grid.Row>
          <div style={twoSkill}>
            <Popup
              inverted
              style={popupStyle}
              trigger={

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
              }
              content={
                <div>
                  <Header as="h4">
                    Fleet
                  </Header>
                  <div>
                    {`Your movement speed increases by `}<strong>{`${maya.fleet * 10}%`}</strong>{` while your shields are depleted.`}
                  </div>
                </div>
              }
            />
            <Popup
              inverted
              style={popupStyle}
              trigger={
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
              }
              content={
                <div>
                  <Header as="h4">
                    Converge
                  </Header>
                  <div>
                    {`Action Skill Augmentation. Your Phaselock ability now also pulls nearby enemies toward the original target. This deals a small amount of damage to the affected enemies.`}
                  </div>
                </div>
              }
            />
            <Popup
              inverted
              style={popupStyle}
              trigger={

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
              }
              content={
                <div>
                  <Header as="h4">
                    Inertia
                  </Header>
                  <div>
                    {`Kill Skill. Killing an enemy causes your shields to quickly regenerate by `}<strong>{`${maya.inertia * .8}%`}</strong>{` of your Max Shields/sec and increases your Reload Speed by `}<strong>{`${maya.inertia * 10}%`}</strong>{` for a few seconds.`}
                  </div>
                </div>
              }
            />
          </div>
        </Grid.Row>
        <Grid.Row>
          <div style={oneSkill}>
            <Popup
              inverted
              style={popupStyle}
              trigger={

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
              }
              content={
                <div>
                  <Header as="h4">
                    Quicken
                  </Header>
                  <div>
                    {`Increases the Cooldown Rate of your Phaselock ability by `}<strong>{`${maya.quicken * 6}%`}</strong>{`.`}
                  </div>
                </div>
              }
            />
          </div>
        </Grid.Row>
        <Grid.Row>
          <div style={oneSkill}>
            <Popup
              inverted
              style={popupStyle}
              trigger={

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
              }
              content={
                <div>
                  <Header as="h4">
                    Sub-Sequence
                  </Header>
                  <div>
                    {`Action Skill Augmentation. When an enemy under the effects of your Phaselock dies, there is a `}<strong>{`${maya.sub_sequence * 20}%`}</strong>{` chance for your Phaselock ability to seek out and affect another target.`}
                  </div>
                </div>
              }
            />
          </div>
        </Grid.Row>
        <Grid.Row>
          <div style={oneSkill}>
            <Popup
              inverted
              style={popupStyle}
              trigger={

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
              }
              content={
                <div>
                  <Header as="h4">
                    Thoughtlock
                  </Header>
                  <div>
                    {`Action Skill Alteration. Phaselock has a `}<strong>{`100%`}</strong>{` chance to cause enemies to turn on their friends instead of being locked down. Additionally, Phaselock's Duration is increased by `}<strong>{`${maya.thoughtlock * 4} seconds`}</strong>{`, and its Cooldown by  `}<strong>{`${maya.thoughtlock * 3} seconds`}</strong>{`.`}
                  </div>
                </div>
              }
            />
          </div>
        </Grid.Row>
      </Wrapper>
    )
  }
}

const popupStyle = {
  borderRadius: 0,
  opacity: 0.9,
  padding: '1em',
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
  padding: '0px 15%',
  height: '63px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}

const oneSkill = {
  padding: '0px',
  height: '63px',
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