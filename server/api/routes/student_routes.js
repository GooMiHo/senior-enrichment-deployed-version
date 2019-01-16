const {Student, Campus} = require('../../db/models')
const studentRouter = require('express').Router()

// GET path '/api/students'
studentRouter.get('/', async (req, res, next) => {
  try {
    const students = await Student.findAll({
      include: [{model: Campus, include: [{all: true}]}]
    })
    res.json(students)
  } catch (err) {
    next(err)
  }
})

// GET path '/api/students/:id'
studentRouter.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id
    const student = await Student.findOne({
      where: {id: id},
      include: [{model: Campus, include: [{all: true}]}]
    })
    res.json(student)
  } catch (err) {
    next(err)
  }
})

// GET path '/api/students'
studentRouter.post('/', async (req, res, next) => {
  try {
    const newStudent = await Student.create(req.body) //maybe add some if statements to prevent submission without required fields
    res.status(201).json(newStudent)
  } catch (err) {
    next(err)
  }
})

studentRouter.delete('/:id', (req, res, next) => {
  try {
    const id = req.params.id
    Student.destroy({where: {id: id}})
    res.sendStatus(204)
  } catch (err) {
    next(err)
  }
})

studentRouter.put('/:id', async (req, res, next) => {
  try {
    const id = req.params.id
    const [numberOfEffectedRows, result] = await Student.update(req.body, {
      where: {id: id},
      returning: true,
      plain: true
    })
    res.send(result)
  } catch (err) {
    next(err)
  }
})

module.exports = studentRouter
