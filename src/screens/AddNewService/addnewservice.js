import React, {useEffect, useRef, useState} from 'react';
import {SafeAreaView, Text, View, FlatList, Pressable} from 'react-native';
import Toast from 'react-native-simple-toast';
import styles from './addNewService.style';
import Header from '../../components/appHeader';
import MyDropdown from '../../components/dropdown/dropdown';
import {MediumText, SmallText} from '../../components/Typography';
import {AppButton} from '../../components/appButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import SubServiceCard from '../../components/subServiceCard';
import ModalComponent from '../../components/modal';
import ServiceAddedModal from '../../components/modal/serviceAddedModal';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import TextField from '../../components/textField/textField';
import {useDispatch, useSelector} from 'react-redux';
import {addService, fetchAllServices} from '../../redux/actions/servicesAction';
import { validateAndBuildServiceObject } from '../../functions';



const AddNewServiceScreen = ({navigation, route}) => {
  let subservice = [
    {id: 1, name: 'Long Hair cut', price: 'Sar 100', duration: '30 mins'},
    {id: 2, name: 'Short Hair cut', price: 'Sar 150', duration: '45 mins'},
  ];

  const modalRef = useRef();
  const [selectedValue, setSelectedValue] = useState(null);
  const [subServicesData, setSubServicesData] = useState(subservice);
  const [price, setPrice] = useState('');
  const [duration, setDuration] = useState('');
  const limit = 10;

  const dispatch = useDispatch();
  const {salonServices, allServicesPagination: pagination, serviceLoading, error , inProgress} = useSelector(state => state.services);
  const {user} = useSelector((state)=>state.auth)
  const salonId = user?.id

  useEffect(() => {
    const loadAllServices = async () => {
      const response = await dispatch(fetchAllServices({page: 1, limit})).unwrap();
    };
    loadAllServices();
  }, [dispatch]);


  const loadMoreServices = () => {
    if (!serviceLoading && pagination.page < pagination.totalPages) {
      dispatch(fetchAllServices({page: pagination.page + 1, limit})).unwrap();
    }
  };

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

  const handleCloseModal=()=>{
    navigation.goBack();
    closeModal();
  }

  const addSubService = () => {
    const newId = Date.now();
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

  const handleAddServices= async ()=>{

    const { errors, data } = validateAndBuildServiceObject({
      salonId,
      serviceId:selectedValue,
      price,
      duration,
      subServicesData,
    });
    if(errors?.length > 0 ){
      Toast.showWithGravity(
        'some values are missing or invalid',
        Toast.LONG,
        Toast.CENTER,
      );
    }else{
     const response = await dispatch(addService(data)).unwrap();
     if(response?.success){
        openModal()
     }
     console.log('response',response)
    }
  }

  const renderItem = ({item, index}) => {
    return (
      <SubServiceCard
        item={item}
        handleInputChange={handleInputChange}
        removeSubService={removeSubService}
        isNewService={true}
        currentIndex={index + 1}
      />
    );
  };

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
        enableResetScrollToCoords={false} // Prevent auto-scrolling down on keyboard hide
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}
        style={styles.mainContainer}>
        <View style={styles.wrapper}>
          <MediumText text={'Add New Service'} style={styles.headingText} />
          <View style={styles.subContainer}>
            <SmallText text={'Select Service'} style={styles.label} />
            <MyDropdown
              data={salonServices}
              value={selectedValue}
              onChange={item => setSelectedValue(item.value)}
              handleLoadMore={loadMoreServices}
              placeholder="Select Service"
              style={styles.dropDownStyle}
            />
          </View>
          <View>
            {subServicesData?.length === 0 && (
              <View style={styles.row}>
                <View style={styles.column}>
                  <SmallText text={'Price'} style={styles.label2} />
                  <TextField
                    style={styles.input2}
                    value={price}
                    keyboardType="numeric"
                    onChangeText={text => setPrice(text)}
                  />
                </View>
                <View style={styles.column}>
                  <SmallText
                    text={'Estimated Duration'}
                    style={styles.label2}
                  />
                  <TextField
                    style={styles.input2}
                    value={duration}
                    keyboardType="numeric"
                    onChangeText={text => setDuration(text)}
                  />
                </View>
              </View>
            )}

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
      <AppButton
      onPress={handleAddServices}
        // onPress={() => openModal()}
        title="Save"
        style={styles.buttonStyle}
        isLoading={inProgress}
      />

      <ModalComponent
        ref={modalRef}
        onClose={closeModal}
        style={{width: widthPercentageToDP(80)}}>
        <ServiceAddedModal onPress={handleCloseModal} />
      </ModalComponent>
    </SafeAreaView>
  );
};
export default AddNewServiceScreen;
