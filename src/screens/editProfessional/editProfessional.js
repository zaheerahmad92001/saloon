import React, {useEffect, useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import styles from './editProfessional.style';
import Header from '../../components/appHeader';
import {LargeText, MediumText} from '../../components/Typography';
import ScheduleSelector from '../../components/scheduleSelector';
import {changeScheduleStatus, scheduleTimePeriod} from '../../staticData';
import CheckBox from '../../components/checkBox';
import { AppButton } from '../../components/appButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import TimeSlotsDropDown from '../../components/timeSlotsDropDown';

const EditProfessionalSchedule = ({navigation, route}) => {
  const {
    period,
    slots,
    options,
    weeklyDays,
    monthlyDays,
  } = route.params
    const [selectedOptions, setSelectedOptions] = useState(options);
    const [schedulePeriod, setSchedulePeriod] = useState(period);
    const [weeklyDaysSelection, setWeeklyDaysSelection] = useState(weeklyDays);
    const [monthlyDatesSelection, setMonthlyDatesSelection] = useState(monthlyDays);
    const [weeklyTimeSlots, setWeeklySelectedTimeSlots] = useState([])
    const [monthlyTimeSlots, setMonthlySelectedTimeSlots] = useState([])

  useEffect(() => {
    if (period === scheduleTimePeriod.weekly) {
      const slotsData = weeklyDays.reduce((acc, day) => {
        acc[day] = slots;
        return acc;
      }, {});
  
      setWeeklySelectedTimeSlots(slotsData);
    } else {
      const slotsData = monthlyDays.reduce((acc, date) => {
        acc[date] = slots;
        return acc;
      }, {});
  
      setMonthlySelectedTimeSlots(slotsData);
    }
  }, [period, weeklyDays, monthlyDays, slots]);



   const dataSet  = schedulePeriod===scheduleTimePeriod.weekly ? weeklyDaysSelection : monthlyDatesSelection
   const slotSets = schedulePeriod===scheduleTimePeriod.weekly ? weeklyTimeSlots : monthlyTimeSlots
   const isWeekly = schedulePeriod===scheduleTimePeriod.weekly ? true:false

    const handleWeeklyChange = (selectedDays) => {
      setWeeklyDaysSelection(selectedDays);
    };
    
    const handleMonthlyChange = (selectedDays) => {
      setMonthlyDatesSelection(selectedDays);
    };
  
    const handleSchedulePeriod=(timePeriod)=>{
      setSchedulePeriod(timePeriod)
    }

    const handleSlotSelection = (date, slot) => {
      const updateSlots = (prev) => {
        const updatedSlots = { ...prev };
    
        if (!updatedSlots[date]) {
          updatedSlots[date] = [slot]; // Add new date with slot
        } else {
          const slotIndex = updatedSlots[date].indexOf(slot);
          if (slotIndex > -1) {
            updatedSlots[date].splice(slotIndex, 1); // Remove slot
            if (updatedSlots[date].length === 0) {
              delete updatedSlots[date]; // Remove date if no slots left
            }
          } else {
            updatedSlots[date] = [...updatedSlots[date], slot]; // Add slot
          }
        }
        return updatedSlots;
      };
    
      isWeekly
        ? setWeeklySelectedTimeSlots(updateSlots)
        : setMonthlySelectedTimeSlots(updateSlots);
    };    
  

  return (
    <SafeAreaView style={styles.wrapper}>
      <Header
        title={'Eidt Professional'}
        showBackButton
        onBackPress={() => navigation.goBack()}
      />
      <KeyboardAwareScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.contantContainer}>

          <MediumText text={'Schedule'} style={styles.headingtext} />
          <ScheduleSelector 
           selectedOption={schedulePeriod}
           handleSchedulePeriod={handleSchedulePeriod}
           weeklyDaysSelection={weeklyDaysSelection}
           monthlyDatesSelection={monthlyDatesSelection}
           onWeeklySelectionChange={handleWeeklyChange} 
           onMonthlySelectionChange={handleMonthlyChange}
           isEdit={true}
          />
          <View style={{marginTop:20}}>
          {dataSet?.length>0 && dataSet.map((item , index)=>{
            return(
              <TimeSlotsDropDown
              day={item}
              selectedSlots={slotSets[item]??[]}
              handleSlotSelection={(slot)=>handleSlotSelection(item, slot)}
             />
            )
          })
          }
          </View>

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
            {/* <AppButton title={'Save'} onPress={() => {}} style={styles.smallButton} /> */}
          </View>
         
        </View>
      </KeyboardAwareScrollView>
      <AppButton title={'Update Professional'} onPress={() => navigation.navigate('singleprofessionalProfile')} style={styles.button} />
    </SafeAreaView>
  );
};

export default EditProfessionalSchedule;
