import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { 
  Container, 
  Form, 
  Button,
  Icon,
} from 'semantic-ui-react'
import { addBuild } from '../actions/builds'
import MayaSkillSelector from './MayaSkillSelector'
import ZeroSkillSelector from './ZeroSkillSelector'
import axios from 'axios'

class BuildForm extends React.Component {
  state = { 
    guns: [],
    buildGuns: [],
    buildName: '', 
    character: '', 
    description: '',
    level: 5,
    motion: 0,
    harmony: 0,
    cataclysm: 0,
    sniping: 0,
    cunning: 0,
    bloodshed: 0,
    skills: {
      maya: {
        ward: 0,
        accelerate: 0,
        kinetic_reflection: 0,
        suspension: 0,
        inertia: 0,
        fleet: 0,
        converge: 0,
        quicken: 0,
        sub_sequence: 0,
        thoughtlock: 0,
        minds_eye: 0,
        sweet_release: 0,
        restoration: 0,
        wreck: 0,
        elated: 0,
        recompense: 0,
        res: 0,
        sustenance: 0,
        life_tap: 0,
        scorn: 0,
        flicker: 0,
        foresight: 0,
        immolate: 0,
        helios: 0,
        chain_reaction: 0,
        backdraft: 0,
        cloud_kill: 0,
        reaper: 0,
        blight_phoenix: 0,
        ruin: 0,
      },
      zero: {
        headshot: 0,
        optics: 0,
        killer: 0,
        precision: 0,
        one_shot_one_kill: 0,
        velocity: 0,
        bore: 0,
        kill_confirmed: 0,
        at_one_with_the_gun: 0,
        critical_ascension: 0,
        fast_hands: 0,
        counter_strike: 0,
        fearless: 0,
        ambush: 0,
        rising_shot: 0,
        unforseen: 0,
        death_mark: 0,
        innervate: 0,
        two_fang: 0,
        death_blossom: 0,
        killing_blow: 0,
        iron_hand: 0,
        grim: 0,
        be_like_water: 0,
        followthrough: 0,
        execute: 0,
        resurgence: 0,
        like_the_wind: 0,
        many_must_fall: 0,
      },
    },
  }

  characterOptions = [
    { key: 'maya', text: 'Maya, Siren', value: 'Maya' },
    // { key: 'axton', text: 'Axton, Commando', value: 'Axton' },
    // { key: 'zero', text: 'Zer0, Assassin', value: 'Zer0' },
    // { key: 'salvador', text: 'Salvador, Gunzerker', value: 'Salvador' },
    // { key: 'krieg', text: 'Krieg, Pycho', value: 'Krieg' },
    // { key: 'gaige', text: 'Gaige, Mechromancer', value: 'Gaige' },
  ]

  componentDidMount() {
    axios.get('/api/guns')
      .then( res => {
        this.setState({ guns: res.data })
      })
  }

  resetSkills = (skill) => {
    switch(skill) {
      case 'maya':
        this.setState({
          skills: {
            ...this.state.skills,
            maya: {
              ward: 0,
              accelerate: 0,
              kinetic_reflection: 0,
              suspension: 0,
              inertia: 0,
              fleet: 0,
              converge: 0,
              quicken: 0,
              sub_sequence: 0,
              thoughtlock: 0,
              minds_eye: 0,
              sweet_release: 0,
              restoration: 0,
              wreck: 0,
              elated: 0,
              recompense: 0,
              res: 0,
              sustenance: 0,
              life_tap: 0,
              scorn: 0,
              flicker: 0,
              foresight: 0,
              immolate: 0,
              helios: 0,
              chain_reaction: 0,
              backdraft: 0,
              cloud_kill: 0,
              reaper: 0,
              blight_phoenix: 0,
              ruin: 0,
            }
          },
          level: 5,
          motion: 0,
          harmony: 0,
          cataclysm: 0,
        })
    }
  }

  handleChange = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  }

  handleSubmit = () => {
    const { dispatch, history } = this.props
    const { buildName, character, description, skills, buildGuns } = this.state
    let pendingBuild = { name: buildName, character, description, skills, buildGuns }    
    dispatch(addBuild(pendingBuild, history))
  }

  modifyTree = (tree) => {
    switch (tree) {
      case 'motion':
        this.modifyMotion()
        break
      case 'harmony':
        this.modifyHarmony()
        break
      case 'cataclysm':
        this.modifyCataclysm()
        break
      case 'sniping':
        this.modifySniping()
        break
      case 'cunning':
        this.modifyCunning()
        break
      case 'bloodshed':
        this.modifyBloodshed()
        break
      default: break
    }
  }

  callbackState = (incomingSkills, tree) => {
    this.setState({
      skills: incomingSkills
    }, () => {
      this.modifyTree(tree)
    })
  }

  classPicker = () => {
    const { 
      character, 
      level, 
      cataclysm, 
      motion, 
      harmony, 
      cunning, 
      bloodshed, 
      sniping 
    } = this.state
    switch (character) {
      case 'Maya':
        return (
          <MayaSkillSelector 
            callbackState={this.callbackState} 
            resetSkills={this.resetSkills}
            maya={this.state.skills.maya}
            level={level}
            harmony={harmony}
            motion={motion}
            cataclysm={cataclysm}
          />
        )
        break
      case 'Zer0':
        return (
          <ZeroSkillSelector
            callbackState={this.callbackState} 
            zero={this.state.skills.zero}
            level={level}
            sniping={sniping}
            cunning={cunning}
            bloodshed={bloodshed}
          />
        )
      default: break
    }
  }

  modifyMotion = () => {
    const { maya } = this.state.skills
    this.setState({
      motion:
        maya.ward +
        maya.accelerate +
        maya.kinetic_reflection +
        maya.suspension +
        maya.inertia +
        maya.fleet +
        maya.converge +
        maya.quicken +
        maya.sub_sequence +
        maya.thoughtlock
    })
    this.modifyMayaLevel()
  }

  modifyHarmony = () => {
    const { maya } = this.state.skills
    this.setState({
      harmony:
        maya.minds_eye +
        maya.sweet_release +
        maya.restoration +
        maya.wreck +
        maya.elated +
        maya.recompense +
        maya.res +
        maya.sustenance +
        maya.life_tap +
        maya.scorn
    })
    this.modifyMayaLevel()
  }

  modifyCataclysm = () => {
    const { maya } = this.state.skills
    this.setState({
      cataclysm:
        maya.flicker +
        maya.foresight +
        maya.immolate +
        maya.helios +
        maya.chain_reaction +
        maya.backdraft +
        maya.cloud_kill +
        maya.reaper +
        maya.blight_phoenix +
        maya.ruin
    })
    this.modifyMayaLevel()
  }

  modifyMayaLevel = () => {
    const { maya } = this.state.skills
    this.setState({
      level:
        5 +
        maya.flicker +
        maya.foresight +
        maya.immolate +
        maya.helios +
        maya.chain_reaction +
        maya.backdraft +
        maya.cloud_kill +
        maya.reaper +
        maya.blight_phoenix +
        maya.ruin +
        maya.ward +
        maya.accelerate +
        maya.kinetic_reflection +
        maya.suspension +
        maya.inertia +
        maya.fleet +
        maya.converge +
        maya.quicken +
        maya.sub_sequence +
        maya.thoughtlock +
        maya.minds_eye +
        maya.sweet_release +
        maya.restoration +
        maya.wreck +
        maya.elated +
        maya.recompense +
        maya.res +
        maya.sustenance +
        maya.life_tap +
        maya.scorn
    })
  }

  modifySniping = () => {
    const { zero } = this.state.skills
    this.setState({
      sniping:
        zero.headshot +
        zero.optics +
        zero.killer +
        zero.precision +
        zero.one_shot_one_kill +
        zero.velocity +
        zero.bore +
        zero.kill_confirmed +
        zero.at_one_with_the_gun +
        zero.critical_ascension
    })
    this.modifyZeroLevel()
  }

  modifyCunning = () => {
    const { zero } = this.state.skills
    this.setState({
      cunning:
        zero.fast_hands +
        zero.counter_strike +
        zero.fearless +
        zero.ambush +
        zero.rising_shot +
        zero.unforseen +
        zero.death_mark +
        zero.innervate +
        zero.two_fang +
        zero.death_blossom
    })
    this.modifyZeroLevel()
  }

  modifyBloodshed = () => {
    const { zero } = this.state.skills
    this.setState({
      bloodshed:
        zero.killing_blow +
        zero.iron_hand +
        zero.grim +
        zero.be_like_water +
        zero.followthrough +
        zero.execute +
        zero.resurgence +
        zero.like_the_wind +
        zero.many_must_fall
    })
    this.modifyZeroLevel()
  }

  modifyZeroLevel = () => {
    const { zero } = this.state.skills
    this.setState({
      level:
        5 +
        zero.headshot +
        zero.optics +
        zero.killer +
        zero.precision +
        zero.one_shot_one_kill +
        zero.velocity +
        zero.bore +
        zero.kill_confirmed +
        zero.at_one_with_the_gun +
        zero.critical_ascension +
        zero.fast_hands +
        zero.counter_strike +
        zero.fearless +
        zero.ambush +
        zero.rising_shot +
        zero.unforseen +
        zero.death_mark +
        zero.innervate +
        zero.two_fang +
        zero.death_blossom +
        zero.killing_blow +
        zero.iron_hand +
        zero.grim +
        zero.be_like_water +
        zero.followthrough +
        zero.execute +
        zero.resurgence +
        zero.like_the_wind +
        zero.many_must_fall
    })
  }

  render() {

    const { buildName, character, description, guns, buildGuns } = this.state
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <Form.Input
              label="Build Name"
              required
              id="buildName"
              value={buildName}
              placeholder="Build Name"
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Form.Select
              label="Character"
              required
              options={this.characterOptions}
              id="character"
              value={character}
              placeholder='Character'
              onChange={(e, { value }) => {
                this.setState({ character: value })
              }}
            />
          </Form.Field>
          <Form.Field>
            <Form.TextArea
              label="Description"
              required
              id="description"
              value={description}
              placeholder="Description"
              onChange={this.handleChange}
            />
          </Form.Field>
          {this.classPicker()}
          {
            guns.map( (g, i) => {
              return (
                <div>
                  {g.name}
                  {
                    buildGuns.length < 4 &&
                      <Icon name="add circle" onClick={() => {
                            this.setState({
                              buildGuns: [...buildGuns, g]
                            })
                          }
                        }
                      />                      
                    }
                    <Icon name="remove circle" onClick={() => {
                      if (buildGuns.includes(g)) {
                        const newGuns = buildGuns.splice(i, 1)
                        this.setState({ buildGuns })
                      }
                    }}
                    />
                </div>
              )
            })
          }
          <Button>Submit</Button>
        </Form>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return { build: state.userbuilds }
}

export default withRouter(connect(mapStateToProps)(BuildForm))