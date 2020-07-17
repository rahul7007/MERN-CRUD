const express = require('express')

const MbDetectCtrl = require('../controllers/myController')

const router = express.Router()

router.post('/insert', MbDetectCtrl.insertData)
router.get('/display', MbDetectCtrl.getData)
router.put('/update/:id', MbDetectCtrl.updateData)
router.delete('/delete/:id', MbDetectCtrl.deleteData)

module.exports = router