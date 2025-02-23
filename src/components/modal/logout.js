import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Logout from '../../assets/svgs/logout-color-icon.svg';
import {MediumText} from '../Typography';
import fontsFamily from '../../assets/fontsFamily';
import {AppButton} from '../appButton';
import colors from '../../assets/colors';

const LogoutModal = (props) => {
    const {handleLogout , handleCancel} = props;
  return (
    <View style={styles.container}>
      <Logout />
      <MediumText
        text={'Are you sure you want to'}
        style={styles.mediumText}
      />
      <MediumText
        text={'logout?'}
        style={styles.mediumText}
      />

      <AppButton
        title={'Logout'}
        onPress={handleLogout}
        style={styles.buttonStyle}
      />
      <AppButton
        title={'Cancel'}
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
export default LogoutModal;
