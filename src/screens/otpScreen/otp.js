import {
  View,
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {SmallText, XlargeText} from '../../components/Typography';
import colors from '../../assets/colors';
import fontsFamily from '../../assets/fontsFamily';
import {RFValue} from 'react-native-responsive-fontsize';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {AppButton} from '../../components/appButton';
import Header from '../../components/appHeader';

const OtpView = ({navigation, route}) => {

  const {isDeleteRoute} = route.params || {};
  const [otp, setOtp] = useState('');

  const handleNavigation = () => {
    if (isDeleteRoute) {
      Alert.alert('Deleted Successfully');
      setTimeout(() => {
        navigation.goBack()
      }, 1000);
    } else {
      navigation.navigate('salonCategory');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        {!isDeleteRoute && (
          <Header
            title={'OTP'}
            showBackButton
            onBackPress={() => navigation.goBack()}
          />
        )}
        <View
          style={
            isDeleteRoute
              ? [styles.mainContainer, styles.securityView]
              : [styles.mainContainer]
          }>
          <XlargeText text={'Verify Your Identity'} style={styles.heading} />
          <SmallText
            text={
              'We’ve sent a 4-digit code to 071*****05 Please enter it below.'
            }
            style={styles.subHeading}
          />

          <OTPInputView
            style={styles.otpContainer}
            pinCount={4}
            autoFocusOnLoad={false}
            code={otp}
            onCodeChanged={setOtp}
            codeInputFieldStyle={styles.otpInput}
            codeInputHighlightStyle={styles.otpInputHighlight}
          />

          {!isDeleteRoute && (
            <View style={styles.registerTextContainer}>
              <SmallText text={'Time Left:'} style={styles.headingAcc} />
              <SmallText text={'00:10'} style={styles.subHeadingAcc} />
            </View>
          )}

          <View
            style={
              isDeleteRoute
                ? [styles.resendContainer, styles.topMargin]
                : [styles.resendContainer]
            }>
            <SmallText
              text={'Didn’t receive a code?'}
              style={styles.headingAcc}
            />
            <SmallText text={'Resend'} style={styles.subHeadingAcc} />
          </View>

          <AppButton
            title={'Continue'}
            style={styles.buttonContainer}
            textstyle={styles.buttontext}
            onPress={handleNavigation}
          />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //padding: 15,
    backgroundColor: colors.white,
  },
  mainContainer: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.appBG,
  },
  securityView: {
    backgroundColor: colors.white,
    marginTop: hp(6),
  },
  topMargin: {
    marginTop: hp(3),
  },
  heading: {
    fontSize: RFValue(18),
    fontFamily: fontsFamily.bold,
    marginTop: hp(3),
  },
  subHeading: {
    fontSize: RFValue(11),
    color: colors.lightBlack,
    fontFamily: fontsFamily.regular,
    marginTop: hp(1),
  },
  otpContainer: {
    width: '72%',
    height: 55,
    alignSelf: 'center',
    marginTop: hp(6),
  },
  otpInput: {
    width: 55,
    height: 55,
    borderWidth: 1,
    borderColor: colors.gray,
    color: colors.appBlack,
    backgroundColor: colors.inputGray,
    borderRadius: 5,
  },
  otpInputHighlight: {
    borderColor: colors.gray,
  },
  registerTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 10,
    marginTop: hp(4),
  },
  resendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 10,
  },
  headingAcc: {
    fontSize: RFValue(12),
    color: colors.lightBlack,
    fontFamily: fontsFamily.regular,
  },
  subHeadingAcc: {
    fontSize: RFValue(12),
    color: colors.primary,
    fontFamily: fontsFamily.regular,
    marginLeft: 5,
  },
  buttonContainer: {
    marginBottom: 20,
  },
  buttontext: {
    fontFamily: fontsFamily.medium,
    fontSize: RFValue(14),
  },
});

export default OtpView;
