import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import colors from '../../../assets/colors';
import fontsFamily from '../../../assets/fontsFamily';
import Complete from '../../../assets/svgs/complete.svg';

const BookedSuccess = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Complete />
      <Text style={styles.heading}>Booked Successfully!</Text>
      <Text style={styles.description}>
        Your booking has been successfully done.
      </Text>

      <TouchableOpacity style={styles.bookingsButton}>
        <Text style={styles.bookingsText}>See my Bookings</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueText}>Go to Home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    backgroundColor: colors.white,
  },
  heading: {
    fontSize: RFValue(18),
    fontFamily: fontsFamily.semiBold,
    color: colors.appBlack,
    marginVertical: 10,
  },
  description: {
    fontSize: RFValue(12),
    fontFamily: fontsFamily.regular,
    color: colors.lightBlack,
    marginBottom: wp(18),
  },
  bookingsButton: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: '100%',
    marginBottom: 10,
  },
  continueButton: {
    backgroundColor: colors.lightPrimary,
    borderRadius: 8,
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: '100%',
  },
  bookingsText: {
    color: colors.white,
    fontSize: RFValue(12),
    fontFamily: fontsFamily.semiBold,
  },
  continueText: {
    color: colors.primary,
    fontSize: RFValue(12),
    fontFamily: fontsFamily.semiBold,
  },
});

export default BookedSuccess;
