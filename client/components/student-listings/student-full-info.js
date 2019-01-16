import React, {Component} from 'react'
import {connect} from 'react-redux'

import {fetchSingleStudent} from '../../reducers/single-student-reducer'
import {removeStudent} from '../../reducers/student-sub-reducer'
import StudentCampus from './studentCampus'
import {deleteStudentFunc} from '../remove/remove-buttons'

class StudentInfoComp extends Component {
  componentDidMount() {
    const studentId = this.props.match.params.studentId
    this.props.fetchSingleStudent(studentId)
  }

  render() {
    const student = this.props.student
    const history = this.props.history
    console.log('this.props.student: ', this.props.student)

    return (
      <div className="solid-background-div">
        <div className="page-div">
          <div className="bkgrd-main2" />
          <div className="single-continer">
            <div className="student-image-info-container">
              <img className="large-image" src={student.imageUrl} />
              <div className="large-name-info-constiner">
                <h1 className="large-name-label">{`${student.firstName} ${
                  student.lastName
                }`}</h1>
                <hr />
                <div className="email-gpa-container">
                  <p className="student-email">email: {student.email}</p>
                  <p className="student-gpa">GPA: {student.gpa}</p>
                </div>
              </div>
            </div>
            <div className="button-container">
              <button
                className="edit-button student-button"
                type="button"
                onClick={() => {
                  this.props.history.push(`/update/students/${student.id}`)
                }}
              >
                edit
              </button>
              <button
                type="button"
                className="delete-orange-top student-button"
                onClick={() => {
                  deleteStudentFunc(
                    student.id,
                    this.props.removeStudent,
                    history
                  )
                }}
              >
                delete
              </button>
            </div>
            <hr className="campus-students-break" />
            <h1>Campus</h1>
            <div>
              {student.campus ? (
                <div>
                  <StudentCampus campus={student.campus} />
                </div>
              ) : (
                <h3>This Student is NOT registered to a campus</h3>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  student: state.student
})

const mapDispatchToProps = dispatch => ({
  fetchSingleStudent: studentId => dispatch(fetchSingleStudent(studentId)),
  removeStudent: id => dispatch(removeStudent(id))
})

const StudentInfo = connect(mapStateToProps, mapDispatchToProps)(
  StudentInfoComp
)

export default StudentInfo
