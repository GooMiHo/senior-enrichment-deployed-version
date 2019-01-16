import React from 'react'
import {Link} from 'react-router-dom'
import {deleteCampusFunc} from '../remove/remove-buttons'

const Campus = props => {
  const campus = props.campus
  const removeCampus = props.removeCampus
  return (
    <div>
      <div className="list-elem-box">
        <Link
          className="hyperlink-text"
          key={campus.id}
          to={`/campuses/${campus.id}`}
        >
          <div className="components">
            <img className="small-image" src={campus.imageUrl} />
            <div className="info">
              <h1 className="small-name">{campus.name}</h1>
              <p className="extra-content-small">{`${campus.students.length} ${
                campus.students.length === 1 ? 'student' : 'students'
              }`}</p>
            </div>
          </div>
        </Link>
        <button
          onClick={() => {
            deleteCampusFunc(campus.id, removeCampus)
          }}
          type="button"
        >
          delete
        </button>
      </div>
    </div>
  )
}

export default Campus
