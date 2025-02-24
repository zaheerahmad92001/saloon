import React from 'react';
import {View, Image, StyleSheet, Pressable} from 'react-native';
import colors from '../../assets/colors';
import fontsFamily from '../../assets/fontsFamily';
import {RFValue} from 'react-native-responsive-fontsize';
import {MediumText, SmallText} from '../Typography';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const CustomersCard = props => {
  const {item, handleOnPress} = props;
  const {name, cancelCount, completedCount, pendingCount ,  image, todaysBooking} =
    item;

  return (
    <Pressable onPress={handleOnPress} style={styles.cardContainer}>
     
      <View style={styles.cardImage}>
        <Image source={image} style={styles.imageStyle} />
      </View>

      <View style={styles.cardContent}>
        <View style={styles.nameContainer}>
          <View style={[styles.nameView]}>
            <MediumText
              text={name ? name : 'Paityn Lipshut'}
              style={styles.cardTitle}
            />
          </View>
          <View style={[styles.staticsView]}>
            <View style={styles.greenDotView}></View>
            <View style={styles.statics}>
              <SmallText text={'Completed:'} style={[styles.distanceText,{width:'77%'}]}/>
              <SmallText text={'14'} style={styles.distanceText}/>
            </View>
          </View>
        </View>

        <View style={[styles.nameContainer,{marginTop:hp(0.7)}]}>
          <View style={styles.nameView}>
            <SmallText text={'Todays Booking: 21'} style={[styles.cardLocation]}/>
          </View>
          <View style={styles.staticsView}>
            <View style={styles.redDotView}></View>

            <View style={styles.statics}>
            <SmallText text={cancelCount?cancelCount:'Cancelled:'} style={[styles.distanceText,{width:'77%'}]}/>
            <SmallText text={'07'} style={styles.distanceText}/>
            </View>
            
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 10,
    marginBottom: hp(1.5),
    alignItems: 'center',
    justifyContent:'center',
    marginHorizontal: 1,
  },
  cardImage: {
    width: 65,
    height: 65,
    borderRadius: 8,
    overflow: 'hidden',
    alignSelf: 'flex-start',
  },
  imageStyle: {
    width: null,
    height: null,
    flex: 1,
  },
  cardContent: {
    flex: 1,
    marginHorizontal:12,
  },
  cardTitle: {
    fontFamily: fontsFamily.medium,
    fontSize: RFValue(14),
    maxWidth: '95%',
  },
  cardLocation: {
    color: colors.lightBlack,
  },
  nameView: {
    flex: 0.6,
    flexWrap: 'wrap',
  },
  distanceText: {
    color: colors.lightBlack,
    fontFamily: fontsFamily.extraLight,
    alignSelf: 'flex-start',
    fontWeight: '400',
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  staticsView: {
    flex: 0.4,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    alignSelf: 'flex-start',
  },
  statics: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
});

export default CustomersCard;
