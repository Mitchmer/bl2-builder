import React from 'react'
import { connect } from 'react-redux'
import { Header, Container, Divider, Grid } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'

class BuildView extends React.Component {
  componentDidMount() {
    // page refresh handler
    const { build, history, dispatch } = this.props
    if (build === undefined) {
      dispatch(history.push('/'))
    }
  }

  skillView = () => {
    const { build = {} } = this.props
    const { maya } = this.props.build.skills
    //TODO: show skills in single build view
    switch (build.character) {
      case 'Maya': 
        return (
          <div>
            <Grid.Column>
              <Divider horizontal>
                Motion
              </Divider>
              <Grid.Row>
                Ward: {maya.ward}
              </Grid.Row>
              <Grid.Row>
                Accelerate: {maya.accelerate}
              </Grid.Row>
              <Grid.Row>
                Suspension: {maya.suspension}
              </Grid.Row>
              <Grid.Row>
                Kinetic Reflection: {maya.kinetic_reflection}
              </Grid.Row>
              <Grid.Row>
                Fleet: {maya.fleet}
              </Grid.Row>
              <Grid.Row>
                Inertia: {maya.inertia}
              </Grid.Row>
              <Grid.Row>
                Converge: {maya.converge}
              </Grid.Row>
              <Grid.Row>
                Quicken: {maya.quicken}
              </Grid.Row>
              <Grid.Row>
                Sub-Sequence: {maya.sub_sequence}
              </Grid.Row>
              <Grid.Row>
                Thoughtlock: {maya.thoughtlock}
              </Grid.Row>
            </Grid.Column>
            <Grid.Column>
              <Divider horizontal>
                Harmony
              </Divider>
              <Grid.Row>
                Mind's Eye: {maya.minds_eye}
              </Grid.Row>
              <Grid.Row>
                Sweet Release: {maya.sweet_release}
              </Grid.Row>
              <Grid.Row>
                Restoration: {maya.restoration}
              </Grid.Row>
              <Grid.Row>
                Wreck: {maya.wreck}
              </Grid.Row>
              <Grid.Row>
                Elated: {maya.elated}
              </Grid.Row>
              <Grid.Row>
                Recompense: {maya.recompense}
              </Grid.Row>
              <Grid.Row>
                Res: {maya.res}
              </Grid.Row>
              <Grid.Row>
                Sustenance: {maya.sustenance}
              </Grid.Row>
              <Grid.Row>
                Life Tap: {maya.life_tap}
              </Grid.Row>
              <Grid.Row>
                Scorn: {maya.scorn}
              </Grid.Row>
            </Grid.Column>
            <Grid.Column>
              <Divider horizontal>
                Cataclysm
              </Divider>
              <Grid.Row>
                Flicker: {maya.flicker}
              </Grid.Row>
              <Grid.Row>
                Foresight: {maya.foresight}
              </Grid.Row>
              <Grid.Row>
                Immolate: {maya.immolate}
              </Grid.Row>
              <Grid.Row>
                Chain Reaction: {maya.chain_reaction}
              </Grid.Row>
              <Grid.Row>
                Backdraft: {maya.backdraft}
              </Grid.Row>
              <Grid.Row>
                Cloud Kill: {maya.cloud_kill}
              </Grid.Row>
              <Grid.Row>
                Reaper: {maya.reaper}
              </Grid.Row>
              <Grid.Row>
                Blight Phoenix: {maya.blight_phoenix}
              </Grid.Row>
              <Grid.Row>
                Ruin: {maya.ruin}
              </Grid.Row>
            </Grid.Column>
          </div>
        )
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
        <Grid>
          { this.skillView() }
        </Grid>
      </Container>
    )
  }
}


const mapStateToProps = (state, props) => {
  return { build: state.builds.find( b => b.id === parseInt(props.match.params.id)), user: state.user.id }
}

export default withRouter(connect(mapStateToProps)(BuildView))