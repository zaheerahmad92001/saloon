import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import fontsFamily from "../../../assets/fontsFamily";
import colors from "../../../assets/colors";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        backgroundColor:colors.white,
    },
    container: {
      flex: 1,
      marginHorizontal:wp(4),
    },
    inputStyle:{
        marginBottom:hp(2),
    },
    heading: {
      marginBottom:hp(3),
      marginTop:hp(3),
      fontFamily: fontsFamily.regular,
    color: colors.appBlack,
    fontWeight: '600',
    alignSelf:'flex-start',
    },
    button: {
      marginHorizontal:wp(4),
      marginTop:hp(4),
    },
    buttonText: {
      fontSize: RFValue(12),
      fontFamily: fontsFamily.semiBold,
      color: colors.white,
    },
  });
  export default styles;