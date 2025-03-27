import {SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
import Header from '../../components/appHeader';
import colors from '../../assets/colors';
import {
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import BookingTabs from '../../components/singlProfessionalbookingTabs/bookingTabs';

const ProfessionalBooking = ({navigation, route}) => {

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={'Bookings'}
        showBackButton={true}
        onBackPress={() => navigation.goBack()}
      />
      <View style={styles.contentContainer}>
        <View style={styles.wrapper}>
        
          <BookingTabs />
        </View>
      </View>


    
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: colors.appBG,
  },
  wrapper: {
    flex: 1,
    marginHorizontal: wp(4),
  },
  
});

export default ProfessionalBooking;
