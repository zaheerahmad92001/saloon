import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import fontsFamily from '../assets/fontsFamily';
import colors from '../assets/colors';

const TimeSlots = (props)=>{
    const {availableSlots ,selectedSlots,setSelectedSlots, title , isEdit=false ,handleSlotSelection} = props;
 const [selectedTime, setSelectedTime] = React.useState([]);

const toggleSelection = (slot) => {
  setSelectedTime((prevSelected) => {
    const newSelected = prevSelected.includes(slot)
      ? prevSelected.filter((item) => item !== slot)
      : [...prevSelected, slot];

    setSelectedSlots(newSelected); // Pass the updated state to the parent
    return newSelected;
  });
};

let isSelected = false;
    return(
        <View style={!isEdit? styles.timePicker : styles.timePicker2}>
          {!isEdit &&
        <Text style={styles.sectionTitle}>{title}</Text>
        }
        <View style={styles.times}>
          {availableSlots.map(time =>{
            // selectedSlotes passing from parent to child while  selectedTime is local state
            isSelected =isEdit ? selectedSlots?.includes(time): selectedTime.includes(time);
          return(
            <TouchableOpacity
              key={time}
              style={[
                styles.timeItem,
                isSelected && styles.selectedItem,
              ]}
              onPress={() => {
              isEdit?
              handleSlotSelection(time) :  // selecte slot with respect to date
              toggleSelection(time)
            }
              }>
              <Text
                style={[
                  styles.timeText,
                  isSelected && styles.selectedText,
                ]}>
                {time}
              </Text>
            </TouchableOpacity>
          )}
        )}
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
    timePicker: {
        marginTop: 20,
      },
      timePicker2: {
        marginTop: 0,
      },
      times: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      },
      timeItem: {
        padding: 10,
        marginHorizontal: 5,
        marginVertical:8,
        borderRadius: 10,
        backgroundColor: colors.lightGray,
        borderWidth: 1,
        borderColor: '#BBC0C3',
        width: '30%',
        alignItems: 'center',
      },
      timeText: {
        fontSize: RFValue(13),
        fontFamily:fontsFamily.regular,
        fontWeight:'500',
        color: colors.lightBlack,
      },
      selectedItem: {
        backgroundColor: colors.primary,
      },
      sectionTitle: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: hp(1.5),
      },
      selectedText: {
        color: colors.white,
      },
});

export default TimeSlots;
