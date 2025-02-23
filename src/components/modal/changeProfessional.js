import { View, Text, StyleSheet, Alert } from 'react-native';
import React, { useCallback, useReducer, useRef, useState } from 'react';
import colors from '../../assets/colors';
import fontsFamily from '../../assets/fontsFamily';
import { RFValue } from 'react-native-responsive-fontsize';
import { MediumText, XlargeText } from '../Typography';
import { Divider } from 'react-native-paper';
import { AppButton } from '../appButton';
import { measure } from 'react-native-reanimated';
import { BottomSheet } from '../../components/bottomSheet';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP } from 'react-native-responsive-screen';
import ChangeProfessionalBottomSheet from './ChangeProfessionalBottomSheet';
import BookingFilter from '../bookingFilter/BookingFilter';
const ChangeProfessional = (props) => {
  const { onAgree , onCancel } = props;
  return (
    <View>
      <XlargeText text={'Change Professional'} style={styles.heading} />
      <Divider style={styles.divider} />
      <XlargeText
        text={'Are you sure you want to change the professional?'}
        style={styles.subHeading}
      />
      <MediumText
        text={
          'We will notify the client regarding the transition to a new professional.'
        }
        style={styles.description}
      />
      <AppButton
        title={'Yes, Change'}
        onPress={onAgree}
        style={styles.yesButton}
      />

      <AppButton
        title={"No,Don't Change"}
        onPress={onCancel}
        style={styles.cancelButton}
        textstyle={styles.cancelText}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    paddingVertical: 10,
    fontSize: RFValue(14),
    //fontWeight:'600',
    fontFamily: fontsFamily.bold
  },
  divider: {
    borderWidth: 0.1,
    marginTop: hp(1),
    marginBottom: hp(1),
  },
  subHeading: {
    fontFamily: fontsFamily.bold,
    fontSize: RFValue(14),
    fontWeight: '600'
  },
  description: {
    marginVertical: hp(1.5),
    color: colors.lightBlack,
  },
  yesButton: {
    marginTop: 10,
  },
  cancelButton: {
    marginTop: hp(2),
    backgroundColor: colors.lighterPrimary,
    borderColor: colors.lighterPrimary,
  },
  cancelText: {
    color: colors.primary,
  },
});

export default ChangeProfessional;
