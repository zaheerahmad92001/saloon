import React, { forwardRef } from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import colors from '../../assets/colors';
import fontsFamily from '../../assets/fontsFamily';

const TextField = forwardRef((props, ref) => {
  const { label, placeholder, onChangeText, value, style, inputStyle, ...otherProps } = props;
  return (
    <View style={[styles.container, style]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        ref={ref} // Attach ref correctly
        style={[styles.input, inputStyle]}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        placeholderTextColor={colors?.placeholderColor || 'gray'} // Ensure colors exist
        {...otherProps}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
  },
  label: {
    fontSize: RFValue(13),
    color: colors.appBlack,
    fontFamily: fontsFamily.medium,
    fontWeight:'400',
    marginBottom: 8,
  },
  input: {
     height: 50,
    paddingVertical:12,
    borderRadius:8,
    paddingHorizontal: 15,
    fontSize: RFValue(12),
    fontFamily: fontsFamily.regular,
    backgroundColor: colors.inputGray,
    width: '100%',
    color: colors.lightBlack,
  },
});

export default TextField;
