import {View, SafeAreaView} from 'react-native';
import React from 'react';
import {serviceData, staticBookings} from '../../staticData';
import ServiceCard from '../../components/serviceCard/serviceCard';
import Header from '../../components/appHeader';
import BookingCard from '../../components/bookindDetailComponent/bookingDetailComponent';
import {AppButton} from '../../components/appButton';
import styles from './BookingDetail.style';
import colors from '../../assets/colors';

const BookingDetail = ({navigation, route}) => {
  const status = 'Pending';

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <Header
        title={'Booking Detail'}
        showBackButton
        onBackPress={() => navigation.goBack()}
      />
      <View style={{flex: 1, padding: 20, backgroundColor: colors.appBG}}>
        <View style={styles.contentContainer}>
          <ServiceCard item={serviceData[0]} />
        </View>

        {staticBookings.map((booking, index) => (
          <BookingCard key={index} item={booking} />
        ))}
      </View>
      {status !== 'Cancelled' && (
        <View>
          <View style={styles.actions}>
            <AppButton
              title={'Change Professional'}
              onPress={() => {}}
              style={[
                status == 'Pending'
                  ? styles.rescheduleButton
                  : styles.cancelButton,
              ]}
              textstyle={[
                status == 'Pending' ? styles.rescheduleText : styles.cancelText,
              ]}
            />
            <AppButton
              title={'Reschedual'}
              onPress={() => {}}
              style={[
                status == 'Pending'
                  ? styles.cancelButton
                  : styles.rescheduleButton,
              ]}
              textstyle={[
                status == 'Pending' ? styles.cancelText : styles.rescheduleText,
              ]}
            />
          </View>
          {status !== 'Completed' && (
            <AppButton
              title={'Cancel Booking'}
              onPress={() => {}}
              style={styles.cancelBookingButton}
              textstyle={styles.cancelBookingText}
            />
          )}
        </View>
      )}
    </SafeAreaView>
  );
};

export default BookingDetail;
