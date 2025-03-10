import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

import TotalBookingIcon from '../assets/svgs/TotalBookingsIcon.svg';
import ServicesIcon from '../assets/svgs/ServicesIcon.svg';
import RevenueIcon from '../assets/svgs/RevenueIcon.svg';
import ReviewIcon from '../assets/svgs/ReviewIcon.svg';
import {MediumText, SmallText} from './Typography';
import colors from '../assets/colors';
import fontsFamily from '../assets/fontsFamily';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

const AnaqaPills = () => {

 const navigation = useNavigation()

const handleNavigation=(routeName)=>{
  navigation.navigate(routeName)
}


  return (
    <View>
      <View style={styles.overView}>
        <Pressable onPress={()=>handleNavigation('Booking')} style={styles.totalBookingView}>
          <TotalBookingIcon />
          <View style={styles.textlableValueView}>
            <SmallText text="Total Booking" style={styles.lableText} />
            <MediumText text={'56'} style={styles.ValueText} />
          </View>
        </Pressable>

        <Pressable onPress={()=>handleNavigation('payout')} style={styles.totalBookingView}>
          <RevenueIcon />
          <View style={styles.textlableValueView}>
            <Text style={styles.lableText}> Total Income</Text>
            <Text style={styles.ValueText}>SAR 2000</Text>
          </View>
        </Pressable>
      </View>

      <View style={styles.overView}>
        <Pressable onPress={()=>handleNavigation('serviceManagment')} style={styles.totalBookingView}>
          <ServicesIcon />
          <View style={styles.textlableValueView}>
            <Text style={styles.lableText}> Services</Text>
            <Text style={styles.ValueText}>08</Text>
          </View>
        </Pressable>

        <Pressable onPress={()=>handleNavigation('professionals')} style={styles.totalBookingView}>
          <ReviewIcon />
          <View style={styles.textlableValueView}>
            <Text style={styles.lableText}> Professional</Text>
            <Text style={styles.ValueText}>32</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 2,
    paddingVertical: 7,
  },
  totalBookingView: {
    backgroundColor: colors.white,
    borderRadius: 5,
    paddingVertical: 12,
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 25,
    width: wp('43%'),
  },
  textlableValueView: {
    marginLeft: 8,
  },
  lableText: {
    fontFamily: fontsFamily.regular,
    color: colors.lightBlack,
  },
  ValueText: {
    fontFamily: fontsFamily.medium,
    color: colors.appBlack,
    marginLeft: 6,
  },
});
export default AnaqaPills;
