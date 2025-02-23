import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {LargeText} from '../Typography';
import fontsFamily from '../../assets/fontsFamily';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../assets/colors';
import { RFValue } from 'react-native-responsive-fontsize';

const MediaPicker = props => {
  const {captureWithCamera, pickFromGallery, onCancel} = props;
  return (
    <View>
      <View style={styles.iconContainer}>
        <Feather name="file" size={50} color={colors.white} />
      </View>
      <View style={styles.container}>
        <TouchableOpacity onPress={captureWithCamera}>
          <LargeText text={'Capture with Camera'} style={[styles.XlargeText]} />
        </TouchableOpacity>

        <TouchableOpacity onPress={pickFromGallery}>
          <LargeText text={'Pick from Gallery'} style={[styles.XlargeText]} />
        </TouchableOpacity>

        <TouchableOpacity onPress={onCancel}>
          <LargeText text={'Cancel'} style={[styles.XlargeText]} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MediaPicker;

const styles = StyleSheet.create({
  XlargeText: {
    fontWeight: '600',
    fontFamily: fontsFamily.Pregular,
    fontSize:RFValue(16)
  },
  container: {
    alignItems: 'flex-start',
    gap: 30,
  },
  iconContainer: {
    width: 90,
    height: 90,
    borderRadius: 90 / 2,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 20,
  },
});
