import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import styles from './addProfessionalSchedule.style';
import Header from '../../components/appHeader';
import AnaqaProfessionalHeader from '../../components/anaqaProfessionalHeader';
import colors from '../../assets/colors';
import {LargeText, MediumText} from '../../components/Typography';
import ScheduleSelector from '../../components/scheduleSelector';
import TimeSlots from '../../components/timeSlots';
import {AvailableTimeSlots, changeScheduleStatus} from '../../staticData';
import CheckBox from '../../components/checkBox';
import { AppButton } from '../../components/appButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const ProfessionalSchedule = ({navigation,route}) => {
  const [selectedSlots, setSelectedSlots] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [schedulePeriod, setSchedulePeriod] = useState('weekly');
  const [weeklySelection, setWeeklySelection] = useState([]);
  const [monthlySelection, setMonthlySelection] = useState([]);

  const handleNavigaton=()=>{
    navigation.navigate('editProfessionalSchedule',{
      selectedSlots:selectedSlots,
      selectedItems:selectedOptions
    });
  };


  const handleWeeklyChange = (selectedDays) => {
    setWeeklySelection(selectedDays);
  };
  
  const handleMonthlyChange = (selectedDays) => {
    setMonthlySelection(selectedDays);
  };

  const handleSchedulePeriod=(timePeriod)=>{
    setSchedulePeriod(timePeriod)
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <Header
        title={'Add Professional'}
        showBackButton
        onBackPress={() => navigation.goBack()}
      />
      <KeyboardAwareScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.contantContainer}>
          <AnaqaProfessionalHeader
            isSchedule={true}
            availabilityStyle={{color: colors.primary}}
          />
          <MediumText text={'Schedule'} style={styles.headingtext} />
          <ScheduleSelector
          selectedOption={schedulePeriod}
          handleSchedulePeriod={handleSchedulePeriod}
           onWeeklySelectionChange={handleWeeklyChange} 
           onMonthlySelectionChange={handleMonthlyChange}
          />
          <TimeSlots
            title={'Time slot'}
            availableSlots={AvailableTimeSlots}
            setSelectedSlots={setSelectedSlots}
          />

          <View style={styles.checkBoxContainer}>
            <LargeText text={'How long the schedule will be recur?'} />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              {changeScheduleStatus.map((item, index) => {
                const isChecked = selectedOptions.includes(item.id);
                return (
                  <CheckBox
                    item={item}
                    isChecked={isChecked}
                    setSelectedItems={setSelectedOptions}
                  />
                );
              })}
            </View>
            <AppButton title={'Save'} onPress={handleNavigaton} style={styles.smallButton} />
          </View>
          <AppButton title={'Save'} onPress={() => {}} style={styles.button} />
        </View>
     
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default ProfessionalSchedule;
