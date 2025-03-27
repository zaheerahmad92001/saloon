import {
  View,
  SafeAreaView,
  Text,
  Pressable,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useRef, useState} from 'react';
import PhoneInput from 'react-native-phone-number-input';
import {SmallText, XlargeText} from '../../components/Typography';
import styles from './signUp.Style';
import colors from '../../assets/colors';
import fontsFamily from '../../assets/fontsFamily';
import {AppButton} from '../../components/appButton';
import TextField from '../../components/textField/textField';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {RFValue} from 'react-native-responsive-fontsize';
import Header from '../../components/appHeader';
import DownArrow from '../../assets/svgs/downarrow.svg';
import LocationPointer from '../../assets/svgs/locationpointer.svg';

const SignUp = ({navigation, route}) => {
  const phoneInput = useRef(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [isChecked, setChecked] = useState(false);
  const [address, setAddress] = useState('');

  const handleLocationPress = () => {
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={'Sign Up'}
        showBackButton
        onBackPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mainContainer}>
          <XlargeText text={'Create your Account!'} style={styles.heading} />
          <SmallText text={'Phone Number'} style={styles.label} />

          <PhoneInput
            ref={phoneInput}
            defaultValue={phoneNumber}
            defaultCode="SA"
            layout="first"
            placeholder="Enter your phone number"
            disableCountryCode={true}
            onChangeText={text => {
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
              style: {paddingLeft: 0, marginLeft: -20, textAlign: 'left'},
            }}
            renderDropdownImage={<DownArrow />}
          />

          <TextField
            label={'Salon name'}
            placeholder={'Enter salon name'}
            style={[styles.inputFields, styles.halfWidth]}
          />
          <TextField
            label={'Owner name'}
            placeholder={'Enter your name'}
            style={[styles.inputFields, styles.halfWidth]}
          />

          <TextField
            label={'Email (Optional)'}
            placeholder={'Enter your email'}
            style={styles.inputFields}
          />
          <View style={styles.addressLablecontainer}>
            <Text style={styles.addresslabel}>Address</Text>
            <Pressable>
              <LocationPointer />
            </Pressable>
          </View>
          <View style={styles.addresscontainer}>
            <TextInput
              placeholder="Your address"
              value={address}
              onChangeText={setAddress}
              placeholderTextColor="#B0B0B0"
              style={styles.addressinput}
              multiline={true}
              numberOfLines={20} />
          </View>

          <View
            style={styles.checkboxContainer}>
            <Pressable 
             onPress={() => setChecked(!isChecked)}
            style={{alignSelf: 'flex-start'}}>
              <MaterialIcons
                name={isChecked ? 'check-box' : 'check-box-outline-blank'}
                size={25}
                color={isChecked ? colors.primary : colors.lightBlack}
              />
            </Pressable>
            <View style={styles.termViews}>
              <Text style={styles.termsText}>
                I agree to the anaqq{' '}
                <Text style={styles.privacyPolicyText}>Terms of Service</Text>{' '}
                and
              </Text>
              <Text style={[styles.privacyPolicyText, {marginTop: 6}]}>
                Privacy Policy
              </Text>
            </View>
          </View>

          <AppButton
            title={'Sign Up'}
            disabled={!isChecked}
            style={styles.signUpButton}
            textstyle={styles.signUpText}
            onPress={() => navigation.navigate('otpView')}
          />

          <View style={styles.loginTextContainer}>
            <SmallText
              text={'Already have an account?'}
              style={styles.headingAcc}
            />
            <Pressable onPress={() => navigation.navigate('login')}>
              <SmallText text={'Sign in'} style={styles.subHeadingAcc} />
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
