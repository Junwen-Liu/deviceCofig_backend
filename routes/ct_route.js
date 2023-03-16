const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const ctschema  = new mongoose.Schema({});
const CT = mongoose.model('ct_configs', ctschema);

router.get('/', async (req, res) => {

    const data = await CT.find();
    res.send(data).status(200);
});

module.exports = router;