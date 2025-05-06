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
import { useSelector } from 'react-redux';


const AnaqaPills = () => {

 const navigation = useNavigation()
   const {overViewData} = useSelector((state)=>state.dashboard)

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
            <MediumText text={overViewData?.noOfBookings} style={styles.ValueText} />
          </View>
        </Pressable>

        <Pressable onPress={()=>handleNavigation('payout')} style={styles.totalBookingView}>
          <RevenueIcon />
          <View style={styles.textlableValueView}>
            <Text style={styles.lableText}> Total Income</Text>
            <MediumText text={`SAR ${overViewData?.totalIncome}`} style={styles.ValueText} />
            {/* <Text style={styles.ValueText}>{`SAR ${overViewData?.totalIncome}`}</Text> */}
          </View>
        </Pressable>
      </View>

      <View style={styles.overView}>
        <Pressable onPress={()=>handleNavigation('serviceManagment')} style={styles.totalBookingView}>
          <ServicesIcon />
          <View style={styles.textlableValueView}>
            <Text style={styles.lableText}> Services</Text>
            {/* <Text style={styles.ValueText}>{overViewData?.noOfServices}</Text> */}
            <MediumText text={overViewData?.noOfServices} style={styles.ValueText} />

          </View>
        </Pressable>

        <Pressable onPress={()=>handleNavigation('professionals')} style={styles.totalBookingView}>
          <ReviewIcon />
          <View style={styles.textlableValueView}>
            <Text style={styles.lableText}> Professional</Text>
            {/* <Text style={styles.ValueText}>{overViewData?.noOfProfessionals}</Text> */}
            <MediumText text={overViewData?.noOfProfessionals} style={styles.ValueText} />

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
    fontFamily: fontsFamily.regular,
    color: colors.appBlack,
    fontSize:13,
    marginLeft: 6,
    fontWeight:'600',
  },
});
export default AnaqaPills;
