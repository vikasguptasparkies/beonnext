const mongoose = require('mongoose');

const MediaSchema = new mongoose.Schema({
  file_path: { type: String, required: true },
  file_type: { type: String, required: true },
  uploaded_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });

module.exports = mongoose.model('Media', MediaSchema);
