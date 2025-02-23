import React from 'react';
import { StyleSheet, TouchableOpacity} from 'react-native';
import Heart from '../assets/svgs/heart.svg';
import HeartFilled from '../assets/svgs/fill-heart.svg';
import colors from '../assets/colors';

const FavourSelector = (props) => {
    const {selected, onFavorite} = props;
  return (
    <TouchableOpacity style={styles.favoriteButton} onPress={onFavorite}>
      {selected ? <HeartFilled /> : <Heart />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    favoriteButton: {
        padding: 4,
        backgroundColor: colors.inputGray,
        borderRadius:5,
        marginLeft: 8,
      },
});

export default FavourSelector;
