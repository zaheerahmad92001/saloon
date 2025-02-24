import { FlatList, SafeAreaView, StyleSheet, View, Pressable, Text } from 'react-native';
import React, { useCallback, useReducer, useRef, useState } from 'react';
import BookingHistoryCard from '../../components/bookingHistoryCard/bookingHistoryCard';
import images from '../../assets/images';
import Header from '../../components/appHeader';
import colors from '../../assets/colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP } from 'react-native-responsive-screen';
import CancelBooking from '../../components/modal/cancelBooking';
import { BottomSheet } from '../../components/bottomSheet';
import { bookingStatus } from '../../staticData';
import Filter from '../../assets/svgs/filter-search.svg';
import { RFValue } from 'react-native-responsive-fontsize';
import FilterScreen from '../../components/modal/filterScreen';
import ModalComponent from '../../components/modal/index';
import { MediumText } from '../../components/Typography';
import fontsFamily from '../../assets/fontsFamily';
import BookingFilter from '../../components/bookingFilter/BookingFilter';
import ChangeProfessional from '../../components/modal/changeProfessional';
import ChangeProfessionalBottomSheet from '../../components/modal/ChangeProfessionalBottomSheet';
const BookingHistory = ({ navigation, route }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const refRBSheet = useRef();
  const refRBSheetFilter = useRef();
  const refRBSheetChangeProfessional = useRef();
  const modalRef = useRef();

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


  const [state, updateState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      selectedItem: null,
    },
  );
  const { selectedItem } = state;

  const cancelBooking = useCallback(() => {
    hideBottomSheet()
    setTimeout(() => {
      navigation.navigate('successScreen', { actionName: 'cancel' })
    }, 200);
  }, [navigation])


  const ApplyFilter = (item) => {
    // based on status will navigate to Book again or leave review screen 
    //navigation.navigate('review')
  };

  const clearFilter = (item) => {
    hideBottomSheetFilter();
    // based on status will navigate to Book again or leave review screen 
    //navigation.navigate('review')
  };

  const cancelFilter = useCallback(() => {
    hideBottomSheetFilter();
    setTimeout(() => {
      //navigation.navigate('successScreen',{actionName:'cancel'})
    }, 200);
  }, [navigation])


  const handleReschedule = (item) => {
     navigation.navigate('orderDetail')
  };

  const openBottomSheet = useCallback((item) => {
    updateState({ selectedItem: item });
    if (refRBSheet.current) {
      setTimeout(() => refRBSheet.current.present(), 0);
    }
  }, [refRBSheet]);


  const hideBottomSheet = () => {
    if (refRBSheet.current) {
      refRBSheet.current.close();
    }
  };


  const openBottomSheetFilter = useCallback((item) => {
    updateState({ selectedItem: item });
    if (refRBSheetFilter.current) {
      setTimeout(() => refRBSheetFilter.current.present(), 0);
    }
  }, [refRBSheetFilter]);


  const hideBottomSheetFilter = () => {
    if (refRBSheetFilter.current) {
      refRBSheetFilter.current.close();
    }
  };



  const openBottomSheetChangeProfessional = useCallback((item) => {
    updateState({ selectedItem: item });
    if (refRBSheetChangeProfessional.current) {
      setTimeout(() => refRBSheetChangeProfessional.current.present(), 0);
    }
  }, [refRBSheetChangeProfessional]);


  const hideBottomSheetChangeProfessional = () => {
    if (refRBSheetChangeProfessional.current) {
      refRBSheetChangeProfessional.current.close();
    }
  };
  const cancelChangePRofessional = useCallback(() => {
    hideBottomSheetChangeProfessional()
    setTimeout(() => {
      //navigation.navigate('successScreen',{actionName:'cancel'})
    }, 200);
  }, [navigation])


  const renderItem = ({ item }) => {
    return (
      <BookingHistoryCard
        date="Sep 10, 2024"
        time="9:10 AM"
        title="Hair Avenue"
        professional="Unassigned "
        services="Services: Hair Cut, Hair Wash"
        price="SAR 200"
        status={bookingStatus[selectedIndex].name}//"Confirmed"
        imageUri={images.room}
        bookinOptions={openBottomSheet}
        reviewAndReschedule={() => handleReschedule(item)}
        changeProfession={openBottomSheetChangeProfessional}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Booking History'} showBackButton onBackPress={() => navigation.goBack()} />
      <View style={styles.contentContainer}>
        <View style={styles.wrapper}>
          <View>
            <View style={styles.rowContainer}>
              <FlatList
                data={bookingStatus}
                horizontal
                renderItem={({ item, index }) => {
                  const isSelected = selectedIndex === index;
                  return (
                    <Pressable onPress={() => setSelectedIndex(index)} style={[styles.box, isSelected && styles.selectedBox]}>
                      <Text style={styles.statusText}>{item.name}</Text>
                      <Text style={styles.innerTextValue}>{item.value}</Text>

                    </Pressable>
                  );
                }}
                showsHorizontalScrollIndicator={false}
              ></FlatList>


            </View>

            <View style={styles.filterView}>
              <Pressable onPress={openBottomSheetFilter} style={styles.filterIconView}>
                <Filter />
                <MediumText text={'Filter'} style={styles.textStyle} />
              </Pressable>
            </View>
          </View>

          <FlatList
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}

            renderItem={renderItem}
            contentContainerStyle={{ paddingTop: hp(2) }}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>

      <BottomSheet
        refRBSheet={refRBSheet}
        onClose={() => hideBottomSheet()}
        scrollEnabled={false}
        disableDynamicSizing={true}
        height={heightPercentageToDP(35)}
      >
        <CancelBooking
          onCancel={hideBottomSheet}
          onAgree={cancelBooking} />
      </BottomSheet>

      {/* Change PRofessional */}
      <BottomSheet
        refRBSheet={refRBSheetChangeProfessional}
        onClose={() => hideBottomSheetChangeProfessional()}
        scrollEnabled={false}
        disableDynamicSizing={true}
        height={heightPercentageToDP(37)}
      >
        <ChangeProfessional
          onCancel={hideBottomSheetChangeProfessional}
          onAgree={cancelChangePRofessional} />
      </BottomSheet>
      {/* Assign Professional */}

      <BottomSheet
        refRBSheet={refRBSheet}
        onClose={() => hideBottomSheet()}
        scrollEnabled={true}
        disableDynamicSizing={true}
        height={heightPercentageToDP(80)}
      >
        <ChangeProfessionalBottomSheet
          onCancel={()=>{}}
          onAgree={()=>{}}
           />
      </BottomSheet>



      {/* Booking Filter */}
      <BottomSheet
        refRBSheet={refRBSheetFilter}
        onClose={() => hideBottomSheetFilter()}
        scrollEnabled={false}
        disableDynamicSizing={true}
        height={heightPercentageToDP(65)}
      >
        <BookingFilter
          onCancel={cancelFilter}
          onApply={ApplyFilter}
          onClear={clearFilter}
        />
      </BottomSheet>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: colors.appBG,
  },
  wrapper: {
    flex: 1,
    marginHorizontal: wp(4),
  },
  box: {
    width: wp(29),
    height: hp(10),
    backgroundColor: colors.white,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.white,
    marginBottom: 0,
    marginHorizontal: 6,
    //alignItems: 'center',
    //justifyContent: 'center',
    padding: 15
  },
  selectedBox: {
    backgroundColor: colors.lightPrimary,
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 8,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(2),
  },
  statusText: {
    fontSize: RFValue(11),
    fontFamily: fontsFamily.regular,
    color: colors.appBlack,

    //textAlign: 'center',
  },
  innerRoundedBox: {
    width: 50,
    height: 50,
    backgroundColor: colors.lighterPrimary,
    borderRadius: 25,
    marginTop: hp(1),
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  innerTextValue: {
    marginTop: hp(1),
    fontSize: RFValue(15),
    fontFamily: fontsFamily.bold,
    color: colors.appBlack,
    textAlign: 'left',
  },
  filterView: {
    paddingTop: hp(2),
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    //alignSelf: 'flex-end'
    marginBottom: 20
  },
  filterIconView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.darkGray,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 7,
    gap: 5,
  },
  contentContainerStyle: {
    marginTop: hp(2),
  },
  textStyle: {
    fontWeight: '500',
    color: colors.lightBlack,
  }

});

export default BookingHistory;
