import {combineReducers} from 'redux'
import studentsReducer from './student-sub-reducer'
import campusReducer from './campus-sub-reducer'
import singleCampusReducer from './single-campus-reducer'
import singleStudentReducer from './single-student-reducer'

const rootReducer = combineReducers({
  students: studentsReducer,
  campuses: campusReducer,
  campus: singleCampusReducer,
  student: singleStudentReducer
})
export default rootReducer
