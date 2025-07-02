const express = require('express');

const router = express.Router();

let particles = [
    {
        id: 1,
        particula: '은/는',
        tipo: 'tópico',
        descricao: 'Usada para marcar o tópico da frase. Ex: 저는 학생이에요.'
    },
    {
        id: 2,
        particula: '이/가',
        tipo: 'sujeito',
        descricao: 'Marca o sujeito de uma frase com mais ênfase.'
    }
];

router.get('/', (req, res) => {
    res.json(particles);
});

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const particula = particles.find(p => p.id === id);
    if (!particula) return res.status(404).send('Partícula não encontrada');
    res.json(particula);
});


module.exports = router;