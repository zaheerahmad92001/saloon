import React, {useReducer, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Header from '../../components/appHeader';
import {RFValue} from 'react-native-responsive-fontsize';
import fontsFamily from '../../assets/fontsFamily';
import colors from '../../assets/colors';
import PasswordInput from '../../components/passwordInput/passwordInput';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {MediumText} from '../../components/Typography';
import {AppButton} from '../../components/appButton';

const ChangePassword = ({navigation,route}) => {
  const [state, updateState] = useReducer(
      (state, newState) => ({...state, ...newState}),
      {
        currentPass: null,
        newPass: null,
        confirmPass: null,
      },
    );
    const {currentPass, newPass, confirmPass} = state;

  const handleChangePassword = () => {
    // Handle the change password action here
    console.log('Change Password Button Pressed');
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Change Password'} showBackButton onBackPress={()=>navigation.goBack()}/>
      <View style={styles.wrapper}>
        <MediumText
          text="Please Enter your current password"
          style={styles.heading}
        />

        <PasswordInput
          label="Current Password"
          placeholder="Enter your password"
          onChange={text => updateState({currentPass:text})}
          style={{marginTop: hp(1)}}
        />
        <MediumText text="Create a new password" style={styles.newPassText} />

        <PasswordInput
          label="New Password"
          placeholder="Enter your password"
          onChange={text => updateState({newPass:text})}
          style={{marginBottom: hp(2.5)}}
        />

        <PasswordInput
          label="Confirm Password"
          placeholder="Enter your password"
          onChange={text => updateState({confirmPass:text})}
        />

        <AppButton title="Change Password" onPress={handleChangePassword} style= {{marginBottom : hp(1)}} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  wrapper: {
    flex: 1,
    marginHorizontal: wp(4),
  },
  heading: {
    color: colors.lightBlack,
    marginTop: hp(2),
    marginBottom: hp(2),
    fontFamily:fontsFamily.medium,
    fontSize:RFValue(14),
    fontWeight:'500'
  },
  newPassText: {
    color: colors.lightBlack,
    marginTop: hp(3),
    marginBottom: hp(3),
  },
  button: {
    marginTop: 'auto',
    backgroundColor: colors.primary,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: RFValue(14),
    fontFamily: fontsFamily.semiBold,
    color: colors.white,
  },
});

export default ChangePassword;
