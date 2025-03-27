import React, {useState, useRef} from 'react';
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
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const SubServiceList = ({navigation, route}) => {

  const [expandedSubServices, setExpandedSubServices] = useState([]);

let subService =[
  {id: 1, name: 'Long Hair cut', price: 'Sar 100', duration: '30 mins'},
  {id: 2, name: 'Short Hair cut', price: 'Sar 150', duration: '45 mins'},
]

  const [subServicesData, setSubServicesData] = useState(subService);

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

  const doneHandler = () => {
    hideBottomSheet();
    navigation.navigate('assignSubServiceListScreen');
  };
  const refRBSheet = useRef();
  const openBottomSheet = () => {
    if (refRBSheet.current) {
      refRBSheet.current.present();
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

        { isExpanded &&
            <SubServiceCard
            item={item}
            handleInputChange={handleInputChange}
            openBottomSheet={openBottomSheet}
            />
        }
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={'Hair Cut'}
        showBackButton
        onBackPress={() => navigation.goBack()}
      />
      <KeyboardAwareScrollView style={styles.mainContainer}>
        <View style={styles.wrapper}>
          <View style={styles.DeleteView}>
            <MediumText text={'Hair Cut'} />

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
            onPress={() => {}}
            title="Save"
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
          onCancel={cancelHandler}
          onDone={doneHandler}
          //   onClear={clearFilter}
        />
      </BottomSheet>
    </SafeAreaView>
  );
};
export default SubServiceList;
