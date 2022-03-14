const express = require('express');
const router = express.Router();
const { findAll, findByMail, save, update, deleteById } = require('../../controllers/students')

// Get all students
router.get('/', findAll);

// Get single student
router.get('/:email', findByMail);

// Create new student
router.post('/', save);

// Update student
router.put('/:id', update);

// Delete student
router.delete('/:id', deleteById);

module.exports = router;