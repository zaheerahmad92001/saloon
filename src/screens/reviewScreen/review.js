import React, { useState } from 'react';
import { View, SafeAreaView,Text } from 'react-native';

import Header from '../../components/appHeader';
import styles from './review.styles';
import CustomRating from '../../components/customRating';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {
  MediumText,
  XlargeText,
} from '../../components/Typography';
import UserReviewProfileCard from '../../components/userReviewProfileCard/userReviewProfileCard';
import { serviceData } from '../../staticData';

const Review = ({ navigation, route }) => {

  const [rating, setRating] = useState(3);

  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Review'} showBackButton={true} onBackPress={() => navigation.goBack()} />
    
        <View style={styles.wrapper}>
          <XlargeText text="Review" style={styles.title} />

          <View style={{ paddingVertical: hp(4) }}>
            <UserReviewProfileCard item={serviceData[0]} />
            <View style={styles.border}></View>

            <View style={{ marginTop: hp(0) }}>
              <CustomRating
                maxStars={5}
                rating={rating}
                onRatingChange={newRating => {
                  setRating(newRating);
                }}
              />
            </View>
          </View>

          <MediumText
            text="Customer Review"
            style={styles.customerReview}
          />
          <View style={styles.reviewBox}>
            <Text style={styles.reviewText}>
              Excellent experience
            </Text>
          </View>

        </View>
 
    </SafeAreaView>
  );
};

export default Review;
