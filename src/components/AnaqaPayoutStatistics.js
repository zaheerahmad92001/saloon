import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {MediumText, SmallText, XlargeText} from './Typography';
import TradeUp from '../assets/svgs/trade-up-arrow.svg';
import Filter from '../assets/svgs/filter-search.svg';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import colors from '../assets/colors';

const AnaqaPayoutStatistics = props => {
  const {handleFilterPress} = props;
  return (
    <View style={[styles.rowWrap, styles.spaceBetween]}>
      <View style={styles.rowWrap}>
        <XlargeText text={'SAR 500'} />
        <View style={styles.TradeUpView}>
          <SmallText text={'16%'} style={styles.tradeText} />
          <TradeUp />
        </View>
      </View>

      <View style={styles.filterView}>
        <Pressable onPress={handleFilterPress} style={styles.filterIconView}>
          <Filter />
          <MediumText text={'Filter'} style={styles.filterTextStyle} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rowWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  spaceBetween: {
    justifyContent: 'space-between',
    marginHorizontal: wp(3),
  },
  TradeUpView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    backgroundColor: colors.confirmYellowLight,
    width: wp(15),
    borderRadius: 5,
  },
  tradeText: {
    color: colors.confirmYellow,
  },

  filterView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  filterIconView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.darkGray,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 7,
    gap: 5,
  },
  filterTextStyle: {
    fontWeight: '500',
    color: colors.lightBlack,
  },
});

export default AnaqaPayoutStatistics;
