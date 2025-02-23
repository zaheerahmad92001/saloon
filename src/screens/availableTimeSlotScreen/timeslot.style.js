import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp , heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../../assets/colors';
import { RFValue } from 'react-native-responsive-fontsize';
import fontsFamily from '../../assets/fontsFamily';

const styles = StyleSheet.create({
    container: {
      flex: 1,
     backgroundColor:colors.white
    },
    wrapper:{
        flex:1,
        paddingHorizontal:wp(4),
        paddingTop:hp(1),
        backgroundColor:colors.appBG,
    },
    contentContainer:{
        paddingHorizontal:wp(4),
        backgroundColor:colors.appBG,
    },
    datePicker: {
      marginTop: 20,
    },
    sectionTitle: {
      fontSize: 16,
      fontWeight: '600',
      marginBottom: hp(1.5),
    },
    dates: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    dateItem: {
      paddingHorizontal: 5,
      borderRadius: 5,
      backgroundColor: colors.lightPrimary,
      alignItems: 'center',
      justifyContent: 'center',
      width:wp(13),
      height: wp(18),
    //   margin: 2,
    },
    dayText: {
      color: colors.lightBlack,
    },
    dateText: {
      fontSize:RFValue(20),  
      color: colors.appBlack,
    },
    selectedItem: {
      backgroundColor: colors.primary,
    },
    selectedText: {
      color: colors.white,
    },
    moreDatesItem: {
      padding: 10,
      borderRadius: 5,
      backgroundColor: colors.lightPrimary,
      alignItems: 'center',
      width: wp(14),
      height: wp(18),
    },
    moreDatesText: {
      fontSize: RFValue(9),
      textAlign: 'center',
      marginTop: 5,
      fontFamily:fontsFamily.bold
    },
    timePicker: {
      marginTop: 20,
    },
    times: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    timeItem: {
      padding: 10,
      marginHorizontal: 5,
      marginVertical:8,
      borderRadius: 10,
      backgroundColor: colors.lightGray,
      borderWidth: 1,
      borderColor: '#BBC0C3',
      width: '30%',
      alignItems: 'center',
    },
    timeText: {
      fontSize: RFValue(13),
      fontFamily:fontsFamily.regular,
      fontWeight:'500',
      color: colors.lightBlack,
    },
    continueButton: {
      marginTop: 'auto',
      backgroundColor: colors.primary,
      borderRadius: 8,
      alignItems: 'center',
      paddingVertical: 12,
      paddingHorizontal: 20,
      marginBottom:20
    },
    continueText: {
      color: colors.white,
      fontSize: RFValue(12),
      fontFamily: fontsFamily.semiBold,
    },
  });

  export default styles;
