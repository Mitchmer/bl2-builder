import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { 
  Container, 
  Form, 
  Button,
} from 'semantic-ui-react'
import { addBuild } from '../actions/builds'
import SkillSelector from './SkillSelector';

class BuildForm extends React.Component {
  state = { buildName: '', character: '', description: '' }

  characterOptions = [
    { key: 'maya', text: 'Maya, Siren', value: 'Maya' },
    { key: 'axton', text: 'Axton, Commando', value: 'Axton' },
    { key: 'zero', text: 'Zer0, Assassin', value: 'Zer0' },
    { key: 'salvador', text: 'Salvador, Gunzerker', value: 'Salvador' },
    { key: 'krieg', text: 'Krieg, Pycho', value: 'Krieg' },
    { key: 'gaige', text: 'Gaige, Mechromancer', value: 'Gaige' },
  ]

  handleChange = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  }

  handleSubmit = () => {
    const { dispatch, history } = this.props
    const { buildName, character, description } = this.state
    let pendingBuild = { name: buildName, character, description }    
    dispatch(addBuild(pendingBuild, history))
  }

  render(){

    const { buildName, character, description } = this.state
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <Form.Input
              label="Build Name"
              required
              id="buildName"
              value={buildName}
              placeholder="Build Name"
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Form.Select
              label="Character"
              required
              options={this.characterOptions}
              id="character"
              value={character}
              placeholder='Character'
              onChange={(e, { value }) => {
                this.setState({ character: value })
              }}
            />
          </Form.Field>
          <Form.Field>
            <Form.TextArea
              label="Description"
              required
              id="description"
              value={description}
              placeholder="Description"
              onChange={this.handleChange}
            />
          </Form.Field>
          <Button>Submit</Button>
        </Form>
        <SkillSelector />
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return { build: state.userbuilds }
}

export default withRouter(connect(mapStateToProps)(BuildForm))