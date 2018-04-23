import React from 'react'
import { 
  Loader,
  Segment,
  Header,
  Divider,
  Grid,
  Button,
} from 'semantic-ui-react'
import MotionSelector from './MotionSelector'
import HarmonySelector from './HarmonySelector'
import CataclysmSelector from './CataclysmSelector'
import styled from 'styled-components'

class MayaSkillSelector extends React.Component {
  state = {
    motion2: 0,
    motion3: 0,
    motion4: 0,
    motion5: 0,
    motion6: 0,
    harmony2: 0,
    harmony3: 0,
    harmony4: 0,
    harmony5: 0,
    harmony6: 0,
    cataclysm2: 0,
    cataclysm3: 0,
    cataclysm4: 0,
    cataclysm5: 0,
    cataclysm6: 0,
  }

  resetTiers = () => {
    this.setState({
      motion2: 0,
      motion3: 0,
      motion4: 0,
      motion5: 0,
      motion6: 0,
      harmony2: 0,
      harmony3: 0,
      harmony4: 0,
      harmony5: 0,
      harmony6: 0,
      cataclysm2: 0,
      cataclysm3: 0,
      cataclysm4: 0,
      cataclysm5: 0,
      cataclysm6: 0,
    })
    this.props.resetSkills('maya')
  }

  setTiers = (incomingTier) => {
    this.setState({
      ...this.state,
      ...incomingTier
    })
  }

  render() {
    const { 
      maya, 
      level, 
      motion, 
      harmony, 
      cataclysm,
      callbackState,
    } = this.props

    const {
      motion2,
      motion3,
      motion4,
      motion5,
      motion6,
      harmony2,
      harmony3,
      harmony4,
      harmony5,
      harmony6,
      cataclysm2,
      cataclysm3,
      cataclysm4,
      cataclysm5,
      cataclysm6,
    } = this.state

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
          <Header as="h3" textAlign="center">
            Maya
          </Header>
          <Grid columns={3} divided>
            <StyledGridColumn>
              <Divider horizontal>
                Motion: {motion}
              </Divider>
              <MotionSelector 
                callbackState={callbackState}
                setTiers={this.setTiers}
                motion={motion} 
                maya={maya}
                level={level}
                tier2={motion2}
                tier3={motion3}
                tier4={motion4}
                tier5={motion5}
                tier6={motion6}
              />
            </StyledGridColumn>
            <StyledGridColumn>
              <Divider horizontal>
                Harmony: {harmony}
              </Divider>
              <HarmonySelector
                callbackState={callbackState}
                setTiers={this.setTiers}
                harmony={harmony}
                maya={maya}
                level={level}
                tier2={harmony2}
                tier3={harmony3}
                tier4={harmony4}
                tier5={harmony5}
                tier6={harmony6}
              />
            </StyledGridColumn>
            <StyledGridColumn>
              <Divider horizontal>
                Cataclysm: {cataclysm}
              </Divider>
              <CataclysmSelector
                callbackState={callbackState}
                setTiers={this.setTiers}
                cataclysm={cataclysm}
                maya={maya}
                level={level}
                tier2={cataclysm2}
                tier3={cataclysm3}
                tier4={cataclysm4}
                tier5={cataclysm5}
                tier6={cataclysm6}
              />
            </StyledGridColumn>
          </Grid>
          <Divider horizontal>
            <Segment onClick={this.resetTiers}>Reset</Segment>
          </Divider>
        </div>
      )
    }
  }
}

const StyledGridColumn = styled(Grid.Column)`
  padding: 0 0 0 0 !important;
  display: flex !important;
  flex-direction: column !important
  align-items: center !important;
`

export default MayaSkillSelector