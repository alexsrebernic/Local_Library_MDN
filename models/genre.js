const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const genreSchema = new Schema(
    {
        name:{type:String, required: true,maxlength:100,minlength:3}
    }
)
genreSchema
.virtual('url')
.get(function () {
    return `/genre/${this.name}`
})
module.exports = mongoose.model('Genre', genreSchema);