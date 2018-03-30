import axios from 'axios'
import React from 'react'
import { 
  Button,
  Divider, 
} from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Header, List } from 'semantic-ui-react'
import { getBuilds } from '../actions/builds'

class Builds extends React.Component {

  componentDidMount() {
    this.props.dispatch(getBuilds())
  }
  
  render() {
    const { builds } = this.props
    return (
      <List>
        { builds.map( build => 
          <List.Item>
            <Header as="h3">
              {build.name}
            </Header>
            <Header as="h4">
              {build.character}
            </Header>
          </List.Item>
        )}
      </List>
    )
  }
}

const mapStateToProps = (state) => {
  const { builds } = state
  return { builds }
}

export default connect(mapStateToProps)(Builds)