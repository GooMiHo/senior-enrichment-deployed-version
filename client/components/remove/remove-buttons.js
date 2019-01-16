import axios from 'axios'

export const deleteCampusFunc = (id, deleteCampus) => {
  deleteCampus(id)
  axios.delete(`api/campuses/${id}`)
}

export const deleteCampusFromCampusInfo = (id, deleteCampus, history) => {
  deleteCampus(id)
  axios.delete(`api/campuses/${id}`)
  history.push('/campuses')
}

export const deleteStudentFunc = (id, deleteStudent, history) => {
  deleteStudent(id)
  axios.delete(`api/students/${id}`)
  if (history) history.push('/students')
}
