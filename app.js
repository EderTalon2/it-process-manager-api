const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Mock de Banco de Dados para Gestão de Demandas
let tasks = [
    { id: 1, title: "Análise de Infraestrutura", status: "Pendente" },
    { id: 2, title: "Otimização de Processos de TI", status: "Em progresso" }
];

// Rota para listar projetos
app.get('/projects', (req, res) => {
    res.status(200).json(tasks);
});

// Rota para criar nova demanda
app.post('/projects', (req, res) => {
    const { title } = req.body;
    const newTask = {
        id: tasks.length + 1,
        title,
        status: "Iniciado"
    };
    tasks.push(newTask);
    res.status(201).send(newTask);
});

app.listen(PORT, () => {
    console.log(`Servidor de Gestão rodando na porta ${PORT}`);
});
