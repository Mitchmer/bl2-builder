import React from 'react'
import { 
  List, 
  Header,
  Divider,
  Loader,
  Icon,
  Grid,
} from 'semantic-ui-react'

class ZeroSkillSelector extends React.Component {

  zeroSkill = (skill, modifier) => {
    const { 
      callbackState,
      zero,
    } = this.props

    switch(skill) {
      case 'headshot':
        callbackState({ zero: {...zero, headshot: zero.headshot + modifier } }, 'sniping' )
        break
      case 'optics':
        callbackState({ zero: {...zero, optics: zero.optics + modifier } }, 'sniping' )
        break
      case 'killer':
        callbackState({ zero: {...zero, killer: zero.killer + modifier } }, 'sniping' )
        break
      case 'precision':
        callbackState({ zero: {...zero, precision: zero.precision + modifier } }, 'sniping' )
        break
      case 'one_shot_one_kill':
        callbackState({ zero: {...zero, one_shot_one_kill: zero.one_shot_one_kill + modifier } }, 'sniping' )
        break
      case 'velocity' :
        callbackState({ zero: {...zero, velocity: zero.velocity + modifier } }, 'sniping' )
        break
      case 'bore':
        callbackState({ zero: {...zero, bore: zero.bore + modifier } }, 'sniping' )
        break
      case 'kill_confirmed':
        callbackState({ zero: {...zero, kill_confirmed: zero.kill_confirmed + modifier } }, 'sniping' )
        break
      case 'at_one_with_the_gun':
        callbackState({ zero: {...zero, at_one_with_the_gun: zero.at_one_with_the_gun + modifier } }, 'sniping' )
        break
      case 'critical_ascension':
        callbackState({ zero: {...zero, critical_ascension: zero.critical_ascension + modifier } }, 'sniping' )
        break
      case 'fast_hands':
        callbackState({ zero: {...zero, fast_hands: zero.fast_hands + modifier } }, 'cunning' )
        break
      case 'counter_strike':
        callbackState({ zero: {...zero, counter_strike: zero.counter_strike + modifier } }, 'cunning' )
        break
      case 'fearless':
        callbackState({ zero: {...zero, fearless: zero.fearless + modifier } }, 'cunning' )
        break
      case 'ambush':
        callbackState({ zero: {...zero, ambush: zero.ambush + modifier } }, 'cunning' )
        break
      case 'rising_shot':
        callbackState({ zero: {...zero, rising_shot: zero.rising_shot + modifier } }, 'cunning' )
        break
      case 'unforseen':
        callbackState({ zero: {...zero, unforseen: zero.unforseen + modifier } }, 'cunning' )
        break
      case 'death_mark':
        callbackState({ zero: {...zero, death_mark: zero.death_mark + modifier } }, 'cunning' )
        break
      case 'innervate':
        callbackState({ zero: {...zero, innervate: zero.innervate + modifier } }, 'cunning' )
        break
      case 'two_fang':
        callbackState({ zero: {...zero, two_fang: zero.two_fang + modifier } }, 'cunning' )
        break
      case 'death_blossom':
        callbackState({ zero: {...zero, death_blossom: zero.death_blossom + modifier } }, 'cunning' )
        break
      case 'iron_hand':
        callbackState({ zero: {...zero, iron_hand: zero.iron_hand + modifier } }, 'bloodshed' )
        break
      case 'killing_blow':
        callbackState({ zero: {...zero, killing_blow: zero.killing_blow + modifier } }, 'bloodshed' )
        break
      case 'grim':
        callbackState({ zero: {...zero, grim: zero.grim + modifier } }, 'bloodshed' )
        break
      case 'be_like_water':
        callbackState({ zero: {...zero, be_like_water: zero.be_like_water + modifier } }, 'bloodshed' )
        break
      case 'followthrough':
        callbackState({ zero: {...zero, followthrough: zero.followthrough + modifier } }, 'bloodshed' )
        break
      case 'backstab':
        callbackState({ zero: {...zero, backstab: zero.backstab + modifier } }, 'bloodshed' )
        break
      case 'execute':
        callbackState({ zero: {...zero, execute: zero.execute + modifier } }, 'bloodshed' )
        break
      case 'resurgence':
        callbackState({ zero: {...zero, resurgence: zero.resurgence + modifier } }, 'bloodshed' )
        break
      case 'like_the_wind':
        callbackState({ zero: {...zero, like_the_wind: zero.like_the_wind + modifier } }, 'bloodshed' )
        break
      case 'many_must_fall':
        callbackState({ zero: {...zero, many_must_fall: zero.many_must_fall + modifier } }, 'bloodshed' )
        break
      default: break
    }
  }

  render() {
    const { 
      zero, 
      level, 
      sniping, 
      cunning, 
      bloodshed,
    } = this.props

    if (!zero)
      return <Loader active>Loading skills...</Loader>
    else {
      return (
        <div>
          <Divider horizontal>
            <Header as ="h2">
              Level: {level}/72
            </Header>
          </Divider>
          <Header as="h3">
            Zero
          </Header>
          <Grid columns={3} divided>
            <Grid.Column>
            <Divider horizontal>
              Sniping: {sniping}
            </Divider>
            <Grid.Row>
                <Grid.Column width={4}>
                  Headsh0t: 
                </Grid.Column>
                <Grid.Column width={4}>
                  {zero.headshot}/5
                </Grid.Column>
                <Grid.Column width={4}>
                  {
                    zero.headshot < 5 && level < 72 &&
                      <Icon name="add circle" onClick={() => this.zeroSkill('headshot', 1)}/>                
                  }
                </Grid.Column>
                <Grid.Column width={4}>
                  {
                    zero.headshot > 0 &&
                      <Icon name="minus circle" onClick={() => this.zeroSkill('headshot', -1)}/>
                  }
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={4}>
                  Optics: 
                </Grid.Column>
                <Grid.Column width={4}>
                  {zero.optics}/5
                </Grid.Column>
                <Grid.Column width={4}>
                  {
                    zero.optics < 5 && level < 72 &&
                      <Icon name="add circle" onClick={() => this.zeroSkill('optics', 1)}/>
                  }
                </Grid.Column>
                <Grid.Column width={4}>
                  {
                    zero.optics > 0 &&
                      <Icon name="minus circle" onClick={() => this.zeroSkill('optics', -1)}/>                
                  }            
                </Grid.Column>
              </Grid.Row>
              {
                sniping >= 5 &&
                  <Grid.Row>
                    <Grid.Column width={4}>
                      Killer: 
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {zero.killer}/5
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        zero.killer < 5 && level < 72 &&
                          <Icon name="add circle" onClick={() => this.zeroSkill('killer', 1)}/>                
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        zero.killer > 0 &&
                          <Icon name="minus circle" onClick={() => this.zeroSkill('killer', -1)}/>                
                      }
                    </Grid.Column>
                  </Grid.Row>
              }
              { 
                sniping >= 5 &&
                  <Grid.Row>
                    <Grid.Column width={4}>
                      Precision: 
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {zero.precision}/5
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        zero.precision < 5 && level < 72 &&
                          <Icon name="add circle" onClick={() => this.zeroSkill('precision', 1)}/>
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        zero.precision > 0 &&
                          <Icon name="minus circle" onClick={() => this.zeroSkill('precision', -1)}/>                
                      }            
                    </Grid.Column>
                  </Grid.Row>
              }
              { 
                sniping >= 10 &&
                  <Grid.Row>
                    <Grid.Column width={4}>
                      One Shot One Kill: 
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {zero.one_shot_one_kill}/5
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        zero.one_shot_one_kill < 5 && level < 72 &&
                          <Icon name="add circle" onClick={() => this.zeroSkill('one_shot_one_kill', 1)}/>
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        zero.one_shot_one_kill > 0 &&
                          <Icon name="minus circle" onClick={() => this.zeroSkill('one_shot_one_kill', -1)}/>                
                      }            
                    </Grid.Column>
                  </Grid.Row>
              }
              { 
                sniping >= 10 &&
                  <Grid.Row>
                    <Grid.Column width={4}>
                      Bore: 
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {zero.bore}/1
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        zero.bore < 1 && level < 72 &&
                          <Icon name="add circle" onClick={() => this.zeroSkill('bore', 1)}/>
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        zero.bore > 0 &&
                          <Icon name="minus circle" onClick={() => this.zeroSkill('bore', -1)}/>                
                      }            
                    </Grid.Column>
                  </Grid.Row>
              }
              { 
                sniping >= 10 &&
                  <Grid.Row>
                    <Grid.Column width={4}>
                      Velocity: 
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {zero.velocity}/5
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        zero.velocity < 5 && level < 72 &&
                          <Icon name="add circle" onClick={() => this.zeroSkill('velocity', 1)}/>
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        zero.velocity > 0 &&
                          <Icon name="minus circle" onClick={() => this.zeroSkill('velocity', -1)}/>                
                      }            
                    </Grid.Column>
                  </Grid.Row>
              }
              { 
                sniping >= 15 &&
                  <Grid.Row>
                    <Grid.Column width={4}>
                      Kill Confirmed: 
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {zero.kill_confirmed}/5
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        zero.kill_confirmed < 5 && level < 72 &&
                          <Icon name="add circle" onClick={() => this.zeroSkill('kill_confirmed', 1)}/>
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        zero.kill_confirmed > 0 &&
                          <Icon name="minus circle" onClick={() => this.zeroSkill('kill_confirmed', -1)}/>                
                      }            
                    </Grid.Column>
                  </Grid.Row>
              }
              { 
                sniping >= 20 &&
                  <Grid.Row>
                    <Grid.Column width={4}>
                      At One With The Gun: 
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {zero.at_one_with_the_gun}/5
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        zero.at_one_with_the_gun < 5 && level < 72 &&
                          <Icon name="add circle" onClick={() => this.zeroSkill('at_one_with_the_gun', 1)}/>
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        zero.at_one_with_the_gun > 0 &&
                          <Icon name="minus circle" onClick={() => this.zeroSkill('at_one_with_the_gun', -1)}/>                
                      }            
                    </Grid.Column>
                  </Grid.Row>
              }
              { 
                sniping >= 25 &&
                  <Grid.Row>
                    <Grid.Column width={4}>
                      Critical Ascension: 
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {zero.critical_ascension}/5
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        zero.critical_ascension < 1 && level < 72 &&
                          <Icon name="add circle" onClick={() => this.zeroSkill('critical_ascension', 1)}/>
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        zero.critical_ascension > 0 &&
                          <Icon name="minus circle" onClick={() => this.zeroSkill('critical_ascension', -1)}/>                
                      }            
                    </Grid.Column>
                  </Grid.Row>
              }
            </Grid.Column>
            <Grid.Column>
              <Divider horizontal>
                Cunning: {cunning}
              </Divider>
              <Grid.Row>
                <Grid.Column width={4}>
                  Fast Hands:
                </Grid.Column>
                <Grid.Column width={4}>
                  {zero.fast_hands}/5
                </Grid.Column>
                <Grid.Column width={4}>
                  {
                    zero.fast_hands < 5 && level < 72 &&
                      <Icon name="add circle" onClick={() => {this.zeroSkill('fast_hands', 1)}}/>                
                  }
                </Grid.Column>
                <Grid.Column width={4}>
                  {
                    zero.fast_hands > 0 &&
                      <Icon name="minus circle" onClick={() => {this.zeroSkill('fast_hands', -1)}}/>
                  }
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={4}>
                  Counter Strike: 
                </Grid.Column>
                <Grid.Column width={4}>
                  {zero.counter_strike}/5
                </Grid.Column>
                <Grid.Column width={4}>
                  {
                    zero.counter_strike < 5 && level < 72 &&
                      <Icon name="add circle" onClick={() => this.zeroSkill('counter_strike', 1)}/>
                  }
                </Grid.Column>
                <Grid.Column width={4}>
                  {
                    zero.counter_strike > 0 &&
                      <Icon name="minus circle" onClick={() => this.zeroSkill('counter_strike', -1)}/>                
                  }            
                </Grid.Column>
              </Grid.Row>
              {
                cunning >= 5 &&
                  <Grid.Row>
                    <Grid.Column width={4}>
                      Ambush: 
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {zero.ambush}/5
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        zero.ambush < 5 && level < 72 &&
                          <Icon name="add circle" onClick={() => this.zeroSkill('ambush', 1)}/>                
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        zero.ambush > 0 &&
                          <Icon name="minus circle" onClick={() => this.zeroSkill('ambush', -1)}/>                
                      }
                    </Grid.Column>
                  </Grid.Row>
              }
              { 
                cunning >= 10 &&
                  <Grid.Row>
                    <Grid.Column width={4}>
                      Fearless: 
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {zero.fearless}/5
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        zero.fearless < 5 && level < 72 &&
                          <Icon name="add circle" onClick={() => this.zeroSkill('fearless', 1)}/>
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        zero.fearless > 0 &&
                          <Icon name="minus circle" onClick={() => this.zeroSkill('fearless', -1)}/>                
                      }            
                    </Grid.Column>
                  </Grid.Row>
              }
              { 
                cunning >= 10 &&
                  <Grid.Row>
                    <Grid.Column width={4}>
                      Rising Shot: 
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {zero.rising_shot}/5
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        zero.rising_shot < 5 && level < 72 &&
                          <Icon name="add circle" onClick={() => this.zeroSkill('rising_shot', 1)}/>
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        zero.rising_shot > 0 &&
                          <Icon name="minus circle" onClick={() => this.zeroSkill('rising_shot', -1)}/>                
                      }            
                    </Grid.Column>
                  </Grid.Row>
              }
              {
                cunning >= 10 &&
                  <Grid.Row>
                    <Grid.Column width={4}>
                      Unforseen: 
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {zero.unforseen}/5
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        zero.unforseen < 5 && level < 72 &&
                          <Icon name="add circle" onClick={() => this.zeroSkill('unforseen', 1)}/>
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        zero.unforseen > 0 &&
                          <Icon name="minus circle" onClick={() => this.zeroSkill('unforseen', -1)}/>                
                      }            
                    </Grid.Column>
                  </Grid.Row>
              }
              { 
                cunning >= 10 &&
                  <Grid.Row>
                    <Grid.Column width={4}>
                      Death Mark: 
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {zero.death_mark}/1
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        zero.death_mark < 1 && level < 72 &&
                          <Icon name="add circle" onClick={() => this.zeroSkill('death_mark', 1)}/>
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        zero.death_mark > 0 &&
                          <Icon name="minus circle" onClick={() => this.zeroSkill('death_mark', -1)}/>                
                      }            
                    </Grid.Column>
                  </Grid.Row>
              }
              { 
                cunning >= 15 &&
                  <Grid.Row>
                    <Grid.Column width={4}>
                      Innervate: 
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {zero.innervate}/5
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        zero.innervate < 5 && level < 72 &&
                          <Icon name="add circle" onClick={() => this.zeroSkill('innervate', 1)}/>
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        zero.innervate > 0 &&
                          <Icon name="minus circle" onClick={() => this.zeroSkill('innervate', -1)}/>                
                      }            
                    </Grid.Column>
                  </Grid.Row>
              }
              { 
                cunning >= 20 &&
                  <Grid.Row>
                    <Grid.Column width={4}>
                      Two Fang: 
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {zero.two_fang}/5
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        zero.two_fang < 5 && level < 72 &&
                          <Icon name="add circle" onClick={() => this.zeroSkill('two_fang', 1)}/>
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        zero.two_fang > 0 &&
                          <Icon name="minus circle" onClick={() => this.zeroSkill('two_fang', -1)}/>                
                      }            
                    </Grid.Column>
                  </Grid.Row>
              }
              { 
                cunning >= 25 &&
                  <Grid.Row>
                    <Grid.Column width={4}>
                      Death Blossom: 
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {zero.death_blossom}/1
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        zero.death_blossom < 1 && level < 72 &&
                          <Icon name="add circle" onClick={() => this.zeroSkill('death_blossom', 1)}/>
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        zero.death_blossom > 0 &&
                          <Icon name="minus circle" onClick={() => this.zeroSkill('death_blossom', -1)}/>                
                      }            
                    </Grid.Column>
                  </Grid.Row>
              }
              </Grid.Column>
            <Grid.Column>
              <Divider horizontal>
                Bloodshed: {bloodshed}
              </Divider>
              <Grid.Row>
                <Grid.Column width={4}>
                  Killing Blow: 
                </Grid.Column>
                <Grid.Column width={4}>
                  {zero.killing_blow}/5
                </Grid.Column>
                <Grid.Column width={4}>
                  {
                    zero.killing_blow < 5 && level < 72 &&
                      <Icon name="add circle" onClick={() => {this.zeroSkill('killing_blow', 1)}}/>                
                  }
                </Grid.Column>
                <Grid.Column width={4}>
                  {
                    zero.killing_blow > 0 &&
                      <Icon name="minus circle" onClick={() => {this.zeroSkill('killing_blow', -1)}}/>
                  }
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={4}>
                  Iron Hand: 
                </Grid.Column>
                <Grid.Column width={4}>
                  {zero.iron_hand}/5
                </Grid.Column>
                <Grid.Column width={4}>
                  {
                    zero.iron_hand < 5 && level < 72 &&
                      <Icon name="add circle" onClick={() => this.zeroSkill('iron_hand', 1)}/>
                  }
                </Grid.Column>
                <Grid.Column width={4}>
                  {
                    zero.iron_hand > 0 &&
                      <Icon name="minus circle" onClick={() => this.zeroSkill('iron_hand', -1)}/>                
                  }            
                </Grid.Column>
              </Grid.Row>
              {
                bloodshed >= 5 &&
                  <Grid.Row>
                    <Grid.Column width={4}>
                      Grim: 
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {zero.grim}/5
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        zero.grim < 5 && level < 72 &&
                          <Icon name="add circle" onClick={() => this.zeroSkill('grim', 1)}/>                
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        zero.grim > 0 &&
                          <Icon name="minus circle" onClick={() => this.zeroSkill('grim', -1)}/>                
                      }
                    </Grid.Column>
                  </Grid.Row>
              }
              { 
                bloodshed >= 5 &&
                  <Grid.Row>
                    <Grid.Column width={4}>
                      Be Like Water: 
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {zero.be_like_water}/5
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        zero.be_like_water < 5 && level < 72 &&
                          <Icon name="add circle" onClick={() => this.zeroSkill('be_like_water', 1)}/>
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        zero.be_like_water > 0 &&
                          <Icon name="minus circle" onClick={() => this.zeroSkill('be_like_water', -1)}/>                
                      }            
                    </Grid.Column>
                  </Grid.Row>
              }
              { 
                bloodshed >= 10 &&
                  <Grid.Row>
                    <Grid.Column width={4}>
                      Follow Through: 
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {zero.followthrough}/5
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        zero.followthrough < 5 && level < 72 &&
                          <Icon name="add circle" onClick={() => this.zeroSkill('followthrough', 1)}/>
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        zero.followthrough > 0 &&
                          <Icon name="minus circle" onClick={() => this.zeroSkill('followthrough', -1)}/>                
                      }            
                    </Grid.Column>
                  </Grid.Row>
              }
              { 
                bloodshed >= 10 &&
                  <Grid.Row>
                    <Grid.Column width={4}>
                      Backstab: 
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {zero.backstab}/5
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        zero.backstab < 5 && level < 72 &&
                          <Icon name="add circle" onClick={() => this.zeroSkill('backstab', 1)}/>
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        zero.backstab > 0 &&
                          <Icon name="minus circle" onClick={() => this.zeroSkill('backstab', -1)}/>                
                      }            
                    </Grid.Column>
                  </Grid.Row>
              }
              { 
                bloodshed >= 10 &&
                  <Grid.Row>
                    <Grid.Column width={4}>
                      Execute: 
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {zero.execute}/1
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        zero.execute < 1 && level < 72 &&
                          <Icon name="add circle" onClick={() => this.zeroSkill('execute', 1)}/>
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        zero.execute > 0 &&
                          <Icon name="minus circle" onClick={() => this.zeroSkill('execute', -1)}/>                
                      }            
                    </Grid.Column>
                  </Grid.Row>
              }
              { 
                bloodshed >= 15 &&
                  <Grid.Row>
                    <Grid.Column width={4}>
                      Resurgence: 
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {zero.resurgence}/5
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        zero.resurgence < 5 && level < 72 &&
                          <Icon name="add circle" onClick={() => this.zeroSkill('resurgence', 1)}/>
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        zero.resurgence > 0 &&
                          <Icon name="minus circle" onClick={() => this.zeroSkill('resurgence', -1)}/>                
                      }            
                    </Grid.Column>
                  </Grid.Row>
              }
              { 
                bloodshed >= 20 &&
                  <Grid.Row>
                    <Grid.Column width={4}>
                      Like The Wind: 
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {zero.like_the_wind}/5
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        zero.like_the_wind < 5 && level < 72 &&
                          <Icon name="add circle" onClick={() => this.zeroSkill('like_the_wind', 1)}/>
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        zero.like_the_wind > 0 &&
                          <Icon name="minus circle" onClick={() => this.zeroSkill('like_the_wind', -1)}/>                
                      }            
                    </Grid.Column>
                  </Grid.Row>
              }
              { 
                bloodshed >= 25 &&
                  <Grid.Row>
                    <Grid.Column width={4}>
                      Many Must Fall: 
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {zero.many_must_fall}/1
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        zero.many_must_fall < 1 && level < 72 &&
                          <Icon name="add circle" onClick={() => this.zeroSkill('many_must_fall', 1)}/>
                      }
                    </Grid.Column>
                    <Grid.Column width={4}>
                      {
                        zero.many_must_fall > 0 &&
                          <Icon name="minus circle" onClick={() => this.zeroSkill('many_must_fall', -1)}/>                
                      }            
                    </Grid.Column>
                  </Grid.Row>
              }
              </Grid.Column>
          </Grid>
          <Divider hidden />
        </div>
      )
    }
  }
}

export default ZeroSkillSelector