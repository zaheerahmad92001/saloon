import {View, Text, Image, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import images from '../../assets/images';
import {LargeText, MediumText, SmallText, XlargeText} from '../Typography';
import CustomRating from '../customRating';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import colors from '../../assets/colors';
import fontsFamily from '../../assets/fontsFamily';
import {RFValue} from 'react-native-responsive-fontsize';

const RatingModal = () => {
  const [rating, setRating] = useState(3);
  return (
    <View style={{marginHorizontal: wp(7)}}>
      <View style={styles.imageView}>
        <Image
          source={images.room} // Replace with your salon image
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <XlargeText text="Mira Ekstrom" style={styles.title} />
      <MediumText
        text="Appointment:  16 sep 2024, 9:24Am"
        style={styles.subTitle}
      />
      <SmallText
        text="Rate your salon professional to ensure top-quality service."
        style={styles.description}
      />

      <View style={{marginVertical: hp(1.5)}}>
        <CustomRating
          maxStars={5}
          rating={rating}
          onRatingChange={newRating => {
            setRating(newRating);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    marginBottom: 15,
  },
  subTitle: {
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
    color: colors.lightBlack,
    fontsFamily: fontsFamily.semiBold,
    fontSize: RFValue(12),
  },
  image: {
    width: null,
    height: null,
    flex: 1,
  },
  imageView: {
    width: 75,
    height: 75,
    overflow: 'hidden',
    alignSelf: 'center',
    borderRadius: 10,
    marginBottom: 10,
    marginTop: hp(3),
  },
});

export default RatingModal;
