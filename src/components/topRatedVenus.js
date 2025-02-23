import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Rating} from 'react-native-ratings';
import colors from '../assets/colors';
import FastImage from 'react-native-fast-image';
import images from '../assets/images';
import {
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import {MediumText, SmallText} from './Typography';
import fontsFamily from '../assets/fontsFamily';
import FavourSelector from './favouriteSelector';

const TopRatedVenus = props => {
  const {onFavorite, selected} = props;
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <FastImage
          source={images.toprated}
          resizeMode={FastImage.resizeMode.contain}
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        <View>
          <MediumText text={'Smart Cut Salon'} style={styles.nameStyle} />
          <SmallText text={'Services: 08'} style={styles.serviceStyle} />
        </View>
        <View style={{alignSelf: 'flex-start'}}>
          <FavourSelector
          onFavorite={onFavorite}
          selected={selected}
          />
        </View>
      </View>
      <View style={[styles.textContainer]}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Rating
          type="custom"
          ratingColor={colors.darkYellow}
          ratingBackgroundColor={colors.confirmYellowLight}
          ratingCount={5}
          imageSize={15}
          startingValue={3.5}
          onFinishRating={() => {}}
        />
        <SmallText text={'4.5'} style={styles.ratingStyle} />
        </View>
        <View>
            <SmallText text={'12 Km'} style={styles.ratingStyle} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 10,
    width: 'auto',
    // borderColor: colors.gray,
    // borderWidth: 0.5,
    borderRadius: 10,
  },
  imageContainer: {
    width: 164,
    height: 109,
    borderRadius: 15,
    overflow: 'hidden',
  },
  image: {
    width: null,
    height: null,
    flex: 1,
  },
  textContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nameStyle: {
    fontFamily: fontsFamily.Pbold,
    // fontWeight: '600',
  },
  serviceStyle: {
    fontFamily: fontsFamily.Pregular,
    fontWeight: '500',
    color: colors.lightBlack,
    marginTop: heightPercentageToDP(0.4),
  },
  
  ratingStyle: {
    marginLeft: 8,
    fontFamily: fontsFamily.Pregular,
    fontWeight: '500',
    color: colors.lightBlack,
  },
});
export default TopRatedVenus;
