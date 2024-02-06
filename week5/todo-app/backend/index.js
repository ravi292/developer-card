const express = require('express');
const cors = require('cors');
const app = express();
const { createTodo, updateTodo } = require('./types');
const Todo = require('./db');

app.use(cors())
app.use(express.json());

app.post('/todo', async (req, res) => {
    const payload = req.body;
    const parsedPayload = createTodo.safeParse(payload)
    if(!parsedPayload.success) {
        return res.status(400).json({
            msg: 'You sent the wrong credentials'
        })
    }
    const {title, description} = parsedPayload.data;
//    const todo = new Todo({ title, description })
//    await todo.save();
    await Todo.create({ title, description, completed: false })
    res.send("Saved your todo :)")
})

app.get('/todos', async (req, res) => {
    const todos  = await Todo.find({});
    res.status(200).json({ todos })
})

app.put('/completed', async (req, res) => {
    const payload = req.body;
    const parsedPayload = updateTodo.safeParse(payload)
    if(!parsedPayload.success) {
        return res.status(400).json({
            msg: 'You sent the wrong credentials'
        })
    }

    await Todo.findByIdAndUpdate(parsedPayload.data.id, { completed: true })

    res.send("Updated  :)")
})

const PORT = process.env.PORT || 3000;
app.listen(3000, () => {
    console.log(`Listening at port ${PORT}`)
})
