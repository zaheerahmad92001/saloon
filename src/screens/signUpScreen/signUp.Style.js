import colors from '../../assets/colors';
import fontsFamily from '../../assets/fontsFamily';
import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  mainContainer: {
    backgroundColor: colors.white,
    flex: 1,
    paddingHorizontal: 20
  },
  heading: {
    fontSize: RFValue(20),
    fontFamily: fontsFamily.bold,
    marginTop: hp(3),
  },
  label: {
    color: colors.appBlack,
    fontSize: RFValue(13),
    fontFamily: fontsFamily.medium,
    marginTop: hp(3),
    marginBottom: 10,
    
  },
  phoneContainer: {
    width: '100%',
    height: 50,
    backgroundColor:'red',
    
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
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,

  },
  halfWidth: {
    width: '100%',
  },
  inputFields: {
    marginTop: 15,
  },
  
  checkboxContainer: {
    flexDirection: 'row',
    marginVertical: 15,
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
    backgroundColor: colors.primary,
    marginVertical: 10,
  },
  signUpText: {
    fontSize: RFValue(13),
    fontFamily: fontsFamily.regular,
  },
  loginTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 10,
    marginBottom:40
  },
  headingAcc: {
    fontSize: RFValue(12),
    color: colors.lightBlack,
    fontFamily: fontsFamily.medium,
  },
  subHeadingAcc: {
    fontSize: RFValue(13),
    color: colors.primary,
    fontFamily: fontsFamily.medium,
    marginLeft: 5,
  },


  addressLablecontainer: {
    marginTop: hp(1.5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    paddingHorizontal: 10,
    marginBottom: hp(0.5),
    
  },
  addresscontainer: {
    height:hp(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    paddingHorizontal: 14,
    backgroundColor: colors.inputGray,
    borderRadius:8
  },
  addresslabel: {
    fontSize: RFValue(13),
    color: colors.appBlack,
    fontFamily: fontsFamily.medium,
    fontWeight:'400',
    marginBottom: 8,
  },
  addressinput: {
    minHeight: hp(10),
    textAlignVertical: 'top',
    fontSize: RFValue(12),
    fontFamily:fontsFamily.regular
  },

});
export default styles;