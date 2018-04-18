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
import { initialSkills, skillSender } from '../actions/skills'

class SkillSelector extends React.Component {
  state = {
    level: 5
  }

  componentDidMount() {
    const { dispatch } = this.props
    !this.props.skills.maya && dispatch(initialSkills())
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
    const { maya } = this.props.skills
    switch(skill) {
      case 'ward':
        dispatch(skillSender(Object.assign(maya, { ward: maya.ward + modifier })))
        break
      case 'accelerate':
        dispatch(skillSender(Object.assign(maya, { accelerate: maya.accelerate + modifier })))
        break
      case 'kinetic_reflection':
        dispatch(skillSender(Object.assign(maya, { kinetic_reflection: maya.kinetic_reflection + modifier })))
        break
      case 'suspension':
        dispatch(skillSender(Object.assign(maya, { suspension: maya.suspension + modifier })))
        break
      case 'inertia':
        dispatch(skillSender(Object.assign(maya, { inertia: maya.inertia + modifier })))
        break
      case 'fleet' :
        dispatch(skillSender(Object.assign(maya, { fleet: maya.fleet + modifier })))
        break
      case 'converge':
        dispatch(skillSender(Object.assign(maya, { converge: maya.converge + modifier })))
        break
      case 'quicken':
        dispatch(skillSender(Object.assign(maya, { quicken: maya.quicken + modifier })))
        break
      case 'sub_sequence':
        dispatch(skillSender(Object.assign(maya, { sub_sequence: maya.sub_sequence + modifier })))
        break
      case 'thoughlock':
        dispatch(skillSender(Object.assign(maya, { thoughtlock: maya.thoughtlock + modifier })))
        break
      case 'minds_eye':
        dispatch(skillSender(Object.assign(maya, { fleet: maya.fleet + modifier })))
        break
      case 'sweet_release':
        dispatch(skillSender(Object.assign(maya, { sweet_release: maya.sweet_release + modifier })))
        break
      case 'restoration':
        dispatch(skillSender(Object.assign(maya, { restoration: maya.restoration + modifier })))
        break
      case 'wreck':
        dispatch(skillSender(Object.assign(maya, { wreck: maya.wreck + modifier })))
        break
      case 'elated':
        dispatch(skillSender(Object.assign(maya, { elated: maya.elated + modifier })))
        break
      case 'recompense':
        dispatch(skillSender(Object.assign(maya, { recompense: maya.recompense + modifier })))
        break
      case 'res':
        dispatch(skillSender(Object.assign(maya, { res: maya.res + modifier })))
        break
      case 'sustenance':
        dispatch(skillSender(Object.assign(maya, { sustenance: maya.sustenance + modifier })))
        break
      case 'life_tap':
        dispatch(skillSender(Object.assign(maya, { life_tap: maya.life_tap + modifier })))
        break
      case 'scorn':
        dispatch(skillSender(Object.assign(maya, { scorn: maya.scorn + modifier })))
        break
      case 'flicker':
        dispatch(skillSender(Object.assign(maya, { flicker: maya.flicker + modifier })))
        break
      case 'foresight':
        dispatch(skillSender(Object.assign(maya, { foresight: maya.foresight + modifier })))
        break
      case 'immolate':
        dispatch(skillSender(Object.assign(maya, { immolate: maya.immolate + modifier })))
        break
      case 'helios':
        dispatch(skillSender(Object.assign(maya, { helios: maya.helios + modifier })))
        break
      case 'chain_reaction':
        dispatch(skillSender(Object.assign(maya, { chain_reaction: maya.chain_reaction + modifier })))
        break
      case 'backdraft':
        dispatch(skillSender(Object.assign(maya, { backdraft: maya.backdraft + modifier })))
        break
      case 'cloud_kill':
        dispatch(skillSender(Object.assign(maya, { cloud_kill: maya.cloud_kill + modifier })))
        break
      case 'reaper':
        dispatch(skillSender(Object.assign(maya, { reaper: maya.reaper + modifier })))
        break
      case 'blight_pheonix':
        dispatch(skillSender(Object.assign(maya, { blight_phoenix: maya.blight_phoenix + modifier })))
        break
      case 'ruin':
        dispatch(skillSender(Object.assign(maya, { ruin: maya.ruin + modifier })))
        break
      default: break
    }
  }

  render() {
    const { level } = this.state
    const { maya } = this.props.skills
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
          <Grid columns={4} divided>
            <Grid.Row>
              <Grid.Column width={4}>
                Ward: 
              </Grid.Column>
              <Grid.Column width={4}>
                {maya.ward}
              </Grid.Column>
              <Grid.Column width={4}>
                {
                  maya.ward < 5 &&
                    <Icon name="add circle" onClick={() => this.modifySkill('maya', 'ward', 1) }/>                
                }
              </Grid.Column>
              <Grid.Column width={4}>
                {
                  maya.ward > 0 &&
                    <Icon name="minus circle" onClick={() => this.modifySkill('maya', 'ward', -1)}/>                
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
                  maya.accelerate < 5 &&
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
              level >= 10 &&
                <Grid.Row>
                  <Grid.Column width={4}>
                    Suspension: 
                  </Grid.Column>
                  <Grid.Column width={4}>
                    {maya.suspension}
                  </Grid.Column>
                  <Grid.Column width={4}>
                    {
                      maya.suspension < 5 &&
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
              level >= 10 &&
                <Grid.Row>
                  <Grid.Column width={4}>
                    Kinetic Reflection: 
                  </Grid.Column>
                  <Grid.Column width={4}>
                    {maya.kineticReflection}
                  </Grid.Column>
                  <Grid.Column width={4}>
                    {
                      maya.kineticReflection < 5 &&
                        <Icon name="add circle" onClick={() => this.modifySkill('maya', 'kinetic_reflection', 1)}/>
                    }
                  </Grid.Column>
                  <Grid.Column width={4}>
                    {
                      maya.kineticReflection > 0 &&
                        <Icon name="minus circle" onClick={() => this.modifySkill('maya', 'kinetic_reflection', -1)}/>                
                    }            
                  </Grid.Column>
                </Grid.Row>
            }
            { 
              level >= 15 &&
                <Grid.Row>
                  <Grid.Column width={4}>
                    Fleet: 
                  </Grid.Column>
                  <Grid.Column width={4}>
                    {maya.fleet}
                  </Grid.Column>
                  <Grid.Column width={4}>
                    {
                      maya.fleet < 5 &&
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
              level >= 15 &&
                <Grid.Row>
                  <Grid.Column width={4}>
                    Converge: 
                  </Grid.Column>
                  <Grid.Column width={4}>
                    {maya.converge}
                  </Grid.Column>
                  <Grid.Column width={4}>
                    {
                      maya.converge < 1 &&
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
              level >= 15 &&
                <Grid.Row>
                  <Grid.Column width={4}>
                    Inertia: 
                  </Grid.Column>
                  <Grid.Column width={4}>
                    {maya.inertia}
                  </Grid.Column>
                  <Grid.Column width={4}>
                    {
                      maya.inertia < 5 &&
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
              level >= 20 &&
                <Grid.Row>
                  <Grid.Column width={4}>
                    Quicken: 
                  </Grid.Column>
                  <Grid.Column width={4}>
                    {maya.quicken}
                  </Grid.Column>
                  <Grid.Column width={4}>
                    {
                      maya.quicken < 5 &&
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
              level >= 25 &&
                <Grid.Row>
                  <Grid.Column width={4}>
                    Sub-Sequence: 
                  </Grid.Column>
                  <Grid.Column width={4}>
                    {maya.subSequence}
                  </Grid.Column>
                  <Grid.Column width={4}>
                    {
                      maya.subSequence < 5 &&
                        <Icon name="add circle" onClick={() => this.modifySkill('maya', 'sub_sequence', 1)}/>
                    }
                  </Grid.Column>
                  <Grid.Column width={4}>
                    {
                      maya.subSequence > 0 &&
                        <Icon name="minus circle" onClick={() => this.modifySkill('maya', 'sub_sequence', -1)}/>                
                    }            
                  </Grid.Column>
                </Grid.Row>
            }
            { 
              level >= 30 &&
                <Grid.Row>
                  <Grid.Column width={4}>
                    Thoughtlock: 
                  </Grid.Column>
                  <Grid.Column width={4}>
                    {maya.thoughtlock}
                  </Grid.Column>
                  <Grid.Column width={4}>
                    {
                      maya.thoughtlock < 1 &&
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