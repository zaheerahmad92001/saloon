import React from 'react';
import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import Messages from '../../assets/svgs/messages.svg';
import {MediumText, SmallText} from '../Typography';
import styles from './bookingCard.style';
import {AppButton} from '../appButton';
import InfoIcon from '../../assets/svgs/Info.svg';

const ProfessionalBookingCard = props => {
  const {item, bookingOptions, reviewAndReschedule} = props;
  const {date, time, title, location, services, price, status, imageUri} = item;

  let cancelORBook = '';
  let completeORReview = '';

  if (status === 'Confirmed' || status === 'Pending') {
    cancelORBook = 'Cancel Booking';
    completeORReview = 'Confirm';
  } else {
    cancelORBook = 'See Reviews';
    completeORReview = 'View Invoice';
  }


  return (
    <View style={[styles.card, status === 'Pending' && styles.cardTopPadding]}>
      {status === 'Pending' && (
        <View style={{alignSelf: 'flex-end'}}>
          <InfoIcon />
        </View>
      )}
      <View style={styles.header}>
      <SmallText text={`${date} - ${time}`}  style={styles.date}/>
          
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
          <View style={styles.titleContainer}>
            <View style={{flex: 1}}>
              <MediumText text={title} style={styles.title} />
            </View>
            <View style={styles.priceContainer}>
              <Text style={styles.price}>{price}</Text>
            </View>
          </View>

          <View style={styles.serviceContainer}>
            <View style={{flex: 1}}>
              <View style={styles.serviceContainer}>
              <SmallText text={'Services: '} style={styles.services}/>
              <SmallText text={services} style={styles.services}/>
              </View>

              <View style={styles.serviceContainer}>
              <SmallText text={'Professionals: '} style={styles.services}/>
              <SmallText text={'John: '} style={styles.services}/>
              </View>

            </View>

            {/* {status === 'Completed' && (
              <TouchableOpacity style={styles.completedButton}>
                <SmallText text={'Report'} style={styles.reportText} />
              </TouchableOpacity>
            )} */}
            {status === 'Confirmed' && (
              <TouchableOpacity style={styles.icon}>
                <Messages />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
      {status !== 'Cancelled' && (
        <View style={styles.actions}>
          <AppButton
            title={cancelORBook}
            onPress={bookingOptions}
            style={styles.cancelButton}
            textstyle={styles.cancelText}
          />
          <AppButton
            title={completeORReview}
            onPress={reviewAndReschedule}
            style={styles.rescheduleButton}
            textstyle={styles.rescheduleText}
          />
        </View>
      )}
    </View>
  );
};

export default ProfessionalBookingCard;
