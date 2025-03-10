import React, { useState } from 'react';
import {FlatList, Pressable, SafeAreaView, Text, View} from 'react-native';
import style from './ratingAndReview.style';
import RatingHeaderCard from '../../components/RatingHeaderCard/RatingHeaderCard';
import Header from '../../components/appHeader';
import {MediumText, SmallText} from '../../components/Typography';
import {AirbnbRating} from 'react-native-ratings';
import colors from '../../assets/colors';
import FastImage from 'react-native-fast-image';
import images from '../../assets/images';

const RatingAndReview = ({navigation, rotue}) => {

  const [expanded, setExpanded] = useState(false);
  const [selectedIndex , setSelectedIndex] = useState(null)

  const handleOnPress=(index)=>{
     setExpanded(!expanded)
     setSelectedIndex(index)
  }
  
  const ratingReviewCard = ({item ,index}) => {
    return (
      <Pressable onPress={()=>handleOnPress(index)} style={style.card}>
        <View style={style.rowContainer}>
          <View style={style.imageContainer}>
            <FastImage source={images.room} style={style.imageStyle} />
          </View>
          <View style={{flex: 1, marginLeft: 10}}>
            <MediumText text={'Ashlynn Workman'} style={style.userName} />
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
            <Text numberOfLines={expanded && selectedIndex=== index ? undefined : 1} ellipsizeMode="tail" style={style.ratintTxt}>
              I've been going to this salon for months, and they never
              disappoint. Always professional and friendly!
            </Text>
          </View>
        </View>
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={style.container}>
      <Header
        title={'Review'}
        showBackButton
        onBackPress={() => navigation.goBack()}
      />
      <View style={style.wrapper}>
        <MediumText text={'Review'} style={style.header}/>
        <FlatList
          data={[1, 2, 3, 4, 5]}
          renderItem={ratingReviewCard}
          contentContainerStyle={style.contentContainerStyle}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default RatingAndReview;
