import axios from 'axios'
import React, {Component} from 'react'

export default class CampusSelection extends Component {
  constructor() {
    super()
    this.state = {
      campuses: []
    }
  }

  async componentDidMount() {
    try {
      const {data: campuses} = await axios.get('/api/campuses/')
      this.setState({campuses: campuses})
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    console.log('this.state', this.state)
    return (
      <select name="campusId" onChange={this.props.handleChange}>
        <option type="text" value={null}>
          none
        </option>
        {this.state.campuses.map(campus => {
          return (
            <option
              type="number"
              label={campus.name}
              key={campus.id}
              value={campus.id}
            />
          )
        })}
      </select>
    )
  }
}
