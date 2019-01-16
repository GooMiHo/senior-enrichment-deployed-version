import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {HashRouter, Route} from 'react-router-dom'

import store from './store'
import Root from './components/root'
import CampusList from './components/campus-listings/campus-listings'
import StudentsList from './components/student-listings/student-listings'
import CampusInfo from './components/campus-listings/campus-full-info'
import Home from './components/home'
import StudentInfo from './components/student-listings/student-full-info'
import AddCampus from './components/forms/add-campus'
import AddStudent from './components/forms/add-student'
import UpdateCampus from './components/forms/update-campus'
import UpdateStudent from './components/forms/update-student'

render(
  <Provider store={store}>
    <HashRouter>
      <div>
        <Route path="/" component={Root} />
        <Route exact path="/" component={Home} />
        <Route exact path="/campuses" component={CampusList} />
        <Route exact path="/add-campus" component={AddCampus} />
        <Route exact path="/add-student" component={AddStudent} />
        <Route exact path="/students" component={StudentsList} />
        <Route exact path="/campuses/:campusId" component={CampusInfo} />
        <Route
          exact
          path="/update/campuses/:campusId"
          component={UpdateCampus}
        />
        <Route
          exact
          path="/update/students/:studentId"
          component={UpdateStudent}
        />
        <Route path="/students/:studentId" component={StudentInfo} />
      </div>
    </HashRouter>
  </Provider>,
  document.getElementById('app')
)
