import axios from 'axios'

//action
const GOT_STUDENT = 'GOT_STUDENT'

//action creator
const gotSingleStudent = student => ({
  type: GOT_STUDENT,
  student
})

//Thunk (export)
export const fetchSingleStudent = id => {
  return async dispatch => {
    const {data: student} = await axios.get(`/api/students/${id}`)
    dispatch(gotSingleStudent(student))
  }
}

//reducer
const singleStudentReducer = (state = {}, action) => {
  switch (action.type) {
    case GOT_STUDENT:
      return action.student
    default:
      return state
  }
}

//export default reducer
export default singleStudentReducer
