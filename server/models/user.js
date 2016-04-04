var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
  name: {type: String, unique: true},
  created_at: {type: Date, default: Date()},
  initiatives: [{type: Schema.Types.ObjectId, ref: 'Initiative'}]
})

mongoose.model('Users', UserSchema);