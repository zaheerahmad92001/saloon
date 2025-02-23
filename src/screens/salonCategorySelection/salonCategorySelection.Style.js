import fontsFamily from '../../assets/fontsFamily';
import { RFValue } from 'react-native-responsive-fontsize';
import colors from '../../assets/colors';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:colors.white
    },
    wrapper:{
      flex:1,
      marginHorizontal:wp(4)
    },
    headerTitle: {
      color: colors.appBlack,
      marginTop:hp(3),
      fontFamily:fontsFamily.bold,
      fontWeight:'600',
      fontSize:RFValue(14)
    },
    subtext: {
        color: colors.lightBlack,
        fontFamily:fontsFamily.regular,
        fontWeight:'500',
        fontSize:RFValue(10),
        marginBottom:hp(2)
      },
    signUpButton: {
        backgroundColor: colors.primary,
        marginVertical: 20,
        fontSize: RFValue(12),
        fontFamily: fontsFamily.regular,
      },
      signUpText: {
        fontSize: RFValue(13),
        fontFamily: fontsFamily.regular,
      },
  });
  export default styles;