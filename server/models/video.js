const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
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
  description:{
    type:String,
    required:true
  }
});

const Video = mongoose.model('Video', videoSchema);

module.exports = Video;
