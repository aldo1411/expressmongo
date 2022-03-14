const express = require('express');
const { findAll, findByID, save, update, deleteById } = require('../../controllers/books');
const router = express.Router()

// Get all students
router.get('/', findAll);

// Get single student
router.get('/:id', findByID);

// Create new student
router.post('/', save);

// Update student
router.put('/:id', update);

// Delete student
router.delete('/:id', deleteById);

module.exports = router;
