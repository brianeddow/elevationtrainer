var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var InitiativesSchema = new mongoose.Schema({
	_user: {type: Schema.Types.ObjectId, ref: "User"},
	location: String,
	duration: String,
	commitment: String,
	created_at: {type: Date, default: Date()}
})

mongoose.model('Initiative', InitiativesSchema);
