import React from 'react';
import {View, StyleSheet, Image, Pressable} from 'react-native';
import images from '../assets/images';
import { MediumText, SmallText } from './Typography';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import colors from '../assets/colors';

const ScheduleList = (props) => {
    const {item , index , handleOnpress ,selectedIndex} = props;
    
  return (
    <Pressable onPress={handleOnpress} style={styles.row}>

      {/* Time Section */}
      <View style={styles.timeContainer}>
        <MediumText text={item.time}/>
        <SmallText text={item.endTime} style={styles.endTime}/>
      </View>

      {/* Vertical Line */}
      {/* <View style={styles.verticalLine} /> */}

      {/* Booking Card */}
      <View style={selectedIndex===index ? [styles.activeCard] : [styles.card]}>
        <MediumText text={item.name} style={selectedIndex===index ? [styles.activeName]: []}/>
        <SmallText text={item.service} style={selectedIndex===index ? [styles.service, styles.activeService] : [styles.service] }/>

        {/* Professional Info */}
        <View style={styles.professionalContainer}>
          <View style={styles.avatarContainer}>
           <Image source={images.room} resizeMode='contain' style={styles.avatar} />
          </View>
          <SmallText text={`Professional: ${item.professional}`} style={selectedIndex===index ? [styles.activeService] : []}/>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  timeContainer: {
    width: 80,
    alignSelf: 'flex-start',
    marginTop: 5,
  },
  verticalLine: {
    width: 2,
    backgroundColor: '#D3D3D3',
    height: '90%',
    marginRight: 10,
  },
  endTime: {
    color:colors.lightBlack
  },
  card: {
    flex: 1,
    padding: 15,
    borderRadius: 10,
    backgroundColor:colors.lightGray,
  },
  activeCard: {
    flex: 1,
    padding: 15,
    borderRadius: 10,
    backgroundColor:colors.primary,
  },
  activeName: {
   color:colors.white,
  },
  service: {
   marginVertical:hp(0.8)
  },
  activeService:{
    color:colors.white,
  },
  
  professionalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
avatarContainer:{
    width: 30,
    height: 30,
    borderRadius: 30/2,
    marginRight: 10,
    overflow:'hidden',
},
  avatar: {
    width:null,
    height:null,
    flex:1,
  },
  professional: {
    fontSize: 14,
    color: '#555',
  },
});

export default ScheduleList;
