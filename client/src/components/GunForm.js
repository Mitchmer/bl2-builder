import React from 'react'
import axios from 'axios'
import {
  Form,
  List,
  Header,
} from 'semantic-ui-react'

class GunForm extends React.Component {
  state = { guns: [], name: '' }
  
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
    const { name } = this.state
    const gun = { name }
    axios.post('/api/guns', { gun })
      .then( res => {
        this.setState({ name: '' })
      })
  }

  render() {
    const { guns, name } = this.state
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