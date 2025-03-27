import { StyleSheet } from 'react-native';
import colors from '../../assets/colors';
import { widthPercentageToDP as wp , heightPercentageToDP as hp } from 'react-native-responsive-screen';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    mainContainer: {
        flex: 1,
        backgroundColor: colors.appBG,
    },
    wrapper:{
        flex:1,
        marginTop:hp(1),
        marginHorizontal:wp(4),
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: hp(2),
    },
    rowView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: hp(1),
        marginTop:20,
    },
    graphView: {
        backgroundColor: colors.white,
        marginTop: hp(1),
        borderRadius: 10,
        paddingBottom: hp(2),
    },
    graphInnerView: {
        paddingHorizontal: wp(2),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    borderView:{
        marginVertical:hp(1),
        borderBottomColor:colors.grayBorder,
        borderBottomWidth:1,
      },
});
export default styles;
