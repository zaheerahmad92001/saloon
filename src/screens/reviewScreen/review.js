import React, { useState } from 'react';
import { View, Image, SafeAreaView, Platform, TextInput, Text } from 'react-native';
import RadioButton from '../../components/radioButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import images from '../../assets/images';
import Header from '../../components/appHeader';
import TextField from '../../components/textField/textField';
import styles from './review.styles';
import CustomRating from '../../components/customRating';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {
  LargeText,
  MediumText,
  XlargeText,
} from '../../components/Typography';
import { AppButton } from '../../components/appButton';
import colors from '../../assets/colors';
import UserReviewProfileCard from '../../components/userReviewProfileCard/userReviewProfileCard';
import { serviceData } from '../../staticData';

const Review = ({ navigation, route }) => {
  const [review, setReview] = useState('');
  const [recommend, setRecommend] = useState(null);
  const [scrollEnabled, setScrollEnabled] = useState(true);
  const [rating, setRating] = useState(3);

  const handleSubmit = () => {
    console.log({ rating, review, recommend });
    // Submit logic goes here
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Review'} showBackButton={true} onBackPress={() => navigation.goBack()} />
      <KeyboardAwareScrollView
        style={{ flex: 1 }}
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled={scrollEnabled}
        keyboardShouldPersistTaps="handled"
        onContentSizeChange={(contentWidth, contentHeight) => {
          const screenHeight = Platform.OS === 'ios' ? 600 : 600;
          setScrollEnabled(contentHeight > screenHeight);
        }}>
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
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Review;
