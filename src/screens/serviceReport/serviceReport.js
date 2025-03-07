import React,{useCallback, useReducer, useRef, useState} from 'react';
import {View, SafeAreaView, Pressable} from 'react-native';
import styles from './serviceReport.style';
import Header from '../../components/appHeader';
import BarChartView from '../../components/graphView/BarChart';
import ServiceEstTime from '../../components/serviceTime';

import TodayBookings from '../../components/todaysBookingCard';
import {MediumText, SmallText} from '../../components/Typography';
import FilterIcon from '../../components/FilterIcon';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import RatingHeaderCard from '../../components/RatingHeaderCard/RatingHeaderCard';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import { BottomSheet } from '../../components/bottomSheet';
import BookingFilter from '../../components/bookingFilter/BookingFilter';
const ratingsData = [
  {stars: 5, count: 180},
  {stars: 4, count: 80},
  {stars: 3, count: 30},
  {stars: 2, count: 15},
  {stars: 1, count: 7},
];
const totalRatings = ratingsData.reduce((acc, item) => acc + item.count, 0);

const ServiceReport = ({navigation, route}) => {
const refRBSheet = useRef();

const refRBSheetTime = useRef();
  const handleFilterPress = () => {};
  const handlePeakTime = () => {};


 const [state, updateState] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            selectedItem: null,
        },
    );


    const hideBottomSheet = () => {
        if (refRBSheet.current) {
            refRBSheet.current.close();
        }
    };
    const openBottomSheet = useCallback((item) => {
        updateState({ selectedItem: item });
        if (refRBSheet.current) {
            setTimeout(() => refRBSheet.current.present(), 0);
        }
    },
        [refRBSheet],
    );

    const ApplyFilter = item => { };

    const clearFilter = item => {
        hideBottomSheet();
    };

    const cancelFilter = useCallback(() => {
        hideBottomSheet();
    }, []);

///////////// Time Bottom Sheet////////



const hideTimeBottomSheet = () => {
  if (refRBSheetTime.current) {
      refRBSheetTime.current.close();
  }
};
const openTimeBottomSheet = useCallback((item) => {
  updateState({ selectedItem: item });
  if (refRBSheetTime.current) {
      setTimeout(() => refRBSheetTime.current.present(), 0);
  }
},
  [refRBSheetTime],
);

const ApplyTimeFilter = item => { };

const clearTimeFilter = item => {
  hideTimeBottomSheet();
};

const cancelTimeFilter = useCallback(() => {
  hideTimeBottomSheet();
}, []);


  return (
    <SafeAreaView style={styles.wrapper}>
      <Header
        title={'Statistics'}
        showBackButton
        onBackPress={() => navigation.goBack()}
      />
      <KeyboardAwareScrollView style={styles.container}>
        <View style={styles.contentContainer}>
          <ServiceEstTime />

          <FilterIcon handleFilterPress={openBottomSheet} />

          <View style={styles.rowView}>
            <MediumText text={`Total Booking (18)`} />
            <SmallText text={'See All'} style={styles.seeAllText} />
          </View>

          {[...Array(3)].map((item, index) => {
            let status = index % 2 === 0 ? 'Completed' : 'Pending';
            return <TodayBookings status={status} />;
          })}

          <View style={styles.graphView}>
            <View style={styles.graphInnerView}>
              <MediumText text={'Peak-time'} />
              <FilterIcon
                handleFilterPress={openTimeBottomSheet}
                filterInnerView={{paddingVertical: 5}}
              />
            </View>
            <View style={styles.borderView}></View>
            <BarChartView />
          </View>

          <View style={styles.ratingView}>
            <Pressable
              style={[
                styles.graphInnerView,
                {marginBottom: heightPercentageToDP(2)},
              ]}>
              <MediumText text={`Service Report`} />
              <SmallText text={'See All'} style={styles.seeAllText} />
            </Pressable>
            <RatingHeaderCard
              item={ratingsData}
              totalRating={totalRatings}
              style={styles.ratingBg}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>



       {/* Booking Filter */}
       <BottomSheet
                refRBSheet={refRBSheet}
                onClose={() => hideBottomSheet()}
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


            {/* Booking Filter */}
       <BottomSheet
                refRBSheet={refRBSheetTime}
                onClose={() => hideTimeBottomSheet()}
                scrollEnabled={false}
                disableDynamicSizing={true}
                height={heightPercentageToDP(58)}>
                <BookingFilter
                    onCancel={cancelTimeFilter}
                    onApply={ApplyTimeFilter}
                    onClear={clearTimeFilter}
                    isHome={true}
                />
            </BottomSheet>
    </SafeAreaView>
  );
};

export default ServiceReport;
