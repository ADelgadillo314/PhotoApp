import { UPLOAD_PICTURE, REMOVE_PICTURE, SORT_GALLERY, OPEN_CROP_MODAL, CLOSE_CROP_MODAL } from '../actions/actionTypes';

export const uploadPictureAction = (images) => ({
    type: UPLOAD_PICTURE,
    images: images
});

export const removePictureAction = (image) => ({
    type: REMOVE_PICTURE,
    image: image
});

export const sortGalleryAction = (oldImageIndex, newImageIndex) => ({
    type: SORT_GALLERY,
    oldImageIndex: oldImageIndex,
    newImageIndex: newImageIndex
});

export const openCropModalAction = (image) => ({
    type: OPEN_CROP_MODAL,
    image: image
});

export const closeCropModalAction = (imageData) => ({
    type: CLOSE_CROP_MODAL,
    imageData: imageData
});