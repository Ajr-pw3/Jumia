import express from 'express';
import cors from 'cors';
import Database from 'better-sqlite3';
import { z } from 'zod';
import type { Task, CreateTaskDTO, UpdateTaskDTO } from '../src/types/shared';

const app = express();
const db = new Database('tasks.db');

// Initialize database
db.exec(`
  CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    completed BOOLEAN DEFAULT FALSE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

app.use(cors());
app.use(express.json());

// Validation schemas
const createTaskSchema = z.object({
  title: z.string().min(1),
});

const updateTaskSchema = z.object({
  title: z.string().min(1).optional(),
  completed: z.boolean().optional(),
});

// Routes
app.get('/api/tasks', (_, res) => {
  const tasks = db.prepare('SELECT * FROM tasks ORDER BY created_at DESC').all() as Task[];
  res.json(tasks);
});

app.post('/api/tasks', (req, res) => {
  const validation = createTaskSchema.safeParse(req.body);
  if (!validation.success) {
    return res.status(400).json({ errors: validation.error.errors });
  }

  const { title } = req.body as CreateTaskDTO;
  const result = db.prepare('INSERT INTO tasks (title) VALUES (?)').run(title);
  const task = db.prepare('SELECT * FROM tasks WHERE id = ?').get(result.lastInsertRowid) as Task;
  res.status(201).json(task);
});

app.patch('/api/tasks/:id', (req, res) => {
  const validation = updateTaskSchema.safeParse(req.body);
  if (!validation.success) {
    return res.status(400).json({ errors: validation.error.errors });
  }

  const { id } = req.params;
  const updates = req.body as UpdateTaskDTO;
  
  const sets: string[] = [];
  const values: any[] = [];
  
  if (updates.title !== undefined) {
    sets.push('title = ?');
    values.push(updates.title);
  }
  if (updates.completed !== undefined) {
    sets.push('completed = ?');
    values.push(updates.completed);
  }

  if (sets.length === 0) {
    return res.status(400).json({ error: 'No valid updates provided' });
  }

  values.push(id);
  const query = `UPDATE tasks SET ${sets.join(', ')} WHERE id = ?`;
  db.prepare(query).run(...values);

  const task = db.prepare('SELECT * FROM tasks WHERE id = ?').get(id) as Task;
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }

  res.json(task);
});

app.delete('/api/tasks/:id', (req, res) => {
  const { id } = req.params;
  db.prepare('DELETE FROM tasks WHERE id = ?').run(id);
  res.status(204).send();
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});