// Write a campuses sub-reducer to manage campuses in your Redux store

import axios from 'axios'

//action
const GOT_CAMPUSES = 'GOT_CAMPUSES'
const REMOVE_CAMPUS = 'REMOVE_CAMPUS'
const ADD_CAMPUS = 'ADD_CAMPUS'
const UPDATE_CAMPUS = 'UPDATE_CAMPUS'

//action creator
const gotCampuses = campuses => ({
  type: GOT_CAMPUSES,
  campuses
})

export const removeCampus = id => ({
  type: REMOVE_CAMPUS,
  id
})

const addCampus = campus => ({
  type: ADD_CAMPUS,
  campus
})

export const fetchCampuses = () => {
  return async dispatch => {
    const {data: campuses} = await axios.get('/api/campuses')
    // data:campuses - like data as campuses (alias)
    dispatch(gotCampuses(campuses))
  }
}

export const makeCampus = campus => {
  return dispatch => {
    dispatch(addCampus(campus))
  }
}

export const deleteCampus = campus => {
  return dispatch => {
    dispatch(removeCampus(campus))
  }
}

const campusReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CAMPUS:
      return [...state, action.campus]
    case REMOVE_CAMPUS:
      return state.filter(campus => campus.id !== action.id)
    case GOT_CAMPUSES:
      return action.campuses
    default:
      return state
  }
}

export default campusReducer
