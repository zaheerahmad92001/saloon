import React, { useState } from 'react';
import { View, StyleSheet, Pressable  } from 'react-native';
import DownArrow from '../assets/svgs/down-arrow-light-black.svg';
import UpArrow from '../assets/svgs/up-arrow.svg';
import { LargeText } from './Typography';
import colors from '../assets/colors';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import TimeSlots from './timeSlots';
import { AvailableTimeSlots } from '../staticData';

const TimeSlotsDropDown = (props)=>{
    const [isOpen, setIsOpen] = useState(false);
    const {selectedSlots ,handleSlotSelection, day} = props;

    return(
        <View>
        <View style={styles.card}>
        <Pressable
          onPress={() => setIsOpen(!isOpen)}
          style={styles.questionContainer}>
            <LargeText text={day} style={styles.question}/>
          {isOpen ? (
            <UpArrow/>
          ) : (
            <DownArrow/>
          )}
        </Pressable>
      </View>
      {isOpen &&
       <TimeSlots
            title={'Time slot'}
            availableSlots={AvailableTimeSlots}
            selectedSlots={selectedSlots}
            hand
            leSlotSelection={handleSlotSelection}
            isEdit={true}
          />
        }
      </View>
    );
};

const styles = StyleSheet.create({
    card: {
        marginTop:heightPercentageToDP(0.5),
        marginBottom:heightPercentageToDP(1),
        paddingHorizontal: 10,
        paddingVertical: 16,
        backgroundColor: colors.white,
        borderRadius: 8,
      },
      questionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      question: {
        textAlign:'left',
        fontWeight:'500',
        color:colors.appBlack,
      },
});

export default TimeSlotsDropDown;
