const express = require('express');
const router = express.Router();

const imageController = require('../controllers/imageControler');

router.delete('/delete', imageController.deleteImage);

module.exports = router;