const express = require('express');
const { uploadMedia, getMedia } = require('../controllers/mediaController');
const { authMiddleware } = require('../middlewares/authMiddleware');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const router = express.Router();

router.post('/', authMiddleware, upload.single('file'), uploadMedia);
router.get('/', getMedia);

module.exports = router;
