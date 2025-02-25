import React, {useState} from 'react';
import {Text, Pressable, StyleSheet} from 'react-native';
import {MediumText, XlargeText} from './Typography';
import colors from '../assets/colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';
import fontsFamily from '../assets/fontsFamily';

const BookingStatics = (props) => {

  const {item,index ,selectedIndex , setSelectedIndex} = props;
  const selectedTab = index===selectedIndex

  const handleOnPress = selectedIndex => {
    setSelectedIndex(selectedIndex); // Passing back to parent
  };

  return (
    <Pressable
      onPress={() => handleOnPress(index)}
      style={[styles.box, selectedTab && styles.selectedBox]}>
      <MediumText text={item.name} style={styles.statusText} />
      <XlargeText text={item.value} style={styles.innerTextValue}/>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  box: {
    width: wp(31),
    height: hp(10),
    backgroundColor: colors.white,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.white,
    marginBottom: 0,
    marginHorizontal: 6,
    padding: 15,
  },
  selectedBox: {
    backgroundColor: colors.lightPrimary,
    borderColor: colors.primary,
  },
  statusText: {
    fontSize: RFValue(12),
    color: colors.lightBlack,
  },
  innerTextValue: {
    marginTop: hp(1),
    fontSize: RFValue(16),
    
    color: colors.appBlack,
    
  },
});

export default BookingStatics;
