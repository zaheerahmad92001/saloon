import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import PaymentField from '../../../components/paymentField/paymentField';
import colors from '../../../assets/colors';
import Header from '../../../components/appHeader';
import fontsFamily from '../../../assets/fontsFamily';
import {RFValue} from 'react-native-responsive-fontsize';

const PaymentMethod = () => {
  const [cardNumber, setCardNumber] = useState('2212-4552-4412-2259');
  const [cardHolderName, setCardHolderName] = useState('Alicia Normegadov');
  const [expiryDate, setExpiryDate] = useState('07/26');
  const [cvv, setCvv] = useState('095');
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Payment Method'} showBackButton />
      <Text style={styles.heading}>Add New Card</Text>
      <ScrollView>
        <PaymentField
          title="Card Number"
          value={cardNumber}
          card={true}
          onChange={text => setCardNumber(text)}
        />
        <PaymentField
          title="Card Holder Name"
          value={cardHolderName}
          user={true}
          onChange={text => setCardHolderName(text)}
        />
        <View style={{flexDirection: 'row'}}>
          <PaymentField
            title="Expiry Date"
            value={expiryDate}
            onChange={text => setExpiryDate(text)}
          />
          <PaymentField
            title="CVV Code"
            value={cvv}
            onChange={text => setCvv(text)}
          />
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueText}>Done</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: colors.white,
  },
  heading: {
    fontSize: RFValue(16),
    fontFamily: fontsFamily.semiBold,
    color: colors.appBlack,
    marginBottom: 10,
    marginHorizontal: 5,
  },
  continueButton: {
    marginTop: 'auto',
    backgroundColor: colors.primary,
    borderRadius: 8,
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  continueText: {
    color: colors.white,
    fontSize: RFValue(12),
    fontFamily: fontsFamily.semiBold,
  },
});

export default PaymentMethod;
