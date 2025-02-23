import React, {useState} from 'react';
import {View, StyleSheet, Switch, Text} from 'react-native';
import {LargeText, MediumText, SmallText} from './Typography';
import style from '../screens/chatView/chatView.Style';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import colors from '../assets/colors';
import {RFValue} from 'react-native-responsive-fontsize';
const LoyalityPoints = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const handleToggle = () => {
    setIsEnabled(previousState => !previousState);
  };

  return (
    <View style={styles.container}>
      <LargeText text={'Loyality Points'} style={styles.loyaltytext} />
      <View style={styles.row}>
        <SmallText
          text={'use loyalty points instead ?'}
          style={styles.smallText}
        />
        <Switch
          trackColor={{false: colors.inputGray, true: colors.primary}}
          thumbColor={isEnabled ? colors.white : colors.white}
          ios_backgroundColor={colors.lightGray}
          onValueChange={handleToggle}
          value={isEnabled}
          style={{transform: [{scaleX: 0.7}, {scaleY: 0.7}]}} // Reduce size by 20%
        />
      </View>

      <View style={styles.pointsContainer}>
        <MediumText text={300} style={styles.amountText} />
        <SmallText text={'points = SAR'} style={styles.smallText} />
        <MediumText text={300} style={styles.amountText} />
      </View>
      <SmallText text={'Insufficient loyalty points'} style={styles.smallText} />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: hp(1.5),
    marginHorizontal: wp(4),
    backgroundColor: colors.inputGray,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  loyaltytext: {
    textAlign: 'left',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  smallText: {
    color: colors.lightBlack,
    fontSize: RFValue(10),
  },
  pointsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop:hp(0.5)
  },
  amountText: {
    color: colors.primary,
  },
});
export default LoyalityPoints;
