import React, {useCallback, useRef, useState} from 'react';
import {SafeAreaView, TouchableOpacity, View} from 'react-native';
import styles from './schedule.style';
import Header from '../../components/appHeader';
import moment from 'moment';
import {
  MediumText,
  SmallText,
  XlargeText,
} from '../../components/Typography';
import {FlatList} from 'react-native-gesture-handler';
import ScheduleList from '../../components/scheduleList';
import {bookings} from '../../staticData';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import CustomCalendar from '../../components/calendar';
import { BottomSheet } from '../../components/bottomSheet';
import { NextFourDays } from '../../functions';
import DateSelector from '../../components/dateSelector';

const Schedule = ({navigation}) => {
  const refRBSheet = useRef();
  const currentDate = moment();
  const day = currentDate.format('ddd');
  const month = currentDate.format('MMM');
  const year = currentDate.format('YYYY');
  const Date = moment(currentDate).format('DD');
  const dates = NextFourDays()
  const [activeDate , setActiveDate] = useState(moment().format('YYYY-MM-DD'),)
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openBottomSheet = useCallback(
    item => {
      if (refRBSheet.current) {
        refRBSheet.current.present();
      }
    },
    [refRBSheet],
  );

  const hideBottomSheet = () => {
    if (refRBSheet.current) {
      refRBSheet.current.close();
    }
  };

  const handleOnItemPress = index => {
    setSelectedIndex(index);
  };

  const renderItem = ({item, index}) => {
    return (
      <ScheduleList
        item={item}
        index={index}
        handleOnpress={() => handleOnItemPress(index)}
        selectedIndex={selectedIndex}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={'Schedule'}
        showBackButton
        onBackPress={() => navigation.goBack()}
      />
      <View style={styles.wrapper}>
        <View style={styles.contentContainer}>
          <View style={styles.headerRow}>
            <View style={[styles.rowContaner, {gap: 15}]}>
              <XlargeText text={Date} style={styles.dateText} />
              <View>
                <SmallText text={day} style={styles.dayText} />
                <View style={styles.rowContaner}>
                  <SmallText text={month} style={[styles.dayText]} />
                  <SmallText text={year} style={[styles.dayText]} />
                </View>
              </View>
            </View>

            <MediumText text={'Today'} style={styles.todayText} />
          </View>
      
           <DateSelector dates={dates} setActiveDate={setActiveDate} openBottomSheet={openBottomSheet} style={{marginTop:heightPercentageToDP(1.5)}}/>
 

          <View style={styles.headerContainer}>
            {/* Header Section */}
            <View style={styles.header}>
              <MediumText text={'Time'} style={styles.headerText} />
              <MediumText text={'Bookings'} style={styles.headerText} />
            </View>

            {/* Booking List */}
            <FlatList
              data={bookings}
              keyExtractor={(item, index) => index.toString()}
              contentContainerStyle={styles.contentContainerStyle}
              renderItem={renderItem}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </View>
      <BottomSheet
        refRBSheet={refRBSheet}
        onClose={() =>hideBottomSheet()}
        scrollEnabled={true}
        disableDynamicSizing={true}
        removeSheetScrolllView={true}
        height={heightPercentageToDP(50)}
      >
        <CustomCalendar/>
      </BottomSheet>
    </SafeAreaView>
  );
};
export default Schedule;
