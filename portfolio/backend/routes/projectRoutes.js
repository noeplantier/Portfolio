const express = require('express');
const { createProject, getProjects } = require('../controllers/projectController');
const { authenticateToken } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/projects', authenticateToken, createProject);
router.get('/projects', authenticateToken, getProjects);

module.exports = router;
