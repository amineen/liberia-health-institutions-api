const express = require('express');
const { getHealthInstitutions } = require('../controllers/institutions');
const router = express.Router();

router.route('/').get(getHealthInstitutions);

module.exports = router;