import { StyleSheet } from 'react-native';
import colors from '../../assets/colors';
import { RFValue } from 'react-native-responsive-fontsize';
import fontsFamily from '../../assets/fontsFamily';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
    },
    wrapper:{
      flex:1,
      paddingHorizontal: wp(4),
    },
    pointsText:{
      fontFamily:fontsFamily.bold,
      fontWeight:'600',

    },

    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 15,
    },
    button: {
      flex: 1,
      paddingHorizontal:15,
      paddingVertical:13,
      backgroundColor: colors.lightGray,
      alignItems: 'center',
      borderRadius:5,
    },
    selectedButton: {
      backgroundColor: colors.primary,
      borderRadius: 10,
    },
    buttonText: {
      fontSize: RFValue(12),
      color: colors.lightBlack,
    },
    selectedButtonText: {
      color: colors.white,
      fontSize: RFValue(12),
      fontFamily: fontsFamily.semiBold,
    },
    heading: {
      textAlign:'left',
      marginVertical:hp(2)
    },

    pointsCard: {
      borderRadius: 10,
      borderColor: colors.primary,
      borderWidth:0.5,
    },
    pointsCardContainer:{
      paddingHorizontal:wp(3),
      paddingVertical:wp(3),
    },
    pointsCardHeading: {
      color: colors.appBlack,
    },
    pointContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical:7,
      gap:3,
    },
    pointsCardValue: {
      fontSize: RFValue(24),
      fontFamily: fontsFamily.bold,
      color: colors.appBlack,
      marginBottom: 5,
    },
    pointsCardPoint: {
      fontSize: RFValue(14),
      fontFamily: fontsFamily.bold,
      color: colors.appBlack,
      marginLeft: 5,
    },
    pointsCardSubtext: {
      fontFamily: fontsFamily.regular,
      color: colors.lightBlack,
    },
  });
  export default styles;
