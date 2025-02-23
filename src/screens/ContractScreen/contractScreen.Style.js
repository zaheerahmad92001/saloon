import { Platform, StyleSheet } from "react-native";
import colors from "../../assets/colors";
import { RFValue } from 'react-native-responsive-fontsize';
import fontsFamily from '../../assets/fontsFamily';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    mainContainer: {
        flex: 1,
        backgroundColor: colors.white,
        marginHorizontal:wp(4),

    },
    headerTitle: {
        color: colors.appBlack,
        marginTop: hp(2),
        fontFamily: fontsFamily.bold,
        fontWeight: '600',
        fontSize: RFValue(14)
    },
    textbody: {
        marginTop:hp(2),
        color: colors.lightBlack,
        fontFamily: fontsFamily.regular,
        lineHeight:24,
        fontSize: RFValue(Platform.OS==='android'? 13 :12),
    },

    digitalSignatureLableView: {
        marginTop: hp(2),
        marginBottom:hp(0.5),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    signatureLable: {
        fontFamily: fontsFamily.regular,
        fontSize: RFValue(12),
        color: colors.appBlack
    },
    clearText: {
        fontFamily: fontsFamily.regular,
        fontSize: RFValue(12),
        color: colors.lightBlack
    },
    clearView: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderColor: colors.lightBlack,
        borderRadius: 5,
        borderWidth: 0.5,
        backgroundColor: colors.appBG

    },
    SignatureView: {
        marginTop:hp(0.5),
        borderWidth: 1,
       borderColor: colors.primary,
        height:hp(18),
        borderRadius: 5,
        overflow: 'hidden',
    },
    drawText:{
        fontFamily:fontsFamily.regular,
        fontSize:RFValue(11),
        color:colors.lightBlack

    },
    checkboxContainer: {
        flexDirection: 'row',
        marginTop:hp(1),
        alignItems: 'center'
    },
    termViews: {
        marginLeft: 10,

    },
    termsText: {
        color: colors.lightBlack,
        fontSize: RFValue(12),
        alignItems: 'center',
        fontFamily: fontsFamily.medium
    },
    privacyPolicyText: {
        color: colors.primary,
        fontWeight: "bold"
    },
    signUpButton: {
        marginTop:hp(5),
        marginHorizontal:wp(4),
      },
      signUpText: {
        fontSize: RFValue(13),
        fontFamily: fontsFamily.regular,
      },
});
export default styles;