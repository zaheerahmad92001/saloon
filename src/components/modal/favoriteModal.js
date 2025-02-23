import {View, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import {XlargeText} from '../Typography';
import {Divider} from 'react-native-paper';
import {mockData} from '../../staticData';
import SalonCard from '../salonCard/salonCard';
import {RFValue} from 'react-native-responsive-fontsize';
import fontsFamily from '../../assets/fontsFamily';
import colors from '../../assets/colors';
import { AppButton } from '../appButton';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const FavoriteModal = (props) => {
const {handleFavourie, removeButton, cancelButton, item} = props
  return (
    <View>
      <XlargeText text={'Remove from Favorites?'} style={styles.heading} />

      <Divider style={styles.divider} />
      <SalonCard
      item={item}
      onFavorite={handleFavourie}
      showFavoriteButton={true}
      selected={true}
    />

      <View style={styles.buttonContainer}>
        <AppButton
          title={'Cancel'}
          onPress={cancelButton}
          style={styles.cancelButton}
          textstyle={styles.cancelText}
        />
        <AppButton
          title={'Remove'}
          onPress={removeButton}
          style={styles.yesButton}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: RFValue(16),
    fontWeight:'600',
  },
  divider: {
    borderWidth: 0.1,
    marginTop:hp(1),
    marginBottom: hp(2),
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  yesButton: {
    marginTop: 10,
    width: '48%',
  },
  cancelButton: {
    marginTop: 10,
    backgroundColor: colors.lighterPrimary,
    borderWidth: 1,
    borderColor:colors.lighterPrimary,
    width: '48%',
  },
  cancelText: {
    color: colors.primary,
  },
});

export default FavoriteModal;
