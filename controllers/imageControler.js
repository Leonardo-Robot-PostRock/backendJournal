const imageService = require('../services/imageService.js');

exports.deleteImage = async (req, res) => {
    const { publicIds } = req.body;

    try {
        if (publicIds.length === 1) {
            const result = imageService.deleteImageByPublicId(publicIds[0]);
            res.status(200).json(result);
        }

        if (publicIds.length > 1) {
            const result = await imageService.deleteImagesByPublicIds(publicIds);
            res.status(200).json(result);
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete images' });
    }
}