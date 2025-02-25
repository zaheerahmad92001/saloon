import React from 'react';
import {View, Text, Image,} from 'react-native';
import {MediumText} from '../Typography';
import styles from './booking.style';
import {AppButton} from '../appButton';
import colors from '../../assets/colors';

const BookingHistoryCard = ({
  date,
  time,
  title,
  professional,
  isProfessionalAssigned,
  services,
  price,
  status,
  imageUri,
  bookinOptions,
  reviewAndReschedule,
  changeProfession,
}) => {
  const confirmORBook =
    status === 'Pending'
      ? isProfessionalAssigned ? 'Confirm': 'Confirm & Assign'
      : status === 'Confirmed'
      ? 'Change Professional'
      : status === 'Completed'
      ? 'See Review'
      : '';
  const completeORReview =
    status === 'Pending'
      ? 'Reschedule'
      : status === 'Confirmed'
      ? 'Reschedule'
      : status === 'Completed'
      ? 'View Invoice'
      : '';
  const cancelBooking = 'Cancel Booking';

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.date}>
          {date} - {time}
        </Text>
        <Text
          style={[
            styles.status,
            status === 'Confirmed'
              ? styles.confirmed
              : status === 'Pending'
              ? styles.pendingStatus
              : status === 'Cancelled'
              ? styles.cancelledStatus
              : status === 'Completed'
              ? styles.completedStatus
              : '',
          ]}>
          {status}
        </Text>
      </View>

      <View style={styles.body}>
        <View style={styles.cardImage}>
          <Image source={imageUri} style={styles.image} />
        </View>

        <View style={styles.details}>
          <View style={styles.priceandname}>
            <MediumText text={title} style={styles.title} />
            <View style={styles.priceContainer}>
              <Text style={styles.price}>{price}</Text>
            </View>
          </View>
          {/* <MediumText text={title} style={styles.title} /> */}

          <Text style={styles.services}>{services}</Text>
          <View style={styles.professionalView}>
            <Text style={styles.professional}>Professional:</Text>
            <View
              style={[
                status === 'Pending'
                  ? styles.professionalMainView
                  : {backgroundColor: colors.white},
              ]}>
              <Text style={styles.professional}>{professional}</Text>
            </View>
          </View>
        </View>

      </View>

      {status !== 'Cancelled' && (
        <View>
          <View style={styles.actions}>
            <AppButton
              title={confirmORBook}
              onPress={changeProfession}
              style={[
                status == 'Pending'
                  ? styles.rescheduleButton
                  : status ==='Completed'
                  ? styles.cancelBookingButton 
                  : styles.cancelButton
              ]}
              textstyle={[
                status == 'Pending' ? styles.rescheduleText : status==='Completed'? styles.cancelBookingText : styles.cancelText,
              ]}
            />
            <AppButton
              title={completeORReview}
              onPress={reviewAndReschedule}
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
              title={cancelBooking}
              onPress={bookinOptions}
              style={styles.cancelBookingButton}
              textstyle={styles.cancelBookingText}
            />
          )}
        </View>
      )}
      
    </View>
  );
};

export default BookingHistoryCard;
