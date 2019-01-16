import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div id="nav-container">
      <div id="home-nav">
        <Link className="nav" to="/">
          home
        </Link>
      </div>
      <div id="campuses-students-nav">
        <Link className="nav" to="/campuses">
          campuses |
        </Link>
        <h1 />
        <Link className="nav" to="/students">
          students
        </Link>
      </div>
    </div>
  )
}

export default Nav
