import React, {Component} from 'react'
import {connect} from 'react-redux'

import {fetchSingleCampus} from '../../reducers/single-campus-reducer'
import SmallStudent from '../student-listings/small-student'
import {deleteCampusFromCampusInfo} from '../remove/remove-buttons'
import {deleteCampus} from '../../reducers/campus-sub-reducer'

class CampusInfoComp extends Component {
  componentDidMount() {
    const campusId = this.props.match.params.campusId
    this.props.fetchSingleCampus(campusId)
  }

  render() {
    const campus = this.props.campus
    return (
      <div className="solid-background-div">
        <div className="page-div">
          <div className="bkgrd-main2" />
          <div className="single-continer">
            <div className="large-image-info-container">
              <img className="large-image" src={campus.imageUrl} />
              <div className="large-name-info-constiner">
                <h1 className="large-name-label">{campus.name}</h1>
                <hr />
                <p className="campus-description">{campus.description}</p>
              </div>
            </div>
            <br />
            <div className="address-edit-containers">
              <p className="campus-address">Address: {campus.address}</p>
              <div>
                <button
                  className="edit-button"
                  type="button"
                  onClick={() => {
                    this.props.history.push(`/update/campuses/${campus.id}`)
                  }}
                >
                  edit
                </button>
                <button
                  className="delete-orange-top"
                  type="button"
                  onClick={() => {
                    deleteCampusFromCampusInfo(
                      campus.id,
                      deleteCampus,
                      this.props.history
                    )
                  }}
                >
                  delete
                </button>
              </div>
            </div>
            <div className="list-title-and-button-container">
              <hr className="campus-students-break" />
              <h1>Students on campus</h1>
              <button
                className="add-student-small-btn"
                type="button"
                onClick={() => {
                  this.props.history.push('/add-student')
                }}
              >
                Add Students
              </button>
            </div>
            <div className="student-list">
              <div className="listing-container">
                {campus.students && campus.students.length !== 0 ? (
                  campus.students.map(student => {
                    return <SmallStudent key={student.id} student={student} />
                  })
                ) : (
                  <h3>There are no students registered in the database.</h3>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  campus: state.campus
})

const mapDispatchToProps = dispatch => ({
  fetchSingleCampus: campusId => dispatch(fetchSingleCampus(campusId))
})

const CampusInfo = connect(mapStateToProps, mapDispatchToProps)(CampusInfoComp)

export default CampusInfo
