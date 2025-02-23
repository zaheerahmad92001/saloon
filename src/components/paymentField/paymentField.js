import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import colors from '../../assets/colors';
import fontsFamily from '../../assets/fontsFamily';
import Card from '../../assets/svgs/card.svg';
import User from '../../assets/svgs/user.svg';

const PaymentField = ({title, value, onChange, card = false, user = false}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.inputContainer}>
        {/* Icon can be replaced with an actual Icon component */}
        {card && <Card />}
        {user && <User />}
        <TextInput
          style={[styles.input, {marginLeft: card || user ? 5 : 0}]}
          value={value}
          onChangeText={onChange}
          placeholder="Enter details"
          keyboardType="numeric"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5,
    marginBottom: 15,
  },
  title: {
    fontSize: RFValue(12),
    fontFamily: fontsFamily.semiBold,
    marginBottom: 5,
    color: colors.appBlack,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.lightGray,
    borderRadius: 8,
    padding: 12,
  },
  input: {
    flex: 1,
    fontSize: RFValue(14),
    color: colors.lightBlack,
  },
});

export default PaymentField;
