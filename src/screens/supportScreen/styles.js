import { StyleSheet } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
import colors from '../../assets/colors';
import fontsFamily from '../../assets/fontsFamily';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
    },
    wrapper:{
        flex:1,
        marginHorizontal:wp(4),
    },
    tabContainer: {
      flexDirection: 'row',
      marginBottom: hp(4),
    },
    tabButton: {
      flex: 1,
      padding: 15,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.lightGray,
      borderRadius: 8,
    },
    activeTabButton: {
      backgroundColor: colors.primary,
      borderRadius: 8,
    },
    tabText: {
      fontSize: RFValue(12),
      fontFamily: fontsFamily.semiBold,
      color: colors.appBlack,
    },
    activeTabText: {
      color: colors.white,
      fontSize: RFValue(12),
      fontFamily: fontsFamily.semiBold,
    },
    heading: {
      marginTop:hp(2),
      textAlign:'left',
    },
    contactContainer: {
      flex: 1,
      marginTop: hp(2),
      alignItems: 'center',
    },
    contactImage: {
      width: wp(50),
      height: wp(50),
      marginBottom: 20,
    },
    contactDetails: {
      width: '100%',
      marginBottom: 20,
      marginTop: hp(4),
    },
    contactBox: {
      backgroundColor: colors.lightPrimary,
      padding: 15,
      borderRadius: 10,
      marginBottom: 10,
      borderWidth: 0.8,
      borderColor: colors.primary,
      flexDirection: 'row',
      alignItems: 'center',
    },
    contactText: {
      marginLeft: 5,
      fontWeight:'500',
    },
    socialHeading: {
      marginBottom: 10,
    },
    socialIcons: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      gap:13,
    },
    contentContainerStyle:{
      marginTop:hp(1),
    },
  });
  export default styles;
  