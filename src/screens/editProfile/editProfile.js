/* eslint-disable react-native/no-inline-styles */
import {View, TouchableOpacity, SafeAreaView, Text} from 'react-native';
import React, {useRef, useReducer, useState} from 'react';

import TextField from '../../components/textField/textField';
import images from '../../assets/images';
import Header from '../../components/appHeader';
import styles from './editProfle.styles';
import FastImage from 'react-native-fast-image';
import Camera from '../../assets/svgs/camera.svg';
import ModalComponent from '../../components/modal';
import MediaPicker from '../../components/modal/mediaPicker';
import {captureImageWithCamera, pickImageFromLibrary} from '../../functions';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {AppButton} from '../../components/appButton';
import PhoneInput from 'react-native-phone-number-input';
import {SmallText} from '../../components/Typography';
import colors from '../../assets/colors';
import fontsFamily from '../../assets/fontsFamily';
import {RFValue} from 'react-native-responsive-fontsize';
import DownArrow from '../../assets/svgs/downarrow.svg';
import MyDropdown from '../../components/dropdown/dropdown';

const EditProfile = ({navigation, route}) => {
  const [selectedValue, setSelectedValue] = useState(null);
  const items = [
    {label: 'Option A', value: '1'},
    {label: 'Option B', value: '2'},
    {label: 'Option C', value: '3'},
    {label: 'Option D', value: '4'},
    {label: 'Option E', value: '5'},
  ];

  const emailRef = useRef(null);
  const ownerRef = useRef(null);
  const postCodeRef = useRef(null);
  const modalRef = useRef();
  const phoneInput = useRef(null);
  const addressRef = useRef(null);

  const [state, updateState] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
      isVisible: false,
      profileImage: null,
      salonName: null,
      ownerName: null,
      email: null,
      phoneNumber: null,
      formattedValue: null,
      countryCode: null,
      dob: null,
    },
  );
  const {
    isVisible,
    profileImage,
    salonName,
    ownerName,
    email,
    phoneNumber,
    formattedValue,
    countryCode,
    dob,
  } = state;

  const handleImagePicked = image => {
    updateState({isVisible: false, profileImage: image.uri});
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

  const updateProfile = () => {};

  return (
    <SafeAreaView style={styles.wrapper}>
      <Header
        title={'Edit Profile'}
        showBackButton={true}
        onBackPress={handleNavigation}
      />
      <View style={styles.container}>
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.profileImageContainer}>
            <View style={styles.innerProfileImageContainer}>
              <View style={styles.ImageContainer}>
                <FastImage
                  source={profileImage ? {uri: profileImage} : images.room}
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
                updateState({salonName: val});
              }}
              value={salonName}
              returnKeyType="next"
              blurOnSubmit={false}
              onSubmitEditing={() => ownerRef.current?.focus()}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextField
              placeholder={'Owner Name'}
              ref={ownerRef}
              label={'Owner Name'}
              onChangeText={val => {
                updateState({ownerName: val});
              }}
              value={ownerName}
              returnKeyType="next"
              blurOnSubmit={false}
              onSubmitEditing={() => emailRef.current?.focus()}
            />
          </View>

          <SmallText text={'Phone Number'} style={styles.label} />

          <PhoneInput
            ref={phoneInput}
            defaultValue={phoneNumber}
            defaultCode="SA"
            layout="first"
            placeholder="Enter your phone number"
            disableCountryCode={true}
            onChangeText={text => {
              updateState({phoneNumber: text});
            }}
            onChangeFormattedText={text => updateState({formattedValue: text})}
            onChangeCountry={country =>
              updateState({countryCode: country.callingCode})
            }
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

          <View style={styles.emailContainer}>
            <TextField
              placeholder={'Email'}
              ref={emailRef}
              label={'Email(Optional)'}
              onChangeText={val => {
                updateState({email: val});
              }}
              value={email}
              returnKeyType="next"
              blurOnSubmit={false}
              onSubmitEditing={() => postCodeRef.current?.focus()}
            />
          </View>

          <View style={styles.dropdownContainer}>
            <SmallText text={'City'} style={styles.label} />
            <MyDropdown
              data={items}
              value={selectedValue}
              onChange={item => setSelectedValue(item.value)}
              placeholder="Select Status"
            />
          </View>

          <View style={styles.inputContainer}>
            <TextField
              ref={postCodeRef}
              placeholder={'Postal Code'}
              label={'Postal Code'}
              onChangeText={val => {
                updateState({email: val});
              }}
              value={email}
              returnKeyType="next"
              blurOnSubmit={false}
              onSubmitEditing={() => addressRef.current?.focus()}
            />
          </View>

          <TextField
            ref={emailRef}
            placeholder={'Address'}
            label={'Address'}
            multiline={true}
            onChangeText={val => {
              updateState({email: val});
            }}
            value={email}
            returnKeyType="done"
            blurOnSubmit={true}
            style={styles.addressInput}
            inputStyle={{minHeight: 80}}
          />
        </KeyboardAwareScrollView>
        <AppButton
          onPress={updateProfile}
          title={'Update Profile'}
          style={styles.button}
        />
      </View>

      <ModalComponent ref={modalRef} onClose={closeModal}>
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
