import React, { useState } from "react";
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, TextInput, Pressable } from "react-native";
import styles from "./SeatsScreen.Style";
import { AppButton } from "../../components/appButton";
import TextField from '../../components/textField/textField';
import Pluse from '../../assets/svgs/Pluse.svg'
const SeatsScreen = () => {

    const [slots, setSlots] = useState([{ id: 1, seats: '3' }]);

    const addMoreSlot = () => {
        setSlots([...slots, { id: slots.length + 1, seats: '3' }]);
    };

    const updateSeats = (id, value) => {
        setSlots(slots.map(slot => (slot.id === id ? { ...slot, seats: value } : slot)));
    };

    return (


        <View style={styles.container}>
            <ScrollView>
                {slots.map((slot) => (
                    <View key={slot.id} style={styles.slotContainer}>
                        {/* <Text style={styles.slotLabel}>Slot {slot.id}: Available seats</Text> */}
                        <TextField
                            label={`Slot ${slot.id}: Available seats`}
                            placeholder={'Seats'}
                            value={slot.seats}
                            style={[styles.inputFields, styles.halfWidth]}
                        />
                        {/* <TextInput
                                value={slot.seats}
                                onChangeText={(value) => updateSeats(slot.id, value)}
                                keyboardType="numeric"
                                style={styles.input}
                            /> */}
                    </View>
                ))}


                <View style={styles.addMoreView}>
                    <Pressable style={styles.addMoreButton} onPress={addMoreSlot}>
                        <Pluse />
                        <Text style={styles.addMoreText}>Add More</Text>
                    </Pressable>
                </View>


                

                {/* Save Button */}
                {/* <AppButton onPress={()=>{}} title="Save" style={styles.buttonStyle} /> */}
            </ScrollView>


        </View>

    );
}
export default SeatsScreen;