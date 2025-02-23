import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

export const pickImageFromLibrary = async (onImagePicked) => {
  const result = await launchImageLibrary({
    mediaType: 'photo',
    maxWidth: 1024,
    maxHeight: 1024,
    quality: 0.8,
  });

  if (!result.didCancel && result.assets) {
    onImagePicked(result.assets[0]); // Return selected image data to parent
  }
};

export const captureImageWithCamera = async (onImagePicked) => {
  const result = await launchCamera({
    mediaType: 'photo',
    maxWidth: 1024,
    maxHeight: 1024,
    quality: 0.8,
    cameraType: 'front',
  });

  if (!result.didCancel && result.assets) {
    onImagePicked(result.assets[0]); // Return captured image data to parent
  }
};
