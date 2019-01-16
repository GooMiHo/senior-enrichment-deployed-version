import React from 'react'
import {Link} from 'react-router-dom'
import {deleteStudentFunc} from '../remove/remove-buttons'

const Student = props => {
  const student = props.student
  const removeStudent = props.removeStudent
  return (
    <div className="list-elem-box">
      <Link className="hyperlink-text" to={`/students/${student.id}`}>
        <div className="components">
          <img className="small-image" src={student.imageUrl} />
          <div className="info">
            <h3 className="small-name">{`${student.firstName} ${
              student.lastName
            }`}</h3>
            {student.campus ? (
              <p className="extra-content-small">{student.campus.name}</p>
            ) : (
              <p>
                <i>student has no campus</i>
              </p>
            )}
          </div>
        </div>
      </Link>

      <button
        type="button"
        onClick={() => {
          deleteStudentFunc(student.id, removeStudent)
        }}
      >
        delete
      </button>
    </div>
  )
}

export default Student
