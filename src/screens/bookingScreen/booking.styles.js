import { StyleSheet } from 'react-native';
import colors from '../../assets/colors';
import fontsFamily from '../../assets/fontsFamily';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp , widthPercentageToDP as wp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
      },
      contentContainer: {
        flex: 1,
        backgroundColor: colors.appBG,
      },
      wrapper: {
        flex: 1,
        marginHorizontal: wp(4),
      },
      
      rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: hp(2),
      },
     
      innerRoundedBox: {
        width: 50,
        height: 50,
        backgroundColor: colors.lighterPrimary,
        borderRadius: 25,
        marginTop: hp(1),
      },
      
      filterView: {
        paddingTop: hp(2),
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom:hp(1),
      },
      filterIconView: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.darkGray,
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderRadius: 7,
        gap: 5,
      },
      contentContainerStyle: {
        marginTop: hp(2),
      },
      textStyle: {
        fontWeight: '500',
        color: colors.lightBlack,
      },

});

export default styles;
