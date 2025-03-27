import {StyleSheet, FlatList, Alert} from 'react-native';
import React, {useCallback, useReducer, useRef} from 'react';
import ProfessionalBookingCard from '../../components/professionalBookingCard/professionalBookingCard';
import images from '../../assets/images';
import {
  heightPercentageToDP,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';

import BookingFilter from '../../components/bookingFilter/BookingFilter';
import {MediumText} from '../../components/Typography';
import FilterIcon from '../../components/FilterIcon';
import {BottomSheet} from '../../components/bottomSheet';
import {View} from 'react-native';


const data = {
  date: 'Sep 10, 2024',
  time: '9:10 AM',
  title: 'Hair Avenue',
  location: 'Lakewood, California',
  services: 'Hair Cut, Hair Wash',
  price: 'SAR 200',
  status: 'Completed',
  imageUri: images.room,
};

const CompletedBooking = () => {
  const navigation = useNavigation();

  const refRBSheetFilter = useRef();
  const [state, updateState] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
      selectedItem: null,
    },
  );
  const {selectedItem} = state;

  const handleBookAgain = () => {
    navigation.navigate('ratingAndReview');
  };

  const handleReview = () => {
    navigation.navigate('invoiceDetail');
  };

  //////

  const hideBottomSheetFilter = () => {
    if (refRBSheetFilter.current) {
      refRBSheetFilter.current.close();
    }
  };
  const openBottomSheetFilter = useCallback(
    item => {
      updateState({selectedItem: item});
      if (refRBSheetFilter.current) {
        setTimeout(() => refRBSheetFilter.current.present(), 0);
      }
    },
    [refRBSheetFilter],
  );

  const ApplyFilter = item => {};

  const clearFilter = item => {
    hideBottomSheetFilter();
  };

  const cancelFilter = useCallback(() => {
    hideBottomSheetFilter();
  }, []);

  const renderItem = ({item, index}) => {
    return (
      <ProfessionalBookingCard
        item={data}
        bookingOptions={handleBookAgain}
        reviewAndReschedule={() => handleReview(item)}
      />
    );
  };

  return (
    <View>
      <View style={styles.headerSection}>
        <MediumText text={'Completed Booking (06)'} style={styles.heading} />
        <FilterIcon handleFilterPress={() => openBottomSheetFilter()} />
      </View>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
      />

      {/* Booking Filter */}
      <BottomSheet
        refRBSheet={refRBSheetFilter}
        onClose={() => hideBottomSheetFilter()}
        scrollEnabled={false}
        disableDynamicSizing={true}
        height={heightPercentageToDP(58)}>
        <BookingFilter
          onCancel={cancelFilter}
          onApply={ApplyFilter}
          onClear={clearFilter}
          isHome={true}
        />
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingTop: hp(1),
  },
  headerSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
  },
});

export default CompletedBooking;
