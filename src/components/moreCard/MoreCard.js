import React from 'react';
import {Image, View, StyleSheet, Pressable} from 'react-native';
import RoundRightArrrow from '../../assets/svgs/round-arrowright.svg';
import colors from '../../assets/colors';
import fontsFamily from '../../assets/fontsFamily';
import {RFValue} from 'react-native-responsive-fontsize';
import {MediumText, SmallText} from '../Typography';


const MoreCard = props => {
  const {item, onPress} = props;
  const Icon = item.Icon;
  return (
    <Pressable onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.rowContainer}>
          <Icon/>
          <View style={styles.textContainer}>
            <MediumText text={item.name} />
            <SmallText text={item.value} style={styles.profession} />
          </View>
        </View>
        <View style={styles.arrowContainer}>
          <RoundRightArrrow />
        </View>
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.cardBG,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 6,
    gap: 5,
  },
  profileImage: {
    width: 45,
    height: 45,
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
    marginLeft: 12,
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profession: {
    color: colors.lightBlack,
    fontSize: RFValue(10),
    marginTop: 2,
  },
  arrowContainer: {
    marginRight: 5,
  },
  rating: {
    fontSize: RFValue(10),
    fontWeight: fontsFamily.bold,
    marginLeft: 5,
    color: colors.appBlack,
  },
});
export default MoreCard;
