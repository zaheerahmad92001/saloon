import React, {useCallback, useRef, useState} from 'react';
import {SafeAreaView, TouchableOpacity, View} from 'react-native';
import styles from './schedule.style';
import Header from '../../components/appHeader';
import moment from 'moment';
import Calendar from '../../assets/svgs/calendar.svg';
import {
  LargeText,
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

const Schedule = ({navigation}) => {
  const refRBSheet = useRef();
  const currentDate = moment();
  const day = currentDate.format('ddd');
  const month = currentDate.format('MMM');
  const year = currentDate.format('YYYY');
  const Date = moment(currentDate).format('DD');

  // Generate dates for today and the next 4 days
  const dates = Array.from({length: 5}, (_, i) =>
    moment().add(i, 'days').format('YYYY-MM-DD'),
  );

  const [selectedDate, setSelectedDate] = useState(
    moment().format('YYYY-MM-DD'),
  );
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

          <View style={styles.dates}>
            {dates.map(date => (
              <TouchableOpacity
                key={date}
                style={[
                  styles.dateItem,
                  selectedDate === date && styles.selectedItem,
                ]}
                onPress={() => setSelectedDate(date)}>
                <SmallText
                  text={moment(date).format('ddd')}
                  style={[
                    styles.dayTextDate,
                    selectedDate === date && styles.selectedText,
                  ]}
                />

                <LargeText
                  text={moment(date).format('D')}
                  style={[
                    styles.dateTextDate,
                    selectedDate === date && styles.selectedText,
                  ]}
                />
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              style={styles.moreDatesItem}
              onPress={openBottomSheet}>
              <Calendar />
              <MediumText text={'More Dates'} style={styles.moreDatesText} />
            </TouchableOpacity>
          </View>

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
