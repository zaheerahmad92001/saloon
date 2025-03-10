import { StyleSheet } from 'react-native';
import colors from '../../assets/colors';
import { RFValue } from 'react-native-responsive-fontsize';
import fontsFamily from '../../assets/fontsFamily';
import { heightPercentageToDP } from 'react-native-responsive-screen';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.appBG,
    },

    headerSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,

    },
    filterView: {
        marginTop: 10,
    },
    heading: {
        fontSize: RFValue(11),
        fontFamily: fontsFamily.semiBold,
        color: colors.appBlack,
        marginVertical: heightPercentageToDP(1.5),
    },
});
export default styles;
