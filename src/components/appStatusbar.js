import React from 'react';
import { StatusBar, View, StyleSheet, Platform } from 'react-native';
import colors from '../assets/colors';

const AppStatusBar = ({ backgroundColor = colors.white, barStyle = 'dark-content', translucent = false }) => {
  return (
    <View style={[styles.statusBar, { backgroundColor }]}>
      <StatusBar backgroundColor={backgroundColor} barStyle={barStyle} translucent={translucent} />
    </View>
  );
};

const styles = StyleSheet.create({
  statusBar: {
    // height: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});

export default AppStatusBar;
