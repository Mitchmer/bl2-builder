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
import axios from 'axios'

class Builds extends React.Component {
  state = { buildView: '', guns: [] }

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

  viewBuild = (id) => {
    const { history, dispatch } = this.props
    axios.get('/api/get_guns', { params: { id } } )
      .then ( res => {
        dispatch(history.push({
          pathname: `builds/${id}`,
          state: { guns: res.data }
        }))
      })
  }

  buildsToggle = () => {

    const { builds } = this.props
    const { buildView } = this.state
    switch (this.state.buildView) {
      case 'user builds':
        return (
          <UserBuilds 
            viewBuild={this.viewBuild}
          />
        )
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
                        <Header as="h2" cursor="pointer" onClick={() => this.viewBuild(build.id)}>
                          {build.name}
                        </Header>
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