import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import fontsFamily from '../../assets/fontsFamily';
import colors from '../../assets/colors';
import { heightPercentageToDP as hp , widthPercentageToDP as wp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
    },
    contentContainer:{
      flex:1,
      backgroundColor:colors.appBG1,
    },

    wrapper: {
      flex: 1,
      marginHorizontal: wp(4),
    },
    heading: {
      color: colors.lightBlack,
      marginTop: hp(2),
      marginBottom: hp(2),
    },
    newPassText: {
      color: colors.lightBlack,
      marginTop: hp(2.5),
      marginBottom: hp(2.5),
    },
    button: {
      marginTop: 'auto',
      backgroundColor: colors.primary,
      paddingVertical: 15,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      fontSize: RFValue(14),
      fontFamily: fontsFamily.semiBold,
      color: colors.white,
    },
  });

  export default styles;
