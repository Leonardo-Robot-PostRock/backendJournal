const cloudinary = require('../config/cloudinary');

/**
 * Deletes a single image from Cloudinary by its public ID.
 * @param {string} publicId - The public ID of the image to delete.
 * @returns {Promise} - The result of the delete operation.
 */
const deleteImageByPublicId = (publicId) => {
    return cloudinary.uploader.destroy(publicId);
};

/**
 * Deletes multiple images from Cloudinary by their public IDs.
 * @param {Array<string>} publicIds - An array of public IDs of images to delete.
 * @returns {Promise} - The result of the delete operation.
 */
const deleteImagesByPublicIds = (publicIds) => {
    return cloudinary.api.delete_resources(publicIds);
};

module.exports = {
    deleteImageByPublicId,
    deleteImagesByPublicIds
};
