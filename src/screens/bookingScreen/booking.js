import {FlatList, SafeAreaView, View, Pressable} from 'react-native';
import React, {useCallback, useMemo, useReducer, useRef, useState} from 'react';
import BookingHistoryCard from '../../components/bookingHistoryCard/bookingHistoryCard';
import Header from '../../components/appHeader';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ConfirmationSheet from '../../components/modal/confirmationSheet';
import {BottomSheet} from '../../components/bottomSheet';
import {bookingHistory, bookingStatus} from '../../staticData';
import Filter from '../../assets/svgs/filter-search.svg';
import {MediumText} from '../../components/Typography';
import BookingFilter from '../../components/bookingFilter/BookingFilter';
import AssignProfessional from '../../components/modal/AssignProfessional';
import styles from './booking.styles';
import BookingStatics from '../../components/bookingStatics';
import colors from '../../assets/colors';

const Bookings = ({navigation, route}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const refRBSheet = useRef();
  const refRBSheetAssignProfessional = useRef();
  const refRBSheetFilter = useRef();

  const [state, updateState] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
      selectedItem: null,
      isChnagePrrofessional: false,
    },
  );
  const {selectedItem, isChnagePrrofessional} = state;

  const filteredData = useMemo(() => {
    const statusMap = ['All', 'Pending', 'Confirmed', 'Cancelled', 'Completed'];
    return selectedIndex === 0
      ? bookingHistory
      : bookingHistory.filter(item => item.status === statusMap[selectedIndex]);
  }, [selectedIndex]);

  const handleBookingOptions = item => {
    const isCompleted = item.status === 'Completed';
    if (isCompleted) {
      navigation.navigate('review');
    } else {
      openBottomSheet(item);
    }
  };

  const reviewAndReschedule =(item)=>{
    const isCompleted = item.status === 'Completed';
    if (isCompleted) {
      navigation.navigate('invoiceDetail');
    } else {
      navigation.navigate('availableTimeSlot',{isReschedule:true});
    }

  }


  const handleChangeProfessional = () => {
    updateState({isChnagePrrofessional: true});
    setTimeout(() => {
      if (refRBSheetAssignProfessional.current) {
        refRBSheetAssignProfessional.current.present();
        hideConfirmationSheet();
      }
    }, 0);
  };

  const ApplyFilter = item => {};

  const clearFilter = item => {
    hideBottomSheets();
  };

  const cancelFilter = () => {
    hideBottomSheets();
  };


  const openBottomSheet = useCallback(item => {
    updateState({selectedItem: item});
    if (item.status === 'Pending') {
      if (refRBSheetAssignProfessional.current) {
        setTimeout(() => refRBSheetAssignProfessional.current.present(), 0);
      }
    }
    if (item.status === 'Confirmed') {
      console.log('item', 'Confirmed');
      if (refRBSheet.current) {
        setTimeout(() => refRBSheet.current.present(), 0);
      }
    }
  }, []);

  const openBottomSheetFilter = () => {
    if (refRBSheetFilter.current) {
      refRBSheetFilter.current.present();
    }
  };

  const hideConfirmationSheet = () => {
    if (refRBSheet.current) {
      refRBSheet.current.dismiss();
    }
  };

  const hideBottomSheets = () => {
    if (refRBSheetAssignProfessional.current) {
      updateState({isChnagePrrofessional: false});
      refRBSheetAssignProfessional.current.dismiss();
    }
    if (refRBSheetFilter.current) {
      refRBSheetFilter.current.dismiss();
    }
  };

  const renderItem = ({item}) => {
    return (
      <BookingHistoryCard
        item={item}
        isProfessionalAssigned={true}
        bookinOptions={() => handleBookingOptions(item)}
        reviewAndReschedule={() => reviewAndReschedule(item)}
      />
    );
  };

  const renderStaticsTabs = ({item, index}) => {
    return (
      <BookingStatics
        item={item}
        index={index}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={'Bookings'}
        showBackButton
        onBackPress={() => navigation.goBack()}
      />
      <View style={styles.contentContainer}>
        <View style={styles.wrapper}>
          <View style={styles.rowContainer}>
            <FlatList
              data={bookingStatus}
              horizontal
              renderItem={renderStaticsTabs}
              showsHorizontalScrollIndicator={false}
            />
          </View>

          <View style={styles.filterView}>
            <Pressable
              onPress={openBottomSheetFilter}
              style={styles.filterIconView}>
              <Filter />
              <MediumText text={'Filter'} style={styles.textStyle} />
            </Pressable>
          </View>

          <FlatList
            data={filteredData}
            renderItem={renderItem}
            contentContainerStyle={{paddingTop: hp(2)}}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>

      <BottomSheet
        refRBSheet={refRBSheet}
        onClose={() => hideConfirmationSheet()}
        scrollEnabled={false}
        disableDynamicSizing={true}
        height={hp(38)}>
        <ConfirmationSheet
          onCancel={hideConfirmationSheet}
          onAgree={handleChangeProfessional}
        />
      </BottomSheet>

      {/* Assign Professional */}

      <BottomSheet
        refRBSheet={refRBSheetAssignProfessional}
        onClose={() => hideBottomSheets()}
        scrollEnabled={false}
        disableDynamicSizing={true}
        removeSheetScrolllView={true}
        sheetModalStyle={{backgroundColor: colors.appBG}}
        style={{backgroundColor: colors.appBG}}
        height={hp(87)}>
        <AssignProfessional
          onCancel={hideBottomSheets}
          onAgree={() => {}}
          isChnagePrrofessional={isChnagePrrofessional}
        />
      </BottomSheet>

      {/* Booking Filter */}
      <BottomSheet
        refRBSheet={refRBSheetFilter}
        onClose={() => hideBottomSheets()}
        scrollEnabled={false}
        disableDynamicSizing={true}
        height={hp(68)}>
        <BookingFilter
          onCancel={cancelFilter}
          onApply={ApplyFilter}
          onClear={clearFilter}
        />
      </BottomSheet>
    </SafeAreaView>
  );
};

export default Bookings;
