import React, {Component} from 'react'
import {DEFAULT_ENCODING} from 'crypto'
import axios from 'axios'
import CampusSelection from './campus-selection'

export default class UpdateStudent extends Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      imageUrl: '',
      campusId: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  async componentDidMount() {
    const id = this.props.match.params.studentId
    const {data: student} = await axios.get(`api/students/${id}`)
    this.setState(student)
  }

  async handleSubmit(event) {
    event.preventDefault()

    const student = this.state
    if (this.state.imageUrl.length === 0) student.imageUrl = DEFAULT_ENCODING
    const id = this.props.match.params.studentId
    await axios.put(`/api/students/${id}`, student)
    this.props.history.push(`/students/${id}`)
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
          <h1>Add Student</h1>
          <div className="inner-form-box">
            <div>
              <label htmlFor="firsName">First Name: </label>
              <input
                className="input-label"
                type="text"
                name="firstName"
                value={this.state.firstName}
                required
                onChange={this.handleChange}
              />
              <label htmlFor="lastName">Last Name: </label>
              <input
                className="input-label2"
                type="text"
                name="lastName"
                value={this.state.lastName}
                required
                onChange={this.handleChange}
              />
              <br />
              <label className="input-image" htmlFor="imageUrl">
                Add Image:{' '}
              </label>
              <input
                type="url"
                name="imageUrl"
                value={this.state.imageUrl}
                onChange={this.handleChange}
              />
              <label className="input-campus">Campus: </label>
              <CampusSelection
                handleChange={this.handleChange}
                campusId={this.state.campusId}
              />
              <br />
            </div>
            <label className="input-email" htmlFor="email">
              Email:{' '}
            </label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              required
              onChange={this.handleChange}
            />
            <button className="input-button" type="submit" value="Submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  }
}
