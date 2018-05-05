import React from 'react'
import axios from 'axios'
import {
  Form,
  List,
  Header,
  Image,
  Grid,
} from 'semantic-ui-react'

class ItemForm extends React.Component {
  state = { 
    guns: [], 
    gunName: '', 
    gunImage: '', 
    shields: [], 
    shieldName: '', 
    shieldImage: ''  
  }
  
  componentDidMount() {
    axios.get(`api/guns`)
      .then( res => 
        this.setState({ guns: res.data })
      )
    axios.get('api/shields')
      .then( res => 
        this.setState({ shields: res.data })
      )
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })

  } 

  handleGunSubmit = (e) => {
    e.preventDefault()
    const { gunName, gunImage, guns } = this.state
    const gun = { name: gunName, image: gunImage }
    axios.post('/api/guns', { gun })
      .then( res => {
        this.setState({ gunName: '', gunImage: '', guns: [...guns, res.data] })
      })
  }

  handleShieldSubmit = (e) => {
    e.preventDefault()
    const { shieldName, shieldImage, shields } = this.state
    const shield = { name: shieldName, image: shieldImage }
    axios.post('/api/shields', { shield })
      .then( res => {
        this.setState({ shieldName: '', shieldImage: '', shields: [...shields, res.data] })
      })
  }

  render() {
    const { guns, gunName, gunImage, shields, shieldName, shieldImage } = this.state
    return (
      <div>
        <Form onSubmit={this.handleGunSubmit}>
          <Form.Input
            placeholder="Gun Name"
            required
            value={gunName}
            name="gunName"
            onChange={this.handleChange}
          />
          <Form.Input
            placeholder="Gun Image Path"
            required
            value={gunImage}
            name="gunImage"
            onChange={this.handleChange}
          />
          <Form.Button>Add</Form.Button>
        </Form>
        <Form onSubmit={this.handleShieldSubmit}>
          <Form.Input
            placeholder="Shield Name"
            required
            value={shieldName}
            name="shieldName"
            onChange={this.handleChange}
          />
          <Form.Input
            placeholder="Shield Image Path"
            required
            value={shieldImage}
            name="shieldImage"
            onChange={this.handleChange}
          />
          <Form.Button>Add</Form.Button>
        </Form>
        <Grid columns={3} divided>
          <Grid.Column>
            <List>
              {
                guns.map( g => {
                  return (
                    <List.Item>
                      <Header as="h2">
                        {g.name}
                      </Header>
                      <Image src={g.image} />
                    </List.Item>
                  )
                })
              }
            </List>
          </Grid.Column>
          <Grid.Column>
            <List>
              {
                shields.map( s => {
                  return (
                    <List.Item>
                      <Header as ="h2">
                        {s.name}
                      </Header>
                      <Image src={s.image} />
                    </List.Item>
                  )
                })
              }
            </List>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default ItemForm