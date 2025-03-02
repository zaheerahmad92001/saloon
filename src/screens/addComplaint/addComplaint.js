import React, {useReducer, useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/appHeader';
import styles from './styles';
import {View, Text, ScrollView,} from 'react-native';
import DropdownComponent from '../../components/dropdown/dropdown';
import {AppButton} from '../../components/appButton';
import {LargeText} from '../../components/Typography';
import TextField from '../../components/textField/textField';
import UploadImageComponent from '../../components/UploadImage/UploadImage';
import ModalComponent from '../../components/modal';
import MediaPicker from '../../components/modal/mediaPicker';
import { captureImageWithCamera, pickImageFromLibrary } from '../../functions';


const AddComplaint = ({navigation, route}) => {

  const modalRef = useRef(null);

   const [state, updateState] = useReducer(
      (state, newState) => ({ ...state, ...newState }),
      {
        isVisible: false,
        selectedFile: null,
        selectedValue
      },
    );
    const {isVisible , selectedFile , selectedValue} = state

  const Items = [
    {label: 'Option A', value: '1'},
    {label: 'Option B', value: '2'},
    {label: 'Option C', value: '3'},
    {label: 'Option D', value: '4'},
    {label: 'Option E', value: '5'},
  ];

  const [comments, setComments] = useState('');

  const addrequest = () => {};

  const handleImagePicked = image => {
    updateState({ isVisible: false, selectedFile: image });
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

  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Add Complaint'} showBackButton onBackPress={()=>navigation.goBack()} />

      <View style={styles.mainContainer}>
        <ScrollView>
          <LargeText text={'Add New Complaint'} style={styles.headingtext} />
          <View style={styles.subContainer}>
            <Text style={styles.label}>Select Issue</Text>
            <DropdownComponent
              data={Items}
              value={selectedValue}
              onChange={item => updateState({selectedValue :item.value})}
              placeholder="Choose an option"
            />
          </View>

          <View style={styles.subContainer}>
            <Text style={styles.label}>Description</Text>
            <TextField
              placeholder={'Your review here'}
              multiline
              inputStyle={styles.inputStyle}
              onChangeText={setComments}
            />
          </View>
          <View style={styles.imageContainer}>
           <UploadImageComponent selectedFile={selectedFile} handleOnPress={openModal}/>
          </View>
        </ScrollView>
        <AppButton title={'Submit'} onPress={addrequest}/>
      </View>

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
export default AddComplaint;
