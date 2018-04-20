import React from 'react'
import { 
  List, 
  Header,
  Divider,
  Loader,
  Icon,
  Grid,
} from 'semantic-ui-react'

class MayaSkillSelector extends React.Component {

  mayaSkill = (skill, modifier) => {
    const { 
      callbackState,
      maya,
    } = this.props

    switch(skill) {
      case 'ward':
        callbackState({ maya: {...maya,...maya, ward: maya.ward + modifier } }, 'motion' )
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
      case 'blight_pheonix':
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
                <Grid.Column width={4}>
                  Ward: 
                </Grid.Column>
                <Grid.Column width={4}>
                  {maya.ward}/5
                </Grid.Column>
                <Grid.Column width={4}>
                  {
                    maya.ward < 5 && level < 72 &&
                      <Icon name="add circle" onClick={() => this.mayaSkill('ward', 1)}/>                
                  }
                </Grid.Column>
                <Grid.Column width={4}>
                  {
                    maya.ward > 0 &&
                      <Icon name="minus circle" onClick={() => this.mayaSkill('ward', -1)}/>
                  }
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={4}>
                  Accelerate: 
                </Grid.Column>
                <Grid.Column width={4}>
                  {maya.accelerate}/5
                </Grid.Column>
                <Grid.Column width={4}>
                  {
                    maya.accelerate < 5 && level < 72 &&
                      <Icon name="add circle" onClick={() => this.mayaSkill('accelerate', 1)}/>
                  }
                </Grid.Column>
                <Grid.Column width={4}>
                  {
                    maya.accelerate > 0 &&
                      <Icon name="minus circle" onClick={() => this.mayaSkill('accelerate', -1)}/>                
                  }            
                </Grid.Column>
              </Grid.Row>
              {
                motion >= 5 &&
                  <Grid.Row>
                    <Grid.Column width={4}>
                      Suspension: 
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {maya.suspension}/5
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.suspension < 5 && level < 72 &&
                          <Icon name="add circle" onClick={() => this.mayaSkill('suspension', 1)}/>                
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.suspension > 0 &&
                          <Icon name="minus circle" onClick={() => this.mayaSkill('suspension', -1)}/>                
                      }
                    </Grid.Column>
                  </Grid.Row>
              }
              { 
                motion >= 5 &&
                  <Grid.Row>
                    <Grid.Column width={4}>
                      Kinetic Reflection: 
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {maya.kinetic_reflection}/5
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.kinetic_reflection < 5 && level < 72 &&
                          <Icon name="add circle" onClick={() => this.mayaSkill('kinetic_reflection', 1)}/>
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.kinetic_reflection > 0 &&
                          <Icon name="minus circle" onClick={() => this.mayaSkill('kinetic_reflection', -1)}/>                
                      }            
                    </Grid.Column>
                  </Grid.Row>
              }
              { 
                motion >= 10 &&
                  <Grid.Row>
                    <Grid.Column width={4}>
                      Fleet: 
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {maya.fleet}/5
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.fleet < 5 && level < 72 &&
                          <Icon name="add circle" onClick={() => this.mayaSkill('fleet', 1)}/>
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.fleet > 0 &&
                          <Icon name="minus circle" onClick={() => this.mayaSkill('fleet', -1)}/>                
                      }            
                    </Grid.Column>
                  </Grid.Row>
              }
              { 
                motion >= 10 &&
                  <Grid.Row>
                    <Grid.Column width={4}>
                      Converge: 
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {maya.converge}/1
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.converge < 1 && level < 72 &&
                          <Icon name="add circle" onClick={() => this.mayaSkill('converge', 1)}/>
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.converge > 0 &&
                          <Icon name="minus circle" onClick={() => this.mayaSkill('converge', -1)}/>                
                      }            
                    </Grid.Column>
                  </Grid.Row>
              }
              { 
                motion >= 10 &&
                  <Grid.Row>
                    <Grid.Column width={4}>
                      Inertia: 
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {maya.inertia}/5
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.inertia < 5 && level < 72 &&
                          <Icon name="add circle" onClick={() => this.mayaSkill('inertia', 1)}/>
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.inertia > 0 &&
                          <Icon name="minus circle" onClick={() => this.mayaSkill('inertia', -1)}/>                
                      }            
                    </Grid.Column>
                  </Grid.Row>
              }
              { 
                motion >= 15 &&
                  <Grid.Row>
                    <Grid.Column width={4}>
                      Quicken: 
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {maya.quicken}/5
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.quicken < 5 && level < 72 &&
                          <Icon name="add circle" onClick={() => this.mayaSkill('quicken', 1)}/>
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.quicken > 0 &&
                          <Icon name="minus circle" onClick={() => this.mayaSkill('quicken', -1)}/>                
                      }            
                    </Grid.Column>
                  </Grid.Row>
              }
              { 
                motion >= 20 &&
                  <Grid.Row>
                    <Grid.Column width={4}>
                      Sub-Sequence: 
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {maya.sub_sequence}/5
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.sub_sequence < 5 && level < 72 &&
                          <Icon name="add circle" onClick={() => this.mayaSkill('sub_sequence', 1)}/>
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.sub_sequence > 0 &&
                          <Icon name="minus circle" onClick={() => this.mayaSkill('sub_sequence', -1)}/>                
                      }            
                    </Grid.Column>
                  </Grid.Row>
              }
              { 
                motion >= 25 &&
                  <Grid.Row>
                    <Grid.Column width={4}>
                      Thoughtlock: 
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {maya.thoughtlock}/1
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.thoughtlock < 1 && level < 72 &&
                          <Icon name="add circle" onClick={() => this.mayaSkill('thoughtlock', 1)}/>
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.thoughtlock > 0 &&
                          <Icon name="minus circle" onClick={() => this.mayaSkill('thoughtlock', -1)}/>                
                      }            
                    </Grid.Column>
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

export default MayaSkillSelector