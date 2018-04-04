import React from 'react'
import { connect } from 'react-redux'
import { getUserBuilds } from '../actions/builds'
import { Header, Container, List } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class UserBuilds extends React.Component {
  state = { userBuilds: {} }

  componentDidMount() {
    const { user } = this.props
    this.props.dispatch(getUserBuilds(user.id))
  }

  // debug = () => {
  //   debugger
  // }

  render () {
    const { userBuilds } = this.props
    return (
      <div>
        <Container>
          <List>
            {
              userBuilds.map( b =>
                <List.Item key={b.id}>
                  <Link to={`/builds/${b.id}`}>
                    <Header as="h2">
                      {b.name}
                    </Header>
                  </Link>
                    <Header as="h5">
                      {b.character}
                    </Header>
                  </List.Item>
              )
            }
          </List>
        </Container>
      </div>
    )
  }  
}

const mapStateToProps = (state) => {
  return { userBuilds: state.userbuilds, user: state.user }
}

export default connect(mapStateToProps)(UserBuilds)