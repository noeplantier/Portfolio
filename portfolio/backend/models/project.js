const express = require('express');
const router = express.Router();

const projects = [
  {
    id: 1,
    title: "O'Party",
    description: "Website événementiel permettant aux utilisateurs de découvrir de nouveaux horizons",
    image: "/images/oparty.jpeg",
    technologies: ['React', 'Next.js', 'SCSS', 'Node.js']
  },
  {
    id: 2,
    title: "TECUM",
    description: "Website officiel de la bijouterie TECUM",
    image: "/images/tecum.jpeg",
    technologies: ['TypeScript', 'SCSS', 'React', 'Node.js']
  },
  {
    id: 3,
    title: "L'immobilière de Julia",
    description: "Website de l'agence immobilière bretonne 'L'immobilière de Julia'",
    image: "/images/immo.jpeg",
    technologies: ['React', 'SCSS', 'MUI', 'Node.js']
  }
];


router.get('/projects', (req, res) => {
  res.json(projects);
});

module.exports = router;
