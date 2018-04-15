import React from 'react'
import { connect } from 'react-redux'
import { Header, Container, Divider } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'

class BuildView extends React.Component {
  componentDidMount() {
    // page refresh handler
    const { build, history, dispatch } = this.props
    if (build === undefined) {
      dispatch(history.push('/'))
    }
  }

  render() {
    const { build = {} } = this.props

    return (
      <Container>
        <Divider hidden />
        <Header as="h2">
          {build.name}
        </Header>
        <Header as="h5">
          {build.character}
        </Header>
        <Header as="h5">
          {build.description}
        </Header>
      </Container>
    )
  }
}


const mapStateToProps = (state, props) => {
  return { build: state.builds.find( b => b.id === parseInt(props.match.params.id)), user: state.user.id }
}

export default withRouter(connect(mapStateToProps)(BuildView))