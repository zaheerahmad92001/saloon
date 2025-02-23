import { View, Text, SafeAreaView, StyleSheet, Pressable } from 'react-native';
import React, { useRef, useState } from 'react';
import PhoneInput from 'react-native-phone-number-input';
import { SmallText, XlargeText } from '../../../components/Typography';
import colors from '../../../assets/colors';
import fontsFamily from '../../../assets/fontsFamily';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { AppButton } from '../../../components/appButton';
import Header from '../../../components/appHeader';
import DownArrow from '../../../assets/svgs/downarrow.svg';
const Login = ({ navigation, route }) => {
  const phoneInput = useRef(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [countryCode, setCountryCode] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Login'} showBackButton onBackPress={() => navigation.goBack()} />
      <View style={styles.mainContainer}>
        <XlargeText text={'Welcome to ANAQA'} style={styles.heading} />
        <SmallText
          text={
            'Login or create an account to book and manage your appointments.'
          }
          style={styles.subHeading}
        />
        <SmallText text={'Enter Phone Number.'} style={styles.label} />
        <PhoneInput
          ref={phoneInput}
          defaultValue={phoneNumber}
          defaultCode="SA"
          layout="first"
          placeholder="Enter your phone number"
          disableCountryCode={true}
          onChangeText={(text) => {
            setPhoneNumber(text);
          }}
          onChangeFormattedText={text => setFormattedValue(text)}
          onChangeCountry={country => setCountryCode(country.callingCode)}
          withShadow={false}
          containerStyle={styles.phoneContainer}
          textContainerStyle={styles.textInput}
          flagButtonStyle={styles.flagButton}
          textInputProps={{
            placeholderTextColor: colors.lightBlack,
            fontFamily: fontsFamily.regular,
            fontSize: RFValue(12),
            style: { paddingLeft: 0, marginLeft: -20, textAlign: 'left' },
          }}
          renderDropdownImage={
            <DownArrow />
          }
        />
        <AppButton title={'Done'} textstyle={styles.loginpText} onPress={() => navigation.navigate('otpView')} />

        <View style={styles.registerTextContainer}>
          <SmallText text={"Don't have an account?"} style={styles.headingAcc} />
          <Pressable onPress={() => navigation.navigate('signup')}>
            <SmallText text={'Register Here'} style={styles.subHeadingAcc} />
          </Pressable>
        </View>
        <SmallText text={'Need Help?'} style={styles.helpText} />

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
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
    marginTop:hp(0.5),
  },
  label: {
    color: colors.appBlack,
    fontSize: RFValue(14),
    fontFamily: fontsFamily.regular,
    marginTop: hp(4),
    marginBottom: 10,
  },
  phoneContainer: {
    width: '100%',
    height: 50,
  },
  textInput: {
    paddingVertical: 0,
    backgroundColor: colors.inputGray,
    height: 50,
  },
  flagButton: {
    backgroundColor: colors.inputGray,
  },
  registerTextContainer: {
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
  helpText: {
    fontSize: RFValue(12),
    color: colors.lightBlack,
    fontFamily: fontsFamily.regular,
    marginLeft: 5,
    textAlign: 'center',
    marginBottom: hp(3),
  },
  loginpText: {
    fontSize: RFValue(13),
    fontFamily: fontsFamily.semiBold,
  },
});

export default Login;
