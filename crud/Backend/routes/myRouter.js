const express = require('express')

const MbDetectCtrl = require('../controllers/myController')

const router = express.Router()

router.post('/mbdetect', MbDetectCtrl.insertData)
router.get('/mbdetect', MbDetectCtrl.getData)

module.exports = router