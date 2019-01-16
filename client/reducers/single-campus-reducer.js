import axios from 'axios'

const GOT_CAMPUS = 'GOT_CAMPUS'

const gotSingleCampus = campus => ({
  type: GOT_CAMPUS,
  campus
})

export const fetchSingleCampus = id => {
  return async dispatch => {
    const {data: campus} = await axios.get(`/api/campuses/${id}`)
    dispatch(gotSingleCampus(campus))
  }
}

const singleCampusReducer = (state = {}, action) => {
  switch (action.type) {
    case GOT_CAMPUS:
      return action.campus
    default:
      return state
  }
}

export default singleCampusReducer
