import React from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import colors from '../../assets/colors';
import fontsFamily from '../../assets/fontsFamily';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { MediumText } from '../Typography';

const LanguageSelector = ({label, onSelect, selected}) => {
  return (
    <Pressable 
    onPress={() => onSelect(label)}
    style={styles.container}>
      <View style={[styles.radioCircle, selected && styles.selected]}>
        {selected && <View style={styles.radioCircleInner} />}
      </View>
      <MediumText text={label} style={styles.label}/>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    backgroundColor: colors.lightGray,
    paddingVertical:hp(1.8),
    paddingHorizontal: 15,
    borderRadius: 7,
  },
  radioCircle: {
    height: 25,
    width: 25,
    borderRadius: 12.5,
    borderWidth: 2.5,
    borderColor: colors.radioBorders,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    marginLeft: 8,
  },
  radioCircleInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.primary,
  },
  selected: {
    borderColor: colors.primary,
  },
  label: {
    color: colors.lightBlack,
    fontFamily: fontsFamily.medium,
    fontSize:RFValue(14),
    marginLeft:15
  },
});

export default LanguageSelector;
