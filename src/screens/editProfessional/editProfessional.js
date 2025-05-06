import React, {useEffect, useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import styles from './editProfessional.style';
import Header from '../../components/appHeader';
import {LargeText, MediumText} from '../../components/Typography';
import ScheduleSelector from '../../components/scheduleSelector';
import {changeScheduleStatus, scheduleTimePeriod} from '../../staticData';
import CheckBox from '../../components/checkBox';
import {AppButton} from '../../components/appButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import TimeSlotsDropDown from '../../components/timeSlotsDropDown';
import {
  fetchSalonSlots,
  fetchProfessionalAvailability,
  updateProfessionalAvailability,
} from '../../redux/actions/professionalsAction';
import {useDispatch, useSelector} from 'react-redux';
import {
  convertTo12HourFormat,
  formatDateFromDay,
  formatSlotsForAvailabilityUpdate,
} from '../../functions';

const EditProfessionalSchedule = ({navigation, route}) => {
  const {period, slots, options, weeklyDays, monthlyDays, item} =
    route.params || {};

  const dispatch = useDispatch();
  const {user} = useSelector(state => state.auth);
  const {salonSlotList, loading, addSlotsInProgress} = useSelector(
    state => state.professionals,
  );
  const [selectedOptions, setSelectedOptions] = useState(options);
  const [scheduleRecur, setScheduleRecur] = useState('');
  const [schedulePeriod, setSchedulePeriod] = useState('');
  const [weeklyDaysSelection, setWeeklyDaysSelection] = useState(weeklyDays);
  const [monthlyDatesSelection, setMonthlyDatesSelection] =
    useState(monthlyDays);
  const [weeklyTimeSlots, setWeeklySelectedTimeSlots] = useState([]);
  const [monthlyTimeSlots, setMonthlySelectedTimeSlots] = useState([]);

  const salonId = user?.id;
  const professionalId = item?.id;
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();

  useEffect(() => {
    const fetchSlots = async () => {
      const response = await dispatch(fetchSalonSlots(salonId)).unwrap();
    };

    const fetchAvailability = async () => {
      const availability = await dispatch(
        fetchProfessionalAvailability(professionalId),
      ).unwrap();
      if (availability?.availability) {
        const scheduleType = availability?.availability?.scheduleType;
        const recur = availability?.availability?.recur;

        setSchedulePeriod(scheduleType);
        setScheduleRecur(recur);

        // const slots = availability?.slots?.flatMap(slot =>
        //   slot.salonSlotDetails.map(detail => ({
        //     id: slot.id,
        //     day: slot.day,
        //     seats: detail.seats,
        //     startTime: convertTo12HourFormat(detail.startTime),
        //     endTime: convertTo12HourFormat(detail.endTime),
        //   }))
        // )?.reduce((acc, curr) => {
        //   if (!acc[curr.day]) {
        //     acc[curr.day] = [];
        //   }
        //   const { day, ...rest } = curr;
        //   acc[day].push(rest);
        //   return acc;
        // }, {});

        const slots = availability?.slots?.flatMap(slot => {
          const fullDate = new Date(year, month, slot.date);

          return slot.salonSlotDetails.map(detail => ({
            id: detail.id,
            day: slot.day,
            date: formatDateFromDay(fullDate),
            seats: detail.seats,
            startTime: convertTo12HourFormat(detail.startTime),
            endTime: convertTo12HourFormat(detail.endTime),
          }));
        });

        const groupedSlots = slots?.reduce((acc, slot) => {
          // Use day if weekly, otherwise date
          const groupKey =
            scheduleType === scheduleTimePeriod.weekly ? slot.day : slot.date;

          if (!acc[groupKey]) {
            acc[groupKey] = [];
          }

          // Push slot info (excluding group key)
          const {day, date, ...rest} = slot;
          acc[groupKey].push({
            ...rest,
            ...(scheduleType === scheduleTimePeriod.weekly ? {date} : {day}),
            isNew: false,
          });

          return acc;
        }, {});

        const days = availability?.slots.map(slot => slot.day);

        if (
          availability?.availability?.scheduleType === scheduleTimePeriod.weekly
        ) {
          setWeeklyDaysSelection(days);
          setWeeklySelectedTimeSlots(groupedSlots);
        } else if (
          availability?.availability?.scheduleType ===
          scheduleTimePeriod.monthly
        ) {
          const result = availability?.slots.map(item => {
            const fullDate = new Date(year, month, item.date);
            return formatDateFromDay(fullDate);
          });
          setMonthlyDatesSelection(result);
          setMonthlySelectedTimeSlots(groupedSlots);
        }
      }
    };
    fetchSlots();
    fetchAvailability();
  }, [dispatch, month, professionalId, salonId, year]);

  useEffect(() => {
    if (period === scheduleTimePeriod.weekly) {
      const slotsData = weeklyDays?.reduce((acc, day) => {
        acc[day] = slots;
        return acc;
      }, {});

      setWeeklySelectedTimeSlots(slotsData);
    } else {
      const slotsData = monthlyDays?.reduce((acc, date) => {
        acc[date] = slots;
        return acc;
      }, {});

      setMonthlySelectedTimeSlots(slotsData);
    }
  }, [period, weeklyDays, monthlyDays, slots]);

  // useEffect(() => {
  //   if (period === scheduleTimePeriod.weekly) {
  //     const slotsData = weeklyDays?.reduce((acc, day) => {
  //       acc[day] = slots.map(slot => ({ ...slot, isNew: true }));
  //       return acc;
  //     }, {});

  //     setWeeklySelectedTimeSlots(slotsData);
  //   } else {
  //     const slotsData = monthlyDays?.reduce((acc, date) => {
  //       acc[date] = slots.map(slot => ({ ...slot, isNew: true }));
  //       return acc;
  //     }, {});

  //     setMonthlySelectedTimeSlots(slotsData);
  //   }
  // }, [period, weeklyDays, monthlyDays, slots]);

  const dataSet =
    schedulePeriod === scheduleTimePeriod.weekly
      ? weeklyDaysSelection
      : monthlyDatesSelection;
  const slotSets =
    schedulePeriod === scheduleTimePeriod.weekly
      ? weeklyTimeSlots
      : monthlyTimeSlots;
  const isWeekly = schedulePeriod === scheduleTimePeriod.weekly ? true : false;

  const handleWeeklyChange = selectedDays => {
    setWeeklyDaysSelection(selectedDays);
  };

  const handleMonthlyChange = selectedDays => {
    setMonthlyDatesSelection(selectedDays);
  };

  const handleSchedulePeriod = timePeriod => {
    setSchedulePeriod(timePeriod);
  };

  const handleSlotSelection = (date, slot) => {
    const updateSlots = prev => {
      const updatedSlots = {...prev};

      if (!updatedSlots[date]) {
        updatedSlots[date] = [{...slot, isNew: true}];
        // updatedSlots[date] = [slot]; // Add new date with slot
      } else {
        const slotIndex = updatedSlots[date].indexOf(slot);
        if (slotIndex > -1) {
          updatedSlots[date].splice(slotIndex, 1); // Remove slot
          if (updatedSlots[date].length === 0) {
            delete updatedSlots[date]; // Remove date if no slots left
          }
        } else {
          // updatedSlots[date] = [...updatedSlots[date], slot]; // Add slot
          updatedSlots[date] = [...updatedSlots[date], {...slot, isNew: true}];
        }
      }
      return updatedSlots;
    };

    isWeekly
      ? setWeeklySelectedTimeSlots(updateSlots)
      : setMonthlySelectedTimeSlots(updateSlots);
  };

  const handleUpdate = async () => {
    const slots = formatSlotsForAvailabilityUpdate(slotSets, schedulePeriod);
    const payload = {
      slots,
      scheduleRecur,
      schedulePeriod,
    };
    const response = await dispatch(updateProfessionalAvailability({professionalId, payload}));
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <Header
        title={'Eidt Professional'}
        showBackButton
        onBackPress={() => navigation.goBack()}
      />
      <KeyboardAwareScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}>
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
          <View style={{marginTop: 20}}>
            {dataSet?.length > 0 &&
              dataSet?.map((item, index) => {
                return (
                  <TimeSlotsDropDown
                    day={item}
                    availableSlots={salonSlotList}
                    selectedSlots={slotSets ? slotSets[item] : []}
                    handleSlotSelection={slot =>
                      handleSlotSelection(item, slot)
                    }
                  />
                );
              })}
          </View>

          <View style={styles.checkBoxContainer}>
            <LargeText text={'How long the schedule will be recur?'} />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              {changeScheduleStatus.map((item, index) => {
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

            {/* <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              {changeScheduleStatus.map((item, index) => {
                const isChecked = selectedOptions?.includes(item.id);
                return (
                  <CheckBox
                    item={item}
                    isChecked={isChecked}
                    setSelectedItems={setSelectedOptions}
                  />
                );
              })}
            </View> */}
            {/* <AppButton title={'Save'} onPress={() => {}} style={styles.smallButton} /> */}
          </View>
        </View>
      </KeyboardAwareScrollView>
      <AppButton
        title={'Update Professional'}
        onPress={
          handleUpdate
          // () => navigation.navigate('singleprofessionalProfile')
        }
        style={styles.button}
      />
    </SafeAreaView>
  );
};

export default EditProfessionalSchedule;
