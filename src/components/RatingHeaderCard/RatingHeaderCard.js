import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../../assets/colors';
import {RFValue} from 'react-native-responsive-fontsize';
import fontsFamily from '../../assets/fontsFamily';
import {ProgressBar} from 'react-native-paper';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {XlargeText} from '../Typography';
import {AirbnbRating} from 'react-native-ratings';

const RatingHeaderCard = props => {
  const {item, totalRating , style} = props;

  return (
    <View style={[styles.mainContainer,style]}>
      <View style={styles.overallRating}>
        <XlargeText text={4.5} style={styles.ratingText} />
        <View style={styles.totalRatingView}>
          <AirbnbRating
            type="custom"
            count={5}
            defaultRating={4}
            size={15}
            onFinishRating={() => {}}
            showRating={false}
            isDisabled={true}
            selectedColor={colors.confirmYellow}
            starContainerStyle={styles.starContainerStyle}
          />
          <Text style={styles.totalRatings}> {totalRating} Ratings</Text>
        </View>
      </View>

      {[...Array(5)].map((item, index) => {
        return (
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.starContainer}>
                <AirbnbRating
                  type="custom"
                  count={5}
                  defaultRating={index+1}
                  size={15}
                  onFinishRating={() => {}}
                  showRating={false}
                  selectedColor={colors.confirmYellow}
                  starContainerStyle={styles.starContainerStyle}
                  isDisabled={true}
                />
            </View>
            <View style={{maxWidth: widthPercentageToDP(70)}}>
              <ProgressBar
                progress={index ===0 ? 0.2 : index/5}
                width={250}
                color={colors.primary}
                unfilledColor={colors.appBlack}
                borderWidth={0}
                style={styles.progressBar}
              />
            </View>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 20,
    backgroundColor: colors.appBG,
  },
  overallRating: {
    alignItems: 'center',
    marginBottom: 15,
    flexDirection: 'row',
  },
  ratingText: {
    fontSize: RFValue(30),
    fontWeight: '600',
  },
  starsRow: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  totalRatings: {
    fontSize: 16,
    color: colors.chatlistmessage,
    fontFamily: fontsFamily.regular,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  starText: {
    width: 30,
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.darkYellow,
  },
  progressBar: {
    //flex: 1,
    height: 4,
    //borderRadius: 5,
    //marginHorizontal: 10,
    marginLeft: 10,
    backgroundColor: colors.gray,
  },
  countText: {
    width: 40,
    textAlign: 'right',
    fontSize: 14,
    fontWeight: '700',
    color: colors.appBlack,
  },
  totalRatingView: {
    marginLeft: 10,
  },
  starContainer: {
    flexDirection: 'row',
  },
  starView: {
    padding: 4,
  },
  startContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 0.5,
  },
});
export default RatingHeaderCard;
