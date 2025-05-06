import React, {useEffect, useState} from 'react';
import Toast from 'react-native-simple-toast';
import {ActivityIndicator, SafeAreaView, View} from 'react-native';
import styles from './addProfessionalSchedule.style';
import Header from '../../components/appHeader';
import AnaqaProfessionalHeader from '../../components/anaqaProfessionalHeader';
import colors from '../../assets/colors';
import {LargeText, MediumText} from '../../components/Typography';
import ScheduleSelector from '../../components/scheduleSelector';
import TimeSlots from '../../components/timeSlots';
import {
  AvailableTimeSlots,
  changeScheduleStatus,
  scheduleTimePeriod,
} from '../../staticData';
import CheckBox from '../../components/checkBox';
import {AppButton} from '../../components/appButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch, useSelector} from 'react-redux';
import {fetchSalonSlots, saveProfessionalAvailability , fetchProfessionalAvailability} from '../../redux/actions/professionalsAction';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import { convertTo12HourFormat } from '../../functions';


const ProfessionalSchedule = ({navigation, route}) => {
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.auth);
  const {salonSlotList, loading ,addSlotsInProgress} = useSelector(state => state.professionals);
  const {isSingleProfessional, paramsData} = route.params || {};


  const [selectedSlots, setSelectedSlots] = useState([]);
  const [scheduleRecur, setScheduleRecur] = useState('');
  const [schedulePeriod, setSchedulePeriod] = useState(scheduleTimePeriod.weekly);
  const [weeklyDaysSelection, setWeeklyDaysSelection] = useState([]);
  const [monthlyDatesSelection, setMonthlyDatesSelection] = useState([]);
  const [disabledDays, setDisabledDays] = useState([]); // Track disabled days
  const [disabledDates, setDisabledDates] = useState([]); // Track disabled dates
  const [savedSchedules, setSavedSchedules] = useState([]); // State to hold saved schedules

  // const [mySlot , setMyslots] = useState([])
  let salonId = user?.id;
  useEffect(() => {

    const fetchSlots = async () => { const response = await dispatch(fetchSalonSlots(salonId)).unwrap()};

    // const fetchAvailability = async(professionalId)=>{
    //  const availability = await dispatch(fetchProfessionalAvailability(professionalId)).unwrap();
    //  console.log('here is availablility', availability?.slots)
    //    if(availability?.availability){
    //     setSchedulePeriod(availability?.availability?.scheduleType);
    //     setScheduleRecur(availability?.availability?.recur)

    //     const slots = availability?.slots?.flatMap(slot =>
    //       slot.salonSlotDetails.map(detail => ({
    //         id: slot.id,
    //         day: slot.day,
    //         seats: detail.seats,
    //         startTime: convertTo12HourFormat(detail.startTime),
    //         endTime: convertTo12HourFormat(detail.endTime),
    //       }))
    //     );
    //        setMyslots(slots)
    //    }
    // };

    if(isSingleProfessional){
      // let professionalId = paramsData?.id
    //  fetchAvailability(professionalId)
    }else{
    fetchSlots()
  }
  }, [dispatch, salonId, paramsData?.id, isSingleProfessional]);

  // Handle weekly selection change
  const handleWeeklyChange = selectedDays => {
    // Only allow selecting days that are not disabled
    const updatedSelectedDays = selectedDays.filter(
      day => !disabledDays.includes(day),
    );
    setWeeklyDaysSelection(updatedSelectedDays);
  };

  // Handle monthly selection change
  const handleMonthlyChange = selectedDates => {
    // Only allow selecting dates that are not disabled
    const updatedSelectedDates = selectedDates.filter(
      date => !disabledDates.includes(date),
    );
    setMonthlyDatesSelection(updatedSelectedDates);
  };

  // Handle schedule period change
  const handleSchedulePeriod = timePeriod => {
    setSchedulePeriod(timePeriod);
  };

  // First Save button action: save selected time slots based on days/dates
  const handleSaveSchedule = () => {
    console.log('weeklyDaysSelection.length', weeklyDaysSelection.length);
    console.log('selectedSlots.length', selectedSlots);
    if (
      (!weeklyDaysSelection.length && !monthlyDatesSelection.length) ||
      selectedSlots.length === 0
    ) {
      console.log('Please select at least one day and one time slot.');
      return;
    }

    let updatedSchedules = [];

    // Weekly schedule logic
    if (schedulePeriod === scheduleTimePeriod.weekly) {
      const selectedSlotIDs = selectedSlots.map(slot => slot.id); //extracting IDs 
      weeklyDaysSelection.forEach(day => {
        updatedSchedules.push({
          day: day,
          date:0,
          salonSlotId: selectedSlotIDs, // All selected slots apply to each day
        });
      });

      // Disable the selected days after saving
      setDisabledDays(prevState => [...prevState, ...weeklyDaysSelection]);
    }

    // Monthly schedule logic
    if (schedulePeriod === scheduleTimePeriod.monthly) {
      const selectedSlotIDs = selectedSlots.map(slot => slot.id); //extracting IDs 
      monthlyDatesSelection.forEach(date => {
        const dateInDigit =  parseInt(date.split("-")[2], 10);
        updatedSchedules.push({
          day:'',
          date: dateInDigit,
          // date: date,
          salonSlotId: selectedSlotIDs, // All selected slots apply to each date
        });
      });

      // Disable the selected dates after saving
      setDisabledDates(prevState => [...prevState, ...monthlyDatesSelection]);
    }

    // Save the schedule data into the state (preserve old schedules)
    setSavedSchedules(prevSchedules => [...prevSchedules, ...updatedSchedules]);

    // Clear selections and reset slots after saving
    // setSelectedSlots([]);
    setWeeklyDaysSelection([]);
    setMonthlyDatesSelection([]);
  };

  const handleNavigaton = () => {
    navigation.navigate('editProfessionalSchedule', {
      period: schedulePeriod,
      slots: selectedSlots,
      options: scheduleRecur,
      weeklyDays: weeklyDaysSelection,
      monthlyDays: monthlyDatesSelection,
      disabledDays,
      disabledDates,
    });
  };

  // console.log('paramsData',paramsData)
  const handleSave= async ()=>{
    if(savedSchedules?.length===0){
      
      Toast.showWithGravity(
        'Please add time slots ',
        Toast.LONG,
        Toast.CENTER,
      );
    }
    let payload = {...paramsData , savedSchedules , scheduleRecur , schedulePeriod , salonId};
    const response = await dispatch(saveProfessionalAvailability(payload)).unwrap();
    if(response?.id){
      navigation.pop(2);
    }
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <Header
        title={isSingleProfessional ? 'Edit Professional' : 'Add Professional'}
        showBackButton
        onBackPress={() => navigation.goBack()}
      />
      <KeyboardAwareScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}>
        <View style={styles.contantContainer}>
          {!isSingleProfessional && (
            <AnaqaProfessionalHeader
              isSchedule={true}
              availabilityStyle={{color: colors.primary}}
            />
          )}
          <MediumText text={'Schedule'} style={styles.headingtext} />
          <ScheduleSelector
            selectedOption={schedulePeriod}
            handleSchedulePeriod={handleSchedulePeriod}
            onWeeklySelectionChange={handleWeeklyChange}
            onMonthlySelectionChange={handleMonthlyChange}
            disabledDays={disabledDays} // Pass the disabled days
            disabledDates={disabledDates} // Pass the disabled dates
          />
          {loading && salonSlotList?.length === 0 ? (
            <View style={{marginTop: heightPercentageToDP(1)}}>
              <ActivityIndicator color={'red'} size={'small'} />
            </View>
          ) : (
            <TimeSlots
              title={'Time slot'}
              availableSlots={salonSlotList}
              setSelectedSlots={setSelectedSlots}
            />
          )}

          <View style={styles.checkBoxContainer}>
            <LargeText text={'How long the schedule will be recur?'} />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              {changeScheduleStatus.map((item, index) => {
                // const isChecked = selectedOptions.includes(item.id);
                const isChecked = scheduleRecur === item.id;
                return (
                  <CheckBox
                    item={item}
                    isChecked={isChecked}
                    setSelectedItems={setScheduleRecur}
                  />
                );
              })}
            </View>
            <AppButton
              title={'Save Schedule'}
              // onPress={handleNavigaton}
              onPress={handleSaveSchedule}
              style={styles.smallButton}
            />
          </View>
          <AppButton
            title={'Save'}
            onPress={handleSave}
            isLoading={addSlotsInProgress}
            style={styles.button}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default ProfessionalSchedule;

// import React, {useState} from 'react';
// import {SafeAreaView, View} from 'react-native';
// import styles from './addProfessionalSchedule.style';
// import Header from '../../components/appHeader';
// import AnaqaProfessionalHeader from '../../components/anaqaProfessionalHeader';
// import colors from '../../assets/colors';
// import {LargeText, MediumText} from '../../components/Typography';
// import ScheduleSelector from '../../components/scheduleSelector';
// import TimeSlots from '../../components/timeSlots';
// import {AvailableTimeSlots, changeScheduleStatus, scheduleTimePeriod} from '../../staticData';
// import CheckBox from '../../components/checkBox';
// import { AppButton } from '../../components/appButton';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

// const ProfessionalSchedule = ({navigation,route}) => {

//   const [selectedSlots, setSelectedSlots] = useState([]);
//   const [selectedOptions, setSelectedOptions] = useState([]);
//   const [schedulePeriod, setSchedulePeriod] = useState(scheduleTimePeriod.weekly);
//   const [weeklyDaysSelection, setWeeklyDaysSelection] = useState([]);
//   const [monthlyDatesSelection, setMonthlyDatesSelection] = useState([]);
//   const {isSingleProfessional , paramsData} = route.params || {}
//   console.log('params data', paramsData)

//   const handleNavigaton=()=>{
//     navigation.navigate('editProfessionalSchedule',{
//        period:schedulePeriod,
//        slots:selectedSlots,
//        options:selectedOptions,
//        weeklyDays :weeklyDaysSelection,
//        monthlyDays:monthlyDatesSelection,
//     });
//   };

// console.log('schedulePeriod',schedulePeriod)
// console.log('weeklyDaysSelection',weeklyDaysSelection)
// console.log('monthlyDatesSelection',monthlyDatesSelection)
// console.log('selected slotes',selectedSlots)

//   const handleWeeklyChange = (selectedDays) => {
//     setWeeklyDaysSelection(selectedDays);
//   };

//   const handleMonthlyChange = (selectedDays) => {
//     setMonthlyDatesSelection(selectedDays);
//   };

//   const handleSchedulePeriod=(timePeriod)=>{
//     setSchedulePeriod(timePeriod)
//   }

//   return (
//     <SafeAreaView style={styles.wrapper}>
//       <Header
//         title={isSingleProfessional ? 'Edit Professional' : 'Add Professional'}
//         showBackButton
//         onBackPress={() => navigation.goBack()}
//       />
//       <KeyboardAwareScrollView style={styles.container} showsVerticalScrollIndicator={false}>
//         <View style={styles.contantContainer}>

//           { !isSingleProfessional &&
//           <AnaqaProfessionalHeader
//             isSchedule={true}
//             availabilityStyle={{color: colors.primary}}
//           />
//           }
//           <MediumText text={'Schedule'} style={styles.headingtext} />
//           <ScheduleSelector
//            selectedOption={schedulePeriod}
//            handleSchedulePeriod={handleSchedulePeriod}
//            onWeeklySelectionChange={handleWeeklyChange}
//            onMonthlySelectionChange={handleMonthlyChange}
//           />
//           <TimeSlots
//             title={'Time slot'}
//             availableSlots={AvailableTimeSlots}
//             setSelectedSlots={setSelectedSlots}
//           />

//           <View style={styles.checkBoxContainer}>
//             <LargeText text={'How long the schedule will be recur?'} />
//             <View
//               style={{flexDirection: 'row', justifyContent: 'space-between'}}>
//               {changeScheduleStatus.map((item, index) => {
//                 const isChecked = selectedOptions.includes(item.id);
//                 return (
//                   <CheckBox
//                     item={item}
//                     isChecked={isChecked}
//                     setSelectedItems={setSelectedOptions}
//                   />
//                 );
//               })}
//             </View>
//             <AppButton title={'Save'} onPress={()=>{}} style={styles.smallButton} />
//           </View>
//           <AppButton title={'Save'} onPress={handleNavigaton} style={styles.button} />
//         </View>

//       </KeyboardAwareScrollView>
//     </SafeAreaView>
//   );
// };

// export default ProfessionalSchedule;
