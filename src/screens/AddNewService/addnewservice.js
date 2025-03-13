import React, {useRef, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  Pressable,
} from 'react-native';
import styles from './addnewservice.style';//'./addNewService.style';
import Header from '../../components/appHeader';
import MyDropdown from '../../components/dropdown/dropdown';
import {MediumText, SmallText} from '../../components/Typography';
import {AppButton} from '../../components/appButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import SubServiceCard from '../../components/subServiceCard';
import ModalComponent from '../../components/modal';
import ServiceAddedModal from '../../components/modal/serviceAddedModal';
import { widthPercentageToDP } from 'react-native-responsive-screen';

const items = [
    {label: 'Option A', value: '1'},
    {label: 'Option B', value: '2'},
    {label: 'Option C', value: '3'},
    {label: 'Option D', value: '4'},
    {label: 'Option E', value: '5'},
  ];


const AddNewServiceScreen = ({navigation, route}) => {
  const modalRef = useRef();

   let subservice = [
        {id: 1, name: 'Long Hair cut', price: 'Sar 100', duration: '30 mins'},
        {id: 2, name: 'Short Hair cut', price: 'Sar 150', duration: '45 mins'},
      ]

  const [selectedValue, setSelectedValue] = useState(null);
    const [subServicesData, setSubServicesData] = useState(subservice);

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

  const addSubService = () => {
    const newId =  Date.now()
    setSubServicesData([
      ...subServicesData,
      {id: newId, name: '', price: '', duration: ''},
    ]);
  };

  const removeSubService = id => {
    setSubServicesData(subServicesData.filter(service => service.id !== id));
  };

//   will remove empty input while submiting data to server

//   const handleInputChange = (id, field, value) => {
//     setSubServicesData(prevState => {
//       return prevState
//         .map(service => service.id === id ? { ...service, [field]: value } : service)
//         .filter(service => !(service.name === '' && service.price === '' && service.duration === ''));  // Remove empty services
//     });
//   };

  const handleInputChange = (id, field, value) => {
    setSubServicesData(prevState =>
      prevState.map(service =>
        service.id === id ? {...service, [field]: value} : service,
      ),
    );
  };

  const renderItem=({item , index})=>{
    return(
        <SubServiceCard
            item={item}
            handleInputChange={handleInputChange}
            removeSubService={removeSubService}
            isNewService={true}
            currentIndex = {index+1}
            
            />
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={'Add New Service'}
        showBackButton
        onBackPress={() => navigation.goBack()}
      />

      <KeyboardAwareScrollView  
    //    extraScrollHeight={Platform.OS === 'ios' ? 50 : 0}  // Adjust scroll height
       enableOnAndroid={true}
       enableResetScrollToCoords={false}  // Prevent auto-scrolling down on keyboard hide
       keyboardShouldPersistTaps="handled"
       showsVerticalScrollIndicator={false}
       contentContainerStyle={{ flexGrow: 1 }}
      style={styles.mainContainer}>
        <View style={styles.wrapper}>
          <MediumText text={'Add New Service'} style={styles.headingText} />
          <View style={styles.subContainer}>
            <SmallText text={'Select Service'} style={styles.label} />
            <MyDropdown
              data={items}
              value={selectedValue}
              onChange={item => setSelectedValue(item.value)}
              placeholder="Select Service"
              style={styles.dropDownStyle}
            />
          </View>
          <View>
            <FlatList
              data={subServicesData}
              scrollEnabled={false}
              keyExtractor={item => item.id.toString()}
              renderItem={renderItem}
            />

            <Pressable style={styles.addMoreButton} onPress={addSubService}>
              <Text style={styles.addMoreText}>Add More</Text>
            </Pressable>
          </View>
      </View>
        </KeyboardAwareScrollView>
      <AppButton onPress={() =>openModal()} title="Save" style={styles.buttonStyle} />

      <ModalComponent
        ref={modalRef}
        onClose={closeModal}
        style={{width: widthPercentageToDP(80)}}>
         <ServiceAddedModal onPress={closeModal}/>
      </ModalComponent>
    </SafeAreaView>
  );
};
export default AddNewServiceScreen;
