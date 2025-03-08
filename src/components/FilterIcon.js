import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {MediumText} from './Typography';
import Filter from '../assets/svgs/filter-search.svg';
import colors from '../assets/colors';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const FilterIcon = props => {
  const {handleFilterPress , style ,filterInnerView} = props;
  return (
    <View style={[styles.filterView,style]}>
      <Pressable onPress={handleFilterPress} style={[styles.filterIconView,filterInnerView]}>
        <Filter />
        <MediumText text={'Filter'} style={styles.filterTextStyle} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  filterView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: hp(1.5),
  },
  filterIconView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.darkGray,
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderRadius: 7,
    gap: 5,
  },
  filterTextStyle: {
    fontWeight: '500',
    color: colors.lightBlack,
  },
});
export default FilterIcon;
