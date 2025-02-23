import React from 'react';
import {View, StyleSheet, Pressable, Platform} from 'react-native';
import MapMarker from '../assets/svgs/location-color.svg';
import DownArrow from '../assets/svgs/down-arrow.svg';
import NotificationBell from '../assets/svgs/notification-bing.svg';
import LikeIcon from '../assets/svgs/heart-like.svg';
import {MediumText, SmallText} from './Typography';
import colors from '../assets/colors';
import fontsFamily from '../assets/fontsFamily';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const HomeHeader = (props) => {
  const {location, onLocationPress , onFavoritePress , onNotificationPress} = props;
  return (
    <View style={styles.container}>
      <Pressable 
      onPress={onLocationPress}
      style={styles.locationContainer}>
        {/* <MapMarker /> */}
        <View style={styles.locInnerView}>
          <SmallText text={'Welcome'} style={styles.smallText} />
          <View style={styles.locationContainer}>
            <MediumText
              text={location?location:'Giana Lipshuts'}
              style={styles.mediumText}
            />
            {/* <DownArrow /> */}
          </View>
        </View>
      </Pressable>

      <View style={styles.row}>
        <Pressable onPress={onNotificationPress}>
          <NotificationBell/>
          <View style={styles.badgeContainer}>
            <SmallText text={'12'} style={styles.badgeText} />
          </View>
        </Pressable>

        {/* <Pressable onPress={onFavoritePress}>
          <LikeIcon />
          <View style={styles.badgeContainer}>
            <SmallText text={'12'} style={styles.badgeText} />
          </View>
        </Pressable> */}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: colors.white,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: wp(50),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(6),
  },

  smallText: {
    color: colors.lightBlack,
    fontFamily: fontsFamily.regular,
    fontWeight: '500',
  },
  mediumText: {
    color: colors.appBlack,
    fontFamily: Platform.OS==='android'? fontsFamily.regular: fontsFamily.thin,
    fontWeight: '500',
  },
  locInnerView: {
    marginLeft: wp(2.5),
  },
  badgeContainer: {
    backgroundColor: colors.error,
    width: 21,
    height: 21,
    borderRadius: 21 / 2,
    position: 'absolute',
    left: 15,
    top: -10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.white,
  },
  badgeText: {
    color: colors.white,
    fontFamily: Platform.OS==='android'?fontsFamily.regular: fontsFamily.thin,
  },
});

export default HomeHeader;
