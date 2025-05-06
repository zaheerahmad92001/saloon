import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './SeatsScreen.Style';
import {AppButton} from '../../components/appButton';
import TextField from '../../components/textField/textField';
import Pluse from '../../assets/svgs/Pluse.svg';
import {SmallText} from '../../components/Typography';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch, useSelector} from 'react-redux';
import {addSlots} from '../../redux/actions/professionalsAction';
import { useNavigation } from '@react-navigation/native';

const SeatsScreen = () => {

  const navigation = useNavigation()
  const [seats, setSeats] = useState([{id: Date.now(), seats: '3'}]);
  const {slotData} = useSelector(state => state.slots);
  const {addSlotsInProgress} = useSelector((state)=>state.professionals)
  
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  const addMoreSlot = () => {
    setSeats([...seats, {id: Date.now(), seats: ''}]);
  };

  const removeSlot = id => {
    setSeats(seats.filter(seat => seat.id !== id));
  };

  const handleInputChange = (id, field, value) => {
    setSeats(prevState =>
      prevState.map(seat =>
        seat.id === id ? {...seat, [field]: value} : seat,
      ),
    );
  };

  const handleSave = async () => {
    const slotLength = slotData.length;
    const seatLength = seats.length;
    const minLength = Math.min(slotLength, seatLength);

    // Show message if lengths mismatch
    if (slotLength !== seatLength) {
      const extraData =
        slotLength > seatLength
          ? `${slotLength - seatLength} slot(s)`
          : `${seatLength - slotLength} seat(s)`;

      console.warn(
        `Note: ${extraData} could not be included because the number of slots and seats do not match. Only the first ${minLength} pair(s) will be merged.`,
      );
    }

    const merged = [];

    for (let i = 0; i < minLength; i++) {
      merged.push({
        startTime: slotData[i].startTime,
        endTime: slotData[i].endTime,
        seats: seats[i]?.seats ? parseInt(seats[i].seats) : 0,
      });
    }

    const payload = {
      salonId: user?.id,
      slots: merged,
    };
    const response = await dispatch(addSlots(payload)).unwrap();
    if(response?.salonId){
      navigation.goBack()
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        {seats.map((slot, index) => (
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
      <AppButton
        onPress={handleSave}
        title="Save"
        isLoading={addSlotsInProgress}
        style={styles.buttonStyle}
      />
    </View>
  );
};
export default SeatsScreen;
