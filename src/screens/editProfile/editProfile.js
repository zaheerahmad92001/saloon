/* eslint-disable react-native/no-inline-styles */
import {View, TouchableOpacity, SafeAreaView} from 'react-native';
import React, {useRef, useReducer, useState, useEffect} from 'react';
import Toast from 'react-native-simple-toast';

import TextField from '../../components/textField/textField';
import images from '../../assets/images';
import Header from '../../components/appHeader';
import styles from './editProfle.styles';
import FastImage from 'react-native-fast-image';
import Camera from '../../assets/svgs/camera.svg';
import ModalComponent from '../../components/modal';
import MediaPicker from '../../components/modal/mediaPicker';
import {
  captureImageWithCamera,
  pickImageFromLibrary,
  signUpFormValide,
} from '../../functions';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {AppButton} from '../../components/appButton';
import PhoneInput from 'react-native-phone-number-input';
import {SmallText} from '../../components/Typography';
import colors from '../../assets/colors';
import fontsFamily from '../../assets/fontsFamily';
import {RFValue} from 'react-native-responsive-fontsize';
import DownArrow from '../../assets/svgs/downarrow.svg';
import MyDropdown from '../../components/dropdown/dropdown';
import {useDispatch, useSelector} from 'react-redux';

import {getSalon, updateSalonProfile} from '../../redux/actions/profileAction';
import {imageBaseUrl, saudiArabiaCities} from '../../staticData';



const EditProfile = ({navigation, route}) => {
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.auth);
  const {loading} = useSelector((state)=>state.profile)

  const salonId = user?.id;

  const emailRef = useRef(null);
  const ownerRef = useRef(null);
  const postCodeRef = useRef(null);
  const modalRef = useRef();
  const phoneInput = useRef(null);
  const addressRef = useRef(null);

  const [selectedValue, setSelectedValue] = useState(null);
  const [state, updateState] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
      profileImage: null,
      salonName: user?.name,
      ownerName: user?.userName,
      email: user?.email,
      address: user?.address,
      postCode: user?.postalCode,
      phoneNumber: user?.phoneNumber,
      formattedValue: user?.phoneNumber,
      countryCode: '',
    },
  );
  const {
    profileImage,
    salonName,
    ownerName,
    email,
    address,
    postCode,
    phoneNumber,
    formattedValue,
    countryCode,
  } = state;


  const [errors, setErrors] = useState({
    phoneNumber: '',
    ownerName: '',
    address: '',
    salonName: '',
  });

  useEffect(() => {
    const fetchSalonProfileById = async () => {
      const response = await dispatch(getSalon(user?.id));
      console.log('get salon',response)
    };
    fetchSalonProfileById();
  }, [dispatch, user?.id]);

  const handleImagePicked = image => {
    closeModal();
    updateState({profileImage: image});
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
    const {valid, errors} = signUpFormValide(
      phoneNumber,
      phoneInput,
      salonName,
      ownerName,
      address,
      email,
    );

    setErrors(errors);
    if (!valid) {
      Toast.showWithGravity(
        'Please fill the required field and agree with terms and condition ',
        Toast.LONG,
        Toast.BOTTOM,
      );
      return;
    }

    let requestData = {
      profileImage,
      address,
      salonName,
      ownerName,
      email,
      postCode,
      phoneNumber,
      formattedValue,
      selectedValue,
      existingImage: user?.file?.id,
      salonId,
    };
    const response = await dispatch(updateSalonProfile({data: requestData}));
    console.log('response',response)
    if(response?.payload?.success){
      navigation.goBack();
    }
  };

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
                  source={
                    profileImage?.uri
                      ? {uri: profileImage.uri}
                      : user?.file?.url
                      ? {uri: `${imageBaseUrl}${user?.file?.url}`}
                      : images.room
                  }
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
                let errorList = errors;
                errorList.salonName = '';
                setErrors(errorList);
              }}
              value={salonName}
              error={errors.salonName}
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
                let errorList = errors;
                errorList.ownerName = '';
                setErrors(errorList);
              }}
              value={ownerName}
              error={errors.ownerName}
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
              let errorList = errors;
              errorList.phoneNumber = '';
              setErrors(errorList);
            }}
            onChangeFormattedText={text => updateState({formattedValue: text})}
            onChangeCountry={country =>{
              // console.log('console', country);
              updateState({countryCode: country.callingCode})
            }
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

          {errors.phoneNumber && (
            <SmallText
              text={errors.phoneNumber}
              style={{color: colors.error}}
            />
          )}

          <View style={styles.emailContainer}>
            <TextField
              placeholder={'Email'}
              ref={emailRef}
              label={'Email(Optional)'}
              onChangeText={val => {
                updateState({email: val});
                let errorList = errors;
                errorList.email = '';
                setErrors(errorList);
              }}
              value={email}
              error={errors.email}
              returnKeyType="next"
              blurOnSubmit={false}
              onSubmitEditing={() => postCodeRef.current?.focus()}
            />
          </View>

          <View style={styles.dropdownContainer}>
            <SmallText text={'City'} style={styles.label} />
            <MyDropdown
              data={saudiArabiaCities}
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
                updateState({postCode: val});
              }}
              value={postCode}
              returnKeyType="next"
              blurOnSubmit={false}
              onSubmitEditing={() => addressRef.current?.focus()}
            />
          </View>

          <TextField
            ref={addressRef}
            placeholder={'Address'}
            label={'Address'}
            multiline={true}
            onChangeText={val => {
              updateState({address: val});
              let errorList = errors;
              errorList.address = '';
              setErrors(errorList);
            }}
            value={address}
            error={errors.address}
            returnKeyType="done"
            blurOnSubmit={true}
            style={styles.addressInput}
            inputStyle={styles.addressInput}
          />
          <View style={styles.emptyView}></View>
        </KeyboardAwareScrollView>
        <AppButton
          onPress={updateProfile}
          title={'Update Profile'}
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

export default EditProfile;
