import React from 'react';
import { View, Image, StyleSheet, Pressable } from 'react-native';
import images from '../../assets/images';
import colors from '../../assets/colors';
import fontsFamily from '../../assets/fontsFamily';
import { RFValue } from 'react-native-responsive-fontsize';
import { LargeText, SmallText } from '../Typography';


const StaticsProfessionalCard = (props) => {
  const { onClick , showServiceCount = true } = props;
  return (
    <Pressable onPress={onClick}>
      <View style={[styles.card]}>
        <View style={styles.imageContainer}>
        <Image source={images.room} style={styles.avatar} />
        </View>
        <View style={[styles.infoContainer, !showServiceCount && {rowGap:7}]}>
          <LargeText text={'Paityn Lipshutz '} style={styles.name} />
          {showServiceCount &&
            <SmallText text={'No of Services: 221'} style={styles.details} />
          }
          <SmallText text={'Total Bookings: 89'} style={styles.details} />
        </View>
        <View style={styles.statusContainer}>
          <View style={styles.dotedViewAndText}>
            <View style={styles.greenDotView} />
            <SmallText text={'Completed:34'} style={styles.statusText} />
          </View>
          <View style={styles.dotedViewAndText}>
            <View style={styles.redDotView} />
            <SmallText text={'Pending:23'} style={styles.statusText} />


          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    padding: 10,
    marginVertical: 5,
    marginTop: 10,
    borderRadius: 10,
    alignItems: 'center',
  },

  avatar: {
    width:null,
    height: null,
    flex:1,
  },
  infoContainer: {
    flex: 1,
    rowGap:3,
  },
  name: {
    fontSize: RFValue(11),
    fontFamily: fontsFamily.bold,
  },
  details: {
    fontSize: RFValue(11),
    fontFamily: fontsFamily.regular,
    color: colors.lightBlack,
  },
  statusContainer: {
    alignItems: 'flex-start',

  },
  statusText: {
    fontSize: RFValue(11),
    color: colors.lightBlack,
    fontFamily: fontsFamily.regular,
  },

  greenDotView: {
    backgroundColor: colors.green,
    height: 10,
    width: 10,
    borderRadius: 3,
  },
  redDotView: {
    backgroundColor: colors.red,
    height: 10,
    width: 10,
    borderRadius: 3,
  },
  dotedViewAndText: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 3,
  },
  imageContainer:{
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 10,
    overflow:'hidden',
    alignSelf:'flex-start',
  }
});

export default StaticsProfessionalCard;
