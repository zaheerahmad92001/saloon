import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import colors from '../assets/colors';

const DottedLine = () => {
  return <View style={styles.dottedLine} />;
};

const styles = StyleSheet.create({
  dottedLine: {
    marginVertical: 4,
    borderWidth: 1,
    borderColor: colors.gray,
    borderStyle: 'dashed',
  },
});

export default DottedLine;
