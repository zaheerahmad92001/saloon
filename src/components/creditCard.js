import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import colors from '../assets/colors';
import fontsFamily from '../assets/fontsFamily';
import { MediumText } from './Typography';
import Trash from '../assets/svgs/trash.svg';
import images from '../assets/images';

const CreditCard=(props)=>{
    const {item ,index , isSheet=false} = props;
    const showMaster = index % 2 === 0;
    return(
        <View style={styles.card}>
          <View style={styles.cardImage}>
            <Image
              source={showMaster ?images.masterCard: images.visaCard}
              resizeMode='contain'
              style={styles.icon}
            />
          </View>

          <View style={styles.cardInfo}>
            <MediumText text='Kaylynn Kenter' style={styles.name} />
            <MediumText text='********2259'/>
          </View>

          <View style={styles.expiryCvv}>
            <MediumText text='07/26' style={styles.name} />
            <MediumText text='056'/>
          </View>

          {!isSheet &&
            <TouchableOpacity style={styles.deleteButton}>
            <Trash />
          </TouchableOpacity>
          }
        </View> 
    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.inputGray,
        paddingHorizontal:wp(2.5),
        paddingVertical:wp(2),
        marginVertical: 6,
        borderRadius:10,
      },
      cardImage: {
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 10,
      },
      icon: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
      },
      cardInfo: {
        flex: 1,
        marginLeft:wp(3),
      },
      name: {
          marginBottom:hp(1),
          fontFamily:fontsFamily.extraLight,
      },
      details: {
        fontSize: RFValue(12),
        fontFamily: fontsFamily.regular,
        color: colors.appBlack,
      },
      expiryCvv: {
        alignItems: 'flex-end',
        marginRight: wp(4),
      },
  
      cvv: {
        fontSize: RFValue(12),
        fontFamily: fontsFamily.semiBold,
        color: colors.appBlack,
      },
      deleteButton: {
        backgroundColor: colors.gray,
        borderRadius: 5,
        paddingHorizontal: 8,
        paddingVertical:7,
        justifyContent: 'center',
        alignItems: 'center',
      },

})

export default CreditCard;