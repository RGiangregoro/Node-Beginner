var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var leadersSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    abbr: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    featured: {
        type: Boolean,
        required: true
    }
}, {
    timestamps: true
});


var leaders = mongoose.model('Leader', leadersSchema);

module.exports = leaders;