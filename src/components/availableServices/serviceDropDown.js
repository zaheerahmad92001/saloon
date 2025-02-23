import React,{useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import colors from '../../assets/colors';
import {RFValue} from 'react-native-responsive-fontsize';
import fontsFamily from '../../assets/fontsFamily';
import MedalStar from '../../assets/svgs/medalStar.svg';
import Feather from 'react-native-vector-icons/Feather';
import Star from '../../assets/svgs/star.svg';
import ServiceCard from './service';

const ServiceDropDown = (props) => {
  const {handleOnItemPress} = props;
  const [isExpanded, setIsExpanded] = useState(false);

const handleExtend = ()=>{
  setIsExpanded(!isExpanded);
};

  return (
    <View>
     <View style={styles.serviceCard}>
    <View>
      <View style={styles.serviceInfo}>
        <Text style={styles.serviceTitle}>Hair Cut</Text>
        <View style={styles.rateContainer}>
          <MedalStar />
          <Text style={styles.topRatedText}>Top Rated</Text>
        </View>
      </View>

       <View style={styles.subHeadings}>
          <Text style={styles.subServices}>3 Sub services</Text>
          <View style={styles.ratingContainer}>
            <Star />
            <Text style={styles.ratingText}>4.7</Text>
            <Text style={styles.ratingCount}>(312)</Text>
          </View>
       </View>
       </View>
       <TouchableOpacity
       onPress={handleExtend}
       style={styles.expandButton}>
          <Feather name={isExpanded ? 'chevron-up' : 'chevron-down'} size={20} color={colors.white} />
       </TouchableOpacity>

    </View>
    {isExpanded &&
    [...Array(3)].map((_, index) => (
      <ServiceCard
      handleOnItemPress={handleOnItemPress}
      index={index} cardStyle={styles.cardStyle} />
    ))}

   </View>




  );
};
export default ServiceDropDown;

const styles = StyleSheet.create({
  serviceCard: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal:10,
    paddingVertical:12,
    borderRadius: 10,
    backgroundColor: colors.white,
    marginBottom: 5,
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
  serviceInfo: {
    flex: 1,
    flexDirection:'row',
    alignItems: 'center',
  },

  subServices: {
    fontSize: RFValue(12),
    fontFamily: fontsFamily.regular,
    color: colors.lightBlack,
    marginVertical: 2,
  },

  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
  },
  expandButton: {
    padding: 5,
    backgroundColor: colors.primary,
    borderRadius: 50,
  },
  expandText: {
    fontSize: RFValue(12),
    color: colors.appBlack,
  },

  subHeadings: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  rateContainer: {
    flexDirection: 'row',
    marginLeft: 5,
    backgroundColor: colors.ratedBox,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  topRatedText: {
    fontSize: RFValue(12),
    fontFamily: fontsFamily.regular,
  },
  cardStyle:{
    marginTop:0,
    marginBottom:0,
    borderRadius: 0,
  },
});

