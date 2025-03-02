import moment from 'moment';
import React, {Fragment, useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Pressable} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {LargeText, MediumText, SmallText} from './Typography';
import {weeklySchedule} from '../staticData';
import Calendar from '../assets/svgs/calendar.svg';
import colors from '../assets/colors';
import {RFValue} from 'react-native-responsive-fontsize';
import {FlatList} from 'react-native-gesture-handler';

const DateSelector = props => {
  const {dates, openBottomSheet, isWeekly, isMonthly , style} = props;

  const [selectedDate, setSelectedDate] = useState(
    moment().format('YYYY-MM-DD'),
  );
  const [selectedDays, setSelectedDays] = useState([]);

  const handleSingleDayPress = date => {
    setSelectedDate(date);
  };
  const handleMultiDaySelect = id => {
    setSelectedDays(prevSelected =>
      prevSelected.includes(id)
        ? prevSelected.filter(dayId => dayId !== id)
        : [...prevSelected, id],
    );
  };

  const renderItem = ({item, index}) => {
    
    const isSelected = selectedDays.includes(item);
    const isSunday = moment(item).format('ddd') === 'Sun';
    

    return (
      <TouchableOpacity
        key={item}
        style={[styles.dateItem, 
            {
             backgroundColor: isSunday
              ? colors.error
              : isSelected
              ? colors.sharpPrimary
              : colors.lighterPrimary,
          }]}
        onPress={() => handleMultiDaySelect(item)}>
        <Fragment>
          <SmallText
            text={moment(item).format('ddd')}
            style={[
              styles.dayTextDate,
              selectedDate === item && styles.selectedText,
            ]}
          />
          <LargeText
            text={moment(item).format('D')}
            style={[
              styles.monthlyDate,
              (isSunday || isSelected) && styles.selectedDay,
            ]}
          />
        </Fragment>
      </TouchableOpacity>
    );
  };

  const renderNextFourDays = () => {
    return dates.map(date => (
      <TouchableOpacity
        key={date}
        style={[styles.dateItem, selectedDate === date && styles.selectedItem]}
        onPress={() => handleSingleDayPress(date)}>
        <Fragment>
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
        </Fragment>
      </TouchableOpacity>
    ));
  };

  const renderMonthlySchedule = () => {
    return (
      <FlatList
        data={dates}
        horizontal
        renderItem={renderItem}
       contentContainerStyle={{gap: 10}}
        keyExtractor={item => item}
      />
    );
  };

  const renderWeeklySchedule = () =>
    weeklySchedule.map((day, index) => {
      const isSelected = selectedDays.includes(index);
      const isSunday = day.day === 'Sun';

      return (
        <Pressable
          key={index}
          onPress={() => handleMultiDaySelect(index)}
          style={[
            styles.dayItem,
            {
              backgroundColor: isSunday
                ? colors.error
                : isSelected
                ? colors.sharpPrimary
                : colors.lighterPrimary,
            },
          ]}>
          <SmallText
            text={day.day}
            style={[
              styles.dayText,
              (isSunday || isSelected) && styles.selectedDay,
            ]}
          />
        </Pressable>
      );
    });

  const renderComponent = () => {
    if (isWeekly) {
      return renderWeeklySchedule();
    } else if (isMonthly) {
      return renderMonthlySchedule();
    } else {
      return renderNextFourDays();
    }
  };

  return (
    <View style={[styles.dates, style]}>
      {renderComponent()}

      {openBottomSheet && (
        <TouchableOpacity
          style={styles.moreDatesItem}
          onPress={openBottomSheet}>
          <Calendar />
          <MediumText text={'More Dates'} style={styles.moreDatesText} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default DateSelector;

const styles = StyleSheet.create({
  dates: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginTop: hp(2),
  },
  dateItem: {
    paddingHorizontal: 5,
    borderRadius: 5,
    backgroundColor: colors.lighterPrimary,
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(13),
    height: wp(18),
  },
  dayItem: {
    paddingHorizontal: 5,
    borderRadius: 5,
    backgroundColor: colors.lighterPrimary,
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(12),
    height: wp(18),
  },
  selectedItem: {
    backgroundColor: colors.primary,
  },
  dayTextDate: {
    color: colors.lightBlack,
  },
  dateTextDate: {
    fontSize: RFValue(20),
    color: colors.appBlack,
  },
  monthlyDate:{
    color: colors.lightBlack,
  },
  
  selectedText: {
    color: colors.white,
  },
  moreDatesItem: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: colors.lightPrimary,
    alignItems: 'center',
    width: wp(14),
    height: wp(18),
  },
  moreDatesText: {
    fontSize: RFValue(10),
    textAlign: 'center',
    marginTop: 5,
  },
  dayText: {
    color: colors.lightBlack,
    fontWeight: '600',
  },
  selectedDay: {
    color: colors.white,
  },
});
