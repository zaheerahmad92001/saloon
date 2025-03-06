import React from 'react';
import {View, StyleSheet} from 'react-native';
import colors from '../assets/colors';
import {MediumText, SmallText} from './Typography';
import Label from '../assets/svgs/Label.svg';
import Star from '../assets/svgs/star.svg';
import { heightPercentageToDP } from 'react-native-responsive-screen';

const ServiceEstTime = () => {
  return (
    <View style={styles.wrapper}>

      <View style={styles.content}>
        <MediumText text={'Facial'} />
        <Label />
      </View>

      <View style={[styles.content,{marginTop:heightPercentageToDP(1)}]}>
        <View style={styles.rowView}>
          <SmallText text={'Estimated Time:'} />
          <SmallText text={'30 Mins'} style={styles.grayText} />
        </View>
        <View style={styles.rowView}>
          <Star />
          <SmallText text={'4.7'} />
          <SmallText text={'( 312 )'} style={styles.grayText} />
        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.white,
    paddingHorizontal: 12,
    paddingVertical: 15,
    borderRadius: 10,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
  grayText: {
    color: colors.lightBlack,
  },
});

export default ServiceEstTime;
