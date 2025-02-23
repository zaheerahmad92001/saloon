import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import fontsFamily from '../assets/fontsFamily';
import {RFValue} from 'react-native-responsive-fontsize';
import colors from '../assets/colors';
import MapIcon from '../assets/svgs/map.svg';
import FastImage from 'react-native-fast-image';
import images from '../assets/images';

const SearchResultStats = () => {
  return (
    <View>
      <View style={styles.searchResultView}>
        <Text style={styles.recentSearch}>
          Results "<Text style={styles.searchTextTitle}>Salon</Text>"
        </Text>
        <Text style={styles.searchesFound}>12,324 found</Text>
      </View>
      <View style={styles.searchResultView}>
        <Text style={styles.map}>View on Map</Text>
        <TouchableOpacity style={styles.button}>
        <MapIcon/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchResultView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  recentSearchTitle: {
    fontSize: RFValue(16),
    fontWeight: '500',
    fontFamily: fontsFamily.semiBold,
    color: colors.appBlack,
    marginBottom: 8,
    marginTop: 10,
  },
  searchTextTitle: {
    fontSize: RFValue(16),
    fontFamily: fontsFamily.medium,
    color: colors.primary,
  },
  searchesFound: {
    color: colors.primary,
    fontSize:RFValue(13),
    fontFamily: fontsFamily.regular,
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 4,
    paddingVertical: 4,
    marginLeft: 5,
    borderWidth: 1,
    borderColor: colors.gray,
  },
  recentSearch: {
    fontSize: RFValue(16),
    fontFamily: fontsFamily.medium,
    color:colors.appBlack,
    marginBottom: 8,
    marginTop: 10,
  },
  map: {
    color: colors.primary,
    fontSize: RFValue(14),
    fontFamily: fontsFamily.regular,
  },
});
export default SearchResultStats;
