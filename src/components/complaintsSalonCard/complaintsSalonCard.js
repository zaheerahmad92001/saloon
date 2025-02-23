import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Heart from '../../assets/svgs/heart.svg';
import LocationMarker from '../../assets/svgs/locationMarker.svg';
import Star from '../../assets/svgs/star.svg';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../assets/colors';
import fontsFamily from '../../assets/fontsFamily';
import {RFValue} from 'react-native-responsive-fontsize';

const ComplaintsSalonCard = ({
  image,
  title,
  location,
  datetime,
  rating,
  service,
  distance,
  onFavorite,
  showFavoriteButton = false,
  position,
}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardImage}>
        <Image source={image} style={styles.imageStyle} />
      </View>
      <View style={styles.cardContent}>
        <View style={styles.cardTitleContainer}>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.datetimeText}>{datetime}</Text>
        </View>
        <View style={styles.locationContainer}>
          <LocationMarker />
          <Text style={styles.cardLocation}>{location}</Text>
        </View>

        <View style={styles.cardFooter}>
          <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>
             Service:
            </Text>
            <Text style={styles.ratingText}>
              ({service})
            </Text>
          </View>
          {/* {showFavoriteButton && (
            <TouchableOpacity
              style={styles.favoriteButton}
              onPress={onFavorite}>
              <Heart />
            </TouchableOpacity>
          )} */}
          
            <Text style={styles.position}>{distance}</Text>
          
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    //borderRadius: 10,
    padding: 12,
    marginVertical: 8,
    //borderColor: colors.white,
    //borderWidth: 0.3,
    // For Android shadow
   // elevation: 0,
    //shadowColor: '#000',
    //shadowOffset: {width: 0, height: 0},
   // shadowOpacity: 0.0,
    //shadowRadius: 4,
    alignItems: 'center',
    margin: 5,
  },
  cardImage: {
    width: 80,
    height: 80,
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
    marginLeft: 12,
  },
  cardTitle: {
    fontSize: RFValue(14),
    color: colors.appBlack,
    fontFamily: fontsFamily.semiBold,
  },
  cardLocation: {
    fontSize: RFValue(12),
    color: colors.appBlack,
    marginVertical: 4,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: RFValue(12),
    color: colors.appBlack,
    fontFamily: fontsFamily.regular,
    marginLeft: 4,
  },
  datetimeText: {
    fontSize: RFValue(11),
    color: colors.appBlack,
  },
  favoriteButton: {
    padding: 8,
    backgroundColor: colors.inputGray,
    borderRadius: 7,
    marginLeft: 8,
  },
  cardTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  position: {
    //color: colors.success,
    //backgroundColor: colors.lightSuccess,
    paddingHorizontal: 12,
    borderRadius: 5,
    fontFamily: fontsFamily.regular,
  },
});

export default ComplaintsSalonCard;
