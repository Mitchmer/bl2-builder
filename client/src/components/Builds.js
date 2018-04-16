import React, { Fragment } from 'react'
import { 
  Container,
  Button,
  Divider, 
  Header,
  List,
} from 'semantic-ui-react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { getBuilds } from '../actions/builds'
import { Link } from 'react-router-dom'
import UserBuilds from './UserBuilds'

class Builds extends React.Component {
  state = { buildView: '' }

  componentDidMount() {
    const { dispatch, user } = this.props
    dispatch(getBuilds())
    user && this.userBuildsView()
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

  buildsToggle = () => {
    const { builds } = this.props
    const { buildView } = this.state
    switch (this.state.buildView) {
      case 'user builds':
        return <UserBuilds />
      default:
        return (
          <div>
            <Divider horizontal>
              <Header as="h1">
                All Builds
              </Header>
            </Divider>
            <List>
              { builds.map( build => (
                  <div key={build.id}>
                    <List.Item>
                      <Link to={`/builds/${build.id}`}>
                        <Header as="h2">
                          {build.name}
                        </Header>
                      </Link>
                      <StyledHeader as="h5">
                        {build.character}
                      </StyledHeader>
                    </List.Item>
                    <Divider hidden />
                  </div>
                ))
              }
            </List>
          </div>
        )
    }
  }

  render() {
    const { user } = this.props
    return (
      <Container>
        { user &&
          <Fragment>
            <Button onClick={this.allBuildsView}>
              All Builds
            </Button>
            <Button onClick={this.userBuildsView}>
              My Builds
            </Button>
          </Fragment> 
        }
        {this.buildsToggle()}
      </Container>    
    )
  }
}

const StyledHeader = styled(Header)`
  margin: 0 !important;
`

const mapStateToProps = (state) => {
  return { builds: state.builds, user: state.user.id }
}

export default connect(mapStateToProps)(Builds)