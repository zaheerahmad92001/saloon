import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Messages from '../../assets/svgs/messages.svg';
import { MediumText, SmallText } from '../Typography';
import styles from './booking.style';
import { AppButton } from '../appButton';
import colors from '../../assets/colors';

const BookingHistoryCard = ({
  date,
  time,
  title,
  professional,
  services,
  price,
  status,
  imageUri,
  bookinOptions,
  reviewAndReschedule,
  changeProfession
}) => {
  const confirmORBook = status === 'Pending' ? 'Confirm & Assign' : status === 'Confirmed' ? 'Change Professional' : status === 'Completed' ? 'See Review' : '';
  const completeORReview = status === 'Pending' ? 'Reschedule' : status === 'Confirmed' ? 'Reschedule' : status === 'Completed' ? 'View Invoice' : '';
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
            <View style={[status === 'Pending' ? styles.professionalMainView:{backgroundColor:colors.white}]}>
              <Text style={styles.professional}>{professional}</Text>
            </View>
          </View>

        </View>


        <View>
          {/* <View style={styles.priceContainer}>
          <Text style={styles.price}>{price}</Text>
          </View> */}
          {/* {status === 'Completed' && (
            <TouchableOpacity style={styles.completedButton}>
              <SmallText text={'Report'} style={styles.reportText} />
            </TouchableOpacity>
          )} */}
          {/* {status === 'Confirmed' && (
            <TouchableOpacity style={styles.icon}>
              <Messages />
            </TouchableOpacity>
          )} */}
        </View>
      </View>

      {status !== 'Cancelled' && (
        <View>
          <View style={styles.actions}>
            <AppButton title={confirmORBook} onPress={changeProfession} style={[status == 'Pending' ? styles.rescheduleButton: styles.cancelButton]} textstyle={[status == 'Pending' ? styles.rescheduleText:styles.cancelText]} />
            <AppButton title={completeORReview} onPress={reviewAndReschedule} style={[status == 'Pending' ? styles.cancelButton:styles.rescheduleButton]} textstyle={[status == 'Pending' ?styles.cancelText: styles.rescheduleText]} />
          </View>
          { status !== 'Completed' && (
            <AppButton title={cancelBooking} onPress={bookinOptions} style={styles.cancelBookingButton} textstyle={styles.cancelBookingText} />
          )}

        </View>
      )}
      {/* {status !== 'Cancelled' && (
        <View style={styles.actions}>
          <AppButton title={confirmORBook} onPress={bookinOptions} style={styles.cancelButton} textstyle={styles.cancelText} />
          <AppButton title={completeORReview} onPress={reviewAndReschedule} style={styles.rescheduleButton} textstyle={styles.rescheduleText} />
        </View>
      )}
      <AppButton title={cancelBooking} onPress={bookinOptions} style={styles.cancelBookingButton} textstyle={styles.cancelBookingText} /> */}
    </View>
  );
};

export default BookingHistoryCard;