import { StyleSheet } from 'react-native';
import colors from '../../assets/colors';
import fontsFamily from '../../assets/fontsFamily';
import {heightPercentageToDP as hp , widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
   backgroundColor:colors.white
  },
  wrapper:{
      flex:1,
      backgroundColor:colors.appBG1,
  },
  contentContainer:{
      //paddingHorizontal:wp(4),
      backgroundColor:colors.appBG,
  },
    label: {
      fontFamily: fontsFamily.thin,
      color: colors.appBlack,
      marginTop:8,
      marginBottom: 8,
    },
    subContainer:{
      marginHorizontal:wp(4),
      marginTop:hp(0.5),
    },
    couponText:{
      color:colors.primary
    },
    inputStyle: {
      minHeight: 130,
      textAlignVertical: 'top',
      fontSize: RFValue(14),
    },
    card:{
    shadowColor: colors.appBG,
    shadowOffset: {width: 0, height:0},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation:0,
    },
    billView:{
      backgroundColor:colors.white,
      marginTop:hp(0.5),
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      paddingHorizontal:wp(4),

      elevation:1,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.25,
      shadowRadius:1,
      
    },

    actions: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems:'center',
      marginTop: 15,
      gap:10,
      paddingVertical:10,
      paddingHorizontal:20
      
    },

   invoiceButton: {
      flex: 1,
      marginRight: 5,
      backgroundColor: colors.lightPrimary,//'transparent',
      borderWidth:0,
      
    },

    cancelButton: {
      flex: 1,
      marginRight: 5,
      backgroundColor: colors.lighterPrimary,//'transparent',
      borderColor:colors.lighterPrimary
     
      //marginBottom:20,
      //paddingVertical:20
      
    },
    cancelText: {
      color: colors.primary,
      fontSize:RFValue(11),
      fontFamily: fontsFamily.regular,
      paddingVertical:3,
    },
    
  
  
    cancelBookingButton: {
     
      marginRight: 5,
      marginTop:0,
      backgroundColor: 'transparent',
      paddingVertical:8,
     marginRight:20,
     marginLeft:20,
     marginBottom:30

    },
    cancelBookingText: {
      paddingVertical:3,
      color: colors.primary,
      fontSize:RFValue(11),
      fontFamily: fontsFamily.regular,
    },
  
  
  
    rescheduleButton: {
      flex: 1,
      //marginLeft: 5,
    },
    rescheduleText: {
      fontSize: RFValue(11),
      color: '#fff',
      fontFamily: fontsFamily.regular,
      paddingVertical:3,
    },
    
  });

  export default styles;
