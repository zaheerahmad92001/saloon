import React from 'react';
import {View, StyleSheet} from 'react-native';
import {SmallText} from './Typography';
import { RFValue } from 'react-native-responsive-fontsize';
import colors from '../assets/colors';

const BillDetail = props => {
  const {item} = props;
  const {total, vat, grandTotal} = item;
  return (
    <View>
      <View style={styles.row}>
        <SmallText text={'Total'} style={[styles.label]} />
        <SmallText text={`SAR 130.00`} style={[styles.label]} />
      </View>

      <View style={styles.row}>
        <SmallText text={'Discount'} style={[styles.label,{color:colors.success}]} />
        <SmallText text={`SAR -20`} style={[styles.label,{color:colors.success}]} />
      </View>

      <View style={styles.row}>
        <SmallText text={'Loyality Points'} style={[styles.label,{color:colors.success}]} />
        <SmallText text={`SAR -30`} style={[styles.label,{color:colors.success}]} />
      </View>

      <View style={styles.row}>
        <SmallText text={'VAT 15%'} style={[styles.label,{color:colors.lightBlack}]} />
        <SmallText text={`SAR 19.50`} style={[styles.label,{color:colors.lightBlack}]} />
      </View>

      <View style={styles.row}>
        <SmallText text={'Grand Total'} style={[styles.label]} />
        <SmallText text={`SAR 119.50`} style={[styles.label]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  label: {
    fontWeight: '500',
    fontSize:RFValue(10)
  },
});
export default BillDetail;
