import React from 'react';
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

const ratingsData = [
  {stars: 5, count: 180},
  {stars: 4, count: 80},
  {stars: 3, count: 30},
  {stars: 2, count: 15},
  {stars: 1, count: 7},
];
const totalRatings = ratingsData.reduce((acc, item) => acc + item.count, 0);

const ServiceReport = ({navigation, route}) => {

  const handleFilterPress = () => {};
  const handlePeakTime = () => {};

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

          <FilterIcon handleFilterPress={handleFilterPress} />

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
                handleFilterPress={handlePeakTime}
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
    </SafeAreaView>
  );
};

export default ServiceReport;
