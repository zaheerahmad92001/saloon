import React from 'react';
import {View, StyleSheet,Text} from 'react-native';
import colors from '../../assets/colors';
import {RFValue} from 'react-native-responsive-fontsize';
import fontsFamily from '../../assets/fontsFamily';
import { LargeText, MediumText, SmallText } from '../Typography';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const BookingCard = (props) => {
  const {item} = props;
  const {customer ,date, professional, timeslot, services} = item
  const total = services.reduce((sum, service) => sum + service.price, 0);
  const vat = total * 0.15;
  const grandTotal = total + vat;

  return (
    <View style={styles.card}>
      <View style={styles.statusView}>
      <LargeText text={'Booking Details'} style={styles.title}/>
      <View style={[styles.statusValueView, {backgroundColor:colors.darkGray}]}>
        <SmallText text={'Pending'}/>
        </View>
      </View>
     

      {/* Booking Details Section */}
      <View style={styles.row}>
        <SmallText text={'Customer:'} style={styles.label} />
        <SmallText text={customer} style={styles.value}/>
      </View>
      <View style={styles.row}>
        <SmallText text={'Date:'} style={styles.label} />
        <SmallText text={date} style={styles.value}/>
      </View>
      <View style={styles.row}>
        <SmallText text={'Professional:'} style={styles.label} />
        <SmallText text={professional} style={styles.value}/>
      </View>
      <View style={styles.row}>
        <SmallText text={'Timeslot:'} style={styles.label} />
        <SmallText text={timeslot} style={styles.value}/>
      </View>

      <View style={styles.divider} />

      <LargeText text={'Pricing Details'} style={styles.title}/>

      {services.map((service, index) => (
        <View key={index} style={styles.row}>
          <SmallText text={service.name} style={styles.value} />
          <SmallText text={`SAR ${service.price}`} style={styles.value}/>
        </View>
      ))}
      
      <View style={styles.row}>
        <Text style={[styles.label, styles.discount]}>Discount</Text>
        <Text style={[styles.price, styles.discount]}>SAR {-20}</Text>
      </View>

      <View style={styles.divider} />

      {/* Pricing Summary */}
      <View style={styles.row}>
          <SmallText text={'Total:'} style={[{color:colors.appBlack}]} />
          <SmallText text={`SAR ${total.toFixed(2)}`} style={{color:colors.appBlack}}/>
      </View>

      <View style={styles.row}>
        <SmallText text={'VAT 15%:'} style={styles.label} />
        <SmallText text={`SAR ${vat.toFixed(2)}`} style={styles.label}/>
      </View>

      <View style={styles.row}>
      <MediumText text={'Grand Total:'} style={[styles.grandTotal]} />
      <MediumText text={`SAR ${grandTotal.toFixed(2)}`} style={[styles.grandTotal]}/>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    marginVertical: 15,
    borderRadius: 10,
    paddingTop:16,
    paddingHorizontal:10,
    shadowColor: colors.white,
    shadowOffset: {width: 0, height:0},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation:1,

  },
  statusView:{
   flexDirection:'row',
   justifyContent:'space-between',
   alignItems:'center'
  },
  statusValueView:{
    borderRadius:6,
    paddingHorizontal:6,
    paddingVertical:3
  },
  title: {
    textAlign:"left",
    marginBottom: 10,
    },
  subTitle: {
    fontSize: RFValue(14),
    fontFamily: fontsFamily.semiBold,
    marginTop: 8,
    marginBottom: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },

  pricelabel: {
    color:colors.lightBlack
  },
  value: {
    color: colors.lightBlack,
  },
  grandTotal: {
    color: colors.appBlack,
    paddingBottom:10
  },
  divider: {
    borderBottomWidth:0.7,
     borderBottomColor:colors.grayBorder, 
     marginVertical: 8
    },
    price: {
      fontSize: RFValue(11),
      fontFamily: fontsFamily.regular,
      color: colors.appBlack,
    },
    discount: {
      color: colors.success,
      paddingBottom:10
    },
    label:{
      color:colors.lightBlack
    }
});

export default BookingCard;
