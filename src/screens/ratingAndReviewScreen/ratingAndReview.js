import React from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import style from './ratingAndReview.style';
import RatingHeaderCard from '../../components/RatingHeaderCard/RatingHeaderCard';
import Header from '../../components/appHeader';
import { MediumText, SmallText } from '../../components/Typography';
import { AirbnbRating } from 'react-native-ratings';
import colors from '../../assets/colors';

const RatingAndReview = ({navigation, rotue}) => {
  const ratingsData = [
    {stars: 5, count: 180},
    {stars: 4, count: 80},
    {stars: 3, count: 30},
    {stars: 2, count: 15},
    {stars: 1, count: 7},
  ];

  const totalRatings = ratingsData.reduce((acc, item) => acc + item.count, 0);

  const renderHeaderComponent = () => {
    return (
      <View>
        <RatingHeaderCard item={ratingsData} totalRating={totalRatings} />
        <View style={style.divider} />
        <View style={style.totalReviews}>
          <SmallText text={`${totalRatings} Reviews`}  style={style.reviewText}/> 
          <SmallText text={'Most Relevant'} style={style.mostRelevent}/>
        </View>
      </View>
    );
  };

  const ratingReviewCard = () => {
    return (
      <View style={style.card}>
        <View style={style.starContainer}>
        <AirbnbRating
            type="custom"
            count={5}
            defaultRating={4}
            size={15}
            onFinishRating={() => {}}
            showRating={false}
            isDisabled={true}
            selectedColor={colors.confirmYellow}
            starContainerStyle={style.starContainerStyle}
          />
        </View>
        <Text style={style.ratintTxt}>
          I've been going to this salon for months, and they never disappoint.
          Always professional and friendly!
        </Text>
        <View style={style.namedateView}>
            <MediumText text={'Wade Warren'} style={style.nameText} />
          <Text style={style.dotText}> • </Text>
          <SmallText text={'6 days ago'} style={style.dateText} />
        </View>
        <View style={style.divider} />
      </View>
    );
  };

  return (
    <SafeAreaView style={style.container}>
      <Header
        title={'Review'}
        showBackButton
        onBackPress={() => navigation.goBack()}
      />
      <FlatList
        data={[1, 2, 3, 4, 5]}
        renderItem={ratingReviewCard}
        ListHeaderComponent={renderHeaderComponent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default RatingAndReview;
