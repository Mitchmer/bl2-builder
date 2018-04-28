import React from 'react'
import axios from 'axios'
import {
  Form,
  List,
  Header,
  Image,
} from 'semantic-ui-react'

class GunForm extends React.Component {
  state = { guns: [], name: '', image: '' }
  
  componentDidMount() {
    axios.get(`api/guns`)
      .then( res => 
        this.setState({ guns: res.data })
      )
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })

  } 

  handleSubmit = (e) => {
    e.preventDefault()
    const { name, image } = this.state
    const gun = { name, image }
    axios.post('/api/guns', { gun })
      .then( res => {
        this.setState({ name: '' })
      })
  }

  render() {
    const { guns, name, image } = this.state
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            placeholder="Gun Name"
            required
            value={name}
            name="name"
            onChange={this.handleChange}
          />
          <Form.Input
            placeholder="Image Path"
            required
            value={image}
            name="image"
            onChange={this.handleChange}
          />
          <Form.Button>Add</Form.Button>
        </Form>
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
      </div>
    )
  }
}

export default GunForm