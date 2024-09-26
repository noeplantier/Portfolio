const { Project } = require('../models');

exports.createProject = async (req, res) => {
  const { title, description, technologies } = req.body;

  try {
    const project = await Project.create({
      title,
      description,
      technologies,
      userId: req.userId,
    });
    res.status(201).json(project);
  } catch (err) {
    res.status(500).json({ error: 'Project creation failed' });
  }
};

exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.findAll({ where: { userId: req.userId } });
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ error: 'Fetching projects failed' });
  }
};
