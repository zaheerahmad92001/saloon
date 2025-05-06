/* eslint-disable react-native/no-inline-styles */
import {View, TouchableOpacity, SafeAreaView} from 'react-native';
import React, {useRef, useReducer, useEffect} from 'react';
import Toast from 'react-native-simple-toast';
import TextField from '../../components/textField/textField';
import images from '../../assets/images';
import Header from '../../components/appHeader';
import styles from './editSingleProfessionalProfile.styles';
import FastImage from 'react-native-fast-image';
import Camera from '../../assets/svgs/camera.svg';
import ModalComponent from '../../components/modal';
import MediaPicker from '../../components/modal/mediaPicker';
import {
  captureImageWithCamera,
  pickImageFromLibrary,
  professionalFormValidate,
} from '../../functions';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {AppButton} from '../../components/appButton';
import PhoneInput from 'react-native-phone-number-input';
import {SmallText} from '../../components/Typography';
import colors from '../../assets/colors';
import fontsFamily from '../../assets/fontsFamily';
import {RFValue} from 'react-native-responsive-fontsize';
import DownArrow from '../../assets/svgs/downarrow.svg';
import {useDispatch, useSelector} from 'react-redux';
import {
  singleProfessionalProfile,
  updateSingleProfessionalProfile,
} from '../../redux/actions/professionalsAction';
import {imageBaseUrl} from '../../staticData';

const EditSingleProfessionalProfile = ({navigation, route}) => {
  const {item} = route?.params ?? {};
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.auth);
  const {loading} = useSelector(state => state.professionals);

  const emailRef = useRef(null);
  const professionalRef = useRef(null);
  const specialtyRef = useRef(null);
  const modalRef = useRef();
  const phoneInput = useRef(null);
  const experienceRef = useRef(null);

  const [state, updateState] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
      isVisible: false,
      profileImage: null,
      name: item?.name ?? '',
      email: item?.email ?? '',
      phoneNumber: item?.phoneNumber ?? '',
      formattedValue: item?.phoneNumber ?? '',
      speciality: item?.speciality,
      experience: item?.experience ?? '',
      singleProfessional: {},
    },
  );
  const {
    isVisible,
    profileImage,
    name,
    email,
    phoneNumber,
    formattedValue,
    speciality,
    experience,
    singleProfessional,
  } = state;

  useEffect(() => {
    const fetchSingleProfessional = async () => {
      let professionalId = item?.id ?? '';
      const response = await dispatch(
        singleProfessionalProfile(professionalId),
      ).unwrap();
      updateState({singleProfessional: response});
    };
    fetchSingleProfessional();
  }, [dispatch, item?.id]);

  const handleImagePicked = image => {
    closeModal();
    updateState({isVisible: false, profileImage: image});
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

  const updateProfile = async () => {
    const {valid, errors} = professionalFormValidate(
      name,
      email,
      formattedValue,
      speciality,
      experience,
      profileImage,
    );
    const data = {
      name,
      formattedValue,
      email,
      experience,
      salonId: user?.id,
      professionalId: item?.id,
      profileImage,
      existingImage:singleProfessional?.file?.url,
      speciality,
    };
    if (!valid) {
      Toast.showWithGravity(
        'Please fill the required field and try again ',
        Toast.LONG,
        Toast.BOTTOM,
      );
      return;
    }
    const response = await dispatch(updateSingleProfessionalProfile(data)).unwrap();
    console.log('here is response edit single professional', response);
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <Header
        title={'Edit Professional'}
        showBackButton={true}
        onBackPress={handleNavigation}
      />
      {/* {console.log('file',`${imageBaseUrl}${singleProfessional?.file?.url}`)} */}
      <View style={styles.container}>
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.profileImageContainer}>
            <View style={styles.innerProfileImageContainer}>
              <View style={styles.ImageContainer}>
                <FastImage
                  source={
                    profileImage?.uri
                      ? {uri: profileImage.uri}
                    : singleProfessional?.file?.url
                      ? {uri: `${imageBaseUrl}${singleProfessional?.file?.url}`} 
                      : images.room
                  }
                  style={styles.profileImage}
                  // resizeMode={FastImage.resizeMode.contain} // optional: uncomment if needed
                />
                {/* <FastImage
                  source={
                    singleProfessional && singleProfessional?.file?.url ?
                    {uri:`${imageBaseUrl}${singleProfessional?.file?.url}`}
                    :
                    profileImage ? { uri: profileImage.uri } : images.room}
                  // resizeMode={FastImage.resizeMode.contain}
                  style={styles.profileImage}
                /> */}
              </View>
              <TouchableOpacity onPress={openModal} style={styles.editIcon}>
                <Camera />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.inputContainer}>
            <TextField
              ref={professionalRef}
              placeholder={'Professional Name'}
              label={'Professional Name'}
              onChangeText={val => {
                updateState({name: val});
              }}
              value={name}
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
              ref={emailRef}
              placeholder={'Email'}
              label={'Email(Optional)'}
              onChangeText={val => {
                updateState({email: val});
              }}
              value={email}
              returnKeyType="next"
              blurOnSubmit={false}
              onSubmitEditing={() => specialtyRef.current?.focus()}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextField
              ref={specialtyRef}
              placeholder={'Specialty'}
              label={'Specialty'}
              onChangeText={val => {
                updateState({speciality: val});
              }}
              value={speciality}
              returnKeyType="next"
              blurOnSubmit={false}
              onSubmitEditing={() => experienceRef.current?.focus()}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextField
              ref={experienceRef}
              placeholder={'Experience'}
              label={'Experience'}
              onChangeText={val => {
                updateState({experience: val});
              }}
              value={experience}
              returnKeyType="done"
              blurOnSubmit={true}
              // onSubmitEditing={() => addressRef.current?.focus()}
            />
          </View>
        </KeyboardAwareScrollView>
        <AppButton
          onPress={updateProfile}
          title={'Update Professional'}
          isLoading={loading}
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

export default EditSingleProfessionalProfile;
