const Tag = require('../models/tag');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const tags = await Tag.find();
    res.send(tags);
});

router.get('/:id', async (req, res) => {
    const tags = await Task.findById(req.params.id);

    if (!tags) return res.status(404).send('The tag with the given ID was not found.');

    res.send(tag);
});

router.post('/', async (req, res) => {
    let tag = new Tag({
        title: req.body.title,
        color: req.body.color,
        tags: req.body.tags
    });

    tag = await tag.save();
    res.send(tag);
});

router.put('/:id', async (req, res) => {
    const tag = await Tag.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        color: req.body.color,
        tags: req.body.tags
    }, {
        new: true
    });

    if (!tag) return res.status(404).send('The tag with the given ID was not found.');
    res.send(tag);
});

router.delete('/:id', async (req, res) => {
    const tag = await Tag.findByIdAndRemove(req.params.id);

    if (!tag) return res.status(404).send('The tag with the given ID was not found.');

    res.send(tag);
});

module.exports = router;