import React from 'react';
import {ActivityIndicator, Pressable, StyleSheet, Text} from 'react-native';
import colors from '../assets/colors';
import {RFValue} from 'react-native-responsive-fontsize';
import fontsFamily from '../assets/fontsFamily';

const AppButton = props => {
  const {onPress, title, style, textstyle,isLoading} = props;
  return (
    <Pressable onPress={isLoading ? ()=>{} : onPress} style={[styles.wrapper, style]}>
      {isLoading? 
      <ActivityIndicator color={colors.white} size={'small'}/>
      :
      <Text style={[styles.buttonText, textstyle]}>{title}</Text>
    }
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    borderRadius: 6,
    borderColor: colors.primary,
    borderWidth: 1,
    marginTop: 'auto',
  },
  buttonText: {
    color: colors.white,
    fontSize: RFValue(13), // Updated to RFValue
    textAlign: 'center',
    fontWeight: '500',
    fontFamily: fontsFamily.regular,
  },
});
export {AppButton};
