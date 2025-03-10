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
  const {
    dates, 
    isEdit =false,
    weeklyDaysSelection,
    monthlyDatesSelection,
    openBottomSheet, isWeekly, isMonthly , style,
    onWeeklySelectionChange,  // Callback for weekly selection
    onMonthlySelectionChange  // Callback for monthly selection
  } = props;

  const [selectedDate, setSelectedDate] = useState(
    moment().format('YYYY-MM-DD'),
  );

  const [selectedWeeklyDays, setSelectedWeeklyDays] = useState(isEdit ? weeklyDaysSelection :[]);
  const [selectedMonthlyDays, setSelectedMonthlyDays] = useState(isEdit ? monthlyDatesSelection:[]);

  const handleSingleDayPress = date => {
    setSelectedDate(date);
  };

  const handleMultiDaySelect = (id) => {
    const updateSelection = (prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((dayId) => dayId !== id)
        : [...prevSelected, id];
  
    if (isWeekly) {
      setSelectedWeeklyDays((prev) => {
        const updatedSelection = updateSelection(prev);
        onWeeklySelectionChange?.(updatedSelection);
        return updatedSelection;
      });
    } else if (isMonthly) {
      setSelectedMonthlyDays((prev) => {
        const updatedSelection = updateSelection(prev);
        onMonthlySelectionChange?.(updatedSelection);
        return updatedSelection;
      });
    }
  };
  

  const renderItem = ({item, index}) => {

    const isSelected = selectedMonthlyDays.includes(item)
    const isSunday = moment(item).format('ddd') === 'Sun';
    

    return (
      <TouchableOpacity
      disabled={isSunday}
        key={item}
        style={[styles.dateItem, 
            {
             backgroundColor: isSunday
              ? colors.error
              : isSelected
              ? colors.sharpPrimary
              : colors.lighterPrimary,
          }]}
        onPress={() => {handleMultiDaySelect(item)}}>
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
    weeklySchedule.map((item, index) => {
      const isSelected = selectedWeeklyDays.includes(item.day)
      const isSunday = item.day === 'Sun';

      return (
        <Pressable
         disabled={isSunday}
          key={index}
          onPress={() => handleMultiDaySelect(item.day)}
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
            text={item.day}
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
    backgroundColor: colors.lightPrimary,
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(13),
    height: wp(18),
  },
  dayItem: {
    paddingHorizontal: 5,
    borderRadius: 5,
    backgroundColor: colors.lightPrimary,
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
