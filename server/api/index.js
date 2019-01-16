'use strict'
const router = require('express').Router()
const studentRouter = require('./routes/student_routes')
const campusRouter = require('./routes/campus_routes')

router.use('/students', studentRouter)
router.use('/campuses', campusRouter)
router.use((req, res, next) => {
  const err = new Error('API route not found!')
  err.status = 404
  next(err)
})

module.exports = router
