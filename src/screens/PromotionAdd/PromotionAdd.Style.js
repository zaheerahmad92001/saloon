import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../assets/colors';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
import fontsFamily from '../../assets/fontsFamily';

const styles = StyleSheet.create({
    contianer: {
        flex: 1,
        backgroundColor: colors.white,
    },
    mainContainer: {
        flex: 1,
        backgroundColor: colors.appBG,
        paddingHorizontal: wp(4),
    },

    statusText: {
        fontFamily: fontsFamily.bold,
        fontSize: RFValue(13),

    },

    subContainer: {
        marginVertical: hp(0.5),
        marginTop: 5
    },
    headingtext: {
        textAlign: 'left',
        marginTop: hp(1.5),
        marginBottom: hp(2),
        fontWeight: '600',
    },
    label: {
        fontSize: RFValue(12),
        color: colors.appBlack,
        fontFamily: fontsFamily.medium,
        fontWeight: '400',
        marginBottom: 5,
        marginTop: 5

    },
    complaintTypeText: {
        fontSize: RFValue(13),
        color: colors.appBlack,
        fontFamily: fontsFamily.medium,
        fontWeight: '400',
        marginBottom: 4,
        marginTop: 10,

    },
    applyText: {
        color: colors.white,
        fontWeight: '600',
    },
    dateView: {
        //flex: 1,
        paddingHorizontal: 0,
        marginTop: 2,
    },
    saveBookingButton: {
        flex: 1,
        marginRight: 5,
        marginTop: 10,
        backgroundColor: 'transparent',
    },

    buttonStyle: {
        marginHorizontal: 20,
        marginTop: 30
    }
    ,
    addnewPromotionText: {
        marginBottom:hp(2),
    },
    textInput: {
        marginTop: 15,
        backgroundColor: colors.inputGray,
        color: colors.appBlack,
        height: 50,
    },
    inputFields: {

    },
    inputstyles: {

        backgroundColor: colors.darkGray,
    },

});

export default styles;