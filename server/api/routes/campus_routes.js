const {Campus, Student} = require('../../db/models')
const campusRouter = require('express').Router()

// GET path '/api/campuses'
campusRouter.get('/', async (req, res, next) => {
  try {
    const campuses = await Campus.findAll({
      include: [{model: Student, include: [{all: true}]}]
    })
    res.json(campuses)
  } catch (err) {
    next(err)
  }
})

// GET path '/api/campuses/id'
campusRouter.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id
    const campus = await Campus.findOne({
      where: {id: id},
      include: [{model: Student, include: [{all: true}]}]
    })
    res.json(campus)
  } catch (err) {
    next(err)
  }
})

// POST path '/api/campuses'
campusRouter.post('/', async (req, res, next) => {
  try {
    //postman requires id, MAY ENCOUNTER PROBLEM HERE!
    //add an if statment if some info not included
    const newCampus = await Campus.create(req.body)
    res.status(201).json(newCampus)
  } catch (err) {
    next(err)
  }
})

//Write a route to remove a campus (based on its id)

// DELETE path '/api/campuses/id'
campusRouter.delete('/:id', (req, res, next) => {
  try {
    const id = req.params.id
    Campus.destroy({where: {id: id}})
    res.sendStatus(204)
  } catch (err) {
    next(err)
  }
})

campusRouter.put('/:id', async (req, res, next) => {
  const id = req.params.id
  try {
    const [numOfAffectedRows, result] = await Campus.update(req.body, {
      where: {id: id},
      returning: true,
      plain: true
    })
    res.send(result)
  } catch (err) {
    next(err)
  }
})

module.exports = campusRouter
