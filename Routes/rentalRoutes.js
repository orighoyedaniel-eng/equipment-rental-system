const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('Rental routes working'));

module.exports = router;

