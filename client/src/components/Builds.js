import React, { Fragment } from 'react'
import { 
  Container,
  Button,
  Divider, 
  Header,
  List,
} from 'semantic-ui-react'
import { connect } from 'react-redux'
import { getBuilds } from '../actions/builds'
import { Link } from 'react-router-dom'
import UserBuilds from './UserBuilds'

class Builds extends React.Component {
  state = { buildView: '' }

  componentDidMount() {
    this.props.dispatch(getBuilds())
  }

  allBuildsView = () => {
    this.setState( state => {
      return { buildView: '' }
    })
  }

  userBuildsView = () => {
    this.setState( state => {
      return { buildView: 'user builds' }
    })
  }
  //Maybe wrong approach?
  //
  // toggleView = () => {
  //   this.setState( state => {
  //     return { buildView: !buildView }
  //   })
  // }
  buildsToggle = () => {
    const { builds } = this.props
    const { buildView } = this.state
    switch (this.state.buildView) {
      case 'user builds':
        return <UserBuilds />
      default:
        return (builds.map( build => 
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
        ))

    }
  }

  render() {
    const { user } = this.props
    return (
      <Fragment>
        { user ? (
          <Container>
            <Button onClick={this.allBuildsView}>
              All Builds
            </Button>
            <Button onClick={this.userBuildsView}>
              My Builds
            </Button>
          </Container>
        )
        :
        null
      }
        <List>
          {this.buildsToggle()}
        </List>
      </Fragment>     
    )
  }
}

const mapStateToProps = (state) => {
  return { builds: state.builds, user: state.user.id }
}

export default connect(mapStateToProps)(Builds)