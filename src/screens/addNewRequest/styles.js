import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';
import fontsFamily from '../../assets/fontsFamily';
import {RFValue} from 'react-native-responsive-fontsize';
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
    flex: 1,
    marginHorizontal: wp(4),
  },
  subContainer: {
    marginVertical: hp(0.5),
  },

  imageContainer: {
    marginVertical: hp(8.5),
  },
  headingtext: {
    textAlign: 'left',
    marginTop: hp(1.5),
    marginBottom: hp(2),
    fontSize:RFValue(11),
    fontFamily:fontsFamily.bold
  },
  label: {
    fontSize: RFValue(12),
    color: colors.appBlack,
    fontFamily: fontsFamily.regular,
    fontWeight: '400',
    marginBottom: 4,
    // marginVertical:hp(2),
  },

  inputStyle: {
    minHeight: hp(13),
    textAlignVertical: 'top',
    fontSize: RFValue(14),
  },
  button:{
    marginTop:hp(55),
  },

});
export default styles;
