const obj = require('../models/myModel')

insertData = (req, res) => {
    const prodData = {
        myid: req.body.myid,
        myname: req.body.myname,
        phone: req.body.phone,
    }
    obj.create(prodData)
    .then(user => {
        res.json({ status: 'Data inserted!' })
    })
    .catch(err => {
        res.send('error: ' + err)
    })
}

getData = async (req, res) => {
    await obj.find({}, (err, mbdetect) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!mbdetect) {
            return res
                .status(404)
                .json({ success: false, error: `obj not found@` })
        }
        return res.status(200).json({ success: true, data: mbdetect })
    }).catch(err => console.log(err))
}



module.exports = {
    getData,
    insertData,
}