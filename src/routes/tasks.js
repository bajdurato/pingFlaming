const { Task } = require('../models/task');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const tasks = await Task.find().sort('title');
    res.send(tasks);
});

router.get('/:id', async (req, res) => {
    const task = await Task.findById(req.params.id);

    if (!task) return res.status(404).send('The task with the given ID was not found.');

    res.send(task);
});

router.post('/', async (req, res) => {
    const task = new Task({
        title: req.body.title,
        isCompleted: req.body.isCompleted,
        tags: req.body.tags
    });

    await task.save();
    res.send(task);
});

router.put('/:id', async (req, res) => {
    const task = await Task.findByIdAndUpdate(req.params.id, {
      title: req.body.title,
      isCompleted: req.body.isCompleted,
      tags: req.body.tags
    }, {
      new: true
    });

  if (!task) return res.status(404).send('The task with the given ID was not found.');
  res.send(task);
});

router.delete('/:id', async (req, res) => {
    const task = await Task.findByIdAndRemove(req.params.id);

    if (!task) return res.status(404).send('The task with the given ID was not found.');

    res.send(task);
});

module.exports = router;