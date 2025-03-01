import React ,{useState}from "react";
import { SafeAreaView, ScrollView, View,Text,TouchableOpacity, Pressable } from "react-native";
import styles from "./SlotsScreen.Style";
import { AppButton } from "../../components/appButton";
import Pluse from '../../assets/svgs/Pluse.svg'
import DatePickerComponent from "../../components/datePicker/datePicker";

const SlotsScreen = () => {



const [selectedTime, setSelectedTime] = useState("");

    const [slots, setSlots] = useState([{ id: 1, startTime: '00:00', endTime: '00:00' }]);

    const addMoreSlot = () => {
        setSlots([...slots, { id: slots.length + 1, startTime: '00:00', endTime: '00:00' }]);
    };

    const updateSlot = (id, key, value) => {
        setSlots(slots.map(slot => (slot.id === id ? { ...slot, [key]: value } : slot)));
    };

    return (
       
                <View style={styles.container}>
                <ScrollView>
                    {slots.map((slot) => (
                        <View key={slot.id} style={styles.slotContainer}>
                            <Text style={styles.slotLabel}>Slot {slot.id}</Text>
                            <View style={styles.timeRow}>
                            <View style={styles.timePickerContainer}>
                            <DatePickerComponent mode="time" onSelect={setSelectedTime} isworkingHours={true}/>
                            </View>
                            <View style={styles.timePickerContainer}>
                            <DatePickerComponent mode="time" onSelect={setSelectedTime} isworkingHours={true}/>
                            </View>
                            </View>
                        </View>
                    ))}

                   <View style={styles.addMoreView}>
                    <Pressable style={styles.addMoreButton} onPress={addMoreSlot}>
                       <Pluse/>
                        <Text style={styles.addMoreText}>Add More</Text>
                    </Pressable>
                    </View>


                    {/* <AppButton onPress={()=>{}} title="Next" style={styles.buttonStyle} /> */}
                  
                </ScrollView>
                </View>
                

            
        
    );
}

export default SlotsScreen;