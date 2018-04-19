import React from 'react'
import { connect } from 'react-redux'
import { 
  List, 
  Header,
  Divider,
  Loader,
  Icon,
  Grid,
} from 'semantic-ui-react'
import { initialSkills } from '../actions/skills'

class SkillSelector extends React.Component {
  state = {
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
      thoughtlock: 0,
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
      blight_phoenix: 0,
      ruin: 0,
    },
    level: 5,
    cataclysm: 0,
    harmony: 0,
    motion: 0,
  }

  componentDidMount() {
    const { dispatch } = this.props
    !this.props.skills.maya && dispatch(initialSkills())
  }

  checker = () => {
    debugger
  }

  modifyMotion = () => {
    const { maya } = this.state
    this.setState({
      motion:
        maya.ward +
        maya.accelerate +
        maya.kinetic_reflection +
        maya.suspension +
        maya.inertia +
        maya.fleet +
        maya.converge +
        maya.quicken +
        maya.sub_sequence +
        maya.thoughtlock
    })
    this.modifyLevel()
  }

  modifyHarmony = () => {
    const { maya } = this.state
    this.setState({
      harmony:
        maya.minds_eye +
        maya.sweet_release +
        maya.restoration +
        maya.wreck +
        maya.elated +
        maya.recompense +
        maya.res +
        maya.sustenance +
        maya.life_tap +
        maya.scorn
    })
    this.modifyLevel()
  }

  modifyCataclysm = () => {
    const { maya } = this.state
    this.setState({
      cataclysm:
        maya.flicker +
        maya.foresight +
        maya.immolate +
        maya.helios +
        maya.chain_reaction +
        maya.backdraft +
        maya.cloud_kill +
        maya.reaper +
        maya.blight_phoenix +
        maya.ruin
    })
    this.modifyLevel()
  }

  modifyLevel = () => {
    const { maya } = this.state
    this.setState({
      level:
        5 +
        maya.ward +
        maya.accelerate +
        maya.kinetic_reflection +
        maya.suspension +
        maya.inertia +
        maya.fleet +
        maya.converge +
        maya.quicken +
        maya.sub_sequence +
        maya.thoughtlock +
        maya.minds_eye +
        maya.sweet_release +
        maya.restoration +
        maya.wreck +
        maya.elated +
        maya.recompense +
        maya.res +
        maya.sustenance +
        maya.life_tap +
        maya.scorn +
        maya.flicker +
        maya.foresight +
        maya.immolate +
        maya.helios +
        maya.chain_reaction +
        maya.backdraft +
        maya.cloud_kill +
        maya.reaper +
        maya.blight_phoenix +
        maya.ruin
    })
  }

  modifySkill = (char, skill, modifier) => {
    switch (char) {
      case 'maya':
        this.mayaSkill(skill, modifier)
        break
      default: break
    }
  }

  mayaSkill = (skill, modifier) => {
    const { dispatch } = this.props
    const { maya } = this.state
    switch(skill) {
      case 'ward':
        this.setState({ maya: {...maya,...maya, ward: maya.ward + modifier } }, this.modifyMotion )
        break
      case 'accelerate':
        this.setState({ maya: {...maya, accelerate: maya.accelerate + modifier } }, this.modifyMotion )
        break
      case 'kinetic_reflection':
        this.setState({ maya: {...maya, kinetic_reflection: maya.kinetic_reflection + modifier } }, this.modifyMotion )
        break
      case 'suspension':
        this.setState({ maya: {...maya, suspension: maya.suspension + modifier } }, this.modifyMotion )
        break
      case 'inertia':
        this.setState({ maya: {...maya, inertia: maya.inertia + modifier } }, this.modifyMotion )
        break
      case 'fleet' :
        this.setState({ maya: {...maya, fleet: maya.fleet + modifier } }, this.modifyMotion )
        break
      case 'converge':
        this.setState({ maya: {...maya, converge: maya.converge + modifier } }, this.modifyMotion )
        break
      case 'quicken':
        this.setState({ maya: {...maya, quicken: maya.quicken + modifier } }, this.modifyMotion )
        break
      case 'sub_sequence':
        this.setState({ maya: {...maya, sub_sequence: maya.sub_sequence + modifier } }, this.modifyMotion )
        break
      case 'thoughtlock':
        this.setState({ maya: {...maya, thoughtlock: maya.thoughtlock + modifier } }, this.modifyMotion )
        break
      case 'minds_eye':
        this.setState({ maya: {...maya, minds_eye: maya.minds_eye + modifier } }, this.modifyHarmony )
        break
      case 'sweet_release':
        this.setState({ maya: {...maya, sweet_release: maya.sweet_release + modifier } }, this.modifyHarmony )
        break
      case 'restoration':
        this.setState({ maya: {...maya, restoration: maya.restoration + modifier } }, this.modifyHarmony )
        break
      case 'wreck':
        this.setState({ maya: {...maya, wreck: maya.wreck + modifier } }, this.modifyHarmony )
        break
      case 'elated':
        this.setState({ maya: {...maya, elated: maya.elated + modifier } }, this.modifyHarmony )
        break
      case 'recompense':
        this.setState({ maya: {...maya, recompense: maya.recompense + modifier } }, this.modifyHarmony )
        break
      case 'res':
        this.setState({ maya: {...maya, res: maya.res + modifier } }, this.modifyHarmony )
        break
      case 'sustenance':
        this.setState({ maya: {...maya, sustenance: maya.sustenance + modifier } }, this.modifyHarmony )
        break
      case 'life_tap':
        this.setState({ maya: {...maya, life_tap: maya.life_tap + modifier } }, this.modifyHarmony )
        break
      case 'scorn':
        this.setState({ maya: {...maya, scorn: maya.scorn + modifier } }, this.modifyHarmony )
        break
      case 'flicker':
        this.setState({ maya: {...maya, flicker: maya.flicker + modifier } }, this.modifyCataclysm )
        break
      case 'foresight':
        this.setState({ maya: {...maya, foresight: maya.foresight + modifier } }, this.modifyCataclysm )
        break
      case 'immolate':
        this.setState({ maya: {...maya, immolate: maya.immolate + modifier } }, this.modifyCataclysm )
        break
      case 'helios':
        this.setState({ maya: {...maya, helios: maya.helios + modifier } }, this.modifyCataclysm )
        break
      case 'chain_reaction':
        this.setState({ maya: {...maya, chain_reaction: maya.chain_reaction + modifier } }, this.modifyCataclysm )
        break
      case 'backdraft':
        this.setState({ maya: {...maya, backdraft: maya.backdraft + modifier } }, this.modifyCataclysm )
        break
      case 'cloud_kill':
        this.setState({ maya: {...maya, cloud_kill: maya.cloud_kill + modifier } }, this.modifyCataclysm )
        break
      case 'reaper':
        this.setState({ maya: {...maya, reaper: maya.reaper + modifier } }, this.modifyCataclysm )
        break
      case 'blight_pheonix':
        this.setState({ maya: {...maya, blight_phoenix: maya.blight_phoenix + modifier } }, this.modifyCataclysm )
        break
      case 'ruin':
        this.setState({ maya: {...maya, ruin: maya.ruin + modifier } }, this.modifyCataclysm )
        break
      default: break
    }
  }

  render() {
    const { level, motion, harmony, cataclysm, maya } = this.state
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
                  {maya.ward}
                </Grid.Column>
                <Grid.Column width={4}>
                  {
                    maya.ward < 5 && level < 72 &&
                      <Icon name="add circle" onClick={() => {this.modifySkill('maya', 'ward', 1)}}/>                
                  }
                </Grid.Column>
                <Grid.Column width={4}>
                  {
                    maya.ward > 0 &&
                      <Icon name="minus circle" onClick={() => {this.modifySkill('maya', 'ward', -1)}}/>
                  }
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={4}>
                  Accelerate: 
                </Grid.Column>
                <Grid.Column width={4}>
                  {maya.accelerate}
                </Grid.Column>
                <Grid.Column width={4}>
                  {
                    maya.accelerate < 5 && level < 72 &&
                      <Icon name="add circle" onClick={() => this.modifySkill('maya', 'accelerate', 1)}/>
                  }
                </Grid.Column>
                <Grid.Column width={4}>
                  {
                    maya.accelerate > 0 &&
                      <Icon name="minus circle" onClick={() => this.modifySkill('maya', 'accelerate', -1)}/>                
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
                      {maya.suspension}
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.suspension < 5 && level < 72 &&
                          <Icon name="add circle" onClick={() => this.modifySkill('maya', 'suspension', 1)}/>                
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.suspension > 0 &&
                          <Icon name="minus circle" onClick={() => this.modifySkill('maya', 'suspension', -1)}/>                
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
                      {maya.kinetic_reflection}
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.kinetic_reflection < 5 && level < 72 &&
                          <Icon name="add circle" onClick={() => this.modifySkill('maya', 'kinetic_reflection', 1)}/>
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.kinetic_reflection > 0 &&
                          <Icon name="minus circle" onClick={() => this.modifySkill('maya', 'kinetic_reflection', -1)}/>                
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
                      {maya.fleet}
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.fleet < 5 && level < 72 &&
                          <Icon name="add circle" onClick={() => this.modifySkill('maya', 'fleet', 1)}/>
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.fleet > 0 &&
                          <Icon name="minus circle" onClick={() => this.modifySkill('maya', 'fleet', -1)}/>                
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
                      {maya.converge}
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.converge < 1 && level < 72 &&
                          <Icon name="add circle" onClick={() => this.modifySkill('maya', 'converge', 1)}/>
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.converge > 0 &&
                          <Icon name="minus circle" onClick={() => this.modifySkill('maya', 'converge', -1)}/>                
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
                      {maya.inertia}
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.inertia < 5 && level < 72 &&
                          <Icon name="add circle" onClick={() => this.modifySkill('maya', 'inertia', 1)}/>
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.inertia > 0 &&
                          <Icon name="minus circle" onClick={() => this.modifySkill('maya', 'inertia', -1)}/>                
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
                      {maya.quicken}
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.quicken < 5 && level < 72 &&
                          <Icon name="add circle" onClick={() => this.modifySkill('maya', 'quicken', 1)}/>
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.quicken > 0 &&
                          <Icon name="minus circle" onClick={() => this.modifySkill('maya', 'quicken', -1)}/>                
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
                      {maya.sub_sequence}
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.sub_sequence < 5 && level < 72 &&
                          <Icon name="add circle" onClick={() => this.modifySkill('maya', 'sub_sequence', 1)}/>
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.sub_sequence > 0 &&
                          <Icon name="minus circle" onClick={() => this.modifySkill('maya', 'sub_sequence', -1)}/>                
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
                      {maya.thoughtlock}
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.thoughtlock < 1 && level < 72 &&
                          <Icon name="add circle" onClick={() => this.modifySkill('maya', 'thoughtlock', 1)}/>
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.thoughtlock > 0 &&
                          <Icon name="minus circle" onClick={() => this.modifySkill('maya', 'thoughtlock', -1)}/>                
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
                  {maya.minds_eye}
                </Grid.Column>
                <Grid.Column width={4}>
                  {
                    maya.minds_eye < 5 && level < 72 &&
                      <Icon name="add circle" onClick={() => {this.modifySkill('maya', 'minds_eye', 1)}}/>                
                  }
                </Grid.Column>
                <Grid.Column width={4}>
                  {
                    maya.minds_eye > 0 &&
                      <Icon name="minus circle" onClick={() => {this.modifySkill('maya', 'minds_eye', -1)}}/>
                  }
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={4}>
                  Sweet Release: 
                </Grid.Column>
                <Grid.Column width={4}>
                  {maya.sweet_release}
                </Grid.Column>
                <Grid.Column width={4}>
                  {
                    maya.sweet_release < 5 && level < 72 &&
                      <Icon name="add circle" onClick={() => this.modifySkill('maya', 'sweet_release', 1)}/>
                  }
                </Grid.Column>
                <Grid.Column width={4}>
                  {
                    maya.sweet_release > 0 &&
                      <Icon name="minus circle" onClick={() => this.modifySkill('maya', 'sweet_release', -1)}/>                
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
                      {maya.restoration}
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.restoration < 5 && level < 72 &&
                          <Icon name="add circle" onClick={() => this.modifySkill('maya', 'restoration', 1)}/>                
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.restoration > 0 &&
                          <Icon name="minus circle" onClick={() => this.modifySkill('maya', 'restoration', -1)}/>                
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
                      {maya.wreck}
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.wreck < 5 && level < 72 &&
                          <Icon name="add circle" onClick={() => this.modifySkill('maya', 'wreck', 1)}/>
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.wreck > 0 &&
                          <Icon name="minus circle" onClick={() => this.modifySkill('maya', 'wreck', -1)}/>                
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
                      {maya.elated}
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.elated < 5 && level < 72 &&
                          <Icon name="add circle" onClick={() => this.modifySkill('maya', 'elated', 1)}/>
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.elated > 0 &&
                          <Icon name="minus circle" onClick={() => this.modifySkill('maya', 'elated', -1)}/>                
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
                      {maya.recompense}
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.recompense < 5 && level < 72 &&
                          <Icon name="add circle" onClick={() => this.modifySkill('maya', 'recompense', 1)}/>
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.recompense > 0 &&
                          <Icon name="minus circle" onClick={() => this.modifySkill('maya', 'recompense', -1)}/>                
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
                      {maya.res}
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.res < 1 && level < 72 &&
                          <Icon name="add circle" onClick={() => this.modifySkill('maya', 'res', 1)}/>
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.res > 0 &&
                          <Icon name="minus circle" onClick={() => this.modifySkill('maya', 'res', -1)}/>                
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
                      {maya.sustenance}
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.sustenance < 5 && level < 72 &&
                          <Icon name="add circle" onClick={() => this.modifySkill('maya', 'sustenance', 1)}/>
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.sustenance > 0 &&
                          <Icon name="minus circle" onClick={() => this.modifySkill('maya', 'sustenance', -1)}/>                
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
                      {maya.life_tap}
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.life_tap < 5 && level < 72 &&
                          <Icon name="add circle" onClick={() => this.modifySkill('maya', 'life_tap', 1)}/>
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.life_tap > 0 &&
                          <Icon name="minus circle" onClick={() => this.modifySkill('maya', 'life_tap', -1)}/>                
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
                      {maya.scorn}
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.scorn < 1 && level < 72 &&
                          <Icon name="add circle" onClick={() => this.modifySkill('maya', 'scorn', 1)}/>
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.scorn > 0 &&
                          <Icon name="minus circle" onClick={() => this.modifySkill('maya', 'scorn', -1)}/>                
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
                  {maya.flicker}
                </Grid.Column>
                <Grid.Column width={4}>
                  {
                    maya.flicker < 5 && level < 72 &&
                      <Icon name="add circle" onClick={() => {this.modifySkill('maya', 'flicker', 1)}}/>                
                  }
                </Grid.Column>
                <Grid.Column width={4}>
                  {
                    maya.flicker > 0 &&
                      <Icon name="minus circle" onClick={() => {this.modifySkill('maya', 'flicker', -1)}}/>
                  }
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={4}>
                  Foresight: 
                </Grid.Column>
                <Grid.Column width={4}>
                  {maya.foresight}
                </Grid.Column>
                <Grid.Column width={4}>
                  {
                    maya.foresight < 5 && level < 72 &&
                      <Icon name="add circle" onClick={() => this.modifySkill('maya', 'foresight', 1)}/>
                  }
                </Grid.Column>
                <Grid.Column width={4}>
                  {
                    maya.foresight > 0 &&
                      <Icon name="minus circle" onClick={() => this.modifySkill('maya', 'foresight', -1)}/>                
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
                      {maya.immolate}
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.immolate < 5 && level < 72 &&
                          <Icon name="add circle" onClick={() => this.modifySkill('maya', 'immolate', 1)}/>                
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.immolate > 0 &&
                          <Icon name="minus circle" onClick={() => this.modifySkill('maya', 'immolate', -1)}/>                
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
                      {maya.helios}
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.helios < 5 && level < 72 &&
                          <Icon name="add circle" onClick={() => this.modifySkill('maya', 'helios', 1)}/>
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.helios > 0 &&
                          <Icon name="minus circle" onClick={() => this.modifySkill('maya', 'helios', -1)}/>                
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
                      {maya.chain_reaction}
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.chain_reaction < 5 && level < 72 &&
                          <Icon name="add circle" onClick={() => this.modifySkill('maya', 'chain_reaction', 1)}/>
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.chain_reaction > 0 &&
                          <Icon name="minus circle" onClick={() => this.modifySkill('maya', 'chain_reaction', -1)}/>                
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
                      {maya.backdraft}
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.backdraft < 5 && level < 72 &&
                          <Icon name="add circle" onClick={() => this.modifySkill('maya', 'backdraft', 1)}/>
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.backdraft > 0 &&
                          <Icon name="minus circle" onClick={() => this.modifySkill('maya', 'backdraft', -1)}/>                
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
                      {maya.cloud_kill}
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.cloud_kill < 1 && level < 72 &&
                          <Icon name="add circle" onClick={() => this.modifySkill('maya', 'cloud_kill', 1)}/>
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.cloud_kill > 0 &&
                          <Icon name="minus circle" onClick={() => this.modifySkill('maya', 'cloud_kill', -1)}/>                
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
                      {maya.reaper}
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.reaper < 5 && level < 72 &&
                          <Icon name="add circle" onClick={() => this.modifySkill('maya', 'reaper', 1)}/>
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.reaper > 0 &&
                          <Icon name="minus circle" onClick={() => this.modifySkill('maya', 'reaper', -1)}/>                
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
                      {maya.blight_phoenix}
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.blight_phoenix < 5 && level < 72 &&
                          <Icon name="add circle" onClick={() => this.modifySkill('maya', 'blight_phoenix', 1)}/>
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.blight_phoenix > 0 &&
                          <Icon name="minus circle" onClick={() => this.modifySkill('maya', 'blight_phoenix', -1)}/>                
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
                      {maya.ruin}
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.ruin < 1 && level < 72 &&
                          <Icon name="add circle" onClick={() => this.modifySkill('maya', 'ruin', 1)}/>
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        maya.ruin > 0 &&
                          <Icon name="minus circle" onClick={() => this.modifySkill('maya', 'ruin', -1)}/>                
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

const mapStateToProps = (state) => {
  return ({ skills: state.skills })
}

export default connect(mapStateToProps)(SkillSelector)