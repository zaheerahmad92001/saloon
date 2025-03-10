import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './SlotsScreen.Style';
import {AppButton} from '../../components/appButton';
import Pluse from '../../assets/svgs/Pluse.svg';
import DatePickerComponent from '../../components/datePicker/datePicker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const SlotsScreen = () => {
  const [slots, setSlots] = useState([
    {id: Date.now(), startTime: '00:00', endTime: '00:00'},
  ]);

  const addMoreSlot = () => {
    setSlots([
      ...slots,
      {id: Date.now(), startTime: '00:00', endTime: '00:00'},
    ]);
  };

  const updateSlot = (value, id, field) => {
    setSlots(prevSlots =>
      prevSlots.map(slot =>
        slot.id === id ? {...slot, [field]: value} : slot,
      ),
    );
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        {slots.map((slot, index) => (
          <View key={slot.id} style={styles.slotContainer}>
            <Text style={styles.slotLabel}>Slot {index + 1}</Text>
            <View style={styles.timeRow}>
              <View style={styles.timePickerContainer}>
                <DatePickerComponent
                  mode="time"
                  onSelect={updateSlot}
                  isworkingHours={true}
                  slot={slot}
                  field={'startTime'}
                />
              </View>
              <View style={styles.timePickerContainer}>
                <DatePickerComponent
                  mode="time"
                  onSelect={updateSlot}
                  isworkingHours={true}
                  slot={slot}
                  field={'endTime'}
                />
              </View>
            </View>
          </View>
        ))}

        <View style={styles.addMoreView}>
          <Pressable style={styles.addMoreButton} onPress={addMoreSlot}>
            <Pluse />
            <Text style={styles.addMoreText}>Add More</Text>
          </Pressable>
        </View>
      </KeyboardAwareScrollView>
      <AppButton onPress={() => {}} title="Next" style={styles.buttonStyle} />
    </View>
  );
};

export default SlotsScreen;
