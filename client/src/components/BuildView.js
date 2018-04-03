import React from 'react'
import { connect } from 'react-redux'
import { Header, Container } from 'semantic-ui-react'

class BuildView extends React.Component {
  
  render() {
    const { build = {}, user } = this.props

    return (
      <Container>
        <div>
          <Header as="h2">
            {build.name}
          </Header>
          <Header as="h4">
            {build.character}
          </Header>
        </div>
      </Container>
    )
  }
}


const mapStateToProps = (state, props) => {
  return { build: state.builds.find( b => b.id === parseInt(props.match.params.id)), user: state.user.id }
}

export default connect(mapStateToProps)(BuildView)