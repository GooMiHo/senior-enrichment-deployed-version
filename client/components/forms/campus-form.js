import React from 'react'

const CampusForm = props => {
  return (
    <div className="main-form-box">
      <div className="bkgrd-main" />
      <form onSubmit={props.handleSubmit}>
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
              value={props.campus.imageUrl}
              onChange={props.handleChange}
            />
          </div>
          <div>
            <label htmlFor="name">
              Campus Name<small>*</small> :{' '}
            </label>
            <input
              type="text"
              name="name"
              value={props.campus.name}
              onChange={props.handleChange}
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
              value={props.campus.address}
              onChange={props.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="description">Description: </label>
            <input
              type="text"
              name="description"
              value={props.campus.description}
              onChange={props.handleChange}
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

export default CampusForm
