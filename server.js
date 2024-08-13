const express = require('express');
const db = require('./db')

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.post('/api/user', async (req, res) => {
  const { email, fullname, password_user } = req.body;

  const newUser = await db.query('INSERT INTO users(email, fullname, password_user) values ($1, $2, $3) RETURNING *', [email, fullname, password_user]);

  try {
    res.json(newUser)
  } catch(err) {
    console.log(err);
  }
});

app.get('/api/users', async (req, res) => {
  try {
    console.log(res);
    res.json('ok')
  } catch(err) {
    console.log(err);
  }
});

app.get('/api/user/:id', async (req, res) => {
  const { id } = req.params;

  try {
    console.log(res, id);
    res.json('ok')
  } catch (err) {
    console.log(err);
  }
});

app.post('/api/task', async (req, res) => {
  const { date, coordinates, description } = req.body;

  const newTask = await db.query('INSERT INTO tasks(task_date, coordinates, task_description) values ($1, $2, $3) RETURNING *', [date, coordinates, description]);

  try {
    res.json(newTask.rows[0]);
  } catch (err) {
    console.log(err);
  }
});

app.get('/api/tasks', async (req, res) => {
  const tasksData = await db.query('SELECT * FROM tasks');

  try {
    console.log(tasksData.rows);
    res.json(tasksData.rows);
  } catch (err) {
    console.log(err);
  }
});

app.get('/api/task/:id', async (req, res) => {
  const { id } = req.params;

  try {
    console.log(res, id);
    res.json('ok')
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`  Listening on http://localhost:${port}`);
});
