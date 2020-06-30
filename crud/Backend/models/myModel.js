const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mySchema = new Schema(
    {
        myid: { type: String, required: true, unique : true},
        myname: {type: String, required: true},
        phone: {type: String, required: true}
    },
)

module.exports = mongoose.model('mycols', mySchema)