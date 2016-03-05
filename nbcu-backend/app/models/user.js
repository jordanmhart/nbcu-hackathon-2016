var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema for User
var userSchema = new Schema({
    name: { type: String, required: false },
    _liked: [{type: mongoose.Schema.Types.ObjectId, ref:'Show', required: true }],
    _watched: [{type: mongoose.Schema.Types.ObjectId, ref:'Show', required: true }],
    created_at: Date,
    updated_at: Date
});

var User = mongoose.model('User', userSchema);
module.exports = User;