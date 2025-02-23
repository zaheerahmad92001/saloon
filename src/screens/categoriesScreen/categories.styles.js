import { StyleSheet } from "react-native";
import colors from "../../assets/colors";
import { RFValue } from "react-native-responsive-fontsize";
import fontsFamily from "../../assets/fontsFamily";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
    },
    wrapper:{
        flex:1,
        backgroundColor:colors.appBG
    },
    contentContainer:{
        flex:1,
        marginHorizontal:wp(4)
    },
    menuItemStyle:{
        backgroundColor:colors.white,
    },
    heading: {
      fontSize: RFValue(14),
      fontFamily: fontsFamily.regular,
      color: colors.appBlack,
      marginBottom: 10,
    },
 title:{
    fontFamily: fontsFamily.regular,
    color: colors.appBlack,
    fontWeight: '500',
    textAlign:'flex-start',
    marginVertical: hp(2)
},
  });

  export default styles;