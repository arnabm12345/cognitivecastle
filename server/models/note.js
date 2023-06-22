const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true
  },
  file: {
    type: String,
    required: true
  },
  title:{
    type: String,
    required: true
  },
  registration_num:{
  type:String,
  required:true
  },
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;
