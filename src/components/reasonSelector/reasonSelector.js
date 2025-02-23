import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Pressable} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import { Divider } from 'react-native-paper';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../../assets/colors';
import fontsFamily from '../../assets/fontsFamily';

const ReasonSelector = ({label, onSelect, selected}) => {
  return (
    <>    
    <Pressable style={styles.container} onPress={() => onSelect(label)}>
      <View style={[styles.radioCircle, selected && styles.selected]}>
        {selected && <View style={styles.radioCircleInner} />}
      </View>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
    <Divider style={styles.divider} />
    </>

  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    // borderBottomWidth: 1,
    // borderColor: colors.gray,
    paddingVertical: 10,
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
    marginLeft: 5,
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
    fontSize: RFValue(14),
    color: colors.lightBlack,
    fontFamily: fontsFamily.regular,
    fontWeight:'500',
    marginLeft:8
  },
  divider: {
      borderWidth: 0.1,
    },
});

export default ReasonSelector;
