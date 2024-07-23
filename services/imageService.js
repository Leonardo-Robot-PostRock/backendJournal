const cloudinary = require('../config/cloudinary');
require('dotenv').config();

/**
 * Deletes a single image from Cloudinary by its public ID.
 * @param {string} publicId - The public ID of the image to delete.
 * @returns {Promise} - The result of the delete operation.
 */
const deleteImageByPublicId = async (publicId) => {
    try {
        const result = await cloudinary.uploader.destroy(`${process.env.CLOUDINARY_NAME_FOLDER}/${publicId}`, {
            resource_type: 'image',
            type: 'upload'
        });
        return result;
    } catch (error) {
        throw new Error('Failed to delete image');
    }
};

/**
 * Deletes multiple images from Cloudinary by their public IDs.
 * @param {Array<string>} publicIds - An array of public IDs of images to delete.
 * @returns {Promise} - The result of the delete operation.
 */
const deleteImagesByPublicIds = (publicIds) => {
    return publicIds.map(publicId => {
        cloudinary.api.delete_resources([`${process.env.CLOUDINARY_NAME_FOLDER}/${publicId}`], {
            resource_type: 'image'
        });
    })
};

module.exports = {
    deleteImageByPublicId,
    deleteImagesByPublicIds
};
