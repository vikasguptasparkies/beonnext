const Media = require('../models/Media');

exports.uploadMedia = async (file) => {
  const media = new Media({ file_path: file.path, file_type: file.mimetype, uploaded_by: file.user.id });
  await media.save();
  return media;
};

exports.getMedia = async () => {
  return await Media.find().populate('uploaded_by');
};
