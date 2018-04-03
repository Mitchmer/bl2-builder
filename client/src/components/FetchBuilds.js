import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { getBuilds } from '../actions/builds'
import Builds from './Builds'
import BuildView from './BuildView'

class FetchBuilds extends React.Component {

  componentDidMount() {
    this.props.dispatch(getBuilds())
  }

  render() {
    return (
      <div>
        <Route exact path="/builds" component={Builds} />
        <Route exact path="/builds/:id" component={BuildView} />
      </div>
    )
  }
}

export default connect()(FetchBuilds)