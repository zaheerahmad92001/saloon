import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import colors from '../../assets/colors';
import {RFValue} from 'react-native-responsive-fontsize';
import fontsFamily from '../../assets/fontsFamily';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { LargeText, MediumText, SmallText } from '../Typography';
import { AppButton } from '../appButton';

const CouponInput = ({onApply}) => {
  const [coupon, setCoupon] = useState('');

  return (
    <View style={styles.container}>
      <LargeText text={'Coupon Code'} style={styles.label}/>
      <View style={styles.inputContainer}>
        <SmallText
          style={styles.input}
          text={'Enter Coupon Code'}
        />
        <AppButton title={'Apply'} textstyle={styles.applyText}  style={styles.applyButton}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal:wp(4),
  },
  label: {
    textAlign:'left',
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:"space-between",
    borderWidth: 1,
    borderColor:colors.grayBorder,
    borderRadius: 8,
    paddingLeft:10,
    paddingRight:5,
    paddingVertical:5,
    backgroundColor:'transparant',
  },
  input: {
    color: colors.lightBlack,
  },
  applyButton: {
    backgroundColor:colors.lighterPrimary,
    borderColor:colors.lighterPrimary,
  },
  disabledButton: {
    backgroundColor: colors.gray,
  },
  applyText: {
    color: colors.primary,
  },
});

export default CouponInput;
