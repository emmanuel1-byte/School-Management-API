const express = require('express')
const router = express.Router()
const controller = require('../controller/index')
const utils = require('../utils/index')

router.post('/students')

router.get('/students/list-student')

module.exports = router