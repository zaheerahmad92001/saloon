import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Pressable,
} from 'react-native';

import Downarrow from '../../assets/svgs/down-arrow-light-black.svg';
import UpArrow from '../../assets/svgs/up-arrow.svg';
import styles from './subServiceList.style';
import Header from '../../components/appHeader';
import {AppButton} from '../../components/appButton';
import {BottomSheet} from '../../components/bottomSheet';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import AssignProfessionalsModel from '../../components/modal/assignProfessional/assignProfessionalBottomSheet';
import {MediumText, SmallText} from '../../components/Typography';
import SubServiceCard from '../../components/subServiceCard';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {convertServiceObjectToFormValues} from '../../functions';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProfessionalBySalonId} from '../../redux/actions/professionalsAction';
import {assignProfessionals} from '../../redux/actions/servicesAction';

// let subService =[
//   {id: 1, name: 'Long Hair cut', price: 'Sar 100', duration: '30 mins'},
//   {id: 2, name: 'Short Hair cut', price: 'Sar 150', duration: '45 mins'},
// ]

const SubServiceList = ({navigation, route}) => {
  const {item} = route?.params || {};
  const serviceId = item?.id;
  const refRBSheet = useRef();

  const [expandedSubServices, setExpandedSubServices] = useState([]);
  const [subServiceId, setSubServiceId] = useState(null);
  const [subServiceData, setSubServiceData] = useState([]);
  const [selectedProfessionalIds, setSelectedProfessionalIds] = useState([]);
  const formValues = convertServiceObjectToFormValues(item);
  let subService = formValues?.subServicesData;

  const dispatch = useDispatch();
  const [subServicesData, setSubServicesData] = useState(subService);
  const {salonProfessionals, salon_Professional_Pagination } = useSelector(state => state.professionals);
  const {inProgress } = useSelector(state => state.services);
  const {user} = useSelector(state => state.auth);
  const salonId = user?.id;
  const limit = 10;

  useEffect(() => {
    const fetchSalonProfessionals = async () => {
      const response = await dispatch(
        fetchProfessionalBySalonId({salonId, page: 1, limit}),
      ).unwrap();
      console.log('response for fetchProfessionalBySalonId', response);
    };

    fetchSalonProfessionals();
  }, [dispatch, salonId]);

  const handleInputChange = (id, field, value) => {
    setSubServicesData(prevState =>
      prevState.map(service =>
        service.id === id ? {...service, [field]: value} : service,
      ),
    );
  };

  const cancelHandler = () => {
    hideBottomSheet();
  };

  const doneHandler = selectedId => {
    
    // pushing data into array w.r.t subserviceId
    const newEntry = {
      professionalIds: selectedId,
      subServiceId: subServiceId,
    };
    setSubServiceData(prev => {
      const filtered = prev.filter(
        entry => entry.subServiceId !== subServiceId,
      );
      return [...filtered, newEntry];
    });

    hideBottomSheet();
    // navigation.navigate('assignSubServiceListScreen');
  };

  const openBottomSheet = item => {
    if (refRBSheet.current) {
      refRBSheet.current.present();
      setSubServiceId(item.id);

      // getting professionals id to show pre-selected professionals in bottomsheet
      const existing = subServiceData.find(
        entry => entry.subServiceId === item.id,
      );
      if (existing) {
        setSelectedProfessionalIds(existing.professionalIds);
      } else {
        setSelectedProfessionalIds([]);
      }
    }
  };

  const hideBottomSheet = () => {
    if (refRBSheet.current) {
      refRBSheet.current.dismiss();
    }
  };

  const toggleExpand = id => {
    setExpandedSubServices(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id],
    );
  };

  const handleSavePress = async () => {
    const subServiceList = subServiceData.filter(
      item =>
        Array.isArray(item.professionalIds) && item.professionalIds.length > 0,
    );

    // let payload = {
    //   subServiceData:subServiceList,
    //   serviceId,
    //   status:'subservice',
    // }

    const response = await dispatch(assignProfessionals({subServiceList, serviceId, status: 'subservice'})).unwrap();
    if (response?.success) {
      navigation.goBack();
    }
  };

  const renderItem = ({item, index}) => {
    const isExpanded = expandedSubServices.includes(item.id);
    return (
      <View
        style={[
          styles.subServiceContainer,
          !isExpanded && styles.collapsedSubServiceContainer,
        ]}>
        <TouchableOpacity
          style={styles.subServiceHeader}
          onPress={() => toggleExpand(item.id)}>
          <SmallText text={`Sub Service ${item.id}`} />
          {isExpanded ? <Downarrow /> : <UpArrow />}
        </TouchableOpacity>

        {isExpanded && (
          <SubServiceCard
            item={item}
            handleInputChange={handleInputChange}
            openBottomSheet={() => openBottomSheet(item)}
          />
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={formValues?.service?.name ?? ''}
        showBackButton
        onBackPress={() => navigation.goBack()}
      />
      <KeyboardAwareScrollView style={styles.mainContainer}>
        <View style={styles.wrapper}>
          <View style={styles.DeleteView}>
            <MediumText text={formValues?.service?.name ?? ''} />

            <Pressable onPress={() => {}}>
              <SmallText text={'Delete'} style={styles.DeleteText} />
            </Pressable>
          </View>

          {/* Sub Services List */}
          <FlatList
            data={subServicesData} // Use the state
            keyExtractor={item => item.id.toString()}
            renderItem={renderItem}
            scrollEnabled={false}
          />
        </View>
      </KeyboardAwareScrollView>
      <AppButton
        onPress={handleSavePress}
        title="Save"
        isLoading={inProgress}
        style={styles.buttonStyle}
      />

      <BottomSheet
        refRBSheet={refRBSheet}
        onClose={() => hideBottomSheet()}
        scrollEnabled={false}
        disableDynamicSizing={true}
        removeSheetScrolllView={true}
        height={hp(80)}
        style={styles.bottomSheetColor}
        sheetModalStyle={styles.bottomSheetColor}>
        <AssignProfessionalsModel
          data={salonProfessionals}
          selectedIdsProp={selectedProfessionalIds}
          onCancel={cancelHandler}
          onDone={doneHandler}
          //   onClear={clearFilter}
        />
      </BottomSheet>
    </SafeAreaView>
  );
};
export default SubServiceList;
