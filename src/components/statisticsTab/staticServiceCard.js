import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Label from '../../assets/svgs/Label.svg';
import StarIcon from '../../assets/svgs/star.svg';
import colors from '../../assets/colors';
import { RFValue } from 'react-native-responsive-fontsize';
import fontsFamily from '../../assets/fontsFamily';
import { MediumText, SmallText } from '../Typography';


const StaticServiceCard = (props) => {
    const { service , onClick} = props;
  return (
    <Pressable onPress={()=>onClick()}>
    <View style={styles.card}>
      <View style={styles.leftContainer}>
        <View style={styles.titleRow}>
          <MediumText text={service.name} style={styles.serviceName}/>
          {service.isTopRated && (
            <Label/>
          )}
        </View>
        <Text style={styles.details}>
          {service.subService !== undefined && `Sub Service: ${service.subService}  `}
          Professionals: {service.professionals}
        </Text>
        <View style={styles.ratingContainer}>
          <StarIcon/>
          <Text style={styles.rating}>
            {service.rating} <Text style={styles.reviews}>({service.reviews})</Text>
          </Text>
        </View>
      </View>
      <View style={styles.bookingsContainer}>
        <MediumText text={service.bookings.toString().padStart(2, '0')} style={styles.bookingsCount}/>
        <SmallText text={'Bookings'} style={styles.bookingsText}/>
      </View>
    </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
    card: {
      flexDirection: 'row',
      backgroundColor: colors.white,
      padding: 15,
      marginVertical: 5,
      marginTop:10,
      marginHorizontal: 10,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    leftContainer: {
      flex: 1,
    },
    titleRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap:10,
    },

    details: {
      fontSize: RFValue(12),
      color: colors.appBlack,
      marginTop: 4,
    },
    ratingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 4,
    },
    rating: {
      fontSize: RFValue(12),
     fontFamily:fontsFamily.regular,
      marginLeft: 4,
    },

    bookingsContainer: {
      alignItems: 'center',
      backgroundColor: colors.lightPrimary,
      paddingVertical:5,
      paddingHorizontal: 10,
      borderRadius: 7,
    },
    bookingsCount: {
      fontWeight:'700',
      color:colors.primary,
    },
    bookingsText: {
      fontSize: RFValue(11),
      color: colors.lightBlack,
    },
  });

  export default StaticServiceCard;
