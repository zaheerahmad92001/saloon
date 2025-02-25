import { FlatList, SafeAreaView, View, Pressable, Text } from 'react-native';
import React, { useCallback, useReducer, useRef, useState } from 'react';
import BookingHistoryCard from '../../components/bookingHistoryCard/bookingHistoryCard';
import images from '../../assets/images';
import Header from '../../components/appHeader';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP } from 'react-native-responsive-screen';
import CancelBooking from '../../components/modal/cancelBooking';
import { BottomSheet } from '../../components/bottomSheet';
import { bookingStatus } from '../../staticData';
import Filter from '../../assets/svgs/filter-search.svg';
import { MediumText } from '../../components/Typography';
import BookingFilter from '../../components/bookingFilter/BookingFilter';
import ChangeProfessional from '../../components/modal/changeProfessional';
import ChangeProfessionalBottomSheet from '../../components/modal/ChangeProfessionalBottomSheet';
import styles from './booking.styles';
import BookingStatics from '../../components/bookingStatics';


const BookingHistory = ({ navigation, route }) => {

  const [selectedIndex, setSelectedIndex] = useState(0);
  const refRBSheet = useRef();
  const refRBSheetFilter = useRef();
  const refRBSheetChangeProfessional = useRef();
  
  const [state, updateState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      selectedItem: null,
    },
  );
  const { selectedItem } = state;

  console.log('selectedIndex',selectedIndex)

  const cancelBooking = useCallback(() => {
    hideBottomSheet();
    setTimeout(() => {
      navigation.navigate('successScreen', { actionName: 'cancel' });
    }, 200);
  }, [navigation]);


  const ApplyFilter = (item) => {
  };

  const clearFilter = (item) => {
    hideBottomSheetFilter();
  };

  const cancelFilter = useCallback(() => {
    hideBottomSheetFilter();
    setTimeout(() => {
     
    }, 200);
  }, []);


  const handleReschedule = (item) => {
     navigation.navigate('orderDetail');
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
    hideBottomSheetChangeProfessional();
    setTimeout(() => {
    }, 200);
  }, []);


  const renderItem = ({ item }) => {
    return (
      <BookingHistoryCard
        date="Sep 10, 2024"
        time="9:10 AM"
        title="Hair Avenue"
        professional="Unassigned "
        isProfessionalAssigned={true}
        services="Services: Hair Cut, Hair Wash"
        price="SAR 200"
        status={bookingStatus[selectedIndex].status}
        imageUri={images.room}
        bookinOptions={openBottomSheet}
        reviewAndReschedule={() => handleReschedule(item)}
        changeProfession={openBottomSheetChangeProfessional}
      />
    );
  };

  const renderStaticsTabs=({item , index})=>{
   return(
    <BookingStatics item={item} index={index} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
   )
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Bookings'} showBackButton onBackPress={() => navigation.goBack()} />
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
              <Pressable onPress={openBottomSheetFilter} style={styles.filterIconView}>
                <Filter />
                <MediumText text={'Filter'} style={styles.textStyle} />
              </Pressable>
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

export default BookingHistory;
