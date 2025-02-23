import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Alert,
  Pressable,
} from 'react-native';
import React, { useCallback, useReducer, useRef, useState } from 'react';
import { serviceData, staticBookings } from '../../staticData';
import ServiceCard from '../../components/serviceCard/serviceCard';
import Header from '../../components/appHeader';
// import DropdownComponent from '../../components/dropdownComponent/dropdownComponent';
import MyDropdown from '../../components/dropdown/dropdown';
import BookingCard from '../../components/bookindDetailComponent/bookingDetailComponent';
import { AppButton } from '../../components/appButton';
import PaymentMethodComponent from '../../components/paymentMethodComponent/paymentMethodComponent';
import CouponInput from '../../components/couponInputComponent/couponInputComponent';
import styles from './BookingDetail.style';
import { MediumText, SmallText } from '../../components/Typography';
import { BottomSheet } from '../../components/bottomSheet';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import TextField from '../../components/textField/textField';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CreditCardModal from '../../components/modal/creditCarddModal';
import CodeDiscount from '../../components/modal/discounts';
import BillDetail from '../../components/billDetail';
import colors from '../../assets/colors';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import LoyalityPoints from '../../components/loyaltyPoints';

const items = [
  { label: 'Option A', value: '1' },
  { label: 'Option B', value: '2' },
  { label: 'Option C', value: '3' },
  { label: 'Option D', value: '4' },
  { label: 'Option E', value: '5' },
];

const BookingDetail = ({ navigation, route }) => {
  const refRBSheet = useRef();
  const insets = useSafeAreaInsets();
  const status = 'Pending';
  const [state, updateState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    { selected: '', sheetName: '', notes: '', selectedValue: null },
  );

  const { selected, sheetName, notes, selectedValue } = state;

  const handleSelect = value => {
    updateState({ selected: value });
    // You can also perform additional actions here
  };

  const handlePaymentSelect = method => {
    if (method.key === 'creditCard') {
      setTimeout(() => {
        openBottomSheet();
      }, 200);
      updateState({ sheetName: 'payment' });
    }
  };

  const handleApplyCoupon = code => {
    Alert.alert('Coupon Applied', `You entered: ${code}`);
  };

  const openBottomSheet = useCallback(
    item => {
      if (refRBSheet.current) {
        refRBSheet.current.present();
      }
    },
    [refRBSheet],
  );

  const hideBottomSheet = () => {
    if (refRBSheet.current) {
      refRBSheet.current.close();
      updateState({ sheetName: '' });
    }
  };
  {/* <Header
          title={'Booking Detail'}
          showBackButton
          onBackPress={() => navigation.goBack()}
        />

        <View style={styles.contentContainer}>
          <ServiceCard item={serviceData[0]} style={styles.card} />
        </View>

        {staticBookings.map((booking, index) => (
          <BookingCard key={index} item={booking} />
        ))} */}
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <Header
        title={'Booking Detail'}
        showBackButton
        onBackPress={() => navigation.goBack()}
      />
      <View style={{ flex: 1, padding: 20, backgroundColor: colors.appBG }}>
        <View style={styles.contentContainer}>
          <ServiceCard item={serviceData[0]} style={styles.card} />
        </View>

        {staticBookings.map((booking, index) => (
          <BookingCard key={index} item={booking} />
        ))}

      
      </View>
      {status !== 'Cancelled' && (
          <View>
            <View style={styles.actions}>
              <AppButton title={'Change Professional'} onPress={() => { }} style={[status == 'Pending' ? styles.rescheduleButton : styles.cancelButton]} textstyle={[status == 'Pending' ? styles.rescheduleText : styles.cancelText]} />
              <AppButton title={'Reschedual'} onPress={() => { }} style={[status == 'Pending' ? styles.cancelButton : styles.rescheduleButton]} textstyle={[status == 'Pending' ? styles.cancelText : styles.rescheduleText]} />
            </View>
            {status !== 'Completed' && (
              <AppButton title={'Cancel Booking'} onPress={() => { }} style={styles.cancelBookingButton} textstyle={styles.cancelBookingText} />
            )}

          </View>
        )}
    </SafeAreaView>
  );
};

export default BookingDetail;
