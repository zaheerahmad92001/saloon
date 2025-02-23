import React from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import Close from '../../assets/svgs/close.svg';
import Clock from '../../assets/svgs/clock.svg';
import {MediumText, SmallText} from '../Typography';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import colors from '../../assets/colors';
import {openingHours} from '../../staticData';

const OpeningHours = props => {
  const {onClose} = props;
  return (
    <View>
      <Pressable onPress={onClose} style={styles.header}>
        <MediumText text={'Opening Hours'} />
        <Close />
      </Pressable>

      <View style={styles.innerContainer}>
        {openingHours.map((item, index) => {
          const isClose = item.day === 'Sunday' ? true : false;
          return (
            <React.Fragment>
              <SmallText text={item.day} style={styles.dayText} />
              <View style={styles.row}>
                <Clock />
                <SmallText
                  text={item.time}
                  style={
                    isClose
                      ? [styles.text, {color: colors.error}]
                      : [styles.text]
                  }
                />
              </View>
            </React.Fragment>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginTop: hp(1),
  },
  innerContainer: {},
  dayText: {
    fontWeight: '500',
    marginTop: hp(1),
  },
  text: {
    color: colors.lightBlack,
    fontWeight: '500',
  },
});
export default OpeningHours;
