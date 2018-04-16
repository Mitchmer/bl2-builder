import React from 'react'
import { connect } from 'react-redux'
import { 
  List, 
  Header,
  Divider,
  Icon,
  Grid,
} from 'semantic-ui-react'

class SkillSelector extends React.Component {
  state = {
    class: '',
    maya: {
      ward: 0,
      accelerate: 0,
      suspension: 0,
      kineticReflection: 0,
      fleet: 0,
      converge: 0,
      inertia: 0,
      quicken: 0,
      subSequence: 0,
      thoughtlock: 0,
    },
    zer0: {
      headshot: 0,
      optics: 0,
    },
    level: 5
  }

  setLevel = () => {
    const { zer0, maya } = this.state
    this.setState({
      level:
        5 +
        maya.ward + 
        maya.accelerate + 
        maya.suspension +
        maya.kineticReflection +
        maya.fleet +
        maya.converge +
        maya.inertia +
        maya.quicken +
        maya.subSequence +
        maya.thoughtlock +
        zer0.headshot + 
        zer0.optics
    } 
    // TODO - refactor into redux
    // () => 
    // dispatch(send maya state to action) 
    )
  }

  modifySkill = (char, skill, modifier) => {
    switch (char) {
      case 'maya':
        this.mayaSkills(skill, modifier)
        break
      default: break
    }
  }
  
  mayaSkills = (skill, modifier) => {
    const { maya } = this.state
    switch (skill) {
      case 'ward':
        this.setState({ maya: { ...maya, ward: maya.ward + modifier }}, this.setLevel)
        break
      case 'accelerate':
        this.setState({ maya: { ...maya, accelerate: maya.accelerate + modifier } }, this.setLevel)
        break
      case 'suspension':
        this.setState({ maya: { ...maya, suspension: maya.suspension + modifier }}, this.setLevel)
        break
      case 'kineticReflection':
        this.setState({ maya: { ...maya, kineticReflection: maya.kineticReflection + modifier }}, this.setLevel)
        break
      case 'fleet':
        this.setState({ maya: { ...maya, fleet: maya.fleet + modifier }}, this.setLevel)
        break
      case 'converge':
        this.setState({ maya: { ...maya, converge: maya.converge + modifier }}, this.setLevel)
        break
      case 'inertia':
        this.setState({ maya: { ...maya, inertia: maya.inertia + modifier }}, this.setLevel)
        break
      case 'quicken':
        this.setState({ maya: { ...maya, quicken: maya.quicken + modifier }}, this.setLevel)
        break
      case 'subSequence':
        this.setState({ maya: { ...maya, subSequence: maya.subSequence + modifier }}, this.setLevel)
        break
      case 'thoughtlock':
        this.setState({ maya: { ...maya, thoughtlock: maya.thoughtlock + modifier }}, this.setLevel)
        break
      default: break
    }
  }

  zeroSkills = (skill, modifier) => {
    const { zer0 } = this.state
    switch (skill) {
      case 'headshot':
        this.setState({ zer0: { ...zer0, headshot: zer0.headshot + modifier } }, this.setLevel)
        break
      case 'optics':
        this.setState({ zer0: { ...zer0, optics: zer0.optics + modifier } }, this.setLevel)
        break
      default: break
    }
  }

  render() {
    const { maya, zer0, level } = this.state

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
                  <Icon name="add circle" onClick={() => this.modifySkill('maya', 'ward', 1)}/>                
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
                      <Icon name="add circle" onClick={() => this.modifySkill('maya', 'kineticReflection', 1)}/>
                  }
                </Grid.Column>
                <Grid.Column width={4}>
                  {
                    maya.kineticReflection > 0 &&
                      <Icon name="minus circle" onClick={() => this.modifySkill('maya', 'kineticReflection', -1)}/>                
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
                      <Icon name="add circle" onClick={() => this.modifySkill('maya', 'subSequence', 1)}/>
                  }
                </Grid.Column>
                <Grid.Column width={4}>
                  {
                    maya.subSequence > 0 &&
                      <Icon name="minus circle" onClick={() => this.modifySkill('maya', 'subSequence', -1)}/>                
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

export default connect()(SkillSelector)