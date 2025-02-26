import {StyleSheet} from 'react-native';
import { widthPercentageToDP as wp , heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
import fontsFamily from '../../assets/fontsFamily';
import colors from '../../assets/colors';


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
    dropdownContainer: {
      marginBottom: 15,
      marginTop:-10
    },
    label: {
      fontSize: RFValue(13),
      color: colors.appBlack,
      fontFamily: fontsFamily.medium,
      fontWeight:'400',
      marginBottom: 8,
    },
    emailContainer: {
      marginBottom: 15,
      paddingVertical:15
    },
    inputHalf: {
      flex: 1,
    },
    button: {
      marginTop:hp(8),
      marginBottom:hp(3)
    },
    buttonText: {
      color: colors.white,
      fontSize: RFValue(14),
      fontFamily: fontsFamily.semiBold,
    },
    textInput: {
      paddingVertical: 0,
      backgroundColor: colors.inputGray,
      color: colors.appBlack,
      height:50,
    },
    flagButton: {
      backgroundColor: colors.inputGray,
    },
    phoneContainer: {
      width: '100%',
      height: 50,
      
      
    },
    cityText: {
      fontSize: RFValue(12),
      color: colors.appBlack,
      fontFamily: fontsFamily.regular,
      fontWeight: '400',
      marginBottom: 10,
      //marginTop: 10,
      // marginVertical:hp(2),
  },
  });
export default styles;