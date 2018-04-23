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
import blueBackground from '../assets/images/bluebkgdline.png'
import styled from 'styled-components'

class HarmonySelector extends React.Component {

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
        setTiers({ harmony2: tier2 + mod })
        break
      case 3:
        setTiers({ harmony3: tier3 + mod })
        break
      case 4:
        setTiers({ harmony4: tier4 + mod })
        break
      case 5:
        setTiers({ harmony5: tier5 + mod })
        break
      case 6:
        setTiers({ harmony6: tier6 + mod })
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
    background-image: url('${blueBackground}');
    background-position: ${ f => {
      if (harmony === 0)
        return '0 0'
      else if (harmony >= 25)
        return '100% 0'
      else {
        switch(harmony) {
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

    return (
      <Wrapper>
        <Grid.Row>
          <div style={twoSkill}>
            <Popup
              inverted
              style={popupStyle}
              trigger={
                <div style={skillMindsEye}>
                  <div style={modifyBox}>
                    {
                      maya.minds_eye < 5 && level < 72 ?
                        <img src={addCircle} style={circles} onClick={() => this.mayaSkill('minds_eye', 1)}/>
                      :
                        <img src={addCircleDisabled} style={circles} />                
                    }
                    {
                      maya.minds_eye > 0 && tier2 < 1 ?
                        <img src={removeCircle} style={circles} onClick={() => this.mayaSkill('minds_eye', -1)}/>
                      :
                        <img src={removeCircleDisabled} style={circles} />
                    }
                  </div>
                  <div style={counterBox}>
                    {maya.minds_eye}/5
                  </div>
                </div>
              }
              content={
                <div>
                  <Header as="h4">
                    Mind's Eye
                  </Header>
                  {`Increases Critical Hit Damage by `}<strong>{`${maya.minds_eye * 5}%`}</strong>{` and Melee Damage by `}<strong>{`${maya.minds_eye * 6}%`}</strong>{`.`}
                </div>
              }
            />
            <Popup
              inverted
              style={popupStyle}
              trigger={

                <div style={skillSweetRelease}>
                  <div style={modifyBox}>
                    {
                      maya.sweet_release < 5 && level < 72 ?
                        <img src={addCircle} style={circles} onClick={() => this.mayaSkill('sweet_release', 1)}/>
                      :
                        <img src={addCircleDisabled} style={circles} />                
                    }
                    {
                      maya.sweet_release > 0 && tier2 < 1 ?
                        <img src={removeCircle} style={circles} onClick={() => this.mayaSkill('sweet_release', -1)}/>
                      :
                        <img src={removeCircleDisabled} style={circles} />
                    }
                  </div>
                  <div style={counterBox}>
                    {maya.sweet_release}/5
                  </div>
                </div>
              }
              content={
                <div>
                  <Header as="h4">
                    Sweet Release
                  </Header>
                  {`If the enemy you have Phaselocked is killed, it generates `}<strong>{`${maya.sweet_release}`}</strong>{` Life Orb(s) that automatically seek out and heal you and your friends, with each Life Orb restoring up to `}<strong>{`${maya.sweet_release * 15}%`}</strong>{` of your Max Health. The healing is stronger when you or your friend's health is low.`}
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
                <div style={skillRestoration}>
                  <div style={modifyBox}>
                    {
                      maya.restoration < 5 && level < 72 && harmony >= 5 ?
                        <img src={addCircle} style={circles} onClick={() => {
                            this.mayaSkill('restoration', 1)
                            this.tierModifier(2, 1)
                          }}
                        />
                      :
                        <img src={addCircleDisabled} style={circles} />                
                    }
                    {
                      maya.restoration > 0 && tier3 < 1 ?
                        <img src={removeCircle} style={circles} onClick={() => {
                            this.mayaSkill('restoration', -1)
                            this.tierModifier(2, -1)
                          }}
                        />
                      :
                        <img src={removeCircleDisabled} style={circles} />
                    }
                  </div>
                  <div style={counterBox}>
                    {maya.restoration}/5
                  </div>
                </div>
              }
              content={
                <div>
                  <Header as="h4">
                    Restoration
                  </Header>
                  {`Shooting other players heals them for `}<strong>{`${maya.restoration * 6}%`}</strong>{` of your outgoing damage. Also increases your Max Health by `}<strong>{`${maya.restoration * 3}%`}</strong>{`.`}
                </div>
              }
            />
            <Popup
              inverted
              style={popupStyle}
              trigger={
                <div style={skillWreck}>
                  <div style={modifyBox}>
                    {
                      maya.wreck < 5 && level < 72 && harmony >= 5 ?
                        <img src={addCircle} style={circles} onClick={() => {
                            this.mayaSkill('wreck', 1)
                            this.tierModifier(2, 1)
                          }}
                        />
                      :
                        <img src={addCircleDisabled} style={circles} />                
                    }
                    {
                      maya.wreck > 0 && tier3 < 1 ?
                        <img src={removeCircle} style={circles} onClick={() => {
                            this.mayaSkill('wreck', -1)
                            this.tierModifier(2, -1)
                          }}
                        />
                      :
                        <img src={removeCircleDisabled} style={circles} />
                    }
                  </div>
                  <div style={counterBox}>
                    {maya.wreck}/5
                  </div>
                </div>
              }
              content={
                <div>
                  <Header as="h4">
                    Wreck
                  </Header>
                  {`While you have an enemy Phaselocked, you gain `}<strong>{`${maya.wreck * 10}%`}</strong>{` increased Fire Rate and `}<strong>{`${maya.wreck * 6}%`}</strong>{` increased Damage with all gun types.`}
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
                <div style={skillElated}>
                  <div style={modifyBox}>
                    {
                      maya.elated < 5 && level < 72 && harmony >= 10 ?
                        <img src={addCircle} style={circles} onClick={() => {
                            this.mayaSkill('elated', 1)
                            this.tierModifier(3, 1)
                          }}
                        />
                      :
                        <img src={addCircleDisabled} style={circles} />                
                    }
                    {
                      maya.elated > 0 && tier4 < 1 ?
                        <img src={removeCircle} style={circles} onClick={() => {
                            this.mayaSkill('elated', -1)
                            this.tierModifier(3, -1)
                          }}
                        />
                      :
                        <img src={removeCircleDisabled} style={circles} />
                    }
                  </div>
                  <div style={counterBox}>
                    {maya.elated}/5
                  </div>
                </div>
              }
              content={
                <div>
                  <Header as="h4">
                    Elated
                  </Header>
                  {`While you have an enemy Phaselocked, you and your friends regenerate `}<strong>{`${maya.elated * 1}%`}</strong>{` of your Max Health/sec.`}
                </div>  
              }
            />
            <Popup
              inverted
              style={popupStyle}
              trigger={
                <div style={skillRes}>
                  <div style={modifyBox}>
                    {
                      maya.res < 1 && level < 72 && harmony >= 10 ?
                        <img src={addCircle} style={circles} onClick={() => {
                            this.mayaSkill('res', 1)
                            this.tierModifier(3, 1)
                          }}
                        />
                      :
                        <img src={addCircleDisabled} style={circles} />                
                    }
                    {
                      maya.res > 0 && tier4 < 1 ?
                        <img src={removeCircle} style={circles} onClick={() => {
                            this.mayaSkill('res', -1)
                            this.tierModifier(3, -1)
                          }}
                        />
                      :
                        <img src={removeCircleDisabled} style={circles} />
                    }
                  </div>
                  <div style={counterBox}>
                    {maya.res}/1
                  </div>
                </div>
              }
              content={
                <div>
                  <Header as="h4">
                    Res
                  </Header>
                  {`You can instantly revive a friend in Fight For Your Life by using Phaselock on him/her.`}
                </div>                 
              }
            />
            <Popup
              inverted
              style={popupStyle}
              trigger={
                <div style={skillRecompense}>
                  <div style={modifyBox}>
                    {
                      maya.recompense < 5 && level < 72 && harmony >= 10 ?
                        <img src={addCircle} style={circles} onClick={() => {
                            this.mayaSkill('recompense', 1)
                            this.tierModifier(3, 1)
                          }}
                        />
                      :
                        <img src={addCircleDisabled} style={circles} />                
                    }
                    {
                      maya.recompense > 0 && tier4 < 1 ?
                        <img src={removeCircle} style={circles} onClick={() => {
                            this.mayaSkill('recompense', -1)
                            this.tierModifier(3, -1)
                          }}
                        />
                      :
                        <img src={removeCircleDisabled} style={circles} />
                    }
                  </div>
                  <div style={counterBox}>
                    {maya.recompense}/5
                  </div>
                </div>
              }
              content={
                <div>
                  <Header as="h4">
                    Recompense
                  </Header>
                  {`When you take health damage, there is a `}<strong>{`${maya.recompense * 10}%`}</strong>{` chance that your attacker takes damage equal to the amount of health lost.`}
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
                <div style={skillSustenance}>
                  <div style={modifyBox}>
                    {
                      maya.sustenance < 5 && level < 72 && harmony >= 15 ?
                        <img src={addCircle} style={circles} onClick={() => {
                            this.mayaSkill('sustenance', 1)
                            this.tierModifier(4, 1)
                          }}
                        />
                      :
                        <img src={addCircleDisabled} style={circles} />                
                    }
                    {
                      maya.sustenance > 0 && tier5 < 1 ?
                        <img src={removeCircle} style={circles} onClick={() => {
                            this.mayaSkill('sustenance', -1)
                            this.tierModifier(4, -1)
                          }}
                        />
                      :
                        <img src={removeCircleDisabled} style={circles} />
                    }
                  </div>
                  <div style={counterBox}>
                    {maya.sustenance}/5
                  </div>
                </div>
              }
              content={
                <div>
                  <Header as="h4">
                    Sustenance
                  </Header>
                  {`You constantly regenerate health at a rate of up to `}<strong>{`${maya.sustenance * .4}%`}</strong>{` of your missing health every second. The lower your current health, the more powerful the regeneration.`}
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
                <div style={skillLifeTap}>
                  <div style={modifyBox}>
                    {
                      maya.life_tap < 5 && level < 72 && harmony >= 20 ?
                        <img src={addCircle} style={circles} onClick={() => {
                            this.mayaSkill('life_tap', 1)
                            this.tierModifier(5, 1)
                          }}
                        />
                      :
                        <img src={addCircleDisabled} style={circles} />                
                    }
                    {
                      maya.life_tap > 0 && tier6 < 1 ?
                        <img src={removeCircle} style={circles} onClick={() => {
                            this.mayaSkill('life_tap', -1)
                            this.tierModifier(5, -1)
                          }}
                        />
                      :
                        <img src={removeCircleDisabled} style={circles} />
                    }
                  </div>
                  <div style={counterBox}>
                    {maya.life_tap}/5
                  </div>
                </div>
              }
              content={
                <div>
                  <Header as="h4">
                    Life Tap
                  </Header>
                  {`Kill Skill. Killing an enemy causes you to steal `}<strong>{`${maya.life_tap * 1.2}%`}</strong>{` health from any enemy you damage for a short time.`}
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

                <div style={skillScorn}>
                  <div style={modifyBox}>
                    {
                      maya.scorn < 1 && level < 72 && harmony >= 25 ?
                        <img src={addCircle} style={circles} onClick={() => {
                            this.mayaSkill('scorn', 1)
                            this.tierModifier(6, 1)
                          }}
                        />
                      :
                        <img src={addCircleDisabled} style={circles} />                
                    }
                    {
                      maya.scorn > 0 ?
                        <img src={removeCircle} style={circles} onClick={() => {
                            this.mayaSkill('scorn', -1)
                            this.tierModifier(6, -1)
                          }}
                        />
                      :
                        <img src={removeCircleDisabled} style={circles} />
                    }
                  </div>
                  <div style={counterBox}>
                    {maya.scorn}/1
                  </div>
                </div>
              }
              content={
                <div>
                  <Header as="h4">
                    Scorn
                  </Header>
                  {`Melee Override Skill. Press R to throw an orb of slag that constantly damage enemies near it. This ability has an `}<strong>{`18 second`}</strong>{` cooldown. Pressing R when Scorn is on cooldown will perform a regular melee attack.`}
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