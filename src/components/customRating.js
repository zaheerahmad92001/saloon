import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../assets/colors';

const CustomRating = ({
  maxStars = 5,
  rating = 0,
  onRatingChange,
}) => {
  const [currentRating, setCurrentRating] = useState(rating);

  const handleRating = (newRating) => {
    setCurrentRating(newRating);
    onRatingChange(newRating);
  };

  return (
    <View style={styles.container}>
      {Array.from({ length: maxStars }, (_, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleRating(index + 1)}
          activeOpacity={0.7}
        >
          <AntDesign
            name={index < currentRating ? 'star' : 'staro'}
            size={40}
            color={index < currentRating ? colors.primary : colors.softPink}
            style={styles.star}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  star: {
    marginHorizontal: 3,
  },
});

export default CustomRating;
