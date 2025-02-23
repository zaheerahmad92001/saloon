import {StyleSheet} from 'react-native';
import { widthPercentageToDP as wp , heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
import fontsFamily from '../../../assets/fontsFamily';
import colors from '../../../assets/colors';


const styles = StyleSheet.create({
    wrapper:{
      flex:1,
      backgroundColor:colors.white,
    },
    container: {
      flex: 1,
      marginHorizontal:wp(4),
    },
    profileImageContainer: {
      alignItems: 'center',
      marginBottom: 20,
    },
    innerProfileImageContainer: {},
    ImageContainer: {
      width: 120,
      height: 120,
      borderRadius: 120 / 2,
      backgroundColor: colors.primary,
      borderWidth: 4,
      borderColor: colors.lightGray,
      overflow: 'hidden',
    },
    profileImage: {
      width: null,
      height: null,
      flex:1,
    },
    editIcon: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      backgroundColor: colors.white,
      borderRadius: 33/2,
      width:33,
      height:33,
      justifyContent:'center',
      alignItems:'center',
      borderWidth: 2,
      borderColor: colors.primary,
    },
    editIconText: {
      fontSize: RFValue(14),
    },
    inputContainer: {
      marginBottom: 15,
    },
    inputHalf: {
      flex: 1,
    //   marginHorizontal: 5, // Add spacing between fields
    },
    button: {
      marginTop:hp(5)
    },
    buttonText: {
      color: colors.white,
      fontSize: RFValue(14),
      fontFamily: fontsFamily.semiBold,
    },
  });
export default styles;