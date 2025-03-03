import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import styles from './editProfessional.style';
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

const EditProfessionalSchedule = ({navigation, route}) => {
    
  const [selectedSlots, setSelectedSlots] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

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
          <ScheduleSelector />
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
                const isChecked = selectedItems.includes(item.id);
                return (
                  <CheckBox
                    item={item}
                    isChecked={isChecked}
                    setSelectedItems={setSelectedItems}
                  />
                );
              })}
            </View>
            <AppButton title={'Save'} onPress={() => {}} style={styles.smallButton} />
          </View>
          <AppButton title={'Save'} onPress={() => {}} style={styles.button} />
        </View>
     
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default EditProfessionalSchedule;
