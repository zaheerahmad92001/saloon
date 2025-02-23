import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import fontsFamily from '../../assets/fontsFamily';
import colors from '../../assets/colors';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import images from '../../assets/images';
import { MediumText, SmallText } from '../Typography';

const InvoiceCard = (props) => {
 const {invoice , handleOnPress} = props

  return (
    <Pressable
    onPress={handleOnPress}
      style={[
        styles.card,
        invoice.status === 'Paid' ? styles.paidCard : styles.cancelledCard,
      ]}>
      <View style={styles.wrapper}>
        <View style={{flex: 1}}>
          <Text style={styles.date}>{`${invoice.date} - ${invoice.time}`}</Text>
          <View style={styles.detailsRow}>
            <View style={styles.imageContainer}>
              <Image
                source={images.room}
                resizeMode="contain"
                style={styles.avatar}
              />
            </View>

            <View style={styles.textContainer}>
              <MediumText text={invoice.name} style={styles.name} />
              <SmallText text={invoice.service} style={styles.service} />
            </View>
          </View>
        </View>

        <View style={{alignItems: 'flex-end'}}>
          <View
            style={
              invoice.status === 'Paid'
                ? styles.paidStatusContainer
                : [styles.paidStatusContainer, styles.cancelledStatusContainer]
            }>
            <Text
              style={
                invoice.status === 'Paid'
                  ? styles.paidStatus
                  : styles.cancelStatus
              }>
              {invoice.status}
            </Text>
          </View>

          <View style={[styles.paidStatusContainer, styles.amountContainer]}>
            <Text style={[styles.paidStatus, styles.amount]}>
              {invoice.amount}
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.lightGray,
    borderRadius: 10,
    paddingHorizontal: 13,
    paddingVertical:10,
    marginBottom: hp(2),
  },
  wrapper:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  date: {
    fontSize: RFValue(12),
    color: colors.appBlack,
    fontFamily: fontsFamily.thin,
    fontWeight: '500',
    marginBottom: hp(1),
  },
  detailsRow: {
    flexDirection: 'row',
  },
  imageContainer: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 12,
    overflow: 'hidden',
    alignSelf: 'flex-start',
  },
  avatar: {
    width: null,
    height: null,
    flex: 1,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontFamily: fontsFamily.regular,
  },
  service: {
    fontSize: RFValue(12),
    color: colors.lightBlack,
    fontFamily: fontsFamily.regular,
    fontWeight:"400",
  },
  paidStatusContainer: {
    backgroundColor: colors.lightSuccess,
    paddingVertical: 5,
    borderRadius: 5,
    width: '100%',
    paddingHorizontal: wp(1.5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelledStatusContainer: {
    backgroundColor: colors.lighterPrimary,
  },

  paidStatus: {
    color: colors.success,
    fontFamily: fontsFamily.regular,
    fontSize: RFValue(12),
    fontWeight: '500',
  },
  cancelStatus: {
    color: colors.error,
    fontFamily: fontsFamily.regular,
    fontWeight: '500',
  },

  amountContainer: {
    backgroundColor: colors.lighterPrimary,
    marginTop: hp(1.8),
  },
  amount: {
    color: colors.primary,
  },
});

export default InvoiceCard;
