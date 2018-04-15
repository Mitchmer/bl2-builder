import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { 
  Container, 
  Form, 
  Button,
} from 'semantic-ui-react'
import { addBuild } from '../actions/builds'

class BuildForm extends React.Component {
  state = { buildName: '', character: '', description: '' }

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

  newBuildRouter = (id) => {
    
    this.props.history.push(`builds/${id}`)
  }

  render(){

    const { buildName, character, description } = this.state
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <Form.Input
              label="Build Name*"
              required
              id="buildName"
              value={buildName}
              placeholder="Build Name"
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              label="Character*"
              required
              id="character"
              value={character}
              placeholder="Character Name"
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Form.TextArea
              label="Description*"
              required
              id="description"
              value={description}
              placeholder="Description"
              onChange={this.handleChange}
            />
          </Form.Field>
          <Button>Submit</Button>
        </Form>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return { build: state.userbuilds }
}

export default withRouter(connect(mapStateToProps)(BuildForm))