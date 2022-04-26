const express = require('express');
const router = express.Router();
// You Do - Require the yet to be created reviews controller 

const destinationsCtrl = require ('../controllers/destinations');
// You Do - Define the Route below
router.post('/flights/:id/destinations', destinationsCtrl.create);

module.exports = router;