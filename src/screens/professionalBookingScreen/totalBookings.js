import {FlatList, StyleSheet, View} from 'react-native';
import React, {useCallback, useReducer, useRef} from 'react';
import ProfessionalBookingCard from '../../components/professionalBookingCard/professionalBookingCard';
import {
  heightPercentageToDP,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import BookingFilter from '../../components/bookingFilter/BookingFilter';
import {MediumText} from '../../components/Typography';
import FilterIcon from '../../components/FilterIcon';
import {BottomSheet} from '../../components/bottomSheet';
import { bookingHistory } from '../../staticData';


const TotalBookings = () => {
  const refRBSheetFilter = useRef();
  const [state, updateState] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
      selectedItem: null,
    },
  );
  const {selectedItem} = state;


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
        item={item}
        bookingOptions={() => {}}
        reviewAndReschedule={() => {}}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerSection}>
        <MediumText text={'Total Bookings (06)'} style={styles.heading} />
        <FilterIcon handleFilterPress={() => openBottomSheetFilter()} />
      </View>

      <FlatList
        data={bookingHistory}
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
  container: {
    flex: 1,
  },
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

export default TotalBookings;
