import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchCampuses, removeCampus} from '../../reducers/campus-sub-reducer'
import Campus from './campus'
const AddCampusButton = props => {
  return (
    <button
      className="add-button"
      type="button"
      onClick={() => {
        props.history.push('/add-campus')
      }}
    >
      Add New Campus{' '}
    </button>
  )
}

class CampusListComp extends Component {
  componentDidMount() {
    this.props.fetchCampuses()
  }

  render() {
    const campuses = this.props.campuses

    return (
      <div className="listing-page">
        <div className="bkgrd-main" />
        <div className="listing-main">
          <div className="title-and-button">
            <h1>All Campuses</h1>
            <AddCampusButton history={this.props.history} />
          </div>
          <div className="listing-container">
            {campuses.length === 0 ? (
              <h4>There are no campuses registered in the database.</h4>
            ) : (
              campuses.map(campus => {
                return (
                  <Campus
                    key={campus.id}
                    campus={campus}
                    removeCampus={this.props.removeCampus}
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

const mapStateToProps = state => {
  return {campuses: state.campuses}
}

const mapDispatchToProps = dispatch => {
  const theThunk = fetchCampuses
  return {
    fetchCampuses: () => dispatch(theThunk()),
    removeCampus: id => dispatch(removeCampus(id))
  }
}

const CampusList = connect(mapStateToProps, mapDispatchToProps)(CampusListComp)
export default CampusList
