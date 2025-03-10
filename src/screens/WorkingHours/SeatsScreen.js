import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './SeatsScreen.Style';
import {AppButton} from '../../components/appButton';
import TextField from '../../components/textField/textField';
import Pluse from '../../assets/svgs/Pluse.svg';
import {SmallText} from '../../components/Typography';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const SeatsScreen = () => {
  const [slots, setSlots] = useState([{id: Date.now(), seats: '3'}]);

  const addMoreSlot = () => {
    setSlots([...slots, {id: Date.now(), seats: ''}]);
  };

  const removeSlot = id => {
    setSlots(slots.filter(slot => slot.id !== id));
  };

  const handleInputChange = (id, field, value) => {
    setSlots(prevState =>
      prevState.map(slot =>
        slot.id === id ? {...slot, [field]: value} : slot,
      ),
    );
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        {slots.map((slot, index) => (
          <View key={slot.id} style={styles.slotContainer}>
            <View style={styles.subServiceHeader}>
              <SmallText
                text={`Slot ${index + 1}: Available seats`}
                style={styles.label}
              />

              {/* <Pressable onPress={() => removeSlot(slot.id)}>
                <SmallText text={'Remove'} style={styles.removeText} />
              </Pressable> */}
            </View>

            <TextField
              placeholder={'Seats'}
              value={slot.seats}
              onChangeText={value => handleInputChange(slot.id, 'seats', value)}
              keyboardType={'number-pad'}
              style={[styles.inputFields, styles.halfWidth]}
            />
          </View>
        ))}

        <View style={styles.addMoreView}>
          <Pressable style={styles.addMoreButton} onPress={addMoreSlot}>
            <Pluse />
            <Text style={styles.addMoreText}>Add More</Text>
          </Pressable>
        </View>
      </KeyboardAwareScrollView>
      <AppButton onPress={() => {}} title="Save" style={styles.buttonStyle} />
    </View>
  );
};
export default SeatsScreen;
