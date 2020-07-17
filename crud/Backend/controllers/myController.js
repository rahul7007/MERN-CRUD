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

updateData = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    obj.findOne({ _id: req.params.id }, (err, mbdetect) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'data not found!',
            })
        }
        mbdetect.myname = body.myname
        mbdetect.phone = body.phone
        mbdetect
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: mbdetect._id,
                    message: 'data updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'data not updated!',
                })
            })
    })
}

deleteData = async (req, res) => {
    await obj.findOneAndDelete({ _id: req.params.id }, (err, data) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!data) {
            return res
                .status(404)
                .json({ success: false, error: `obj not found` })
        }

        return res.status(200).json({ success: true, data: data })
    }).catch(err => console.log(err))
}


module.exports = {
    getData,
    insertData,
    updateData,
    deleteData
}