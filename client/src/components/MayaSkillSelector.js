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

class MayaSkillSelector extends React.Component {

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
      motion, 
      harmony, 
      cataclysm,
    } = this.props

    if (!maya)
      return <Loader active>Loading skills...</Loader>
    else {
      return (
        <div>
          <Divider horizontal>
            <Header as ="h2">
              Level: {level}
            </Header>
          </Divider>
          <Header as="h3">
            Maya
          </Header>
          <Grid columns={3} divided>
            <Grid.Column>
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
                      maya.ward > 0 ?
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
                      maya.accelerate > 0 ?
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
              {
                motion >= 5 &&
                  <Grid.Row>
                    <div style={twoSkill}>
                      <div style={skillSuspension}>
                        <div style={modifyBox}>
                          {
                            maya.suspension < 5 && level < 72 ?
                              <img src={addCircle} style={circles} onClick={() => this.mayaSkill('suspension', 1)}/>
                            :
                              <img src={addCircleDisabled} style={circles} />                
                          }
                          {
                            maya.suspension > 0 ?
                              <img src={removeCircle} style={circles} onClick={() => this.mayaSkill('suspension', -1)}/>
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
                            maya.kinetic_reflection < 5 && level < 72 ?
                              <img src={addCircle} style={circles} onClick={() => this.mayaSkill('kinetic_reflection', 1)}/>
                            :
                              <img src={addCircleDisabled} style={circles} />                
                          }
                          {
                            maya.kinetic_reflection > 0 ?
                              <img src={removeCircle} style={circles} onClick={() => this.mayaSkill('kinetic_reflection', -1)}/>
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
              }
              {
                motion >= 10 &&
                  <Grid.Row>
                    <div style={twoSkill}>
                      <div style={skillFleet}>
                        <div style={modifyBox}>
                          {
                            maya.fleet < 5 && level < 72 ?
                              <img src={addCircle} style={circles} onClick={() => this.mayaSkill('fleet', 1)}/>
                            :
                              <img src={addCircleDisabled} style={circles} />                
                          }
                          {
                            maya.fleet > 0 ?
                              <img src={removeCircle} style={circles} onClick={() => this.mayaSkill('fleet', -1)}/>
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
                            maya.converge < 1 && level < 72 ?
                              <img src={addCircle} style={circles} onClick={() => this.mayaSkill('converge', 1)}/>
                            :
                              <img src={addCircleDisabled} style={circles} />                
                          }
                          {
                            maya.converge > 0 ?
                              <img src={removeCircle} style={circles} onClick={() => this.mayaSkill('converge', -1)}/>
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
                            maya.inertia < 5 && level < 72 ?
                              <img src={addCircle} style={circles} onClick={() => this.mayaSkill('inertia', 1)}/>
                            :
                              <img src={addCircleDisabled} style={circles} />                
                          }
                          {
                            maya.inertia > 0 ?
                              <img src={removeCircle} style={circles} onClick={() => this.mayaSkill('inertia', -1)}/>
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
              }
              {
                motion >= 15 &&
                  <Grid.Row>
                    <div style={oneSkill}>
                      <div style={skillQuicken}>
                        <div style={modifyBox}>
                          {
                            maya.quicken < 5 && level < 72 ?
                              <img src={addCircle} style={circles} onClick={() => this.mayaSkill('quicken', 1)}/>
                            :
                              <img src={addCircleDisabled} style={circles} />                
                          }
                          {
                            maya.quicken > 0 ?
                              <img src={removeCircle} style={circles} onClick={() => this.mayaSkill('quicken', -1)}/>
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
              }
              {
                motion >= 20 &&
                  <Grid.Row>
                    <div style={oneSkill}>
                      <div style={skillSubSequence}>
                        <div style={modifyBox}>
                          {
                            maya.sub_sequence < 5 && level < 72 ?
                              <img src={addCircle} style={circles} onClick={() => this.mayaSkill('sub_sequence', 1)}/>
                            :
                              <img src={addCircleDisabled} style={circles} />                
                          }
                          {
                            maya.sub_sequence > 0 ?
                              <img src={removeCircle} style={circles} onClick={() => this.mayaSkill('sub_sequence', -1)}/>
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
              }
              {
                motion >= 25 &&
                  <Grid.Row>
                    <div style={oneSkill}>
                      <div style={skillThoughtlock}>
                        <div style={modifyBox}>
                          {
                            maya.thoughtlock < 1 && level < 72 ?
                              <img src={addCircle} style={circles} onClick={() => this.mayaSkill('thoughtlock', 1)}/>
                            :
                              <img src={addCircleDisabled} style={circles} />                
                          }
                          {
                            maya.thoughtlock > 0 ?
                              <img src={removeCircle} style={circles} onClick={() => this.mayaSkill('thoughtlock', -1)}/>
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
              }
            </Grid.Column>
            <Grid.Column>
              <Divider horizontal>
                Harmony: {harmony}
              </Divider>
              <Grid.Row>
                <Grid.Column width={4}>
                  Mind's Eye: 
                </Grid.Column>
                <Grid.Column width={4}>
                  {maya.minds_eye}/5
                </Grid.Column>
                <Grid.Column width={4}>
                  {
                    maya.minds_eye < 5 && level < 72 &&
                      <Icon name="add circle" onClick={() => {this.mayaSkill('minds_eye', 1)}}/>                
                  }
                </Grid.Column>
                <Grid.Column width={4}>
                  {
                    maya.minds_eye > 0 &&
                      <Icon name="minus circle" onClick={() => {this.mayaSkill('minds_eye', -1)}}/>
                  }
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={4}>
                  Sweet Release: 
                </Grid.Column>
                <Grid.Column width={4}>
                  {maya.sweet_release}/5
                </Grid.Column>
                <Grid.Column width={4}>
                  {
                    maya.sweet_release < 5 && level < 72 &&
                      <Icon name="add circle" onClick={() => this.mayaSkill('sweet_release', 1)}/>
                  }
                </Grid.Column>
                <Grid.Column width={4}>
                  {
                    maya.sweet_release > 0 &&
                      <Icon name="minus circle" onClick={() => this.mayaSkill('sweet_release', -1)}/>                
                  }            
                </Grid.Column>
              </Grid.Row>
              {
                harmony >= 5 &&
                  <Grid.Row>
                    <Grid.Column width={4}>
                      Restoration: 
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {maya.restoration}/5
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.restoration < 5 && level < 72 &&
                          <Icon name="add circle" onClick={() => this.mayaSkill('restoration', 1)}/>                
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.restoration > 0 &&
                          <Icon name="minus circle" onClick={() => this.mayaSkill('restoration', -1)}/>                
                      }
                    </Grid.Column>
                  </Grid.Row>
              }
              { 
                harmony >= 5 &&
                  <Grid.Row>
                    <Grid.Column width={4}>
                      Wreck: 
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {maya.wreck}/5
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.wreck < 5 && level < 72 &&
                          <Icon name="add circle" onClick={() => this.mayaSkill('wreck', 1)}/>
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.wreck > 0 &&
                          <Icon name="minus circle" onClick={() => this.mayaSkill('wreck', -1)}/>                
                      }            
                    </Grid.Column>
                  </Grid.Row>
              }
              { 
                harmony >= 10 &&
                  <Grid.Row>
                    <Grid.Column width={4}>
                      Elated: 
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {maya.elated}/5
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.elated < 5 && level < 72 &&
                          <Icon name="add circle" onClick={() => this.mayaSkill('elated', 1)}/>
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.elated > 0 &&
                          <Icon name="minus circle" onClick={() => this.mayaSkill('elated', -1)}/>                
                      }            
                    </Grid.Column>
                  </Grid.Row>
              }
              { 
                harmony >= 10 &&
                  <Grid.Row>
                    <Grid.Column width={4}>
                      Recompense: 
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {maya.recompense}/5
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.recompense < 5 && level < 72 &&
                          <Icon name="add circle" onClick={() => this.mayaSkill('recompense', 1)}/>
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.recompense > 0 &&
                          <Icon name="minus circle" onClick={() => this.mayaSkill('recompense', -1)}/>                
                      }            
                    </Grid.Column>
                  </Grid.Row>
              }
              { 
                harmony >= 10 &&
                  <Grid.Row>
                    <Grid.Column width={4}>
                      Res: 
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {maya.res}/1
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.res < 1 && level < 72 &&
                          <Icon name="add circle" onClick={() => this.mayaSkill('res', 1)}/>
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.res > 0 &&
                          <Icon name="minus circle" onClick={() => this.mayaSkill('res', -1)}/>                
                      }            
                    </Grid.Column>
                  </Grid.Row>
              }
              { 
                harmony >= 15 &&
                  <Grid.Row>
                    <Grid.Column width={4}>
                      Sustenance: 
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {maya.sustenance}/5
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.sustenance < 5 && level < 72 &&
                          <Icon name="add circle" onClick={() => this.mayaSkill('sustenance', 1)}/>
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.sustenance > 0 &&
                          <Icon name="minus circle" onClick={() => this.mayaSkill('sustenance', -1)}/>                
                      }            
                    </Grid.Column>
                  </Grid.Row>
              }
              { 
                harmony >= 20 &&
                  <Grid.Row>
                    <Grid.Column width={4}>
                      Life Tap: 
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {maya.life_tap}/5
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.life_tap < 5 && level < 72 &&
                          <Icon name="add circle" onClick={() => this.mayaSkill('life_tap', 1)}/>
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.life_tap > 0 &&
                          <Icon name="minus circle" onClick={() => this.mayaSkill('life_tap', -1)}/>                
                      }            
                    </Grid.Column>
                  </Grid.Row>
              }
              { 
                harmony >= 25 &&
                  <Grid.Row>
                    <Grid.Column width={4}>
                      Scorn: 
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {maya.scorn}/1
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.scorn < 1 && level < 72 &&
                          <Icon name="add circle" onClick={() => this.mayaSkill('scorn', 1)}/>
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.scorn > 0 &&
                          <Icon name="minus circle" onClick={() => this.mayaSkill('scorn', -1)}/>                
                      }            
                    </Grid.Column>
                  </Grid.Row>
              }
              </Grid.Column>
            <Grid.Column>
              <Divider horizontal>
                Cataclysm: {cataclysm}
              </Divider>
              <Grid.Row>
                <Grid.Column width={4}>
                  Flicker: 
                </Grid.Column>
                <Grid.Column width={4}>
                  {maya.flicker}/5
                </Grid.Column>
                <Grid.Column width={4}>
                  {
                    maya.flicker < 5 && level < 72 &&
                      <Icon name="add circle" onClick={() => {this.mayaSkill('flicker', 1)}}/>                
                  }
                </Grid.Column>
                <Grid.Column width={4}>
                  {
                    maya.flicker > 0 &&
                      <Icon name="minus circle" onClick={() => {this.mayaSkill('flicker', -1)}}/>
                  }
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={4}>
                  Foresight: 
                </Grid.Column>
                <Grid.Column width={4}>
                  {maya.foresight}/5
                </Grid.Column>
                <Grid.Column width={4}>
                  {
                    maya.foresight < 5 && level < 72 &&
                      <Icon name="add circle" onClick={() => this.mayaSkill('foresight', 1)}/>
                  }
                </Grid.Column>
                <Grid.Column width={4}>
                  {
                    maya.foresight > 0 &&
                      <Icon name="minus circle" onClick={() => this.mayaSkill('foresight', -1)}/>                
                  }            
                </Grid.Column>
              </Grid.Row>
              {
                cataclysm >= 5 &&
                  <Grid.Row>
                    <Grid.Column width={4}>
                      Immolate: 
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {maya.immolate}/5
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.immolate < 5 && level < 72 &&
                          <Icon name="add circle" onClick={() => this.mayaSkill('immolate', 1)}/>                
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.immolate > 0 &&
                          <Icon name="minus circle" onClick={() => this.mayaSkill('immolate', -1)}/>                
                      }
                    </Grid.Column>
                  </Grid.Row>
              }
              { 
                cataclysm >= 5 &&
                  <Grid.Row>
                    <Grid.Column width={4}>
                      Helios: 
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {maya.helios}/5
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.helios < 5 && level < 72 &&
                          <Icon name="add circle" onClick={() => this.mayaSkill('helios', 1)}/>
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.helios > 0 &&
                          <Icon name="minus circle" onClick={() => this.mayaSkill('helios', -1)}/>                
                      }            
                    </Grid.Column>
                  </Grid.Row>
              }
              { 
                cataclysm >= 10 &&
                  <Grid.Row>
                    <Grid.Column width={4}>
                      Chain Reaction: 
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {maya.chain_reaction}/5
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.chain_reaction < 5 && level < 72 &&
                          <Icon name="add circle" onClick={() => this.mayaSkill('chain_reaction', 1)}/>
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.chain_reaction > 0 &&
                          <Icon name="minus circle" onClick={() => this.mayaSkill('chain_reaction', -1)}/>                
                      }            
                    </Grid.Column>
                  </Grid.Row>
              }
              { 
                cataclysm >= 10 &&
                  <Grid.Row>
                    <Grid.Column width={4}>
                      Backdraft: 
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {maya.backdraft}/5
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.backdraft < 5 && level < 72 &&
                          <Icon name="add circle" onClick={() => this.mayaSkill('backdraft', 1)}/>
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.backdraft > 0 &&
                          <Icon name="minus circle" onClick={() => this.mayaSkill('backdraft', -1)}/>                
                      }            
                    </Grid.Column>
                  </Grid.Row>
              }
              { 
                cataclysm >= 10 &&
                  <Grid.Row>
                    <Grid.Column width={4}>
                      Cloud Kill: 
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {maya.cloud_kill}/1
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.cloud_kill < 1 && level < 72 &&
                          <Icon name="add circle" onClick={() => this.mayaSkill('cloud_kill', 1)}/>
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.cloud_kill > 0 &&
                          <Icon name="minus circle" onClick={() => this.mayaSkill('cloud_kill', -1)}/>                
                      }            
                    </Grid.Column>
                  </Grid.Row>
              }
              { 
                cataclysm >= 15 &&
                  <Grid.Row>
                    <Grid.Column width={4}>
                      Reaper: 
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {maya.reaper}/5
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.reaper < 5 && level < 72 &&
                          <Icon name="add circle" onClick={() => this.mayaSkill('reaper', 1)}/>
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.reaper > 0 &&
                          <Icon name="minus circle" onClick={() => this.mayaSkill('reaper', -1)}/>                
                      }            
                    </Grid.Column>
                  </Grid.Row>
              }
              { 
                cataclysm >= 20 &&
                  <Grid.Row>
                    <Grid.Column width={4}>
                      Blight Phoenix: 
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {maya.blight_phoenix}/5
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.blight_phoenix < 5 && level < 72 &&
                          <Icon name="add circle" onClick={() => this.mayaSkill('blight_phoenix', 1)}/>
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.blight_phoenix > 0 &&
                          <Icon name="minus circle" onClick={() => this.mayaSkill('blight_phoenix', -1)}/>                
                      }            
                    </Grid.Column>
                  </Grid.Row>
              }
              { 
                cataclysm >= 25 &&
                  <Grid.Row>
                    <Grid.Column width={4}>
                      Ruin: 
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {maya.ruin}/5
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.ruin < 1 && level < 72 &&
                          <Icon name="add circle" onClick={() => this.mayaSkill('ruin', 1)}/>
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.ruin > 0 &&
                          <Icon name="minus circle" onClick={() => this.mayaSkill('ruin', -1)}/>                
                      }            
                    </Grid.Column>
                  </Grid.Row>
              }
              </Grid.Column>
          </Grid>
          <Divider hidden />
        </div>
      )
    }
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

export default MayaSkillSelector