import {View, TouchableOpacity, SafeAreaView} from 'react-native';
import React, {useRef, useReducer} from 'react';
import TextField from '../../../components/textField/textField';
import images from '../../../assets/images';
import Header from '../../../components/appHeader';
import styles from './editProfle.styles';
import FastImage from 'react-native-fast-image';
import Camera from '../../../assets/svgs/camera.svg';
import ModalComponent from '../../../components/modal';
import MediaPicker from '../../../components/modal/mediaPicker';
import {captureImageWithCamera, pickImageFromLibrary} from '../../../functions';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {AppButton} from '../../../components/appButton';

const EditProfile = ({navigation, route}) => {
  const fNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const dobRef = useRef(null);
  const modalRef = useRef()

  const [state, updateState] = useReducer(
    (state, newState) => ({...state, ...newState}),
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
  const {isVisible, profileImage, fname, lname, email, phone, dob} = state;

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
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
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
          <View
            style={[styles.inputContainer, {flexDirection: 'row', gap: 10}]}>
            <View style={styles.inputHalf}>
              <TextField
                ref={fNameRef}
                label={'First name'}
                onChangeText={val => {
                  updateState({fname: val});
                }}
                value={fname}
                returnKeyType="next"
                blurOnSubmit={false}
                onSubmitEditing={() => lastNameRef.current?.focus()}
              />
            </View>

            <View style={styles.inputHalf}>
              <TextField
                ref={lastNameRef}
                label={'Last name'}
                onChangeText={val => {
                  updateState({lname: val});
                }}
                value={lname}
                returnKeyType="next"
                blurOnSubmit={false}
                onSubmitEditing={() => emailRef.current?.focus()}
              />
            </View>
          </View>
          <View style={styles.inputContainer}>
            <TextField
              ref={emailRef}
              label={'Email'}
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
              ref={phoneRef}
              label={'Phone number'}
              onChangeText={val => {
                updateState({phone: val});
              }}
              value={phone}
              returnKeyType="next"
              blurOnSubmit={false}
              onSubmitEditing={() => dobRef.current?.focus()}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextField
              ref={dobRef}
              label={'Date of birth'}
              onChangeText={val => {
                updateState({dob: val});
              }}
              value={dob}
              returnKeyType="done"
              blurOnSubmit={false}
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
