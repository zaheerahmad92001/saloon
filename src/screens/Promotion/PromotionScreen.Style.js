import { StyleSheet } from "react-native";
import colors from "../../assets/colors";
import fontsFamily from "../../assets/fontsFamily";
import { RFValue } from "react-native-responsive-fontsize";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
      },
      wrapper: {
        flex: 1,
        backgroundColor:colors.appBG,
      },
      contentContainer:{
        flex:1,
        marginHorizontal:wp(4),
      },
    discountText: {
      marginTop:hp(1.5),
    },
    button: {
        marginTop: hp(0),
        marginBottom: hp(2),
        marginHorizontal:20
    },
    buttonText:{
        fontFamily:fontsFamily.regular,
        fontSize:RFValue(13)
    },
    contentContainerStyle:{
      marginTop:hp(1),
    }

});
export default styles;