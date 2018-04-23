import React from 'react'
import { 
  List, 
  Header,
  Divider,
  Loader,
  Icon,
  Grid,
} from 'semantic-ui-react'
import mayaskills from '../assets/images/mayaskills.png'
import addCircle from '../assets/images/addcircle.png'
import addCircleDisabled from '../assets/images/addcircle_disabled.png'
import removeCircle from '../assets/images/removecircle.png'
import removeCircleDisabled from '../assets/images/removecircle_disabled.png'
import MotionSelector from './MotionSelector'
import HarmonySelector from './HarmonySelector'
import CataclysmSelector from './CataclysmSelector'

class MayaSkillSelector extends React.Component {

  render() {
    const { 
      maya, 
      level, 
      motion, 
      harmony, 
      cataclysm,
      callbackState,
    } = this.props

    if (!maya)
      return <Loader active>Loading skills...</Loader>
    else {
      return (
        <div>
          <Divider horizontal>
            <Header as ="h2">
              Level: {level}
            </Header>
          </Divider>
          <Header as="h3">
            Maya
          </Header>
          <Grid columns={3} divided>
            <Grid.Column>
              <MotionSelector 
                callbackState={callbackState}
                motion={motion} 
                maya={maya}
                level={level}
              />
            </Grid.Column>
            <Grid.Column>
              <HarmonySelector
                callbackState={callbackState}
                harmony={harmony}
                maya={maya}
                level={level}
              />
            </Grid.Column>
            <Grid.Column>
              <CataclysmSelector
                callbackState={callbackState}
                cataclysm={cataclysm}
                maya={maya}
                level={level}
              />
            </Grid.Column>
          </Grid>
          <Divider hidden />
        </div>
      )
    }
  }
}

export default MayaSkillSelector