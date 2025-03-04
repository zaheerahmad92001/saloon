import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import RadioButton from './radioButton';
import {MediumText, SmallText} from './Typography';
import BackArrow from '../assets/svgs/back-arrow-box.svg';
import ForwardArrow from '../assets/svgs/forward-arrow-box.svg';
import {CurrentMonthDates} from '../functions';
import moment from 'moment';
import DateSelector from './dateSelector';
import { weeklySchedule } from '../staticData';

const radioButton = [
  {key: 'weekly', value: 'Weekly'},
  {key: 'monthly', value: 'Monthly'},
];

const ScheduleSelector = (props) => {
  const {onMonthlySelectionChange ,onWeeklySelectionChange , selectedOption , handleSchedulePeriod } = props

  const monthlySchedule = CurrentMonthDates();
  const isWeekly = selectedOption === 'weekly';
  const isMonthly = selectedOption === 'monthly';
  const currentDate = moment();
  const month = currentDate.format('MMMM');
  const year = currentDate.format('YYYY');

  const dates = isMonthly ? monthlySchedule : isWeekly ? weeklySchedule : [];


  return (
    <View>
      <RadioButton
        options={radioButton}
        selectedOption={selectedOption}
        handleSchedulePeriod={handleSchedulePeriod}
      />
      <MediumText text={'Date'} style={styles.headingtext} />
      <View style={styles.monthContainer}>
        <BackArrow />
        <MediumText text={`${month} ${year}`}/>
        <ForwardArrow />
      </View>
      <DateSelector
        dates={dates}
        isWeekly={isWeekly}
        isMonthly={isMonthly}
        onWeeklySelectionChange={onWeeklySelectionChange} 
        onMonthlySelectionChange={onMonthlySelectionChange}
        style={{marginTop: hp(1.5)}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headingtext: {
    marginTop: hp(1.5),
    marginBottom: hp(1),
  },
  monthContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  }
});

export default ScheduleSelector;
