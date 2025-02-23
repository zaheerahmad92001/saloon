import React from 'react';
import {Platform, Pressable, StyleSheet, Text, View} from 'react-native';
import FilterIcon from '../assets/svgs/candle.svg';
import colors from '../assets/colors';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Marker from '../assets/svgs/location-color.svg';

const LocationPicker = props => {
  const {location, handleOnPress, handleFilterPress} = props;
  return (
    <View style={styles.searchBarContainer}>
      <Pressable onPress={handleOnPress} style={[styles.searchBar]}>
        <Marker />
        <Text style={styles.input}>{location}</Text>
      </Pressable>
      <Pressable onPress={handleFilterPress} style={styles.button}>
        <FilterIcon />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.lightGray,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: Platform.OS === 'android' ? 0 : 10,
    width: wp(80),
    borderWidth: 1,
    borderColor: colors.gray,
  },

  button: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 7,
    paddingVertical: 7,
    marginLeft: 5,
    borderWidth: 1,
    borderColor: colors.gray,
  },
});

export default LocationPicker;
