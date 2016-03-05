var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema for Show
var showSchema = new Schema({
    name: { type: String, required: false },
    description: { type: String, required: false },
    matchScore: { type: Number, required: false },
    picURL: { type: String, required: false },
    episodeDuration: { type: Number, required: false },
    numberOfSeasons: { type: Number, required: false },
    whereToWatch: { type: String, required: false },
    created_at: Date,
    updated_at: Date
});

var Show = mongoose.model('Show', showSchema);
module.exports = Show;