const express = require('express')
const router = express.Router()

const employeeController =   require('../controllers/employee.controller');

// GET all employees
router.get('/', employeeController.findAll);

// Create a new employee
router.post('/', employeeController.create);

// GET a single employee by ID
router.get('/:id', employeeController.findById);

// Update a employee by ID
router.put('/:id', employeeController.update);

// Delete a employee by ID
router.delete('/:id', employeeController.delete);

module.exports = router