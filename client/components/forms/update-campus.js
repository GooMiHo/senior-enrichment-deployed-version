import React, {Component} from 'react'
import DEFAULT_ENCODING from 'crypto'
import axios from 'axios'

export default class UpdateCampus extends Component {
  constructor() {
    super()

    this.state = {
      imageUrl: '',
      name: '',
      address: '',
      description: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async componentDidMount() {
    const id = this.props.match.params.campusId
    const {data: campus} = await axios.get(`api/campuses/${id}`)
    this.setState(campus)
  }

  async handleSubmit(event) {
    event.preventDefault()
    const id = this.props.match.params.campusId
    const campus = this.state
    if (this.state.imageUrl.length === 0) campus.imageUrl = DEFAULT_ENCODING
    await axios.put(`api/campuses/${id}`, campus)
    this.props.history.push(`/campuses/${id}`)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div className="main-form-box">
        <div className="bkgrd-main" />
        <form onSubmit={this.handleSubmit}>
          <h1>Add Campus</h1>
          <div className="inner-form-box">
            <div>
              <label htmlFor="imageUrl">
                Add Image <small>(url)</small>:{' '}
              </label>
              <input
                className="input-required"
                type="url"
                name="imageUrl"
                value={this.state.imageUrl}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label htmlFor="name">
                Campus Name<small>*</small> :{' '}
              </label>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="address">
                Address<small>*</small> :{' '}
              </label>
              <input
                type="text"
                name="address"
                value={this.state.address}
                onChange={this.handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="description">Description: </label>
              <input
                type="text"
                name="description"
                value={this.state.description}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <p>
                <small>*</small>required field
              </p>
            </div>
            <button type="submit" value="Submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  }
}
