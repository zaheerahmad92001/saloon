import React, { useState } from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather'
import Star from '../../assets/svgs/star.svg';
import colors from '../../assets/colors';
import {RFValue} from 'react-native-responsive-fontsize';
import fontsFamily from '../../assets/fontsFamily';

const ServiceCard = (props) => {
    const [selected , setSelected] = useState(false)
    const {cardStyle , handleOnItemPress} = props

    const handleOnPress=()=>{
     setSelected(!selected)
    }

  return (
    <View style={[styles.serviceCard,cardStyle]}>
      <View>
        <Text style={styles.serviceTitle}>Pedicure</Text>
        <View style={[styles.ratingSubContainer, {gap: 15}]}>
          <Text style={styles.price}>Price: SAR 10</Text>
          <View style={[styles.ratingSubContainer]}>
            <Star />
            <Text style={styles.ratingText}>4.7</Text>
            <Text style={styles.ratingCount}>(312)</Text>
          </View>
        </View>
        <View style={styles.ratingSubContainer}>
          <Text style={styles.estimatedTime}>Estimated Time:</Text>
          <Text style={[styles.price,{marginLeft:5,}]}>30 Mins</Text>
        </View>
      </View>
      <TouchableOpacity onPress={handleOnPress} style={selected?[styles.addButton, styles.selectedButton]:[styles.addButton]}>
        {selected ?
        <Feather name={'check'} size={20} color={colors.white}/>:
        <Entypo name="plus" size={20} color={colors.lightBlack} />
        }
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  serviceCard: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical:10,
    paddingHorizontal:12,
    marginBottom:5,
    borderRadius: 10,
    backgroundColor: colors.white,
  },
  serviceTitle: {
    fontSize: RFValue(13),
    fontFamily: fontsFamily.regular,
    fontWeight:'500',
    color: colors.appBlack,
  },
  price: {
    fontSize: RFValue(13),
    fontFamily: fontsFamily.Pregular,
    fontWeight:'400',
    color: colors.lightBlack,
    marginVertical: 2,
  },
  estimatedTime: {
    fontSize: RFValue(12),
    fontFamily: fontsFamily.Pregular,
    fontWeight:'500',
  },
  ratingText: {
    fontSize: RFValue(12),
    fontFamily: fontsFamily.Pregular,
    marginHorizontal: 5,
  },
  ratingCount: {
    fontSize: RFValue(12),
    fontFamily: fontsFamily.Pregular,
    color: colors.lightBlack,
  },
  ratingSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addButton: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: colors.lightBlack,
    backgroundColor: colors.white,
    borderRadius: 30 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedButton:{
    backgroundColor:colors.primary,
    borderColor:colors.primary
  }
});
export default ServiceCard;
