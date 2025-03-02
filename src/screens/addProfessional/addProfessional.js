import React, {useReducer, useRef} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styles from './addProfessional.style';
import Header from '../../components/appHeader';

import ImageSelector from '../../assets/svgs/image-selector.svg';
import {SmallText} from '../../components/Typography';
import TextField from '../../components/textField/textField';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import FastImage from 'react-native-fast-image';
import { AppButton } from '../../components/appButton';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import ModalComponent from '../../components/modal';
import MediaPicker from '../../components/modal/mediaPicker';
import { captureImageWithCamera, pickImageFromLibrary } from '../../functions';
import AnaqaProfessionalHeader from '../../components/anaqaProfessionalHeader';


const AddProfessional = ({navigation, route}) => {
  const emailRef = useRef();
  const phoneRef = useRef();
  const nameRef = useRef();
  const modalRef = useRef(null);

  const experienceRef = useRef();
  const specialtyRef = useRef();

  const [state, updateState] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
      name: '',
      email: '',
      phone: '',
      specialty: '',
      experience: '',
      profile:null,
    },
  );
  const {name, email, phone, specialty, experience , profile} = state;

  const openModal = () => {
    if (modalRef?.current) {
      modalRef.current.open();
    }
  };

  const closeModal = () => {
    if (modalRef?.current) {
      modalRef.current.close();
    }
  };

  const handleImagePicked = image => {
    closeModal();
    updateState({ profile: image.uri });
  };


  return (
    <SafeAreaView style={styles.wrapper}>
      <Header
        title={'Add Professional'}
        showBackButton
        onBackPress={() => navigation.goBack()}
      />
      <KeyboardAwareScrollView style={styles.container}>
        <View style={styles.contentContainer}>
          <AnaqaProfessionalHeader/>
          <View style={styles.inputConainer}>
            <TextField
              label={'Name'}
              ref={nameRef}
              value={name}
              placeholder={'Your review here'}
              returnKeyType="next"
              onSubmitEditing={() => emailRef.current.focus()}
              blurOnSubmit={false}
              inputStyle={styles.inputStyle}
              onChangeText={val => updateState({name: val})}
            />

            <TextField
              label={'Email (Optional)'}
              ref={emailRef}
              value={email}
              placeholder={'Type your Email'}
              returnKeyType="next"
              onSubmitEditing={() => phoneRef.current.focus()}
              blurOnSubmit={false}
              inputStyle={styles.inputStyle}
              onChangeText={val => updateState({email: val})}
            />

            <TextField
              label={'Phone Number'}
              ref={phoneRef}
              value={phone}
              placeholder={'Phone Number'}
              returnKeyType="next"
              onSubmitEditing={() => specialtyRef.current.focus()}
              blurOnSubmit={false}
              inputStyle={styles.inputStyle}
              onChangeText={val => updateState({phone: val})}
            />

            <TextField
              label={'Specialty'}
              ref={specialtyRef}
              value={specialty}
              placeholder={'Specialty'}
              returnKeyType="next"
              onSubmitEditing={() => experienceRef.current.focus()}
              blurOnSubmit={false}
              inputStyle={styles.inputStyle}
              onChangeText={val => updateState({specialty: val})}
            />

            <TextField
              label={'Experience'}
              ref={experienceRef}
              value={experience}
              placeholder={'Experience'}
              returnKeyType="done"
              blurOnSubmit={true}
              inputStyle={styles.inputStyle}
              onChangeText={val => updateState({experience: val})}
            />
          </View>

         <View style={styles.actionView}>

        {profile ?
            <View style={styles.imageContainer}>
            <FastImage
             source={{uri:profile}}
             style={styles.image}
            />
            </View>
            :
            <View style={styles.emptyImageContainer}>
                <ImageSelector/>
            </View>
        }
        <View style={styles.actionContainer}>
             <SmallText text={'User Profile'} style={styles.uploadText}/>
             <AppButton title={'Upload Picture'} style={{width:widthPercentageToDP(40)}}  onPress={openModal} />
        </View>
         </View>

        </View>
      </KeyboardAwareScrollView>
      <AppButton title={'Next'} style={styles.button} onPress={() => navigation.navigate('professionalSchedule')} />

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

export default AddProfessional;
