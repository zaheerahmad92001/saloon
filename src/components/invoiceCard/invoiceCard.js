import {View, Image, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import fontsFamily from '../../assets/fontsFamily';
import colors from '../../assets/colors';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import images from '../../assets/images';
import {MediumText, SmallText} from '../Typography';
import Calendar from '../../assets/svgs/calendargray.svg';

const InvoiceCard = props => {
  const {invoice, handleOnPress, showStatus = true} = props;

  return (
    <Pressable
      onPress={handleOnPress}
      style={[
        styles.card,
        invoice.status === 'Paid' ? styles.paidCard : styles.cancelledCard,
      ]}>
      <View style={styles.wrapper}>
        <View style={{flex: 1}}>
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
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
                <Calendar />
                <SmallText text={'02/04/2023'} style={styles.service} />
              </View>
            </View>
          </View>
        </View>

        <View style={styles.statusView}>
          <View style={[styles.paidStatusContainer, styles.amountContainer]}>
            <SmallText
              text={invoice.amount}
              style={[styles.paidStatus, styles.amount]}
            />
          </View>

          {showStatus && (
            <View>
              <SmallText
                text={invoice.status}
                style={
                  invoice.status === 'Paid'
                    ? styles.paidStatus
                    : styles.cancelStatus
                }
              />
            </View>
          )}
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingHorizontal: 13,
    paddingVertical: 12,
    marginBottom: hp(2),
  },
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  detailsRow: {
    flexDirection: 'row',
  },
  imageContainer: {
    width: 52,
    height: 52,
    borderRadius: 7,
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
    rowGap: 7,
  },
  name: {
    fontFamily: fontsFamily.regular,
    fontWeight: '500',
    color: colors.appBlack,
  },
  service: {
    fontSize: RFValue(12),
    color: colors.lightBlack,
    fontFamily: fontsFamily.regular,
    fontWeight: '400',
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
  },
  amount: {
    color: colors.primary,
  },
  statusView: {
    alignItems: 'center',
    rowGap: 5,
  },
});

export default InvoiceCard;
