import React from 'react';
import {StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import images from '../assets/images';
import colors from '../assets/colors';
import { LargeText, MediumText, SmallText } from './Typography';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';

const TodayBookings = (props) => {
    const {status} = props

  return (
    <View style={styles.wrapper}>
      <View style={styles.imageView}>
        <FastImage source={images.room} style={styles.imageStyle}/>
      </View>
      <View style={styles.textContainer}>
        <MediumText text={'Nigel Nigel'}/>
          <SmallText text={'Make-up'} style={styles.serviceStyle}/>
          <SmallText text={'Sep 10, 2024 - 9:10 AM'} style={[styles.serviceStyle, styles.dateStyle]}/>
      </View>

      <View style={{rowGap:5}}>
        <LargeText text={'SAR 200'} style={styles.priceStyle}/>
        <SmallText text={status} style={status==='Pending'?[styles.pendingStatus]: [styles.completedStatus]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingHorizontal:6,
    paddingVertical: 10,
    marginVertical:5,
  },
  imageView: {
    width: 65,
    height: 65,
    borderRadius: 8,
    overflow: 'hidden',
    alignSelf: 'flex-start',
  },
  imageStyle:{
    width:null,
    height:null,
    flex:1,
  },
  textContainer: {
    flex: 1,
    marginLeft: 12,
    alignSelf:'start',
  },
  serviceStyle:{
    color:colors.lightBlack,
    marginTop:hp(0.3)
  },
  dateStyle:{
    fontSize:RFValue(11)
  },
  priceStyle:{
    color:colors.primary
  },
  completedStatus:{
    color:colors.success,
    fontWeight:'normal',
  },
  pendingStatus:{
    color:colors.lightBlack,
    fontWeight:'normal',
  }

});

export default TodayBookings;
