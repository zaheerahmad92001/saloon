import { StyleSheet } from "react-native";
import colors from "../../assets/colors";
import fontsFamily from "../../assets/fontsFamily";
import { RFValue } from "react-native-responsive-fontsize";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    mainContainer: {
        flex: 1,
        backgroundColor: colors.appBG,
        padding: 20
    },
    headingText: {
        fontFamily: fontsFamily.bold,
        fontSize: RFValue(13)
    },
    subContainer: {
        marginVertical: hp(1),
    },
    label: {
        marginBottom: 5,
        fontSize:RFValue(10),
        fontFamily:fontsFamily.regular
    },


    subServiceContainer: {
        backgroundColor: colors.appBG,
        borderRadius: 10,
        paddingTop:10,
        marginBottom: 15,
    },
    subServiceHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 5,
    },
    subServiceTitle: {
        fontSize: RFValue(10),
        fontFamily:fontsFamily.regular
    },
    removeText: {
        color: colors.red,
        fontSize: RFValue(11),
    },
    input: {
        height:50,
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
        backgroundColor: colors.darkGray,
        fontFamily:fontsFamily.regular,
        fontSize:RFValue(11)
    },
    priceDurationContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    priceInput: {
        width: "48%",
        borderRadius: 8,
        padding: 10,
        backgroundColor: colors.darkGray,
        height:50,
        fontFamily:fontsFamily.regular,
        fontSize:RFValue(11)
    },
    durationInput: {
        width: "48%",
        borderRadius: 8,
        padding: 10,
        backgroundColor: colors.darkGray,
        height:50,
        fontFamily:fontsFamily.regular,
        fontSize:RFValue(11)
    },
    addMoreButton: {
        borderWidth: 1,
        borderRadius: 6,
        borderColor: colors.primary,
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        width:widthPercentageToDP(25)
    },
    addMoreText: {
        color: colors.primary,
        fontSize: RFValue(12),
    },

    buttonStyle:{
        marginBottom:20,
        
    }

});
export default styles;