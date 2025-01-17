// import express 
const express = require('express')

// import usercontroller
const userController = require('./controller/userController')
// import projectcontroller
const projectController = require('./controller/projectController')

// import jwtmiddleware
const jwtMiddleware = require('./middleware/jwtMiddleware')

// import multer
const multerConfig = require('./middleware/multerMiddleware')

// instance router
const router = new express.Router()

// REGISTER
router.post('/register', userController.register)

// login
router.post('/login', userController.login)

// add-project
router.post('/add-project',jwtMiddleware, multerConfig.single("projectImage"), projectController.addProjectController)

// Get All Project
router.get('/all-project',projectController.getAllProjectController)

// Get home Project
router.get('/home-project',projectController.getHomeProjectController)

// get user project
router.get('/user-project',jwtMiddleware,projectController.getUserProjectController)

// remove user project
router.delete('/remove-userproject/:id',jwtMiddleware,projectController.removeUserProjectController)

module.exports = router
