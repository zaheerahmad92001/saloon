import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SmallText } from './Typography';
import Interface from '../assets/svgs/interface.svg';
import UserIcon from '../assets/svgs/user-icon.svg';
import InterfaceColorIcon from '../assets/svgs/interface-red.svg';

import colors from '../assets/colors';
import { heightPercentageToDP as hp ,  widthPercentageToDP as wp} from 'react-native-responsive-screen';

const AnaqaProfessionalHeader = (props)=>{

    const {availabilityStyle , isSchedule = false} = props;

    return(
        <View style={styles.rowContainer}>
        <View style={styles.row}>
          <UserIcon />
          <SmallText text={'Professional Info'} style={styles.smallText} />
        </View>
        <View style={[styles.horizontalLine,isSchedule && {borderColor:colors.primary}]} />
        <View style={styles.row}>
          {isSchedule ?
          <InterfaceColorIcon/>:  
          <Interface />
          }
          <SmallText text={'Availability'} style={[styles.availability,availabilityStyle]} />
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
    rowContainer:{
        backgroundColor:colors.lighterPrimary,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingVertical:hp(1.5),
        paddingHorizontal:10,
        borderRadius:5,
        marginTop:hp(1.5),
      },
      horizontalLine:{
        borderColor:'#BBC0C3',
        borderWidth:0.8,
        width:wp(20),
      },
      row:{flexDirection:'row',alignItems:'center', gap:5},
      smallText:{color:colors.primary},
      availability:{color:colors.lightBlack},

});

export default AnaqaProfessionalHeader;
