import React, { Component } from 'react'
import { 
  Button,
  Divider, 
  Header,
  List,
} from 'semantic-ui-react'
import { connect } from 'react-redux'
import { getBuilds } from '../actions/builds'
import { Link } from 'react-router-dom'

class Builds extends React.Component {

  componentDidMount() {
    this.props.dispatch(getBuilds())
  }
  
  render() {
    const { builds } = this.props
    return (
      <List>
        { builds.map( build => 
          <List.Item key={build.id}>
            <Link to={`/builds/${build.id}`}>
              <Header as="h2">
                {build.name}
              </Header>
            </Link>
            <Header as="h5">
              {build.character}
            </Header>
          </List.Item>
        )}
      </List>
    )
  }
}

const mapStateToProps = (state) => {
  return { builds: state.builds, user: state.user.id }
}

export default connect(mapStateToProps)(Builds)