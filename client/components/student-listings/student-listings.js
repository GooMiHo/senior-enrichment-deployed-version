import React, {Component} from 'react'
import {connect} from 'react-redux'

import {fetchStudents, removeStudent} from '../../reducers/student-sub-reducer'
import Student from './student'
// import AddStudent from '../forms/add-student';

const AddStudentButton = props => {
  return (
    <button
      className="add-button"
      type="button"
      onClick={() => {
        props.history.push('/add-student')
      }}
    >
      Add Student
    </button>
  )
}

class StudentsListComp extends Component {
  componentDidMount() {
    this.props.fetchStudents()
  }

  render() {
    const students = this.props.students
    return (
      <div className="listing-page">
        <div className="bkgrd-main" />
        <div className="listing-main">
          <div className="title-and-button">
            <h1>All Students</h1>
            <AddStudentButton history={this.props.history} />
          </div>
          <div className="listing-container">
            {students.length === 0 ? (
              <h4>There are no students registered in the database.</h4>
            ) : (
              students.map(student => {
                return (
                  <Student
                    key={student.id}
                    student={student}
                    removeStudent={this.props.removeStudent}
                    history={this.props.history}
                  />
                )
              })
            )}
          </div>
        </div>
      </div>
    )
  }
}

//mapStateToProps
const mapStateToProps = state => ({
  students: state.students
})

//mapDispatchToProps
const mapDispatchToProps = dispatch => ({
  fetchStudents: () => dispatch(fetchStudents()),
  removeStudent: id => dispatch(removeStudent(id))
})

//connect and export
const StudentsList = connect(mapStateToProps, mapDispatchToProps)(
  StudentsListComp
)
export default StudentsList
