import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { getUserBuilds } from '../actions/builds'
import { 
  Container,
  Divider, 
  Header, 
  List, 
} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class UserBuilds extends React.Component {

  componentDidMount() {
    const { user } = this.props
    this.props.dispatch(getUserBuilds(user.id))
  }

  render () {
    const { userBuilds, user } = this.props
    return (
      <div>
          <Divider horizontal>
            <Header as="h1">
              {user.username}'s Builds
            </Header>
          </Divider>
          <List>
            {
              userBuilds.map( b =>
                <div key={b.id}>
                  <List.Item>
                    <Link to={`/builds/${b.id}`}>
                      <Header as="h2">
                        {b.name}
                      </Header>
                    </Link>
                    <StyledHeader as="h5">
                      {b.character}
                    </StyledHeader>
                  </List.Item>
                  <Divider hidden />
                </div>
              )
            }
          </List>
      </div>
    )
  }  
}

const StyledHeader = styled(Header)`
  margin: 0 !important;
`

const mapStateToProps = (state) => {
  return { 
    userBuilds: state.userbuilds, 
    user: state.user,
  }
}

export default connect(mapStateToProps)(UserBuilds)