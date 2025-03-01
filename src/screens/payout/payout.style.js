import { Platform, StyleSheet } from 'react-native';
import colors from '../../assets/colors';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
import fontsFamily from '../../assets/fontsFamily';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.primary,

    },
    giftImageContainer: {
      alignSelf: 'center',
      // marginTop: hp(1.5),
      marginTop: hp(Platform.OS==='android'?7:12.5),
      marginBottom: hp(2),
      justifyContent:'center',
      alignItems:'center',
      position:'absolute',
    },
    availablePointsText:{
      color:colors.white,
    },
    availableBalance:{
      color:colors.white,
      fontSize: RFValue(35),
      fontWeight:'600',
      marginTop:hp(1.3),
    },
    subContainer: {
        // flex: 1,
        backgroundColor: colors.appBG,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        paddingTop:hp(2),
        marginTop:hp(13),
        height:'100%',
      },
      tabView:{
        backgroundColor: colors.white,
        marginTop: 20,
        borderTopLeftRadius:12,
        borderTopRightRadius:12,
        borderRadius:12,
        paddingVertical:5,
        paddingHorizontal:wp(2),
      },
      totalSalesTitle: {
        color: colors.appBlack,
        paddingTop: 10,
      },
      appHeaderText:{
        color:colors.white,
      },
    sectionHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: hp(2),
    },
    sectionTitle: {
      color: colors.appBlack,
    },
    seeAllText: {
      color: colors.primary,
      fontFamily: fontsFamily.medium,
    },
    
  });

  export default styles;
