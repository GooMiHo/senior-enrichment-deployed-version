import React from 'react'
import {Link} from 'react-router-dom'

const StudentCampus = props => {
  const campus = props.campus
  return (
    <Link className="hyperlink-text" to={`/campuses/${campus.id}`}>
      <div className="student-campus-container">
        <img className="student-campus-img" src={campus.imageUrl} />
        <div className="student-campus-info-and-edit-container">
          <div className="student-campus-info-container">
            <h3 className="student-campus-name">{campus.name}</h3>
            <p>{`${campus.students.length} ${
              campus.students.length === 1 ? 'student' : 'students'
            }`}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default StudentCampus
