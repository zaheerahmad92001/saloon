import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
} from 'react-native';
import Cloud from '../../assets/svgs/Cloud.svg';
import fontsFamily from '../../assets/fontsFamily';
import colors from '../../assets/colors';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import FastImage from 'react-native-fast-image';

const UploadImageComponent = props => {
  const {handleOnPress, selectedFile} = props;

  console.log('selected file', selectedFile);
  return (
    <Pressable onPress={handleOnPress}>
      <Text style={styles.title}>Upload</Text>
      {/* {selectedFile ? ( */}
        {/* <View style={styles.imageContainer}>
          <FastImage source={{uri: selectedFile}} style={styles.imageStyle} />
        </View> */}
       {/* ) : ( */}
        <View style={[styles.uploadBox]}>
          <Cloud />
          <Text style={styles.uploadText}>{selectedFile? selectedFile.fileName:'Upload Image/document'}</Text>
        </View>
      {/* )} */}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 12,
    fontWeight: fontsFamily.regular,
    marginBottom: 10,
    color: '#333',
  },
  uploadBox: {
    borderWidth: 1,
    borderColor: colors.lightBlack,
    borderStyle: 'dashed',
    borderRadius: 10,
    height: heightPercentageToDP(14),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  imageContainer: {
    width: '100%',
    height: heightPercentageToDP(14),
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.lightBlack,
    borderStyle: 'dashed',
    borderRadius: 10,
  },
  imageStyle: {
    flex: 1,
    width: null,
    height: null,
  },

  uploadText: {
    marginTop: 10,
    fontSize: 12,
    fontFamily: fontsFamily.regular,
    color: '#7a7a7a',
  },
});

export default UploadImageComponent;
