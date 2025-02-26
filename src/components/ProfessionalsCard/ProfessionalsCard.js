import React from 'react';
import {Image, Text, View, StyleSheet, Pressable} from 'react-native';
import images from '../../assets/images';
import StarIcon from '../../assets/svgs/star.svg';
import colors from '../../assets/colors';
import fontsFamily from '../../assets/fontsFamily';
import {RFValue} from 'react-native-responsive-fontsize';

const ProfessionalsCard = props => {
  const {item, isSelected, onPress} = props;
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.card,
        {
          borderColor: isSelected ? colors.primary : colors.white,
          borderWidth: 0.8,
        },
      ]}>
      <View style={styles.card}>
        <Image source={images.room} style={styles.profileImage} />

        <View style={styles.textContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.profession}>{item.profession}</Text>
        </View>

        <View style={styles.ratingContainer}>
          <StarIcon />
          <Text style={styles.rating}>4.7</Text>
        </View>
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 2,
    marginVertical: 6,
  },
  profileImage: {
    width: 45,
    height: 45,
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
    marginLeft: 12,
  },
  name: {
    fontSize: RFValue(10),
    fontWeight: fontsFamily.regular,
  },
  profession: {
    fontSize: RFValue(10),
    color: colors.lightBlack,
    marginTop: 3,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: RFValue(10),
    fontWeight: fontsFamily.bold,
    marginLeft: 5,
    color: colors.appBlack,
  },
});
export default ProfessionalsCard;
