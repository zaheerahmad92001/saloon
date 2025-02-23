import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import BookingHistoryCard from '../../../components/bookingHistoryCard/bookingHistoryCard';
import images from '../../../assets/images';

const CompletedBooking = () => {
  const handleCancel = () => {
    console.log('Cancel Booking');
  };

  const handleReschedule = () => {
    console.log('Reschedule Booking');
  };
  return (
    <SafeAreaView style={styles.container}>
      <BookingHistoryCard
        date="Sep 10, 2024"
        time="9:10 AM"
        title="Hair Avenue"
        location="Lakewood, California"
        services="Services: Hair Cut, Hair Wash"
        price="SAR 200"
        status="Completed"
        imageUri={images.room}
        onCancel={handleCancel}
        onReschedule={handleReschedule}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
});

export default CompletedBooking;
