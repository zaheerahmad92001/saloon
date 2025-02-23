import { Platform, StyleSheet } from "react-native";
import colors from "../../assets/colors";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import { RFValue } from "react-native-responsive-fontsize";
import fontsFamily from "../../assets/fontsFamily";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.primary,

    },
    giftImageContainer: {
      alignSelf: 'center',
      marginTop: hp(1),
      marginBottom: hp(2),
    },
    subContainer: {
        flex: 1,
        backgroundColor: colors.white,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        paddingTop:hp(3),
        paddingHorizontal:wp(5),
      },
      appHeaderText:{
        color:colors.white,
      },
    headerText: {
      fontSize: RFValue(17),
      textAlign:'center',
      marginBottom: hp(1.5),
      fontWeight:"700",
    },
    subText: {
      fontSize: RFValue(12),
      textAlign: 'center',
      color: colors.lightBlack,
      fontFamily: fontsFamily.regular,
      marginBottom: hp(3),
    },
    shareButton: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: colors.primary,
      padding: 15,
      borderRadius: 10,
      marginBottom: 30,
    },
    shareButtonText: {
      fontSize: RFValue(14),
      fontFamily: fontsFamily.regular,
      color: colors.white,
      fontWeight:'500',
    },
    pointsContainer: {
      backgroundColor: colors.lightGray,
      paddingVertical: 15,
      borderRadius: 10,
      alignItems: 'center',
    },
    availablePointsText: {
     textAlign:'left',
      marginBottom: 5,
      fontWeight:'600',
    },
    pointsNumber: {
      fontSize: RFValue(22),
      fontFamily: fontsFamily.semiBold,
      fontWeight:'600',
      color: colors.primary,
    },
    pointsText: {
      fontSize: RFValue(13),
      fontFamily: fontsFamily.regular,
      color: colors.appBlack,
      fontWeight:'400',
    },
  });

  export default styles;
  