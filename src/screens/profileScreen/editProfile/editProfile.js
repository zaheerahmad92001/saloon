import { View, TouchableOpacity, SafeAreaView, Text } from 'react-native';
import React, { useRef, useReducer, useState } from 'react';

import TextField from '../../../components/textField/textField';
import images from '../../../assets/images';
import Header from '../../../components/appHeader';
import styles from './editProfle.styles';
import FastImage from 'react-native-fast-image';
import Camera from '../../../assets/svgs/camera.svg';
import ModalComponent from '../../../components/modal';
import MediaPicker from '../../../components/modal/mediaPicker';
import { captureImageWithCamera, pickImageFromLibrary } from '../../../functions';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { AppButton } from '../../../components/appButton';
import PhoneInput from 'react-native-phone-number-input';
import { SmallText, XlargeText } from '../../../components/Typography';
import colors from '../../../assets/colors';
import fontsFamily from '../../../assets/fontsFamily';
import { RFValue } from 'react-native-responsive-fontsize';
import DownArrow from '../../../assets/svgs/downarrow.svg';
import MyDropdown from '../../../components/dropdown/dropdown';
const EditProfile = ({ navigation, route }) => {


  const [selectedValue, setSelectedValue] = useState(null);
  const items = [
    { label: 'Option A', value: '1' },
    { label: 'Option B', value: '2' },
    { label: 'Option C', value: '3' },
    { label: 'Option D', value: '4' },
    { label: 'Option E', value: '5' },
  ];

  const fNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const dobRef = useRef(null);
  const modalRef = useRef()

  const phoneInput = useRef(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [countryCode, setCountryCode] = useState('');


  const [state, updateState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      isVisible: false,
      profileImage: null,
      fname: null,
      lname: null,
      email: null,
      phone: null,
      dob: null,
    },
  );
  const { isVisible, profileImage, fname, lname, email, phone, dob } = state;

  const handleImagePicked = image => {
    updateState({ isVisible: false, profileImage: image.uri });
  };

  const openModal = () => {
    if (modalRef?.current) {
      modalRef.current.open();
    } else {
    }
  };

  const closeModal = () => {
    if (modalRef?.current) {
      modalRef.current.close();
    } else {
    }
  };

  const handleNavigation = () => {
    navigation.goBack();
  };

  const updateProfile = () => { };

  return (
    <SafeAreaView style={styles.wrapper}>
      <Header
        title={'Edit Profile'}
        showBackButton={true}
        onBackPress={handleNavigation}
      />
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.profileImageContainer}>
            <View style={styles.innerProfileImageContainer}>
              <View style={styles.ImageContainer}>
                <FastImage
                  source={profileImage ? { uri: profileImage } : images.room}
                  // resizeMode={FastImage.resizeMode.contain}
                  style={styles.profileImage}
                />
              </View>
              <TouchableOpacity onPress={openModal} style={styles.editIcon}>
                <Camera />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.inputContainer}>
            <TextField
              ref={emailRef}
              placeholder={'Salon Name'}
              label={'Salon Name'}
              onChangeText={val => {
                updateState({ email: val });
              }}
              value={email}
              returnKeyType="next"
              blurOnSubmit={false}
              onSubmitEditing={() => phoneRef.current?.focus()}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextField
              placeholder={'Owner Name'}
              ref={phoneRef}
              label={'Owner Name'}
              onChangeText={val => {
                updateState({ phone: val });
              }}
              value={phone}
              returnKeyType="next"
              blurOnSubmit={false}
              onSubmitEditing={() => dobRef.current?.focus()}
            />
          </View>

          <SmallText text={'Phone Number'} style={styles.label} />
          {console.log('phoneNumber', phoneNumber, 'countryCode', countryCode)}

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
              style: { paddingLeft: 0, marginLeft: -20, textAlign: 'left' },
            }}
            renderDropdownImage={<DownArrow />}
          />

          <View style={styles.emailContainer}>
            <TextField
              placeholder={'Email'}
              ref={dobRef}
              label={'Email(Optional)'}
              onChangeText={val => {
                updateState({ dob: val });
              }}
              value={dob}
              returnKeyType="done"
              blurOnSubmit={false}
            />
          </View>

          <View style={styles.dropdownContainer}>
            <Text style={styles.cityText}>City</Text>
            <MyDropdown
              data={items}
              value={selectedValue}
              onChange={item => setSelectedValue(item.value)}
              placeholder="Select Status"
            />
          </View>


          <View style={styles.inputContainer}>
            <TextField
              ref={emailRef}
              placeholder={'Postal Code'}
              label={'Postal Code'}
              onChangeText={val => {
                updateState({email: val});
              }}
              value={email}
              returnKeyType="next"
              blurOnSubmit={false}
              onSubmitEditing={() => phoneRef.current?.focus()}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextField
              ref={emailRef}
              placeholder={'Address'}
              label={'Address'}
              onChangeText={val => {
                updateState({email: val});
              }}
              value={email}
              returnKeyType="next"
              blurOnSubmit={false}
              onSubmitEditing={() => phoneRef.current?.focus()}
            />
          </View>


          <AppButton
            onPress={updateProfile}
            title={'Update Profile'}
            style={styles.button}
          />
        </View>
      </KeyboardAwareScrollView>

      <ModalComponent
        ref={modalRef}
        onClose={closeModal}>
        <MediaPicker
          onCancel={closeModal}
          captureWithCamera={() => {
            captureImageWithCamera(handleImagePicked);
          }}
          pickFromGallery={() => {
            pickImageFromLibrary(handleImagePicked);
          }}
        />
      </ModalComponent>
    </SafeAreaView>
  );
};

export default EditProfile;
