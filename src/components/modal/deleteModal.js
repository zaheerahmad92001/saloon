import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import DeleteIcon from '../../assets/svgs/deleteIcon.svg'
import {MediumText} from '../Typography';
import fontsFamily from '../../assets/fontsFamily';
import {AppButton} from '../appButton';
import colors from '../../assets/colors';

const DeleteModal = (props) => {
    const {handleLogout , handleCancel} = props;
  return (
    <View style={styles.container}>
      <DeleteIcon />
      <MediumText
        text={'Are you sure you want to'}
        style={styles.mediumText}
      />
      <MediumText
        text={'delete?'}
        style={styles.mediumText}
      />

      <AppButton
        title={'Yes delete'}
        onPress={handleLogout}
        style={styles.buttonStyle}
      />
      <AppButton
        title={'No Thanks'}
        onPress={handleCancel}
        style={[styles.buttonStyle, styles.cancelButton]}
        textstyle={styles.cancelText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  mediumText: {
    fontFamily: fontsFamily.Pmedium,
    marginTop: hp(1),
  },
  buttonStyle: {
    width: '100%',
    marginTop: hp(1.5),
  },
  cancelButton: {
    backgroundColor: colors.lighterPrimary,
    borderColor: colors.lighterPrimary,
    marginTop: hp(1.5),
  },
  cancelText: {
    color: colors.primary,
  },
});
export default DeleteModal;
