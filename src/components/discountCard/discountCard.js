import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import colors from '../../assets/colors';
import fontsFamily from '../../assets/fontsFamily';
import Ticket from '../../assets/svgs/ticket.svg';
import { SmallText } from '../Typography';

const DiscountCard = ({title, discount, validity, remaining, onApply}) => {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Ticket />
        <View style={styles.textContainer}>
          <SmallText text={title} style={styles.title}/>
          <SmallText text={`${discount} Discount`} style={styles.discount}/>
        </View>
        <View style={styles.remaining}>
         <SmallText text={`${remaining} left`} style={styles.remainingText}/>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.row}>
        <SmallText text={`Valid : ${validity}`} style={styles.validity}/>
        <View style={styles.footer}>
          <TouchableOpacity onPress={onApply} style={styles.applyButton}>
            <SmallText text={'Apply'} style={styles.applyText}/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: colors.white,
    marginVertical: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F5C6CB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.primary,
  },
  textContainer: {
    marginLeft: 10,
    flex: 1,
  },
  
  discount: {
    fontSize: RFValue(12),
    color: colors.lightBlack,
    fontWeight:'500',
  },
  validity: {
    fontSize: RFValue(10),
    color: colors.lightBlack,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  remaining: {
    marginRight: 15,
    backgroundColor: colors.lightPrimary,
    paddingHorizontal: 13,
    paddingVertical: 5,
    borderRadius: 20,
    fontFamily: fontsFamily.semiBold,
  },
  remainingText:{color:colors.primary},
  applyButton: {
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  applyText: {
    fontSize: RFValue(12),
    color: colors.primary,
    fontFamily: fontsFamily.semiBold,
  },
  divider: {
    borderWidth:1,
    borderColor:'#E0E0E0',
    borderStyle:'dashed'
  },
});

export default DiscountCard;
