import express from 'express';

const app = express();

app.use(express.json());

const todos =[]
app.get("/", (req, res) => {
    res.send("<h1>My list TodoS API!</h1>");
  });

app.post('/todos', (req, res) => {
    const {titre, text, isDone} = req.body;
    const id = todos.length + 1;
    const todo = {id, titre, text, isDone};
    todos.push(todo);
    res.status(201).json(todo);
    
});

app.get('/todos/list', (req, res) => {
   res.json(todos);
   
});

app.put('/todos/:id', (req, res) => {
    const {titre, text, isDone} = req.body;
   const todoIndex = todos.findIndex(todo => todo.id === parseInt(req.params.id));
   if (todoIndex === -1) {
    res.status(404).json(console.error('Todo not exist'));
    console.log(res.json);
   }else{
    todos[todoIndex] = {id, titre, text, isDone};
    res.json(todos[todoIndex]);
    console.log(todos);
   }
})

app.delete('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
  const todoIndex = todos.findIndex(todo => todo.id === id);
  if (todoIndex === -1) {
    res.status(404).json({ error: "Todo not exist" });
  } else {
    todos.splice(todoIndex, 1);
    res.status(204).send();
    console.log("todo is deleted");
  }
});

app.listen("3000", () => {
    console.log("http://127.0.0.1:3000");
  });